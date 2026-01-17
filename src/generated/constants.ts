// Auto-generated raylib constants
// Do not edit manually - regenerate with: bun run src/generator/generate.ts

import { Color } from "@generated/structs";

// Numeric constants
export const RAYLIB_VERSION_MAJOR = 5;
export const RAYLIB_VERSION_MINOR = 5;
export const RAYLIB_VERSION_PATCH = 0;
export const PI = 3.141592653589793;
export const DEG2RAD = (PI/180.0);
export const RAD2DEG = (180.0/PI);

// String constants
export const RAYLIB_VERSION = "5.5";

// Color constants
export const Colors = {
	/** Light Gray */
	LIGHTGRAY: new Color(200, 200, 200, 255),
	/** Gray */
	GRAY: new Color(130, 130, 130, 255),
	/** Dark Gray */
	DARKGRAY: new Color(80, 80, 80, 255),
	/** Yellow */
	YELLOW: new Color(253, 249, 0, 255),
	/** Gold */
	GOLD: new Color(255, 203, 0, 255),
	/** Orange */
	ORANGE: new Color(255, 161, 0, 255),
	/** Pink */
	PINK: new Color(255, 109, 194, 255),
	/** Red */
	RED: new Color(230, 41, 55, 255),
	/** Maroon */
	MAROON: new Color(190, 33, 55, 255),
	/** Green */
	GREEN: new Color(0, 228, 48, 255),
	/** Lime */
	LIME: new Color(0, 158, 47, 255),
	/** Dark Green */
	DARKGREEN: new Color(0, 117, 44, 255),
	/** Sky Blue */
	SKYBLUE: new Color(102, 191, 255, 255),
	/** Blue */
	BLUE: new Color(0, 121, 241, 255),
	/** Dark Blue */
	DARKBLUE: new Color(0, 82, 172, 255),
	/** Purple */
	PURPLE: new Color(200, 122, 255, 255),
	/** Violet */
	VIOLET: new Color(135, 60, 190, 255),
	/** Dark Purple */
	DARKPURPLE: new Color(112, 31, 126, 255),
	/** Beige */
	BEIGE: new Color(211, 176, 131, 255),
	/** Brown */
	BROWN: new Color(127, 106, 79, 255),
	/** Dark Brown */
	DARKBROWN: new Color(76, 63, 47, 255),
	/** White */
	WHITE: new Color(255, 255, 255, 255),
	/** Black */
	BLACK: new Color(0, 0, 0, 255),
	/** Blank (Transparent) */
	BLANK: new Color(0, 0, 0, 0),
	/** Magenta */
	MAGENTA: new Color(255, 0, 255, 255),
	/** My own White (raylib logo) */
	RAYWHITE: new Color(245, 245, 245, 255),
} as const;
