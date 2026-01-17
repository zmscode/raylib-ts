/*******************************************************************************************
 *
 *   raylib-ts [shapes] example - basic shapes drawing
 *
 *   Ported from: https://github.com/raysan5/raylib/blob/master/examples/shapes/shapes_basic_shapes.c
 *
 ********************************************************************************************/

import * as rl from "raylib-ts";

// Initialization
const screenWidth = 800;
const screenHeight = 450;

rl.initWindow(screenWidth, screenHeight, "raylib [shapes] example - basic shapes drawing");

let rotation = 0;

rl.setTargetFPS(60);

// Main game loop
while (!rl.windowShouldClose()) {
	// Update
	rotation += 0.2;

	// Draw
	rl.beginDrawing();

	rl.clearBackground(rl.Color.RAYWHITE);

	rl.drawText("some basic shapes available on raylib", 20, 20, 20, rl.Color.DARKGRAY);

	// Circle shapes and lines
	rl.drawCircle(screenWidth / 5, 120, 35, rl.Color.DARKBLUE);
	rl.drawCircleGradient(screenWidth / 5, 220, 60, rl.Color.GREEN, rl.Color.SKYBLUE);
	rl.drawCircleLines(screenWidth / 5, 340, 80, rl.Color.DARKBLUE);

	// Rectangle shapes and lines
	rl.drawRectangle((screenWidth / 4) * 2 - 60, 100, 120, 60, rl.Color.RED);
	rl.drawRectangleGradientH((screenWidth / 4) * 2 - 90, 170, 180, 130, rl.Color.MAROON, rl.Color.GOLD);
	rl.drawRectangleLines((screenWidth / 4) * 2 - 40, 320, 80, 60, rl.Color.ORANGE);

	// Triangle shapes and lines
	rl.drawTriangle(
		new rl.Vector2((screenWidth / 4) * 3, 80),
		new rl.Vector2((screenWidth / 4) * 3 - 60, 150),
		new rl.Vector2((screenWidth / 4) * 3 + 60, 150),
		rl.Color.VIOLET,
	);

	rl.drawTriangleLines(
		new rl.Vector2((screenWidth / 4) * 3, 160),
		new rl.Vector2((screenWidth / 4) * 3 - 20, 230),
		new rl.Vector2((screenWidth / 4) * 3 + 20, 230),
		rl.Color.DARKBLUE,
	);

	// Polygon shapes and lines
	const polyCenter = new rl.Vector2((screenWidth / 4) * 3, 330);
	rl.drawPoly(polyCenter, 6, 80, rotation, rl.Color.BROWN);
	rl.drawPolyLines(polyCenter, 6, 90, rotation, rl.Color.BROWN);
	rl.drawPolyLinesEx(polyCenter, 6, 85, rotation, 6, rl.Color.BEIGE);

	// NOTE: We draw all LINES based shapes together to optimize internal drawing,
	// this way, all LINES are rendered in a single draw pass
	rl.drawLine(18, 42, screenWidth - 18, 42, rl.Color.BLACK);

	rl.endDrawing();
}

// De-Initialization
rl.closeWindow();
