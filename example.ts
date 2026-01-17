import * as rl from "raylib-ts";

rl.initWindow(900, 600, "window test");

while (!rl.windowShouldClose()) {
	rl.beginDrawing();
	rl.clearBackground(rl.Color.RAYWHITE);
	rl.drawText("12 lines of code to create a window and display output lol", 190, 200, 20, rl.Color.DARKGRAY);
	rl.endDrawing();
}
rl.closeWindow();
