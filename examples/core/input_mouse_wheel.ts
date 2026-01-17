/*******************************************************************************************
 *
 *   raylib-ts [core] example - input mouse wheel
 *
 *   Ported from: https://github.com/raysan5/raylib/blob/master/examples/core/core_input_mouse_wheel.c
 *
 ********************************************************************************************/

import * as rl from "raylib-ts";

// Initialization
const screenWidth = 800;
const screenHeight = 450;

rl.initWindow(screenWidth, screenHeight, "raylib [core] example - input mouse wheel");

let boxPositionY = screenHeight / 2 - 40;
const scrollSpeed = 4; // Scrolling speed in pixels

rl.setTargetFPS(60);

// Main game loop
while (!rl.windowShouldClose()) {
	// Update
	boxPositionY -= rl.getMouseWheelMove() * scrollSpeed;

	// Draw
	rl.beginDrawing();

	rl.clearBackground(rl.Color.RAYWHITE);

	rl.drawRectangle(screenWidth / 2 - 40, boxPositionY, 80, 80, rl.Color.MAROON);

	rl.drawText("Use mouse wheel to move the cube up and down!", 10, 10, 20, rl.Color.GRAY);
	rl.drawText(`Box position Y: ${boxPositionY}`, 10, 40, 20, rl.Color.LIGHTGRAY);

	rl.endDrawing();
}

// De-Initialization
rl.closeWindow();
