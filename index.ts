// raylib-ts - TypeScript bindings for raylib
// https://github.com/raysan5/raylib
//
// Usage:
//   import * as rl from "raylib-ts";
//   rl.initWindow(800, 600, "My Game");
//   rl.clearBackground(rl.Color.RAYWHITE);

// Re-export all functions
export * from "@generated/functions";

// Re-export all enums
export * from "@generated/enums";

// Re-export numeric and string constants
export { RAYLIB_VERSION, RAYLIB_VERSION_MAJOR, RAYLIB_VERSION_MINOR, RAYLIB_VERSION_PATCH, PI, DEG2RAD, RAD2DEG } from "@generated/constants";

// Import base Color class and color definitions
import { Color as BaseColor } from "@generated/structs";
import { Colors } from "@generated/constants";

// Extended Color class with static color constants
export class Color extends BaseColor {
	/** Light Gray */
	static readonly LIGHTGRAY = Colors.LIGHTGRAY;
	/** Gray */
	static readonly GRAY = Colors.GRAY;
	/** Dark Gray */
	static readonly DARKGRAY = Colors.DARKGRAY;
	/** Yellow */
	static readonly YELLOW = Colors.YELLOW;
	/** Gold */
	static readonly GOLD = Colors.GOLD;
	/** Orange */
	static readonly ORANGE = Colors.ORANGE;
	/** Pink */
	static readonly PINK = Colors.PINK;
	/** Red */
	static readonly RED = Colors.RED;
	/** Maroon */
	static readonly MAROON = Colors.MAROON;
	/** Green */
	static readonly GREEN = Colors.GREEN;
	/** Lime */
	static readonly LIME = Colors.LIME;
	/** Dark Green */
	static readonly DARKGREEN = Colors.DARKGREEN;
	/** Sky Blue */
	static readonly SKYBLUE = Colors.SKYBLUE;
	/** Blue */
	static readonly BLUE = Colors.BLUE;
	/** Dark Blue */
	static readonly DARKBLUE = Colors.DARKBLUE;
	/** Purple */
	static readonly PURPLE = Colors.PURPLE;
	/** Violet */
	static readonly VIOLET = Colors.VIOLET;
	/** Dark Purple */
	static readonly DARKPURPLE = Colors.DARKPURPLE;
	/** Beige */
	static readonly BEIGE = Colors.BEIGE;
	/** Brown */
	static readonly BROWN = Colors.BROWN;
	/** Dark Brown */
	static readonly DARKBROWN = Colors.DARKBROWN;
	/** White */
	static readonly WHITE = Colors.WHITE;
	/** Black */
	static readonly BLACK = Colors.BLACK;
	/** Blank (Transparent) */
	static readonly BLANK = Colors.BLANK;
	/** Magenta */
	static readonly MAGENTA = Colors.MAGENTA;
	/** Raylib White (raylib logo) */
	static readonly RAYWHITE = Colors.RAYWHITE;
}

// Re-export other structs (excluding Color which we've extended above)
export {
	Vector2,
	Vector3,
	Vector4,
	Matrix,
	Rectangle,
	Image,
	Texture,
	RenderTexture,
	NPatchInfo,
	GlyphInfo,
	Font,
	Camera3D,
	Camera2D,
	Mesh,
	Shader,
	MaterialMap,
	Material,
	Transform,
	BoneInfo,
	Model,
	ModelAnimation,
	Ray,
	RayCollision,
	BoundingBox,
	Wave,
	AudioStream,
	Sound,
	Music,
	VrDeviceInfo,
	VrStereoConfig,
	FilePathList,
	AutomationEvent,
	AutomationEventList,
} from "@generated/structs";

// Export FFI loader utilities for advanced usage
export { loadRaylib, getRaylibPath } from "@lib/ffi";
