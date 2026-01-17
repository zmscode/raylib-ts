/*******************************************************************************************
 *
 *   raylib-ts [core] example - input mouse
 *
 *   Ported from: https://github.com/raysan5/raylib/blob/master/examples/core/core_input_mouse.c
 *
 ********************************************************************************************/

import * as rl from "raylib-ts";

// Initialization
const screenWidth = 800;
const screenHeight = 450;

rl.initWindow(screenWidth, screenHeight, "raylib [core] example - input mouse");

let ballPositionX = -100;
let ballPositionY = -100;
let ballColor = rl.Color.DARKBLUE;

rl.setTargetFPS(60);

// Main game loop
while (!rl.windowShouldClose()) {
	// Update
	ballPositionX = rl.getMouseX();
	ballPositionY = rl.getMouseY();

	if (rl.isMouseButtonPressed(rl.MouseButton.MOUSE_BUTTON_LEFT)) ballColor = rl.Color.MAROON;
	else if (rl.isMouseButtonPressed(rl.MouseButton.MOUSE_BUTTON_MIDDLE)) ballColor = rl.Color.LIME;
	else if (rl.isMouseButtonPressed(rl.MouseButton.MOUSE_BUTTON_RIGHT)) ballColor = rl.Color.DARKBLUE;

	// Draw
	rl.beginDrawing();

	rl.clearBackground(rl.Color.RAYWHITE);

	rl.drawCircle(ballPositionX, ballPositionY, 40, ballColor);

	rl.drawText("move ball with mouse and click mouse button to change color", 10, 10, 20, rl.Color.DARKGRAY);

	rl.endDrawing();
}

// De-Initialization
rl.closeWindow();
