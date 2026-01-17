/*******************************************************************************************
 *
 *   raylib-ts [textures] example - background scrolling
 *
 *   Ported from: https://github.com/raysan5/raylib/blob/master/examples/textures/textures_background_scrolling.c
 *
 ********************************************************************************************/

import * as rl from "raylib-ts";

// Initialization
const screenWidth = 800;
const screenHeight = 450;

rl.initWindow(screenWidth, screenHeight, "raylib [textures] example - background scrolling");

// NOTE: Textures MUST be loaded after Window initialization (OpenGL context is required)
const background = rl.loadTexture("examples/textures/resources/cyberpunk_street_background.png");
const midground = rl.loadTexture("examples/textures/resources/cyberpunk_street_midground.png");
const foreground = rl.loadTexture("examples/textures/resources/cyberpunk_street_foreground.png");

let scrollingBack = 0;
let scrollingMid = 0;
let scrollingFore = 0;

rl.setTargetFPS(60);

// Main game loop
while (!rl.windowShouldClose()) {
	// Update
	scrollingBack -= 0.1;
	scrollingMid -= 0.5;
	scrollingFore -= 1.0;

	// NOTE: Texture is scaled twice its size, so it should be considered on scrolling
	if (scrollingBack <= -background.width * 2) scrollingBack = 0;
	if (scrollingMid <= -midground.width * 2) scrollingMid = 0;
	if (scrollingFore <= -foreground.width * 2) scrollingFore = 0;

	// Draw
	rl.beginDrawing();

	rl.clearBackground(rl.Color.RAYWHITE);

	// Draw background image twice (for seamless scrolling)
	// Create source and dest rectangles for texture drawing
	rl.drawTextureEx(background, new rl.Vector2(scrollingBack, 20), 0, 2.0, rl.Color.WHITE);
	rl.drawTextureEx(background, new rl.Vector2(background.width * 2 + scrollingBack, 20), 0, 2.0, rl.Color.WHITE);

	// Draw midground image twice
	rl.drawTextureEx(midground, new rl.Vector2(scrollingMid, 20), 0, 2.0, rl.Color.WHITE);
	rl.drawTextureEx(midground, new rl.Vector2(midground.width * 2 + scrollingMid, 20), 0, 2.0, rl.Color.WHITE);

	// Draw foreground image twice
	rl.drawTextureEx(foreground, new rl.Vector2(scrollingFore, 70), 0, 2.0, rl.Color.WHITE);
	rl.drawTextureEx(foreground, new rl.Vector2(foreground.width * 2 + scrollingFore, 70), 0, 2.0, rl.Color.WHITE);

	rl.drawText("BACKGROUND SCROLLING & PARALLAX", 10, 10, 20, rl.Color.RED);
	rl.drawText("(c) Cyberpunk Street Environment by Luis Zuno (@ansimuz)", screenWidth - 330, screenHeight - 20, 10, rl.Color.RAYWHITE);

	rl.endDrawing();
}

// De-Initialization
rl.unloadTexture(background);
rl.unloadTexture(midground);
rl.unloadTexture(foreground);

rl.closeWindow();
