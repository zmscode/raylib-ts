/*******************************************************************************************
 *
 *   raylib-ts [shapes] example - colors palette
 *
 *   Ported from: https://github.com/raysan5/raylib/blob/master/examples/shapes/shapes_colors_palette.c
 *
 ********************************************************************************************/

import * as rl from "raylib-ts";

// Initialization
const screenWidth = 800;
const screenHeight = 450;

rl.initWindow(screenWidth, screenHeight, "raylib [shapes] example - colors palette");

const colors = [
	rl.Color.DARKGRAY,
	rl.Color.MAROON,
	rl.Color.ORANGE,
	rl.Color.DARKGREEN,
	rl.Color.DARKBLUE,
	rl.Color.DARKPURPLE,
	rl.Color.DARKBROWN,
	rl.Color.GRAY,
	rl.Color.RED,
	rl.Color.GOLD,
	rl.Color.LIME,
	rl.Color.BLUE,
	rl.Color.VIOLET,
	rl.Color.BROWN,
	rl.Color.LIGHTGRAY,
	rl.Color.PINK,
	rl.Color.YELLOW,
	rl.Color.GREEN,
	rl.Color.SKYBLUE,
	rl.Color.PURPLE,
	rl.Color.BEIGE,
];

const colorNames = [
	"DARKGRAY",
	"MAROON",
	"ORANGE",
	"DARKGREEN",
	"DARKBLUE",
	"DARKPURPLE",
	"DARKBROWN",
	"GRAY",
	"RED",
	"GOLD",
	"LIME",
	"BLUE",
	"VIOLET",
	"BROWN",
	"LIGHTGRAY",
	"PINK",
	"YELLOW",
	"GREEN",
	"SKYBLUE",
	"PURPLE",
	"BEIGE",
];

// Rectangles array
const colorsRecs: { x: number; y: number; width: number; height: number }[] = [];

// Fills colorsRecs data (for every rectangle)
for (let i = 0; i < colors.length; i++) {
	colorsRecs.push({
		x: 20 + 100 * (i % 7) + 10 * (i % 7),
		y: 80 + 100 * Math.floor(i / 7) + 10 * Math.floor(i / 7),
		width: 100,
		height: 100,
	});
}

const colorState: boolean[] = new Array(colors.length).fill(false); // Color state: 0-DEFAULT, 1-MOUSE_HOVER

rl.setTargetFPS(60);

// Main game loop
while (!rl.windowShouldClose()) {
	// Update
	const mousePoint = { x: rl.getMouseX(), y: rl.getMouseY() };

	for (let i = 0; i < colors.length; i++) {
		const rec = colorsRecs[i]!;
		colorState[i] =
			mousePoint.x >= rec.x &&
			mousePoint.x <= rec.x + rec.width &&
			mousePoint.y >= rec.y &&
			mousePoint.y <= rec.y + rec.height;
	}

	// Draw
	rl.beginDrawing();

	rl.clearBackground(rl.Color.RAYWHITE);

	rl.drawText("raylib colors palette", 28, 42, 20, rl.Color.BLACK);
	rl.drawText("press SPACE to see all colors", screenWidth - 180, screenHeight - 40, 10, rl.Color.GRAY);

	for (let i = 0; i < colors.length; i++) {
		const rec = colorsRecs[i]!;
		const color = colors[i]!;

		rl.drawRectangle(
			rec.x,
			rec.y,
			rec.width,
			rec.height,
			colorState[i] ? rl.fade(color, 0.6) : color
		);

		if (rl.isKeyDown(rl.KeyboardKey.KEY_SPACE) || colorState[i]) {
			rl.drawRectangle(rec.x, rec.y + rec.height - 26, rec.width, 20, rl.Color.BLACK);
			rl.drawRectangleLines(rec.x, rec.y + rec.height - 26, rec.width, 20, rl.fade(rl.Color.BLACK, 0.6));
			rl.drawText(colorNames[i]!, rec.x + 4, rec.y + rec.height - 24, 10, color);
		}
	}

	rl.endDrawing();
}

// De-Initialization
rl.closeWindow();
