/*******************************************************************************************
 *
 *   raylib-ts [core] example - basic window
 *
 *   Welcome to raylib!
 *
 *   To test examples, just run: bun run examples/core/core_basic_window.ts
 *
 *   Ported from: https://github.com/raysan5/raylib/blob/master/examples/core/core_basic_window.c
 *
 ********************************************************************************************/

import * as rl from "raylib-ts";

// Initialization
const screenWidth = 800;
const screenHeight = 450;

rl.initWindow(screenWidth, screenHeight, "raylib [core] example - basic window");

rl.setTargetFPS(60); // Set our game to run at 60 frames-per-second

// Main game loop
while (!rl.windowShouldClose()) {
	// Detect window close button or ESC key
	// Update
	//----------------------------------------------------------------------------------
	// TODO: Update your variables here
	//----------------------------------------------------------------------------------

	// Draw
	//----------------------------------------------------------------------------------
	rl.beginDrawing();

	rl.clearBackground(rl.Color.RAYWHITE);

	rl.drawText("Congrats! You created your first window!", 190, 200, 20, rl.Color.LIGHTGRAY);

	rl.endDrawing();
	//----------------------------------------------------------------------------------
}

// De-Initialization
rl.closeWindow(); // Close window and OpenGL context
