/*******************************************************************************************
 *
 *   raylib-ts [text] example - text writing animation
 *
 *   Ported from: https://github.com/raysan5/raylib/blob/master/examples/text/text_writing_anim.c
 *
 ********************************************************************************************/

import * as rl from "raylib-ts";

// Initialization
const screenWidth = 800;
const screenHeight = 450;

rl.initWindow(screenWidth, screenHeight, "raylib [text] example - text writing anim");

const message = "This sample illustrates a text writing\nanimation effect! Check it out! ;)";

let framesCounter = 0;

rl.setTargetFPS(60);

// Main game loop
while (!rl.windowShouldClose()) {
	// Update
	if (rl.isKeyDown(rl.KeyboardKey.KEY_SPACE)) {
		framesCounter += 8;
	} else {
		framesCounter++;
	}

	if (rl.isKeyPressed(rl.KeyboardKey.KEY_ENTER)) {
		framesCounter = 0;
	}

	// Draw
	rl.beginDrawing();

	rl.clearBackground(rl.Color.RAYWHITE);

	// Substring based on frame count
	const displayText = message.substring(0, Math.floor(framesCounter / 10));
	rl.drawText(displayText, 210, 160, 20, rl.Color.MAROON);

	rl.drawText("PRESS [ENTER] to RESTART!", 240, 260, 20, rl.Color.LIGHTGRAY);
	rl.drawText("PRESS [SPACE] to SPEED UP!", 239, 300, 20, rl.Color.LIGHTGRAY);

	rl.endDrawing();
}

// De-Initialization
rl.closeWindow();
