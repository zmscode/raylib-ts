/*******************************************************************************************
 *
 *   raylib-ts [shapes] example - rectangle scaling by mouse
 *
 *   Ported from: https://github.com/raysan5/raylib/blob/master/examples/shapes/shapes_rectangle_scaling.c
 *
 ********************************************************************************************/

import * as rl from "raylib-ts";

const MOUSE_SCALE_MARK_SIZE = 12;

// Initialization
const screenWidth = 800;
const screenHeight = 450;

rl.initWindow(screenWidth, screenHeight, "raylib [shapes] example - rectangle scaling mouse");

let rec = { x: 100, y: 100, width: 200, height: 80 };

let mouseScaleReady = false;
let mouseScaleMode = false;

rl.setTargetFPS(60);

// Main game loop
while (!rl.windowShouldClose()) {
	// Update
	const mousePosition = { x: rl.getMouseX(), y: rl.getMouseY() };

	// Check if mouse is over scale area
	mouseScaleReady =
		mousePosition.x >= rec.x + rec.width - MOUSE_SCALE_MARK_SIZE &&
		mousePosition.x <= rec.x + rec.width &&
		mousePosition.y >= rec.y + rec.height - MOUSE_SCALE_MARK_SIZE &&
		mousePosition.y <= rec.y + rec.height;

	if (mouseScaleReady) {
		if (rl.isMouseButtonPressed(rl.MouseButton.MOUSE_BUTTON_LEFT)) {
			mouseScaleMode = true;
		}
	}

	if (mouseScaleMode) {
		rec.width = mousePosition.x - rec.x;
		rec.height = mousePosition.y - rec.y;

		// Minimum size
		if (rec.width < MOUSE_SCALE_MARK_SIZE) rec.width = MOUSE_SCALE_MARK_SIZE;
		if (rec.height < MOUSE_SCALE_MARK_SIZE) rec.height = MOUSE_SCALE_MARK_SIZE;

		// Maximum size
		if (rec.width > screenWidth - rec.x) rec.width = screenWidth - rec.x;
		if (rec.height > screenHeight - rec.y) rec.height = screenHeight - rec.y;

		if (rl.isMouseButtonReleased(rl.MouseButton.MOUSE_BUTTON_LEFT)) {
			mouseScaleMode = false;
		}
	}

	// Draw
	rl.beginDrawing();

	rl.clearBackground(rl.Color.RAYWHITE);

	rl.drawText("Scale rectangle dragging from bottom-right corner!", 10, 10, 20, rl.Color.GRAY);

	rl.drawRectangle(rec.x, rec.y, rec.width, rec.height, rl.fade(rl.Color.GREEN, 0.5));
	rl.drawRectangleLines(rec.x, rec.y, rec.width, rec.height, rl.Color.GREEN);

	// Draw scale mark
	rl.drawTriangle(
		new rl.Vector2(rec.x + rec.width - MOUSE_SCALE_MARK_SIZE, rec.y + rec.height),
		new rl.Vector2(rec.x + rec.width, rec.y + rec.height),
		new rl.Vector2(rec.x + rec.width, rec.y + rec.height - MOUSE_SCALE_MARK_SIZE),
		mouseScaleReady || mouseScaleMode ? rl.Color.RED : rl.Color.DARKGRAY,
	);

	rl.endDrawing();
}

// De-Initialization
rl.closeWindow();
