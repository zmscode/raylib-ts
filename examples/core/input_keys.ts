/*******************************************************************************************
 *
 *   raylib-ts [core] example - input keys
 *
 *   Ported from: https://github.com/raysan5/raylib/blob/master/examples/core/core_input_keys.c
 *
 ********************************************************************************************/

import * as rl from "raylib-ts";

// Initialization
const screenWidth = 800;
const screenHeight = 450;

rl.initWindow(screenWidth, screenHeight, "raylib [core] example - input keys");

let ballPositionX = screenWidth / 2;
let ballPositionY = screenHeight / 2;

rl.setTargetFPS(60); // Set our game to run at 60 frames-per-second

// Main game loop
while (!rl.windowShouldClose()) {
	// Update
	if (rl.isKeyDown(rl.KeyboardKey.KEY_RIGHT)) ballPositionX += 2;
	if (rl.isKeyDown(rl.KeyboardKey.KEY_LEFT)) ballPositionX -= 2;
	if (rl.isKeyDown(rl.KeyboardKey.KEY_UP)) ballPositionY -= 2;
	if (rl.isKeyDown(rl.KeyboardKey.KEY_DOWN)) ballPositionY += 2;

	// Draw
	rl.beginDrawing();

	rl.clearBackground(rl.Color.RAYWHITE);

	rl.drawText("move the ball with arrow keys", 10, 10, 20, rl.Color.DARKGRAY);

	rl.drawCircle(ballPositionX, ballPositionY, 50, rl.Color.MAROON);

	rl.endDrawing();
}

// De-Initialization
rl.closeWindow();
