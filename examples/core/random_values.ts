/*******************************************************************************************
 *
 *   raylib-ts [core] example - random values
 *
 *   Ported from: https://github.com/raysan5/raylib/blob/master/examples/core/core_random_values.c
 *
 ********************************************************************************************/

import * as rl from "raylib-ts";

// Initialization
const screenWidth = 800;
const screenHeight = 450;

rl.initWindow(screenWidth, screenHeight, "raylib [core] example - random values");

let framesCounter = 0; // Variable used to count frames

let randValue = rl.getRandomValue(-8, 5); // Get a random integer number between -8 and 5

rl.setTargetFPS(60);

// Main game loop
while (!rl.windowShouldClose()) {
	// Update
	framesCounter++;

	// Every two seconds (120 frames) a new random value is generated
	if ((framesCounter / 120) % 2 === 1) {
		randValue = rl.getRandomValue(-8, 5);
		framesCounter = 0;
	}

	// Draw
	rl.beginDrawing();

	rl.clearBackground(rl.Color.RAYWHITE);

	rl.drawText("Every 2 seconds a new random value is generated:", 130, 100, 20, rl.Color.MAROON);

	rl.drawText(`${randValue}`, 360, 180, 80, rl.Color.LIGHTGRAY);

	rl.endDrawing();
}

// De-Initialization
rl.closeWindow();
