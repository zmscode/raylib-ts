import { dlopen, type FFIType } from "bun:ffi";
import { join, dirname } from "node:path";

// Get the library directory relative to this file
const LIB_DIR = join(dirname(dirname(dirname(import.meta.dir))), "lib", "native");

/**
 * Check if a file exists using Bun.file
 */
function fileExists(path: string): boolean {
	try {
		return Bun.file(path).size > 0;
	} catch {
		return false;
	}
}

/**
 * Get the platform-specific library path for raylib
 */
function getLibraryPath(): string {
	const platform = process.platform;
	const arch = process.arch;

	const platformDir = `${platform}-${arch}`;

	let libName: string;
	switch (platform) {
		case "darwin":
			libName = "libraylib.dylib";
			break;
		case "linux":
			libName = "libraylib.so";
			break;
		case "win32":
			libName = "raylib.dll";
			break;
		default:
			throw new Error(`Unsupported platform: ${platform}`);
	}

	const libPath = join(LIB_DIR, platformDir, libName);

	if (fileExists(libPath)) {
		return libPath;
	}

	console.warn(`Bundled raylib not found at ${libPath}, trying system library...`);

	const systemPaths = {
		darwin: ["/usr/local/lib/libraylib.dylib", "/opt/homebrew/lib/libraylib.dylib", "libraylib.dylib"],
		linux: ["/usr/local/lib/libraylib.so", "/usr/lib/libraylib.so", "libraylib.so"],
		win32: ["raylib.dll", "C:\\raylib\\lib\\raylib.dll"],
	};

	const paths = systemPaths[platform as keyof typeof systemPaths] || [];

	for (const path of paths) {
		if (path.startsWith("/") || path.startsWith("C:\\")) {
			if (fileExists(path)) {
				return path;
			}
		} else {
			return path;
		}
	}

	throw new Error(
		`Could not find raylib library. Please either:\n` +
			`1. Install raylib system-wide (brew install raylib / apt install libraylib-dev)\n` +
			`2. Place the raylib binary in ${join(LIB_DIR, platformDir, libName)}`,
	);
}

// Type for FFI symbol definitions
type SymbolDefinition = {
	args: readonly FFIType[];
	returns: FFIType;
};

type SymbolMap = Record<string, SymbolDefinition>;

// Cached library instance
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let raylibInstance: any = null;
let loadedSymbols: SymbolMap | null = null;

/**
 * Load the raylib library with the given symbols
 */
export function loadRaylib<T extends SymbolMap>(symbols: T): ReturnType<typeof dlopen<T>> {
	if (raylibInstance && loadedSymbols === symbols) {
		return raylibInstance as ReturnType<typeof dlopen<T>>;
	}

	const libPath = getLibraryPath();
	console.log(`Loading raylib from: ${libPath}`);
	const lib = dlopen(libPath, symbols);
	raylibInstance = lib;
	loadedSymbols = symbols;
	return lib;
}

/**
 * Get the raylib library path
 */
export function getRaylibPath(): string {
	return getLibraryPath();
}
