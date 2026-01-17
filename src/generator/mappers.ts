// C type to Bun FFI type mapping
export const C_TO_FFI_TYPE: Record<string, string> = {
	void: "void",
	bool: "bool",
	char: "i8",
	"signed char": "i8",
	"unsigned char": "u8",
	short: "i16",
	"unsigned short": "u16",
	int: "i32",
	"unsigned int": "u32",
	long: "i64",
	"unsigned long": "u64",
	"long long": "i64",
	"unsigned long long": "u64",
	float: "f32",
	double: "f64",
	"char *": "ptr",
	"const char *": "cstring",
	"void *": "ptr",
	"const void *": "ptr",
	int8_t: "i8",
	uint8_t: "u8",
	int16_t: "i16",
	uint16_t: "u16",
	int32_t: "i32",
	uint32_t: "u32",
	int64_t: "i64",
	uint64_t: "u64",
	size_t: "u64",
};

// Struct size information for proper memory allocation
// These sizes are for 64-bit platforms
export interface StructInfo {
	byteSize: number;
	alignment: number;
}

export const STRUCT_INFO: Record<string, StructInfo> = {
	// Basic math structs
	Vector2: { byteSize: 8, alignment: 4 }, // 2 floats
	Vector3: { byteSize: 12, alignment: 4 }, // 3 floats
	Vector4: { byteSize: 16, alignment: 4 }, // 4 floats
	Matrix: { byteSize: 64, alignment: 4 }, // 16 floats (4x4)

	// Core structs
	Color: { byteSize: 4, alignment: 1 }, // 4 unsigned chars (RGBA)
	Rectangle: { byteSize: 16, alignment: 4 }, // 4 floats

	// Image/Texture structs
	Image: { byteSize: 24, alignment: 8 }, // void* (8) + 4 ints (16)
	Texture: { byteSize: 20, alignment: 4 }, // unsigned int (4) + 4 ints (16)
	RenderTexture: { byteSize: 44, alignment: 4 }, // unsigned int (4) + 2 Textures (40)

	// Font/Text structs
	GlyphInfo: { byteSize: 40, alignment: 8 }, // 5 ints (20) + padding + Image (24)
	Font: { byteSize: 48, alignment: 8 }, // int (4) + int (4) + int (4) + padding + Texture (20) + padding + 2 pointers (16)

	// Camera structs
	Camera2D: { byteSize: 24, alignment: 4 }, // Vector2 (8) + Vector2 (8) + float (4) + float (4)
	Camera3D: { byteSize: 44, alignment: 4 }, // Vector3 (12) + Vector3 (12) + Vector3 (12) + float (4) + int (4)

	// 3D structs
	Ray: { byteSize: 24, alignment: 4 }, // 2 Vector3s
	RayCollision: { byteSize: 32, alignment: 4 }, // bool (1) + padding + float (4) + Vector3 (12) + Vector3 (12)
	BoundingBox: { byteSize: 24, alignment: 4 }, // 2 Vector3s

	// Transform/Bone structs
	Transform: { byteSize: 40, alignment: 4 }, // Vector3 (12) + Vector4 (16) + Vector3 (12)
	BoneInfo: { byteSize: 36, alignment: 4 }, // char[32] + int (4)

	// Mesh/Material structs
	Mesh: { byteSize: 112, alignment: 8 }, // Complex struct with many pointers
	Shader: { byteSize: 16, alignment: 8 }, // unsigned int (4) + padding + int* (8)
	MaterialMap: { byteSize: 28, alignment: 4 }, // Texture (20) + Color (4) + float (4)
	Material: { byteSize: 24, alignment: 8 }, // Shader (16) + MaterialMap* (8)

	// Model structs
	Model: { byteSize: 120, alignment: 8 }, // Complex struct
	ModelAnimation: { byteSize: 56, alignment: 8 }, // Complex struct

	// Audio structs
	Wave: { byteSize: 24, alignment: 8 }, // unsigned int (4) * 4 + padding + void* (8)
	AudioStream: { byteSize: 32, alignment: 8 }, // Complex struct with pointers
	Sound: { byteSize: 40, alignment: 8 }, // AudioStream (32) + unsigned int (4) + padding
	Music: { byteSize: 56, alignment: 8 }, // AudioStream (32) + unsigned int (4) * 3 + padding + bool + void*

	// VR structs
	VrDeviceInfo: { byteSize: 64, alignment: 4 },
	VrStereoConfig: { byteSize: 304, alignment: 4 },

	// Misc structs
	NPatchInfo: { byteSize: 36, alignment: 4 }, // Rectangle (16) + 4 ints (16) + int (4)
	FilePathList: { byteSize: 24, alignment: 8 }, // unsigned int (4) * 2 + padding + char** (8)
	AutomationEvent: { byteSize: 24, alignment: 4 }, // unsigned int (4) * 6
	AutomationEventList: { byteSize: 24, alignment: 8 }, // unsigned int (4) * 2 + padding + AutomationEvent* (8)
};

export function getStructInfo(structName: string): StructInfo | null {
	return STRUCT_INFO[structName] || null;
}

// Get FFI type for a C type, handling structs as pointers
export function getFfiType(cType: string): string | null {
	// Direct mapping
	if (C_TO_FFI_TYPE[cType]) {
		return C_TO_FFI_TYPE[cType];
	}

	// Pointers
	if (cType.endsWith("*")) {
		return "ptr";
	}

	// Structs are passed as pointers
	if (STRUCT_INFO[cType]) {
		return "ptr";
	}

	// Type aliases
	const aliases: Record<string, string> = {
		Texture2D: "ptr",
		TextureCubemap: "ptr",
		RenderTexture2D: "ptr",
		Camera: "ptr",
	};

	return aliases[cType] || null;
}
