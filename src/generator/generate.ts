import type { RaylibApi, RaylibApiFunction, RaylibApiEnum, RaylibApiStruct, RaylibApiDefine, RaylibApiStructField } from "@generator/types";
import { C_TO_FFI_TYPE, getStructInfo, STRUCT_INFO } from "@generator/mappers";
import { join, dirname } from "node:path";

const RAYLIB_VERSION = "5.5";
const API_BASE_URL = `https://raw.githubusercontent.com/raysan5/raylib/${RAYLIB_VERSION}/parser/output`;
const RAYLIB_API_URL = `${API_BASE_URL}/raylib_api.json`;
const RAYMATH_API_URL = `${API_BASE_URL}/raymath_api.json`;

const GENERATED_DIR = join(dirname(import.meta.dir), "generated");

// ============================================================================
// Utility Functions
// ============================================================================

async function fetchApi(url: string): Promise<RaylibApi> {
	console.log(`Fetching: ${url}`);
	const response = await fetch(url);
	if (!response.ok) {
		throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
	}
	return response.json() as Promise<RaylibApi>;
}

function capitalize(str: string): string {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

function toCamelCase(name: string): string {
	// Convert PascalCase to camelCase (e.g., InitWindow -> initWindow)
	return name.charAt(0).toLowerCase() + name.slice(1);
}

function formatComment(description: string, indent: string = ""): string {
	if (!description) return "";
	return `${indent}/** ${description} */\n`;
}

// ============================================================================
// Enum Generation
// ============================================================================

function generateEnums(enums: RaylibApiEnum[]): string {
	const lines: string[] = ["// Auto-generated raylib enums", "// Do not edit manually - regenerate with: bun run src/generator/generate.ts", ""];

	for (const enumDef of enums) {
		lines.push(formatComment(enumDef.description));
		lines.push(`export const ${enumDef.name} = {`);

		for (const value of enumDef.values) {
			if (value.description) {
				lines.push(`\t/** ${value.description} */`);
			}
			lines.push(`\t${value.name}: ${value.value},`);
		}

		lines.push("} as const;");
		lines.push(`export type ${enumDef.name} = (typeof ${enumDef.name})[keyof typeof ${enumDef.name}];`);
		lines.push("");
	}

	return lines.join("\n");
}

// ============================================================================
// Constants/Defines Generation
// ============================================================================

function generateConstants(defines: RaylibApiDefine[]): string {
	const lines: string[] = [
		"// Auto-generated raylib constants",
		"// Do not edit manually - regenerate with: bun run src/generator/generate.ts",
		"",
		'import { Color } from "@generated/structs";',
		"",
	];

	// Filter and categorize defines
	const colors: RaylibApiDefine[] = [];
	const numbers: RaylibApiDefine[] = [];
	const strings: RaylibApiDefine[] = [];

	for (const define of defines) {
		// Skip macros and complex defines
		if (define.type === "MACRO" || define.type === "UNKNOWN" || define.type === "GUARD") {
			continue;
		}

		// Check if it's a color (format: CLITERAL(Color){ r, g, b, a })
		if (define.type === "COLOR" && typeof define.value === "string") {
			colors.push(define);
		} else if (define.type === "FLOAT" || define.type === "INT" || define.type === "FLOAT_MATH") {
			numbers.push(define);
		} else if (define.type === "STRING") {
			strings.push(define);
		}
	}

	// Generate numeric constants
	lines.push("// Numeric constants");
	for (const define of numbers) {
		if (define.description) {
			lines.push(`/** ${define.description} */`);
		}
		// Clean up C-style float literals (e.g., 180.0f -> 180.0)
		let value = String(define.value);
		value = value.replace(/(\d+\.?\d*)f\b/g, "$1"); // Remove 'f' suffix from floats
		lines.push(`export const ${define.name} = ${value};`);
	}
	lines.push("");

	// Generate string constants
	lines.push("// String constants");
	for (const define of strings) {
		if (define.description) {
			lines.push(`/** ${define.description} */`);
		}
		const value = typeof define.value === "string" ? `"${define.value}"` : define.value;
		lines.push(`export const ${define.name} = ${value};`);
	}
	lines.push("");

	// Generate color constants
	lines.push("// Color constants");
	lines.push("export const Colors = {");
	for (const define of colors) {
		// Parse color value: CLITERAL(Color){ r, g, b, a }
		const match = (define.value as string).match(/\{\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\}/);
		if (match) {
			const [, r, g, b, a] = match;
			if (define.description) {
				lines.push(`\t/** ${define.description} */`);
			}
			lines.push(`\t${define.name}: new Color(${r}, ${g}, ${b}, ${a}),`);
		}
	}
	lines.push("} as const;");
	lines.push("");

	return lines.join("\n");
}

// ============================================================================
// Struct Generation
// ============================================================================

function getTypedArrayType(cType: string): { arrayType: string; bytesPerElement: number } | null {
	const typeMap: Record<string, { arrayType: string; bytesPerElement: number }> = {
		float: { arrayType: "Float32Array", bytesPerElement: 4 },
		double: { arrayType: "Float64Array", bytesPerElement: 8 },
		int: { arrayType: "Int32Array", bytesPerElement: 4 },
		"unsigned int": { arrayType: "Uint32Array", bytesPerElement: 4 },
		short: { arrayType: "Int16Array", bytesPerElement: 2 },
		"unsigned short": { arrayType: "Uint16Array", bytesPerElement: 2 },
		char: { arrayType: "Int8Array", bytesPerElement: 1 },
		"unsigned char": { arrayType: "Uint8Array", bytesPerElement: 1 },
		bool: { arrayType: "Uint8Array", bytesPerElement: 1 },
	};
	return typeMap[cType] || null;
}

function getTsType(cType: string, structs: Set<string>): string {
	// Handle pointers
	if (cType.endsWith("*")) {
		return "number"; // Pointers are just numbers (addresses)
	}

	// Handle arrays like "float[16]"
	const arrayMatch = cType.match(/^(\w+)\s*\[(\d+)\]$/);
	if (arrayMatch && arrayMatch[1]) {
		const baseType = arrayMatch[1];
		const typedArray = getTypedArrayType(baseType);
		if (typedArray) {
			return typedArray.arrayType;
		}
	}

	// Handle known structs
	if (structs.has(cType)) {
		return cType;
	}

	// Handle primitives
	const primitiveMap: Record<string, string> = {
		void: "void",
		bool: "boolean",
		char: "number",
		"unsigned char": "number",
		short: "number",
		"unsigned short": "number",
		int: "number",
		"unsigned int": "number",
		long: "number",
		"unsigned long": "number",
		float: "number",
		double: "number",
		"const char *": "string",
	};

	return primitiveMap[cType] || "number";
}

function generateStructs(structs: RaylibApiStruct[]): string {
	const structNames = new Set(structs.map((s) => s.name));

	const lines: string[] = [
		"// Auto-generated raylib structs",
		"// Do not edit manually - regenerate with: bun run src/generator/generate.ts",
		"",
		'import { ptr, toArrayBuffer, type Pointer } from "bun:ffi";',
		"",
	];

	for (const struct of structs) {
		lines.push(generateStruct(struct, structNames));
		lines.push("");
	}

	return lines.join("\n");
}

function generateStruct(struct: RaylibApiStruct, structNames: Set<string>): string {
	const lines: string[] = [];
	const structInfo = getStructInfo(struct.name);

	lines.push(formatComment(struct.description));
	lines.push(`export class ${struct.name} {`);

	// Determine buffer type based on struct fields
	const bufferInfo = analyzeStructBuffer(struct, structNames);

	// Private buffer field
	lines.push(`\tprivate _buffer: ${bufferInfo.arrayType};`);
	lines.push(`\tprivate _view: DataView;`);
	lines.push("");

	// Constructor
	lines.push(generateConstructor(struct, bufferInfo, structNames));
	lines.push("");

	// Getters and setters for each field
	let byteOffset = 0;
	for (const field of struct.fields) {
		const fieldCode = generateFieldAccessors(field, byteOffset, structNames);
		lines.push(fieldCode);

		// Calculate next offset
		byteOffset += getFieldByteSize(field, structNames);
	}

	// ptr getter
	lines.push("\t/** Get pointer to struct data for FFI calls */");
	lines.push("\tget ptr(): number {");
	lines.push("\t\treturn ptr(this._buffer);");
	lines.push("\t}");
	lines.push("");

	// rawBuffer getter (named to avoid conflicts with struct fields named "buffer")
	lines.push("\t/** Get underlying raw buffer */");
	lines.push(`\tget rawBuffer(): ${bufferInfo.arrayType} {`);
	lines.push("\t\treturn this._buffer;");
	lines.push("\t}");
	lines.push("");

	// byteLength static property
	lines.push(`\t/** Byte size of struct */`);
	lines.push(`\tstatic readonly byteLength = ${bufferInfo.totalBytes};`);
	lines.push("");

	// clone method
	lines.push("\t/** Create a copy of this struct */");
	lines.push(`\tclone(): ${struct.name} {`);
	lines.push(`\t\tconst clone = new ${struct.name}();`);
	lines.push(`\t\tclone._buffer.set(this._buffer);`);
	lines.push("\t\treturn clone;");
	lines.push("\t}");
	lines.push("");

	// toU32 method for structs that can be passed by value (4 bytes)
	if (bufferInfo.totalBytes === 4) {
		lines.push("\t/** Pack struct into a u32 for FFI calls (pass by value) */");
		lines.push("\ttoU32(): number {");
		lines.push("\t\treturn this._view.getUint32(0, true);");
		lines.push("\t}");
		lines.push("");
		lines.push("\t/** Create struct from a packed u32 value */");
		lines.push(`\tstatic fromU32(value: number): ${struct.name} {`);
		lines.push(`\t\tconst instance = new ${struct.name}();`);
		lines.push("\t\tinstance._view.setUint32(0, value, true);");
		lines.push("\t\treturn instance;");
		lines.push("\t}");
		lines.push("");
	}

	// toU64 method for structs that can be passed by value (8 bytes)
	if (bufferInfo.totalBytes === 8) {
		lines.push("\t/** Pack struct into a u64 (bigint) for FFI calls (pass by value) */");
		lines.push("\ttoU64(): bigint {");
		lines.push("\t\treturn this._view.getBigUint64(0, true);");
		lines.push("\t}");
		lines.push("");
		lines.push("\t/** Create struct from a packed u64 value */");
		lines.push(`\tstatic fromU64(value: bigint): ${struct.name} {`);
		lines.push(`\t\tconst instance = new ${struct.name}();`);
		lines.push("\t\tinstance._view.setBigUint64(0, value, true);");
		lines.push("\t\treturn instance;");
		lines.push("\t}");
		lines.push("");
	}

	// fromPointer static method
	lines.push("\t/** Create struct from FFI pointer */");
	lines.push(`\tstatic fromPointer(p: Pointer, byteOffset: number = 0): ${struct.name} {`);
	lines.push(`\t\tconst buffer = new Uint8Array(toArrayBuffer(p, byteOffset, ${bufferInfo.totalBytes}));`);
	lines.push(`\t\tconst instance = new ${struct.name}();`);
	lines.push(`\t\tinstance._buffer.set(buffer);`);
	lines.push("\t\treturn instance;");
	lines.push("\t}");

	lines.push("}");

	return lines.join("\n");
}

interface BufferInfo {
	arrayType: string;
	totalBytes: number;
}

function analyzeStructBuffer(struct: RaylibApiStruct, structNames: Set<string>): BufferInfo {
	let totalBytes = 0;

	for (const field of struct.fields) {
		totalBytes += getFieldByteSize(field, structNames);
	}

	// Always use Uint8Array as the base buffer type for flexibility
	return {
		arrayType: "Uint8Array",
		totalBytes,
	};
}

function getFieldByteSize(field: RaylibApiStructField, structNames: Set<string>): number {
	const type = field.type;

	// Handle pointers (8 bytes on 64-bit)
	if (type.endsWith("*")) {
		return 8;
	}

	// Handle arrays like "float[16]" or "Matrix[4]"
	const arrayMatch = type.match(/^(\w+(?:\s+\w+)?)\s*\[(\d+)\]$/);
	if (arrayMatch && arrayMatch[1] && arrayMatch[2]) {
		const baseType = arrayMatch[1];
		const count = parseInt(arrayMatch[2], 10);
		const baseSize = getPrimitiveByteSize(baseType, structNames);
		return baseSize * count;
	}

	return getPrimitiveByteSize(type, structNames);
}

function getPrimitiveByteSize(type: string, structNames: Set<string>): number {
	// Check if it's a known struct
	if (structNames.has(type)) {
		const info = getStructInfo(type);
		return info?.byteSize || 0;
	}

	const sizeMap: Record<string, number> = {
		bool: 1,
		char: 1,
		"unsigned char": 1,
		short: 2,
		"unsigned short": 2,
		int: 4,
		"unsigned int": 4,
		long: 8,
		"unsigned long": 8,
		float: 4,
		double: 8,
	};

	return sizeMap[type] || 4;
}

function generateConstructor(struct: RaylibApiStruct, bufferInfo: BufferInfo, structNames: Set<string>): string {
	const lines: string[] = [];

	// Build parameter list
	const params: string[] = [];
	for (const field of struct.fields) {
		const tsType = getTsType(field.type, structNames);
		// For nested structs and arrays, make them optional
		if (structNames.has(field.type) || field.type.includes("[") || field.type.endsWith("*")) {
			params.push(`${field.name}?: ${tsType}`);
		} else if (field.type === "bool") {
			params.push(`${field.name}: ${tsType} = false`);
		} else {
			params.push(`${field.name}: ${tsType} = 0`);
		}
	}

	lines.push(`\tconstructor(${params.join(", ")}) {`);
	lines.push(`\t\tthis._buffer = new ${bufferInfo.arrayType}(${bufferInfo.totalBytes});`);
	lines.push(`\t\tthis._view = new DataView(this._buffer.buffer);`);

	// Initialize fields
	let byteOffset = 0;
	for (const field of struct.fields) {
		const initCode = generateFieldInit(field, byteOffset, structNames);
		if (initCode) {
			lines.push(initCode);
		}
		byteOffset += getFieldByteSize(field, structNames);
	}

	lines.push("\t}");

	return lines.join("\n");
}

function generateFieldInit(field: RaylibApiStructField, byteOffset: number, structNames: Set<string>): string {
	const type = field.type;

	// Skip pointers and arrays in constructor init (they default to 0)
	if (type.endsWith("*") || type.includes("[")) {
		return "";
	}

	// Handle nested structs
	if (structNames.has(type)) {
		return `\t\tif (${field.name}) this._buffer.set(${field.name}.rawBuffer, ${byteOffset});`;
	}

	// Handle primitives
	const setter = getDataViewSetter(type);
	if (setter) {
		// Single-byte methods don't take endianness parameter
		const isSingleByte = ["setInt8", "setUint8"].includes(setter);
		const endianArg = isSingleByte ? "" : ", true";
		// Bool needs conversion to number
		const value = type === "bool" ? `${field.name} ? 1 : 0` : field.name;
		return `\t\tthis._view.${setter}(${byteOffset}, ${value}${endianArg});`;
	}

	return "";
}

function generateFieldAccessors(field: RaylibApiStructField, byteOffset: number, structNames: Set<string>): string {
	const lines: string[] = [];
	const type = field.type;

	// Handle pointers
	if (type.endsWith("*")) {
		lines.push(`\t/** ${field.description || field.name} (pointer) */`);
		lines.push(`\tget ${field.name}(): number {`);
		lines.push(`\t\treturn Number(this._view.getBigUint64(${byteOffset}, true));`);
		lines.push("\t}");
		lines.push("");
		lines.push(`\tset ${field.name}(value: number) {`);
		lines.push(`\t\tthis._view.setBigUint64(${byteOffset}, BigInt(value), true);`);
		lines.push("\t}");
		lines.push("");
		return lines.join("\n");
	}

	// Handle arrays like "float[16]"
	const arrayMatch = type.match(/^(\w+(?:\s+\w+)?)\s*\[(\d+)\]$/);
	if (arrayMatch && arrayMatch[1] && arrayMatch[2]) {
		const baseType = arrayMatch[1];
		const count = parseInt(arrayMatch[2], 10);
		const typedArray = getTypedArrayType(baseType);

		if (typedArray) {
			const totalBytes = typedArray.bytesPerElement * count;
			lines.push(`\t/** ${field.description || field.name} */`);
			lines.push(`\tget ${field.name}(): ${typedArray.arrayType} {`);
			lines.push(`\t\treturn new ${typedArray.arrayType}(this._buffer.buffer, ${byteOffset}, ${count});`);
			lines.push("\t}");
			lines.push("");
		}
		return lines.join("\n");
	}

	// Handle nested structs
	if (structNames.has(type)) {
		const structInfo = getStructInfo(type);
		lines.push(`\t/** ${field.description || field.name} */`);
		lines.push(`\tget ${field.name}(): ${type} {`);
		lines.push(`\t\treturn ${type}.fromPointer(ptr(this._buffer), ${byteOffset});`);
		lines.push("\t}");
		lines.push("");
		lines.push(`\tset ${field.name}(value: ${type}) {`);
		lines.push(`\t\tthis._buffer.set(value.rawBuffer, ${byteOffset});`);
		lines.push("\t}");
		lines.push("");
		return lines.join("\n");
	}

	// Handle primitives
	const getter = getDataViewGetter(type);
	const setter = getDataViewSetter(type);
	const tsType = getTsType(type, structNames);

	if (getter && setter) {
		// Single-byte methods don't take endianness parameter
		const isSingleByte = ["getInt8", "getUint8", "setInt8", "setUint8"].includes(getter);
		const endianArg = isSingleByte ? "" : ", true";
		const isBool = type === "bool";

		lines.push(`\t/** ${field.description || field.name} */`);
		lines.push(`\tget ${field.name}(): ${tsType} {`);
		if (isBool) {
			lines.push(`\t\treturn this._view.${getter}(${byteOffset}${endianArg}) !== 0;`);
		} else {
			lines.push(`\t\treturn this._view.${getter}(${byteOffset}${endianArg});`);
		}
		lines.push("\t}");
		lines.push("");
		lines.push(`\tset ${field.name}(value: ${tsType}) {`);
		if (isBool) {
			lines.push(`\t\tthis._view.${setter}(${byteOffset}, value ? 1 : 0${endianArg});`);
		} else {
			lines.push(`\t\tthis._view.${setter}(${byteOffset}, value${endianArg});`);
		}
		lines.push("\t}");
		lines.push("");
	}

	return lines.join("\n");
}

function getDataViewGetter(cType: string): string | null {
	const getterMap: Record<string, string> = {
		float: "getFloat32",
		double: "getFloat64",
		int: "getInt32",
		"unsigned int": "getUint32",
		short: "getInt16",
		"unsigned short": "getUint16",
		char: "getInt8",
		"unsigned char": "getUint8",
		bool: "getUint8",
	};
	return getterMap[cType] || null;
}

function getDataViewSetter(cType: string): string | null {
	const setterMap: Record<string, string> = {
		float: "setFloat32",
		double: "setFloat64",
		int: "setInt32",
		"unsigned int": "setUint32",
		short: "setInt16",
		"unsigned short": "setUint16",
		char: "setInt8",
		"unsigned char": "setUint8",
		bool: "setUint8",
	};
	return setterMap[cType] || null;
}

// ============================================================================
// Symbols Generation (separate file for FFI loading)
// ============================================================================

function generateSymbols(functions: RaylibApiFunction[], structs: RaylibApiStruct[]): { code: string; generatedNames: Set<string> } {
	const structNames = new Set(structs.map((s) => s.name));
	const generatedNames = new Set<string>();

	const lines: string[] = [
		"// Auto-generated raylib FFI symbol definitions",
		"// Do not edit manually - regenerate with: bun run src/generator/generate.ts",
		"",
		'import { FFIType } from "bun:ffi";',
		"",
		"// FFI symbol definitions for dlopen",
		"export const symbols = {",
	];

	for (const func of functions) {
		const ffiDef = generateFfiSymbolWithFFIType(func, structNames);
		if (ffiDef) {
			lines.push(ffiDef);
			generatedNames.add(func.name);
		}
	}

	lines.push("} as const;");
	lines.push("");
	lines.push("export type RaylibSymbols = typeof symbols;");

	return { code: lines.join("\n"), generatedNames };
}

function generateFfiSymbolWithFFIType(func: RaylibApiFunction, structNames: Set<string>): string | null {
	const args: string[] = [];

	if (func.params) {
		for (const param of func.params) {
			const ffiType = cTypeToFFITypeEnum(param.type, structNames);
			if (!ffiType) return null;
			args.push(ffiType);
		}
	}

	const returnFfi = cTypeToFFITypeEnum(func.returnType, structNames);
	if (!returnFfi && func.returnType !== "void") return null;

	return `\t${func.name}: { args: [${args.join(", ")}], returns: ${returnFfi || "FFIType.void"} },`;
}

// Small structs that can be passed by value as packed integers
// Color (4 bytes) = u32, Vector2 (8 bytes) = u64
// Note: Larger structs must be passed by pointer
const STRUCT_BY_VALUE_FFI_TYPE: Record<string, string> = {
	Color: "FFIType.u32",
	Vector2: "FFIType.u64",
};

function cTypeToFFITypeEnum(cType: string, structNames: Set<string>): string | null {
	const ffiTypeMap: Record<string, string> = {
		void: "FFIType.void",
		bool: "FFIType.bool",
		char: "FFIType.i8",
		"signed char": "FFIType.i8",
		"unsigned char": "FFIType.u8",
		short: "FFIType.i16",
		"unsigned short": "FFIType.u16",
		int: "FFIType.i32",
		"unsigned int": "FFIType.u32",
		long: "FFIType.i64",
		"unsigned long": "FFIType.u64",
		float: "FFIType.f32",
		double: "FFIType.f64",
		"char *": "FFIType.ptr",
		// Note: FFIType.cstring doesn't work correctly in Bun 1.3.x, use ptr instead
		"const char *": "FFIType.ptr",
		"void *": "FFIType.ptr",
		"const void *": "FFIType.ptr",
	};

	if (ffiTypeMap[cType]) {
		return ffiTypeMap[cType];
	}

	// Pointers
	if (cType.endsWith("*")) {
		return "FFIType.ptr";
	}

	// Check if struct can be passed by value
	if (STRUCT_BY_VALUE_FFI_TYPE[cType]) {
		return STRUCT_BY_VALUE_FFI_TYPE[cType];
	}

	// Structs are passed as pointers
	if (structNames.has(cType)) {
		return "FFIType.ptr";
	}

	// Type aliases
	if (["Texture2D", "Texture", "TextureCubemap", "RenderTexture2D", "Camera", "Camera3D"].includes(cType)) {
		return "FFIType.ptr";
	}

	return null;
}

// ============================================================================
// Function Generation
// ============================================================================

function generateFunctions(functions: RaylibApiFunction[], structs: RaylibApiStruct[], generatedSymbolNames: Set<string>): string {
	const structNames = new Set(structs.map((s) => s.name));

	const lines: string[] = [
		"// Auto-generated raylib function bindings",
		"// Do not edit manually - regenerate with: bun run src/generator/generate.ts",
		"",
		'import { ptr, type Pointer } from "bun:ffi";',
		'import { loadRaylib } from "@lib/ffi";',
		'import { symbols } from "@generated/symbols";',
		'import * as Structs from "@generated/structs";',
		"",
		"// Load raylib with our generated symbols",
		"const raylib = loadRaylib(symbols);",
		"",
		"// Helper to convert JS string to null-terminated C string buffer",
		"// (FFIType.cstring doesn't work correctly in Bun 1.3.x)",
		"const encoder = new TextEncoder();",
		"function toCString(str: string): Uint8Array {",
		"\tconst encoded = encoder.encode(str);",
		"\tconst buf = new Uint8Array(encoded.length + 1);",
		"\tbuf.set(encoded);",
		"\t// buf[encoded.length] = 0; // Already zero-initialized",
		"\treturn buf;",
		"}",
		"",
	];

	// Only generate wrappers for functions that have corresponding symbols
	const functionsToGenerate = functions.filter((f) => generatedSymbolNames.has(f.name));

	// Generate TypeScript wrapper functions
	for (const func of functionsToGenerate) {
		const wrapper = generateFunctionWrapper(func, structNames);
		if (wrapper) {
			lines.push(wrapper);
			lines.push("");
		}
	}

	return lines.join("\n");
}

function generateFunctionWrapper(func: RaylibApiFunction, structNames: Set<string>): string | null {
	const lines: string[] = [];

	// Build parameter list
	const params: string[] = [];
	const callArgs: string[] = [];

	if (func.params) {
		for (const param of func.params) {
			const tsType = getTsTypeForParam(param.type, structNames);
			params.push(`${param.name}: ${tsType}`);

			// Convert parameters to FFI-compatible types
			if (STRUCT_BY_VALUE_FFI_TYPE[param.type]) {
				// Small structs passed by value as packed integers
				const ffiType = STRUCT_BY_VALUE_FFI_TYPE[param.type];
				if (ffiType === "FFIType.u64") {
					callArgs.push(`${param.name}.toU64()`);
				} else {
					callArgs.push(`${param.name}.toU32()`);
				}
			} else if (structNames.has(param.type) || isStructAlias(param.type)) {
				// Larger structs pass their buffer pointer
				callArgs.push(`ptr(${param.name}.rawBuffer)`);
			} else if (param.type === "const char *" || param.type === "char *") {
				// Strings must be converted to null-terminated C strings
				callArgs.push(`ptr(toCString(${param.name}))`);
			} else if (param.type.endsWith("*")) {
				// Other pointers - assume they're numbers
				callArgs.push(param.name);
			} else {
				callArgs.push(param.name);
			}
		}
	}

	const returnTsType = getTsTypeForReturn(func.returnType, structNames);
	const isStructByValueReturn = STRUCT_BY_VALUE_FFI_TYPE[func.returnType] !== undefined;
	const isStructReturn = structNames.has(func.returnType) || isStructAlias(func.returnType);

	const camelName = toCamelCase(func.name);

	lines.push(`/** ${func.description} */`);
	lines.push(`export function ${camelName}(${params.join(", ")}): ${returnTsType} {`);

	// Use type assertion to bypass strict FFI type checking
	// The actual FFI calls work correctly at runtime
	const callExpr = `(raylib.symbols.${func.name} as Function)(${callArgs.join(", ")})`;

	if (isStructByValueReturn) {
		// Small structs returned as packed integers
		const ffiType = STRUCT_BY_VALUE_FFI_TYPE[func.returnType];
		lines.push(`\tconst result = ${callExpr};`);
		if (ffiType === "FFIType.u64") {
			lines.push(`\treturn Structs.${func.returnType}.fromU64(result as bigint);`);
		} else {
			lines.push(`\treturn Structs.${func.returnType}.fromU32(result as number);`);
		}
	} else if (isStructReturn) {
		const structType = resolveStructAlias(func.returnType);
		lines.push(`\tconst result = ${callExpr};`);
		lines.push(`\treturn Structs.${structType}.fromPointer(result as Pointer);`);
	} else if (func.returnType === "void") {
		lines.push(`\t${callExpr};`);
	} else if (func.returnType === "const char *") {
		lines.push(`\tconst result = ${callExpr};`);
		lines.push(`\treturn result ? String(result) : "";`);
	} else {
		lines.push(`\treturn ${callExpr} as ${returnTsType};`);
	}

	lines.push("}");

	// Add PascalCase alias for backwards compatibility with C-style naming
	if (camelName !== func.name) {
		lines.push(`/** @alias ${camelName} */`);
		lines.push(`export const ${func.name} = ${camelName};`);
	}

	return lines.join("\n");
}

function getTsTypeForParam(cType: string, structNames: Set<string>): string {
	if (structNames.has(cType)) {
		return `Structs.${cType}`;
	}

	if (isStructAlias(cType)) {
		return `Structs.${resolveStructAlias(cType)}`;
	}

	// String parameters
	if (cType === "const char *" || cType === "char *") {
		return "string";
	}

	return getTsType(cType, structNames);
}

function getTsTypeForReturn(cType: string, structNames: Set<string>): string {
	if (cType === "void") return "void";

	if (structNames.has(cType)) {
		return `Structs.${cType}`;
	}

	if (isStructAlias(cType)) {
		return `Structs.${resolveStructAlias(cType)}`;
	}

	if (cType === "const char *") {
		return "string";
	}

	return getTsType(cType, structNames);
}

function isStructAlias(type: string): boolean {
	return ["Texture2D", "TextureCubemap", "RenderTexture2D", "Camera"].includes(type);
}

function resolveStructAlias(type: string): string {
	const aliases: Record<string, string> = {
		Texture2D: "Texture",
		TextureCubemap: "Texture",
		RenderTexture2D: "RenderTexture",
		Camera: "Camera3D",
	};
	return aliases[type] || type;
}

// ============================================================================
// Main Generation
// ============================================================================

async function main() {
	console.log(`Generating bindings for raylib ${RAYLIB_VERSION}...`);
	console.log("");

	// Ensure generated directory exists
	await Bun.$`mkdir -p ${GENERATED_DIR}`;

	// Fetch API definitions
	const raylibApi = await fetchApi(RAYLIB_API_URL);

	console.log(`Found ${raylibApi.functions.length} functions`);
	console.log(`Found ${raylibApi.structs.length} structs`);
	console.log(`Found ${raylibApi.enums.length} enums`);
	console.log(`Found ${raylibApi.defines?.length || 0} defines`);
	console.log("");

	// Generate enums
	console.log("Generating enums...");
	const enumsCode = generateEnums(raylibApi.enums);
	await Bun.write(join(GENERATED_DIR, "enums.ts"), enumsCode);
	console.log(`  -> src/generated/enums.ts`);

	// Generate structs
	console.log("Generating structs...");
	const structsCode = generateStructs(raylibApi.structs);
	await Bun.write(join(GENERATED_DIR, "structs.ts"), structsCode);
	console.log(`  -> src/generated/structs.ts`);

	// Generate constants
	if (raylibApi.defines && raylibApi.defines.length > 0) {
		console.log("Generating constants...");
		const constantsCode = generateConstants(raylibApi.defines);
		await Bun.write(join(GENERATED_DIR, "constants.ts"), constantsCode);
		console.log(`  -> src/generated/constants.ts`);
	}

	// Generate FFI symbols (separate file for library loading)
	console.log("Generating FFI symbols...");
	const { code: symbolsCode, generatedNames: generatedSymbolNames } = generateSymbols(raylibApi.functions, raylibApi.structs);
	await Bun.write(join(GENERATED_DIR, "symbols.ts"), symbolsCode);
	console.log(`  -> src/generated/symbols.ts (${generatedSymbolNames.size} symbols)`);

	// Generate functions (only for symbols that were successfully generated)
	console.log("Generating functions...");
	const functionsCode = generateFunctions(raylibApi.functions, raylibApi.structs, generatedSymbolNames);
	await Bun.write(join(GENERATED_DIR, "functions.ts"), functionsCode);
	console.log(`  -> src/generated/functions.ts (${generatedSymbolNames.size} functions)`);

	console.log("");
	console.log("Generation complete!");
}

main().catch(console.error);
