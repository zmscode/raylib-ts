/*******************************************************************************************
 *
 *   raylib-ts [textures] example - raylib logo texture loading
 *
 *   Ported from: https://github.com/raysan5/raylib/blob/master/examples/textures/textures_logo_raylib.c
 *
 ********************************************************************************************/

import * as rl from "raylib-ts";

// Initialization
const screenWidth = 800;
const screenHeight = 450;

rl.initWindow(screenWidth, screenHeight, "raylib [textures] example - texture loading and drawing");

// NOTE: Textures MUST be loaded after Window initialization (OpenGL context is required)
const texture = rl.loadTexture("examples/textures/resources/textures_logo_raylib.png");

rl.setTargetFPS(60);

// Main game loop
while (!rl.windowShouldClose()) {
	// Draw
	rl.beginDrawing();

	rl.clearBackground(rl.Color.RAYWHITE);

	rl.drawTexture(
		texture,
		screenWidth / 2 - texture.width / 2,
		screenHeight / 2 - texture.height / 2,
		rl.Color.WHITE
	);

	rl.drawText("this IS a texture!", 360, 370, 10, rl.Color.GRAY);

	rl.endDrawing();
}

// De-Initialization
rl.unloadTexture(texture);

rl.closeWindow();
