/*******************************************************************************************
 *
 *   raylib-ts [text] example - text formatting
 *
 *   Ported from: https://github.com/raysan5/raylib/blob/master/examples/text/text_format_text.c
 *
 ********************************************************************************************/

import * as rl from "raylib-ts";

// Initialization
const screenWidth = 800;
const screenHeight = 450;

rl.initWindow(screenWidth, screenHeight, "raylib [text] example - text formatting");

const score = 100020;
const hiscore = 200450;
const lives = 5;

rl.setTargetFPS(60);

// Main game loop
while (!rl.windowShouldClose()) {
	// Update
	// TODO: Update your variables here

	// Draw
	rl.beginDrawing();

	rl.clearBackground(rl.Color.RAYWHITE);

	// TypeScript template strings work great for text formatting!
	rl.drawText(`Score: ${score.toString().padStart(8, "0")}`, 200, 80, 20, rl.Color.RED);

	rl.drawText(`HiScore: ${hiscore.toString().padStart(8, "0")}`, 200, 120, 20, rl.Color.GREEN);

	rl.drawText(`Lives: ${lives.toString().padStart(2, "0")}`, 200, 160, 40, rl.Color.BLUE);

	rl.drawText(`Elapsed Time: ${rl.getTime().toFixed(1)} sec`, 200, 220, 20, rl.Color.BLACK);

	rl.endDrawing();
}

// De-Initialization
rl.closeWindow();
