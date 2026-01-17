# raylib-ts

TypeScript bindings for [raylib](https://www.raylib.com/) using Bun's FFI.

> **Note:** This library requires [Bun](https://bun.sh/) runtime. It will not work with Node.js.

## Installation

```bash
bun add raylib-ts
```

You'll also need raylib installed on your system:

**macOS:**
```bash
brew install raylib
```

**Ubuntu/Debian:**
```bash
sudo apt install libraylib-dev
```

**Windows:**
Download from [raylib releases](https://github.com/raysan5/raylib/releases) and add to your PATH.

## Quick Start

```typescript
import * as rl from "raylib-ts";

rl.initWindow(800, 600, "Hello Raylib!");
rl.setTargetFPS(60);

while (!rl.windowShouldClose()) {
  rl.beginDrawing();
  rl.clearBackground(rl.Color.RAYWHITE);
  rl.drawText("Hello, raylib-ts!", 190, 200, 20, rl.Color.DARKGRAY);
  rl.endDrawing();
}

rl.closeWindow();
```

Run with:
```bash
bun run your-game.ts
```

## Features

- Full raylib 5.5 API coverage (569 functions)
- Idiomatic TypeScript with camelCase function names
- Type-safe structs (Vector2, Color, Rectangle, etc.)
- Built-in color constants (`Color.RED`, `Color.RAYWHITE`, etc.)
- All raylib enums (KeyboardKey, MouseButton, etc.)

## API Style

Functions use camelCase (TypeScript idiomatic):
```typescript
rl.initWindow(800, 600, "My Game");
rl.clearBackground(rl.Color.RAYWHITE);
rl.drawText("Hello!", 10, 10, 20, rl.Color.BLACK);
rl.drawRectangle(100, 100, 200, 150, rl.Color.RED);
```

PascalCase aliases are also available for C-style naming:
```typescript
rl.InitWindow(800, 600, "My Game");
rl.ClearBackground(rl.Color.RAYWHITE);
```

## Structs

Create structs with constructors:
```typescript
const pos = new rl.Vector2(100, 200);
const rect = new rl.Rectangle(0, 0, 100, 50);
const color = new rl.Color(255, 0, 0, 255); // RGBA
```

Or use built-in color constants:
```typescript
rl.Color.RED
rl.Color.GREEN
rl.Color.BLUE
rl.Color.RAYWHITE
rl.Color.DARKGRAY
// ... and more
```

## Examples

### Basic Window
```typescript
import * as rl from "raylib-ts";

rl.initWindow(800, 600, "Basic Window");
rl.setTargetFPS(60);

while (!rl.windowShouldClose()) {
  rl.beginDrawing();
  rl.clearBackground(rl.Color.RAYWHITE);
  rl.drawFPS(10, 10);
  rl.endDrawing();
}

rl.closeWindow();
```

### Keyboard Input
```typescript
import * as rl from "raylib-ts";

rl.initWindow(800, 600, "Keyboard Input");

let x = 400;
let y = 300;

while (!rl.windowShouldClose()) {
  // Move with arrow keys
  if (rl.isKeyDown(rl.KeyboardKey.KEY_RIGHT)) x += 5;
  if (rl.isKeyDown(rl.KeyboardKey.KEY_LEFT)) x -= 5;
  if (rl.isKeyDown(rl.KeyboardKey.KEY_DOWN)) y += 5;
  if (rl.isKeyDown(rl.KeyboardKey.KEY_UP)) y -= 5;

  rl.beginDrawing();
  rl.clearBackground(rl.Color.RAYWHITE);
  rl.drawCircle(x, y, 20, rl.Color.RED);
  rl.endDrawing();
}

rl.closeWindow();
```

### Mouse Input
```typescript
import * as rl from "raylib-ts";

rl.initWindow(800, 600, "Mouse Input");

while (!rl.windowShouldClose()) {
  const mouseX = rl.getMouseX();
  const mouseY = rl.getMouseY();

  rl.beginDrawing();
  rl.clearBackground(rl.Color.RAYWHITE);
  
  if (rl.isMouseButtonDown(rl.MouseButton.MOUSE_BUTTON_LEFT)) {
    rl.drawCircle(mouseX, mouseY, 20, rl.Color.RED);
  } else {
    rl.drawCircle(mouseX, mouseY, 20, rl.Color.BLUE);
  }
  
  rl.endDrawing();
}

rl.closeWindow();
```

## Available Modules

All exports are available from the main import:

```typescript
import * as rl from "raylib-ts";

// Functions
rl.initWindow, rl.drawText, rl.loadTexture, ...

// Structs
rl.Vector2, rl.Vector3, rl.Color, rl.Rectangle, rl.Camera2D, ...

// Enums
rl.KeyboardKey, rl.MouseButton, rl.GamepadButton, ...

// Constants
rl.PI, rl.DEG2RAD, rl.RAD2DEG, ...
```

## Requirements

- [Bun](https://bun.sh/) >= 1.0.0
- [raylib](https://www.raylib.com/) >= 5.0 (system installation)
- TypeScript >= 5.0

## License

MIT License - see [LICENSE](LICENSE) for details.

## Credits

- [raylib](https://www.raylib.com/) by Ramon Santamaria ([@raysan5](https://github.com/raysan5))
- Bindings auto-generated from raylib's official API JSON
