/**
 * Basic Window Example
 * Creates a window and displays some text
 *
 * Run with: bun run examples/basic_window.ts
 */

import {
	initWindow,
	closeWindow,
	windowShouldClose,
	beginDrawing,
	endDrawing,
	clearBackground,
	drawText,
	setTargetFPS,
	getFPS,
	isKeyPressed,
} from "@generated/functions";
import { Color } from "@generated/structs";
import { KeyboardKey } from "@generated/enums";

// Screen dimensions
const SCREEN_WIDTH = 800;
const SCREEN_HEIGHT = 450;

// Initialize window
initWindow(SCREEN_WIDTH, SCREEN_HEIGHT, "raylib-ts - Basic Window");

// Set target FPS
setTargetFPS(60);

// Create colors
const raywhite = new Color(245, 245, 245, 255);
const darkGray = new Color(80, 80, 80, 255);

// Main game loop
while (!windowShouldClose()) {
	// Check for escape key to close
	if (isKeyPressed(KeyboardKey.KEY_ESCAPE)) {
		break;
	}

	// Begin drawing
	beginDrawing();

	// Clear background
	clearBackground(raywhite);

	// Draw text
	drawText("Congrats! You created your first raylib-ts window!", 190, 200, 20, darkGray);

	// Draw FPS
	const fps = getFPS();
	drawText(`FPS: ${fps}`, 10, 10, 20, darkGray);

	// End drawing
	endDrawing();
}

// Close window and OpenGL context
closeWindow();

console.log("Window closed successfully!");
