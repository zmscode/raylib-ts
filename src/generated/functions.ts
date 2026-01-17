// Auto-generated raylib function bindings
// Do not edit manually - regenerate with: bun run src/generator/generate.ts

import { ptr, type Pointer } from "bun:ffi";
import { loadRaylib } from "@lib/ffi";
import { symbols } from "@generated/symbols";
import * as Structs from "@generated/structs";

// Load raylib with our generated symbols
const raylib = loadRaylib(symbols);

// Helper to convert JS string to null-terminated C string buffer
// (FFIType.cstring doesn't work correctly in Bun 1.3.x)
const encoder = new TextEncoder();
function toCString(str: string): Uint8Array {
	const encoded = encoder.encode(str);
	const buf = new Uint8Array(encoded.length + 1);
	buf.set(encoded);
	// buf[encoded.length] = 0; // Already zero-initialized
	return buf;
}

/** Initialize window and OpenGL context */
export function initWindow(width: number, height: number, title: string): void {
	(raylib.symbols.InitWindow as Function)(width, height, ptr(toCString(title)));
}
/** @alias initWindow */
export const InitWindow = initWindow;

/** Close window and unload OpenGL context */
export function closeWindow(): void {
	(raylib.symbols.CloseWindow as Function)();
}
/** @alias closeWindow */
export const CloseWindow = closeWindow;

/** Check if application should close (KEY_ESCAPE pressed or windows close icon clicked) */
export function windowShouldClose(): boolean {
	return (raylib.symbols.WindowShouldClose as Function)() as boolean;
}
/** @alias windowShouldClose */
export const WindowShouldClose = windowShouldClose;

/** Check if window has been initialized successfully */
export function isWindowReady(): boolean {
	return (raylib.symbols.IsWindowReady as Function)() as boolean;
}
/** @alias isWindowReady */
export const IsWindowReady = isWindowReady;

/** Check if window is currently fullscreen */
export function isWindowFullscreen(): boolean {
	return (raylib.symbols.IsWindowFullscreen as Function)() as boolean;
}
/** @alias isWindowFullscreen */
export const IsWindowFullscreen = isWindowFullscreen;

/** Check if window is currently hidden */
export function isWindowHidden(): boolean {
	return (raylib.symbols.IsWindowHidden as Function)() as boolean;
}
/** @alias isWindowHidden */
export const IsWindowHidden = isWindowHidden;

/** Check if window is currently minimized */
export function isWindowMinimized(): boolean {
	return (raylib.symbols.IsWindowMinimized as Function)() as boolean;
}
/** @alias isWindowMinimized */
export const IsWindowMinimized = isWindowMinimized;

/** Check if window is currently maximized */
export function isWindowMaximized(): boolean {
	return (raylib.symbols.IsWindowMaximized as Function)() as boolean;
}
/** @alias isWindowMaximized */
export const IsWindowMaximized = isWindowMaximized;

/** Check if window is currently focused */
export function isWindowFocused(): boolean {
	return (raylib.symbols.IsWindowFocused as Function)() as boolean;
}
/** @alias isWindowFocused */
export const IsWindowFocused = isWindowFocused;

/** Check if window has been resized last frame */
export function isWindowResized(): boolean {
	return (raylib.symbols.IsWindowResized as Function)() as boolean;
}
/** @alias isWindowResized */
export const IsWindowResized = isWindowResized;

/** Check if one specific window flag is enabled */
export function isWindowState(flag: number): boolean {
	return (raylib.symbols.IsWindowState as Function)(flag) as boolean;
}
/** @alias isWindowState */
export const IsWindowState = isWindowState;

/** Set window configuration state using flags */
export function setWindowState(flags: number): void {
	(raylib.symbols.SetWindowState as Function)(flags);
}
/** @alias setWindowState */
export const SetWindowState = setWindowState;

/** Clear window configuration state flags */
export function clearWindowState(flags: number): void {
	(raylib.symbols.ClearWindowState as Function)(flags);
}
/** @alias clearWindowState */
export const ClearWindowState = clearWindowState;

/** Toggle window state: fullscreen/windowed, resizes monitor to match window resolution */
export function toggleFullscreen(): void {
	(raylib.symbols.ToggleFullscreen as Function)();
}
/** @alias toggleFullscreen */
export const ToggleFullscreen = toggleFullscreen;

/** Toggle window state: borderless windowed, resizes window to match monitor resolution */
export function toggleBorderlessWindowed(): void {
	(raylib.symbols.ToggleBorderlessWindowed as Function)();
}
/** @alias toggleBorderlessWindowed */
export const ToggleBorderlessWindowed = toggleBorderlessWindowed;

/** Set window state: maximized, if resizable */
export function maximizeWindow(): void {
	(raylib.symbols.MaximizeWindow as Function)();
}
/** @alias maximizeWindow */
export const MaximizeWindow = maximizeWindow;

/** Set window state: minimized, if resizable */
export function minimizeWindow(): void {
	(raylib.symbols.MinimizeWindow as Function)();
}
/** @alias minimizeWindow */
export const MinimizeWindow = minimizeWindow;

/** Set window state: not minimized/maximized */
export function restoreWindow(): void {
	(raylib.symbols.RestoreWindow as Function)();
}
/** @alias restoreWindow */
export const RestoreWindow = restoreWindow;

/** Set icon for window (single image, RGBA 32bit) */
export function setWindowIcon(image: Structs.Image): void {
	(raylib.symbols.SetWindowIcon as Function)(ptr(image.rawBuffer));
}
/** @alias setWindowIcon */
export const SetWindowIcon = setWindowIcon;

/** Set icon for window (multiple images, RGBA 32bit) */
export function setWindowIcons(images: number, count: number): void {
	(raylib.symbols.SetWindowIcons as Function)(images, count);
}
/** @alias setWindowIcons */
export const SetWindowIcons = setWindowIcons;

/** Set title for window */
export function setWindowTitle(title: string): void {
	(raylib.symbols.SetWindowTitle as Function)(ptr(toCString(title)));
}
/** @alias setWindowTitle */
export const SetWindowTitle = setWindowTitle;

/** Set window position on screen */
export function setWindowPosition(x: number, y: number): void {
	(raylib.symbols.SetWindowPosition as Function)(x, y);
}
/** @alias setWindowPosition */
export const SetWindowPosition = setWindowPosition;

/** Set monitor for the current window */
export function setWindowMonitor(monitor: number): void {
	(raylib.symbols.SetWindowMonitor as Function)(monitor);
}
/** @alias setWindowMonitor */
export const SetWindowMonitor = setWindowMonitor;

/** Set window minimum dimensions (for FLAG_WINDOW_RESIZABLE) */
export function setWindowMinSize(width: number, height: number): void {
	(raylib.symbols.SetWindowMinSize as Function)(width, height);
}
/** @alias setWindowMinSize */
export const SetWindowMinSize = setWindowMinSize;

/** Set window maximum dimensions (for FLAG_WINDOW_RESIZABLE) */
export function setWindowMaxSize(width: number, height: number): void {
	(raylib.symbols.SetWindowMaxSize as Function)(width, height);
}
/** @alias setWindowMaxSize */
export const SetWindowMaxSize = setWindowMaxSize;

/** Set window dimensions */
export function setWindowSize(width: number, height: number): void {
	(raylib.symbols.SetWindowSize as Function)(width, height);
}
/** @alias setWindowSize */
export const SetWindowSize = setWindowSize;

/** Set window opacity [0.0f..1.0f] */
export function setWindowOpacity(opacity: number): void {
	(raylib.symbols.SetWindowOpacity as Function)(opacity);
}
/** @alias setWindowOpacity */
export const SetWindowOpacity = setWindowOpacity;

/** Set window focused */
export function setWindowFocused(): void {
	(raylib.symbols.SetWindowFocused as Function)();
}
/** @alias setWindowFocused */
export const SetWindowFocused = setWindowFocused;

/** Get native window handle */
export function getWindowHandle(): number {
	return (raylib.symbols.GetWindowHandle as Function)() as number;
}
/** @alias getWindowHandle */
export const GetWindowHandle = getWindowHandle;

/** Get current screen width */
export function getScreenWidth(): number {
	return (raylib.symbols.GetScreenWidth as Function)() as number;
}
/** @alias getScreenWidth */
export const GetScreenWidth = getScreenWidth;

/** Get current screen height */
export function getScreenHeight(): number {
	return (raylib.symbols.GetScreenHeight as Function)() as number;
}
/** @alias getScreenHeight */
export const GetScreenHeight = getScreenHeight;

/** Get current render width (it considers HiDPI) */
export function getRenderWidth(): number {
	return (raylib.symbols.GetRenderWidth as Function)() as number;
}
/** @alias getRenderWidth */
export const GetRenderWidth = getRenderWidth;

/** Get current render height (it considers HiDPI) */
export function getRenderHeight(): number {
	return (raylib.symbols.GetRenderHeight as Function)() as number;
}
/** @alias getRenderHeight */
export const GetRenderHeight = getRenderHeight;

/** Get number of connected monitors */
export function getMonitorCount(): number {
	return (raylib.symbols.GetMonitorCount as Function)() as number;
}
/** @alias getMonitorCount */
export const GetMonitorCount = getMonitorCount;

/** Get current monitor where window is placed */
export function getCurrentMonitor(): number {
	return (raylib.symbols.GetCurrentMonitor as Function)() as number;
}
/** @alias getCurrentMonitor */
export const GetCurrentMonitor = getCurrentMonitor;

/** Get specified monitor position */
export function getMonitorPosition(monitor: number): Structs.Vector2 {
	const result = (raylib.symbols.GetMonitorPosition as Function)(monitor);
	return Structs.Vector2.fromU64(result as bigint);
}
/** @alias getMonitorPosition */
export const GetMonitorPosition = getMonitorPosition;

/** Get specified monitor width (current video mode used by monitor) */
export function getMonitorWidth(monitor: number): number {
	return (raylib.symbols.GetMonitorWidth as Function)(monitor) as number;
}
/** @alias getMonitorWidth */
export const GetMonitorWidth = getMonitorWidth;

/** Get specified monitor height (current video mode used by monitor) */
export function getMonitorHeight(monitor: number): number {
	return (raylib.symbols.GetMonitorHeight as Function)(monitor) as number;
}
/** @alias getMonitorHeight */
export const GetMonitorHeight = getMonitorHeight;

/** Get specified monitor physical width in millimetres */
export function getMonitorPhysicalWidth(monitor: number): number {
	return (raylib.symbols.GetMonitorPhysicalWidth as Function)(monitor) as number;
}
/** @alias getMonitorPhysicalWidth */
export const GetMonitorPhysicalWidth = getMonitorPhysicalWidth;

/** Get specified monitor physical height in millimetres */
export function getMonitorPhysicalHeight(monitor: number): number {
	return (raylib.symbols.GetMonitorPhysicalHeight as Function)(monitor) as number;
}
/** @alias getMonitorPhysicalHeight */
export const GetMonitorPhysicalHeight = getMonitorPhysicalHeight;

/** Get specified monitor refresh rate */
export function getMonitorRefreshRate(monitor: number): number {
	return (raylib.symbols.GetMonitorRefreshRate as Function)(monitor) as number;
}
/** @alias getMonitorRefreshRate */
export const GetMonitorRefreshRate = getMonitorRefreshRate;

/** Get window position XY on monitor */
export function getWindowPosition(): Structs.Vector2 {
	const result = (raylib.symbols.GetWindowPosition as Function)();
	return Structs.Vector2.fromU64(result as bigint);
}
/** @alias getWindowPosition */
export const GetWindowPosition = getWindowPosition;

/** Get window scale DPI factor */
export function getWindowScaleDPI(): Structs.Vector2 {
	const result = (raylib.symbols.GetWindowScaleDPI as Function)();
	return Structs.Vector2.fromU64(result as bigint);
}
/** @alias getWindowScaleDPI */
export const GetWindowScaleDPI = getWindowScaleDPI;

/** Get the human-readable, UTF-8 encoded name of the specified monitor */
export function getMonitorName(monitor: number): string {
	const result = (raylib.symbols.GetMonitorName as Function)(monitor);
	return result ? String(result) : "";
}
/** @alias getMonitorName */
export const GetMonitorName = getMonitorName;

/** Set clipboard text content */
export function setClipboardText(text: string): void {
	(raylib.symbols.SetClipboardText as Function)(ptr(toCString(text)));
}
/** @alias setClipboardText */
export const SetClipboardText = setClipboardText;

/** Get clipboard text content */
export function getClipboardText(): string {
	const result = (raylib.symbols.GetClipboardText as Function)();
	return result ? String(result) : "";
}
/** @alias getClipboardText */
export const GetClipboardText = getClipboardText;

/** Get clipboard image content */
export function getClipboardImage(): Structs.Image {
	const result = (raylib.symbols.GetClipboardImage as Function)();
	return Structs.Image.fromPointer(result as Pointer);
}
/** @alias getClipboardImage */
export const GetClipboardImage = getClipboardImage;

/** Enable waiting for events on EndDrawing(), no automatic event polling */
export function enableEventWaiting(): void {
	(raylib.symbols.EnableEventWaiting as Function)();
}
/** @alias enableEventWaiting */
export const EnableEventWaiting = enableEventWaiting;

/** Disable waiting for events on EndDrawing(), automatic events polling */
export function disableEventWaiting(): void {
	(raylib.symbols.DisableEventWaiting as Function)();
}
/** @alias disableEventWaiting */
export const DisableEventWaiting = disableEventWaiting;

/** Shows cursor */
export function showCursor(): void {
	(raylib.symbols.ShowCursor as Function)();
}
/** @alias showCursor */
export const ShowCursor = showCursor;

/** Hides cursor */
export function hideCursor(): void {
	(raylib.symbols.HideCursor as Function)();
}
/** @alias hideCursor */
export const HideCursor = hideCursor;

/** Check if cursor is not visible */
export function isCursorHidden(): boolean {
	return (raylib.symbols.IsCursorHidden as Function)() as boolean;
}
/** @alias isCursorHidden */
export const IsCursorHidden = isCursorHidden;

/** Enables cursor (unlock cursor) */
export function enableCursor(): void {
	(raylib.symbols.EnableCursor as Function)();
}
/** @alias enableCursor */
export const EnableCursor = enableCursor;

/** Disables cursor (lock cursor) */
export function disableCursor(): void {
	(raylib.symbols.DisableCursor as Function)();
}
/** @alias disableCursor */
export const DisableCursor = disableCursor;

/** Check if cursor is on the screen */
export function isCursorOnScreen(): boolean {
	return (raylib.symbols.IsCursorOnScreen as Function)() as boolean;
}
/** @alias isCursorOnScreen */
export const IsCursorOnScreen = isCursorOnScreen;

/** Set background color (framebuffer clear color) */
export function clearBackground(color: Structs.Color): void {
	(raylib.symbols.ClearBackground as Function)(color.toU32());
}
/** @alias clearBackground */
export const ClearBackground = clearBackground;

/** Setup canvas (framebuffer) to start drawing */
export function beginDrawing(): void {
	(raylib.symbols.BeginDrawing as Function)();
}
/** @alias beginDrawing */
export const BeginDrawing = beginDrawing;

/** End canvas drawing and swap buffers (double buffering) */
export function endDrawing(): void {
	(raylib.symbols.EndDrawing as Function)();
}
/** @alias endDrawing */
export const EndDrawing = endDrawing;

/** Begin 2D mode with custom camera (2D) */
export function beginMode2D(camera: Structs.Camera2D): void {
	(raylib.symbols.BeginMode2D as Function)(ptr(camera.rawBuffer));
}
/** @alias beginMode2D */
export const BeginMode2D = beginMode2D;

/** Ends 2D mode with custom camera */
export function endMode2D(): void {
	(raylib.symbols.EndMode2D as Function)();
}
/** @alias endMode2D */
export const EndMode2D = endMode2D;

/** Begin 3D mode with custom camera (3D) */
export function beginMode3D(camera: Structs.Camera3D): void {
	(raylib.symbols.BeginMode3D as Function)(ptr(camera.rawBuffer));
}
/** @alias beginMode3D */
export const BeginMode3D = beginMode3D;

/** Ends 3D mode and returns to default 2D orthographic mode */
export function endMode3D(): void {
	(raylib.symbols.EndMode3D as Function)();
}
/** @alias endMode3D */
export const EndMode3D = endMode3D;

/** Begin drawing to render texture */
export function beginTextureMode(target: Structs.RenderTexture): void {
	(raylib.symbols.BeginTextureMode as Function)(ptr(target.rawBuffer));
}
/** @alias beginTextureMode */
export const BeginTextureMode = beginTextureMode;

/** Ends drawing to render texture */
export function endTextureMode(): void {
	(raylib.symbols.EndTextureMode as Function)();
}
/** @alias endTextureMode */
export const EndTextureMode = endTextureMode;

/** Begin custom shader drawing */
export function beginShaderMode(shader: Structs.Shader): void {
	(raylib.symbols.BeginShaderMode as Function)(ptr(shader.rawBuffer));
}
/** @alias beginShaderMode */
export const BeginShaderMode = beginShaderMode;

/** End custom shader drawing (use default shader) */
export function endShaderMode(): void {
	(raylib.symbols.EndShaderMode as Function)();
}
/** @alias endShaderMode */
export const EndShaderMode = endShaderMode;

/** Begin blending mode (alpha, additive, multiplied, subtract, custom) */
export function beginBlendMode(mode: number): void {
	(raylib.symbols.BeginBlendMode as Function)(mode);
}
/** @alias beginBlendMode */
export const BeginBlendMode = beginBlendMode;

/** End blending mode (reset to default: alpha blending) */
export function endBlendMode(): void {
	(raylib.symbols.EndBlendMode as Function)();
}
/** @alias endBlendMode */
export const EndBlendMode = endBlendMode;

/** Begin scissor mode (define screen area for following drawing) */
export function beginScissorMode(x: number, y: number, width: number, height: number): void {
	(raylib.symbols.BeginScissorMode as Function)(x, y, width, height);
}
/** @alias beginScissorMode */
export const BeginScissorMode = beginScissorMode;

/** End scissor mode */
export function endScissorMode(): void {
	(raylib.symbols.EndScissorMode as Function)();
}
/** @alias endScissorMode */
export const EndScissorMode = endScissorMode;

/** Begin stereo rendering (requires VR simulator) */
export function beginVrStereoMode(config: Structs.VrStereoConfig): void {
	(raylib.symbols.BeginVrStereoMode as Function)(ptr(config.rawBuffer));
}
/** @alias beginVrStereoMode */
export const BeginVrStereoMode = beginVrStereoMode;

/** End stereo rendering (requires VR simulator) */
export function endVrStereoMode(): void {
	(raylib.symbols.EndVrStereoMode as Function)();
}
/** @alias endVrStereoMode */
export const EndVrStereoMode = endVrStereoMode;

/** Load VR stereo config for VR simulator device parameters */
export function loadVrStereoConfig(device: Structs.VrDeviceInfo): Structs.VrStereoConfig {
	const result = (raylib.symbols.LoadVrStereoConfig as Function)(ptr(device.rawBuffer));
	return Structs.VrStereoConfig.fromPointer(result as Pointer);
}
/** @alias loadVrStereoConfig */
export const LoadVrStereoConfig = loadVrStereoConfig;

/** Unload VR stereo config */
export function unloadVrStereoConfig(config: Structs.VrStereoConfig): void {
	(raylib.symbols.UnloadVrStereoConfig as Function)(ptr(config.rawBuffer));
}
/** @alias unloadVrStereoConfig */
export const UnloadVrStereoConfig = unloadVrStereoConfig;

/** Load shader from files and bind default locations */
export function loadShader(vsFileName: string, fsFileName: string): Structs.Shader {
	const result = (raylib.symbols.LoadShader as Function)(ptr(toCString(vsFileName)), ptr(toCString(fsFileName)));
	return Structs.Shader.fromPointer(result as Pointer);
}
/** @alias loadShader */
export const LoadShader = loadShader;

/** Load shader from code strings and bind default locations */
export function loadShaderFromMemory(vsCode: string, fsCode: string): Structs.Shader {
	const result = (raylib.symbols.LoadShaderFromMemory as Function)(ptr(toCString(vsCode)), ptr(toCString(fsCode)));
	return Structs.Shader.fromPointer(result as Pointer);
}
/** @alias loadShaderFromMemory */
export const LoadShaderFromMemory = loadShaderFromMemory;

/** Check if a shader is valid (loaded on GPU) */
export function isShaderValid(shader: Structs.Shader): boolean {
	return (raylib.symbols.IsShaderValid as Function)(ptr(shader.rawBuffer)) as boolean;
}
/** @alias isShaderValid */
export const IsShaderValid = isShaderValid;

/** Get shader uniform location */
export function getShaderLocation(shader: Structs.Shader, uniformName: string): number {
	return (raylib.symbols.GetShaderLocation as Function)(ptr(shader.rawBuffer), ptr(toCString(uniformName))) as number;
}
/** @alias getShaderLocation */
export const GetShaderLocation = getShaderLocation;

/** Get shader attribute location */
export function getShaderLocationAttrib(shader: Structs.Shader, attribName: string): number {
	return (raylib.symbols.GetShaderLocationAttrib as Function)(ptr(shader.rawBuffer), ptr(toCString(attribName))) as number;
}
/** @alias getShaderLocationAttrib */
export const GetShaderLocationAttrib = getShaderLocationAttrib;

/** Set shader uniform value */
export function setShaderValue(shader: Structs.Shader, locIndex: number, value: number, uniformType: number): void {
	(raylib.symbols.SetShaderValue as Function)(ptr(shader.rawBuffer), locIndex, value, uniformType);
}
/** @alias setShaderValue */
export const SetShaderValue = setShaderValue;

/** Set shader uniform value vector */
export function setShaderValueV(shader: Structs.Shader, locIndex: number, value: number, uniformType: number, count: number): void {
	(raylib.symbols.SetShaderValueV as Function)(ptr(shader.rawBuffer), locIndex, value, uniformType, count);
}
/** @alias setShaderValueV */
export const SetShaderValueV = setShaderValueV;

/** Set shader uniform value (matrix 4x4) */
export function setShaderValueMatrix(shader: Structs.Shader, locIndex: number, mat: Structs.Matrix): void {
	(raylib.symbols.SetShaderValueMatrix as Function)(ptr(shader.rawBuffer), locIndex, ptr(mat.rawBuffer));
}
/** @alias setShaderValueMatrix */
export const SetShaderValueMatrix = setShaderValueMatrix;

/** Set shader uniform value for texture (sampler2d) */
export function setShaderValueTexture(shader: Structs.Shader, locIndex: number, texture: Structs.Texture): void {
	(raylib.symbols.SetShaderValueTexture as Function)(ptr(shader.rawBuffer), locIndex, ptr(texture.rawBuffer));
}
/** @alias setShaderValueTexture */
export const SetShaderValueTexture = setShaderValueTexture;

/** Unload shader from GPU memory (VRAM) */
export function unloadShader(shader: Structs.Shader): void {
	(raylib.symbols.UnloadShader as Function)(ptr(shader.rawBuffer));
}
/** @alias unloadShader */
export const UnloadShader = unloadShader;

/** Get a ray trace from screen position (i.e mouse) */
export function getScreenToWorldRay(position: Structs.Vector2, camera: Structs.Camera3D): Structs.Ray {
	const result = (raylib.symbols.GetScreenToWorldRay as Function)(position.toU64(), ptr(camera.rawBuffer));
	return Structs.Ray.fromPointer(result as Pointer);
}
/** @alias getScreenToWorldRay */
export const GetScreenToWorldRay = getScreenToWorldRay;

/** Get a ray trace from screen position (i.e mouse) in a viewport */
export function getScreenToWorldRayEx(position: Structs.Vector2, camera: Structs.Camera3D, width: number, height: number): Structs.Ray {
	const result = (raylib.symbols.GetScreenToWorldRayEx as Function)(position.toU64(), ptr(camera.rawBuffer), width, height);
	return Structs.Ray.fromPointer(result as Pointer);
}
/** @alias getScreenToWorldRayEx */
export const GetScreenToWorldRayEx = getScreenToWorldRayEx;

/** Get the screen space position for a 3d world space position */
export function getWorldToScreen(position: Structs.Vector3, camera: Structs.Camera3D): Structs.Vector2 {
	const result = (raylib.symbols.GetWorldToScreen as Function)(ptr(position.rawBuffer), ptr(camera.rawBuffer));
	return Structs.Vector2.fromU64(result as bigint);
}
/** @alias getWorldToScreen */
export const GetWorldToScreen = getWorldToScreen;

/** Get size position for a 3d world space position */
export function getWorldToScreenEx(position: Structs.Vector3, camera: Structs.Camera3D, width: number, height: number): Structs.Vector2 {
	const result = (raylib.symbols.GetWorldToScreenEx as Function)(ptr(position.rawBuffer), ptr(camera.rawBuffer), width, height);
	return Structs.Vector2.fromU64(result as bigint);
}
/** @alias getWorldToScreenEx */
export const GetWorldToScreenEx = getWorldToScreenEx;

/** Get the screen space position for a 2d camera world space position */
export function getWorldToScreen2D(position: Structs.Vector2, camera: Structs.Camera2D): Structs.Vector2 {
	const result = (raylib.symbols.GetWorldToScreen2D as Function)(position.toU64(), ptr(camera.rawBuffer));
	return Structs.Vector2.fromU64(result as bigint);
}
/** @alias getWorldToScreen2D */
export const GetWorldToScreen2D = getWorldToScreen2D;

/** Get the world space position for a 2d camera screen space position */
export function getScreenToWorld2D(position: Structs.Vector2, camera: Structs.Camera2D): Structs.Vector2 {
	const result = (raylib.symbols.GetScreenToWorld2D as Function)(position.toU64(), ptr(camera.rawBuffer));
	return Structs.Vector2.fromU64(result as bigint);
}
/** @alias getScreenToWorld2D */
export const GetScreenToWorld2D = getScreenToWorld2D;

/** Get camera transform matrix (view matrix) */
export function getCameraMatrix(camera: Structs.Camera3D): Structs.Matrix {
	const result = (raylib.symbols.GetCameraMatrix as Function)(ptr(camera.rawBuffer));
	return Structs.Matrix.fromPointer(result as Pointer);
}
/** @alias getCameraMatrix */
export const GetCameraMatrix = getCameraMatrix;

/** Get camera 2d transform matrix */
export function getCameraMatrix2D(camera: Structs.Camera2D): Structs.Matrix {
	const result = (raylib.symbols.GetCameraMatrix2D as Function)(ptr(camera.rawBuffer));
	return Structs.Matrix.fromPointer(result as Pointer);
}
/** @alias getCameraMatrix2D */
export const GetCameraMatrix2D = getCameraMatrix2D;

/** Set target FPS (maximum) */
export function setTargetFPS(fps: number): void {
	(raylib.symbols.SetTargetFPS as Function)(fps);
}
/** @alias setTargetFPS */
export const SetTargetFPS = setTargetFPS;

/** Get time in seconds for last frame drawn (delta time) */
export function getFrameTime(): number {
	return (raylib.symbols.GetFrameTime as Function)() as number;
}
/** @alias getFrameTime */
export const GetFrameTime = getFrameTime;

/** Get elapsed time in seconds since InitWindow() */
export function getTime(): number {
	return (raylib.symbols.GetTime as Function)() as number;
}
/** @alias getTime */
export const GetTime = getTime;

/** Get current FPS */
export function getFPS(): number {
	return (raylib.symbols.GetFPS as Function)() as number;
}
/** @alias getFPS */
export const GetFPS = getFPS;

/** Swap back buffer with front buffer (screen drawing) */
export function swapScreenBuffer(): void {
	(raylib.symbols.SwapScreenBuffer as Function)();
}
/** @alias swapScreenBuffer */
export const SwapScreenBuffer = swapScreenBuffer;

/** Register all input events */
export function pollInputEvents(): void {
	(raylib.symbols.PollInputEvents as Function)();
}
/** @alias pollInputEvents */
export const PollInputEvents = pollInputEvents;

/** Wait for some time (halt program execution) */
export function waitTime(seconds: number): void {
	(raylib.symbols.WaitTime as Function)(seconds);
}
/** @alias waitTime */
export const WaitTime = waitTime;

/** Set the seed for the random number generator */
export function setRandomSeed(seed: number): void {
	(raylib.symbols.SetRandomSeed as Function)(seed);
}
/** @alias setRandomSeed */
export const SetRandomSeed = setRandomSeed;

/** Get a random value between min and max (both included) */
export function getRandomValue(min: number, max: number): number {
	return (raylib.symbols.GetRandomValue as Function)(min, max) as number;
}
/** @alias getRandomValue */
export const GetRandomValue = getRandomValue;

/** Load random values sequence, no values repeated */
export function loadRandomSequence(count: number, min: number, max: number): number {
	return (raylib.symbols.LoadRandomSequence as Function)(count, min, max) as number;
}
/** @alias loadRandomSequence */
export const LoadRandomSequence = loadRandomSequence;

/** Unload random values sequence */
export function unloadRandomSequence(sequence: number): void {
	(raylib.symbols.UnloadRandomSequence as Function)(sequence);
}
/** @alias unloadRandomSequence */
export const UnloadRandomSequence = unloadRandomSequence;

/** Takes a screenshot of current screen (filename extension defines format) */
export function takeScreenshot(fileName: string): void {
	(raylib.symbols.TakeScreenshot as Function)(ptr(toCString(fileName)));
}
/** @alias takeScreenshot */
export const TakeScreenshot = takeScreenshot;

/** Setup init configuration flags (view FLAGS) */
export function setConfigFlags(flags: number): void {
	(raylib.symbols.SetConfigFlags as Function)(flags);
}
/** @alias setConfigFlags */
export const SetConfigFlags = setConfigFlags;

/** Open URL with default system browser (if available) */
export function openURL(url: string): void {
	(raylib.symbols.OpenURL as Function)(ptr(toCString(url)));
}
/** @alias openURL */
export const OpenURL = openURL;

/** Set the current threshold (minimum) log level */
export function setTraceLogLevel(logLevel: number): void {
	(raylib.symbols.SetTraceLogLevel as Function)(logLevel);
}
/** @alias setTraceLogLevel */
export const SetTraceLogLevel = setTraceLogLevel;

/** Internal memory allocator */
export function memAlloc(size: number): number {
	return (raylib.symbols.MemAlloc as Function)(size) as number;
}
/** @alias memAlloc */
export const MemAlloc = memAlloc;

/** Internal memory reallocator */
export function memRealloc(ptr: number, size: number): number {
	return (raylib.symbols.MemRealloc as Function)(ptr, size) as number;
}
/** @alias memRealloc */
export const MemRealloc = memRealloc;

/** Internal memory free */
export function memFree(ptr: number): void {
	(raylib.symbols.MemFree as Function)(ptr);
}
/** @alias memFree */
export const MemFree = memFree;

/** Load file data as byte array (read) */
export function loadFileData(fileName: string, dataSize: number): number {
	return (raylib.symbols.LoadFileData as Function)(ptr(toCString(fileName)), dataSize) as number;
}
/** @alias loadFileData */
export const LoadFileData = loadFileData;

/** Unload file data allocated by LoadFileData() */
export function unloadFileData(data: number): void {
	(raylib.symbols.UnloadFileData as Function)(data);
}
/** @alias unloadFileData */
export const UnloadFileData = unloadFileData;

/** Save data to file from byte array (write), returns true on success */
export function saveFileData(fileName: string, data: number, dataSize: number): boolean {
	return (raylib.symbols.SaveFileData as Function)(ptr(toCString(fileName)), data, dataSize) as boolean;
}
/** @alias saveFileData */
export const SaveFileData = saveFileData;

/** Export data to code (.h), returns true on success */
export function exportDataAsCode(data: number, dataSize: number, fileName: string): boolean {
	return (raylib.symbols.ExportDataAsCode as Function)(data, dataSize, ptr(toCString(fileName))) as boolean;
}
/** @alias exportDataAsCode */
export const ExportDataAsCode = exportDataAsCode;

/** Load text data from file (read), returns a '\0' terminated string */
export function loadFileText(fileName: string): number {
	return (raylib.symbols.LoadFileText as Function)(ptr(toCString(fileName))) as number;
}
/** @alias loadFileText */
export const LoadFileText = loadFileText;

/** Unload file text data allocated by LoadFileText() */
export function unloadFileText(text: string): void {
	(raylib.symbols.UnloadFileText as Function)(ptr(toCString(text)));
}
/** @alias unloadFileText */
export const UnloadFileText = unloadFileText;

/** Save text data to file (write), string must be '\0' terminated, returns true on success */
export function saveFileText(fileName: string, text: string): boolean {
	return (raylib.symbols.SaveFileText as Function)(ptr(toCString(fileName)), ptr(toCString(text))) as boolean;
}
/** @alias saveFileText */
export const SaveFileText = saveFileText;

/** Check if file exists */
export function fileExists(fileName: string): boolean {
	return (raylib.symbols.FileExists as Function)(ptr(toCString(fileName))) as boolean;
}
/** @alias fileExists */
export const FileExists = fileExists;

/** Check if a directory path exists */
export function directoryExists(dirPath: string): boolean {
	return (raylib.symbols.DirectoryExists as Function)(ptr(toCString(dirPath))) as boolean;
}
/** @alias directoryExists */
export const DirectoryExists = directoryExists;

/** Check file extension (including point: .png, .wav) */
export function isFileExtension(fileName: string, ext: string): boolean {
	return (raylib.symbols.IsFileExtension as Function)(ptr(toCString(fileName)), ptr(toCString(ext))) as boolean;
}
/** @alias isFileExtension */
export const IsFileExtension = isFileExtension;

/** Get file length in bytes (NOTE: GetFileSize() conflicts with windows.h) */
export function getFileLength(fileName: string): number {
	return (raylib.symbols.GetFileLength as Function)(ptr(toCString(fileName))) as number;
}
/** @alias getFileLength */
export const GetFileLength = getFileLength;

/** Get pointer to extension for a filename string (includes dot: '.png') */
export function getFileExtension(fileName: string): string {
	const result = (raylib.symbols.GetFileExtension as Function)(ptr(toCString(fileName)));
	return result ? String(result) : "";
}
/** @alias getFileExtension */
export const GetFileExtension = getFileExtension;

/** Get pointer to filename for a path string */
export function getFileName(filePath: string): string {
	const result = (raylib.symbols.GetFileName as Function)(ptr(toCString(filePath)));
	return result ? String(result) : "";
}
/** @alias getFileName */
export const GetFileName = getFileName;

/** Get filename string without extension (uses static string) */
export function getFileNameWithoutExt(filePath: string): string {
	const result = (raylib.symbols.GetFileNameWithoutExt as Function)(ptr(toCString(filePath)));
	return result ? String(result) : "";
}
/** @alias getFileNameWithoutExt */
export const GetFileNameWithoutExt = getFileNameWithoutExt;

/** Get full path for a given fileName with path (uses static string) */
export function getDirectoryPath(filePath: string): string {
	const result = (raylib.symbols.GetDirectoryPath as Function)(ptr(toCString(filePath)));
	return result ? String(result) : "";
}
/** @alias getDirectoryPath */
export const GetDirectoryPath = getDirectoryPath;

/** Get previous directory path for a given path (uses static string) */
export function getPrevDirectoryPath(dirPath: string): string {
	const result = (raylib.symbols.GetPrevDirectoryPath as Function)(ptr(toCString(dirPath)));
	return result ? String(result) : "";
}
/** @alias getPrevDirectoryPath */
export const GetPrevDirectoryPath = getPrevDirectoryPath;

/** Get current working directory (uses static string) */
export function getWorkingDirectory(): string {
	const result = (raylib.symbols.GetWorkingDirectory as Function)();
	return result ? String(result) : "";
}
/** @alias getWorkingDirectory */
export const GetWorkingDirectory = getWorkingDirectory;

/** Get the directory of the running application (uses static string) */
export function getApplicationDirectory(): string {
	const result = (raylib.symbols.GetApplicationDirectory as Function)();
	return result ? String(result) : "";
}
/** @alias getApplicationDirectory */
export const GetApplicationDirectory = getApplicationDirectory;

/** Create directories (including full path requested), returns 0 on success */
export function makeDirectory(dirPath: string): number {
	return (raylib.symbols.MakeDirectory as Function)(ptr(toCString(dirPath))) as number;
}
/** @alias makeDirectory */
export const MakeDirectory = makeDirectory;

/** Change working directory, return true on success */
export function changeDirectory(dir: string): boolean {
	return (raylib.symbols.ChangeDirectory as Function)(ptr(toCString(dir))) as boolean;
}
/** @alias changeDirectory */
export const ChangeDirectory = changeDirectory;

/** Check if a given path is a file or a directory */
export function isPathFile(path: string): boolean {
	return (raylib.symbols.IsPathFile as Function)(ptr(toCString(path))) as boolean;
}
/** @alias isPathFile */
export const IsPathFile = isPathFile;

/** Check if fileName is valid for the platform/OS */
export function isFileNameValid(fileName: string): boolean {
	return (raylib.symbols.IsFileNameValid as Function)(ptr(toCString(fileName))) as boolean;
}
/** @alias isFileNameValid */
export const IsFileNameValid = isFileNameValid;

/** Load directory filepaths */
export function loadDirectoryFiles(dirPath: string): Structs.FilePathList {
	const result = (raylib.symbols.LoadDirectoryFiles as Function)(ptr(toCString(dirPath)));
	return Structs.FilePathList.fromPointer(result as Pointer);
}
/** @alias loadDirectoryFiles */
export const LoadDirectoryFiles = loadDirectoryFiles;

/** Load directory filepaths with extension filtering and recursive directory scan. Use 'DIR' in the filter string to include directories in the result */
export function loadDirectoryFilesEx(basePath: string, filter: string, scanSubdirs: boolean): Structs.FilePathList {
	const result = (raylib.symbols.LoadDirectoryFilesEx as Function)(ptr(toCString(basePath)), ptr(toCString(filter)), scanSubdirs);
	return Structs.FilePathList.fromPointer(result as Pointer);
}
/** @alias loadDirectoryFilesEx */
export const LoadDirectoryFilesEx = loadDirectoryFilesEx;

/** Unload filepaths */
export function unloadDirectoryFiles(files: Structs.FilePathList): void {
	(raylib.symbols.UnloadDirectoryFiles as Function)(ptr(files.rawBuffer));
}
/** @alias unloadDirectoryFiles */
export const UnloadDirectoryFiles = unloadDirectoryFiles;

/** Check if a file has been dropped into window */
export function isFileDropped(): boolean {
	return (raylib.symbols.IsFileDropped as Function)() as boolean;
}
/** @alias isFileDropped */
export const IsFileDropped = isFileDropped;

/** Load dropped filepaths */
export function loadDroppedFiles(): Structs.FilePathList {
	const result = (raylib.symbols.LoadDroppedFiles as Function)();
	return Structs.FilePathList.fromPointer(result as Pointer);
}
/** @alias loadDroppedFiles */
export const LoadDroppedFiles = loadDroppedFiles;

/** Unload dropped filepaths */
export function unloadDroppedFiles(files: Structs.FilePathList): void {
	(raylib.symbols.UnloadDroppedFiles as Function)(ptr(files.rawBuffer));
}
/** @alias unloadDroppedFiles */
export const UnloadDroppedFiles = unloadDroppedFiles;

/** Get file modification time (last write time) */
export function getFileModTime(fileName: string): number {
	return (raylib.symbols.GetFileModTime as Function)(ptr(toCString(fileName))) as number;
}
/** @alias getFileModTime */
export const GetFileModTime = getFileModTime;

/** Compress data (DEFLATE algorithm), memory must be MemFree() */
export function compressData(data: number, dataSize: number, compDataSize: number): number {
	return (raylib.symbols.CompressData as Function)(data, dataSize, compDataSize) as number;
}
/** @alias compressData */
export const CompressData = compressData;

/** Decompress data (DEFLATE algorithm), memory must be MemFree() */
export function decompressData(compData: number, compDataSize: number, dataSize: number): number {
	return (raylib.symbols.DecompressData as Function)(compData, compDataSize, dataSize) as number;
}
/** @alias decompressData */
export const DecompressData = decompressData;

/** Encode data to Base64 string, memory must be MemFree() */
export function encodeDataBase64(data: number, dataSize: number, outputSize: number): number {
	return (raylib.symbols.EncodeDataBase64 as Function)(data, dataSize, outputSize) as number;
}
/** @alias encodeDataBase64 */
export const EncodeDataBase64 = encodeDataBase64;

/** Decode Base64 string data, memory must be MemFree() */
export function decodeDataBase64(data: number, outputSize: number): number {
	return (raylib.symbols.DecodeDataBase64 as Function)(data, outputSize) as number;
}
/** @alias decodeDataBase64 */
export const DecodeDataBase64 = decodeDataBase64;

/** Compute CRC32 hash code */
export function computeCRC32(data: number, dataSize: number): number {
	return (raylib.symbols.ComputeCRC32 as Function)(data, dataSize) as number;
}
/** @alias computeCRC32 */
export const ComputeCRC32 = computeCRC32;

/** Compute MD5 hash code, returns static int[4] (16 bytes) */
export function computeMD5(data: number, dataSize: number): number {
	return (raylib.symbols.ComputeMD5 as Function)(data, dataSize) as number;
}
/** @alias computeMD5 */
export const ComputeMD5 = computeMD5;

/** Compute SHA1 hash code, returns static int[5] (20 bytes) */
export function computeSHA1(data: number, dataSize: number): number {
	return (raylib.symbols.ComputeSHA1 as Function)(data, dataSize) as number;
}
/** @alias computeSHA1 */
export const ComputeSHA1 = computeSHA1;

/** Load automation events list from file, NULL for empty list, capacity = MAX_AUTOMATION_EVENTS */
export function loadAutomationEventList(fileName: string): Structs.AutomationEventList {
	const result = (raylib.symbols.LoadAutomationEventList as Function)(ptr(toCString(fileName)));
	return Structs.AutomationEventList.fromPointer(result as Pointer);
}
/** @alias loadAutomationEventList */
export const LoadAutomationEventList = loadAutomationEventList;

/** Unload automation events list from file */
export function unloadAutomationEventList(list: Structs.AutomationEventList): void {
	(raylib.symbols.UnloadAutomationEventList as Function)(ptr(list.rawBuffer));
}
/** @alias unloadAutomationEventList */
export const UnloadAutomationEventList = unloadAutomationEventList;

/** Export automation events list as text file */
export function exportAutomationEventList(list: Structs.AutomationEventList, fileName: string): boolean {
	return (raylib.symbols.ExportAutomationEventList as Function)(ptr(list.rawBuffer), ptr(toCString(fileName))) as boolean;
}
/** @alias exportAutomationEventList */
export const ExportAutomationEventList = exportAutomationEventList;

/** Set automation event list to record to */
export function setAutomationEventList(list: number): void {
	(raylib.symbols.SetAutomationEventList as Function)(list);
}
/** @alias setAutomationEventList */
export const SetAutomationEventList = setAutomationEventList;

/** Set automation event internal base frame to start recording */
export function setAutomationEventBaseFrame(frame: number): void {
	(raylib.symbols.SetAutomationEventBaseFrame as Function)(frame);
}
/** @alias setAutomationEventBaseFrame */
export const SetAutomationEventBaseFrame = setAutomationEventBaseFrame;

/** Start recording automation events (AutomationEventList must be set) */
export function startAutomationEventRecording(): void {
	(raylib.symbols.StartAutomationEventRecording as Function)();
}
/** @alias startAutomationEventRecording */
export const StartAutomationEventRecording = startAutomationEventRecording;

/** Stop recording automation events */
export function stopAutomationEventRecording(): void {
	(raylib.symbols.StopAutomationEventRecording as Function)();
}
/** @alias stopAutomationEventRecording */
export const StopAutomationEventRecording = stopAutomationEventRecording;

/** Play a recorded automation event */
export function playAutomationEvent(event: Structs.AutomationEvent): void {
	(raylib.symbols.PlayAutomationEvent as Function)(ptr(event.rawBuffer));
}
/** @alias playAutomationEvent */
export const PlayAutomationEvent = playAutomationEvent;

/** Check if a key has been pressed once */
export function isKeyPressed(key: number): boolean {
	return (raylib.symbols.IsKeyPressed as Function)(key) as boolean;
}
/** @alias isKeyPressed */
export const IsKeyPressed = isKeyPressed;

/** Check if a key has been pressed again */
export function isKeyPressedRepeat(key: number): boolean {
	return (raylib.symbols.IsKeyPressedRepeat as Function)(key) as boolean;
}
/** @alias isKeyPressedRepeat */
export const IsKeyPressedRepeat = isKeyPressedRepeat;

/** Check if a key is being pressed */
export function isKeyDown(key: number): boolean {
	return (raylib.symbols.IsKeyDown as Function)(key) as boolean;
}
/** @alias isKeyDown */
export const IsKeyDown = isKeyDown;

/** Check if a key has been released once */
export function isKeyReleased(key: number): boolean {
	return (raylib.symbols.IsKeyReleased as Function)(key) as boolean;
}
/** @alias isKeyReleased */
export const IsKeyReleased = isKeyReleased;

/** Check if a key is NOT being pressed */
export function isKeyUp(key: number): boolean {
	return (raylib.symbols.IsKeyUp as Function)(key) as boolean;
}
/** @alias isKeyUp */
export const IsKeyUp = isKeyUp;

/** Get key pressed (keycode), call it multiple times for keys queued, returns 0 when the queue is empty */
export function getKeyPressed(): number {
	return (raylib.symbols.GetKeyPressed as Function)() as number;
}
/** @alias getKeyPressed */
export const GetKeyPressed = getKeyPressed;

/** Get char pressed (unicode), call it multiple times for chars queued, returns 0 when the queue is empty */
export function getCharPressed(): number {
	return (raylib.symbols.GetCharPressed as Function)() as number;
}
/** @alias getCharPressed */
export const GetCharPressed = getCharPressed;

/** Set a custom key to exit program (default is ESC) */
export function setExitKey(key: number): void {
	(raylib.symbols.SetExitKey as Function)(key);
}
/** @alias setExitKey */
export const SetExitKey = setExitKey;

/** Check if a gamepad is available */
export function isGamepadAvailable(gamepad: number): boolean {
	return (raylib.symbols.IsGamepadAvailable as Function)(gamepad) as boolean;
}
/** @alias isGamepadAvailable */
export const IsGamepadAvailable = isGamepadAvailable;

/** Get gamepad internal name id */
export function getGamepadName(gamepad: number): string {
	const result = (raylib.symbols.GetGamepadName as Function)(gamepad);
	return result ? String(result) : "";
}
/** @alias getGamepadName */
export const GetGamepadName = getGamepadName;

/** Check if a gamepad button has been pressed once */
export function isGamepadButtonPressed(gamepad: number, button: number): boolean {
	return (raylib.symbols.IsGamepadButtonPressed as Function)(gamepad, button) as boolean;
}
/** @alias isGamepadButtonPressed */
export const IsGamepadButtonPressed = isGamepadButtonPressed;

/** Check if a gamepad button is being pressed */
export function isGamepadButtonDown(gamepad: number, button: number): boolean {
	return (raylib.symbols.IsGamepadButtonDown as Function)(gamepad, button) as boolean;
}
/** @alias isGamepadButtonDown */
export const IsGamepadButtonDown = isGamepadButtonDown;

/** Check if a gamepad button has been released once */
export function isGamepadButtonReleased(gamepad: number, button: number): boolean {
	return (raylib.symbols.IsGamepadButtonReleased as Function)(gamepad, button) as boolean;
}
/** @alias isGamepadButtonReleased */
export const IsGamepadButtonReleased = isGamepadButtonReleased;

/** Check if a gamepad button is NOT being pressed */
export function isGamepadButtonUp(gamepad: number, button: number): boolean {
	return (raylib.symbols.IsGamepadButtonUp as Function)(gamepad, button) as boolean;
}
/** @alias isGamepadButtonUp */
export const IsGamepadButtonUp = isGamepadButtonUp;

/** Get the last gamepad button pressed */
export function getGamepadButtonPressed(): number {
	return (raylib.symbols.GetGamepadButtonPressed as Function)() as number;
}
/** @alias getGamepadButtonPressed */
export const GetGamepadButtonPressed = getGamepadButtonPressed;

/** Get gamepad axis count for a gamepad */
export function getGamepadAxisCount(gamepad: number): number {
	return (raylib.symbols.GetGamepadAxisCount as Function)(gamepad) as number;
}
/** @alias getGamepadAxisCount */
export const GetGamepadAxisCount = getGamepadAxisCount;

/** Get axis movement value for a gamepad axis */
export function getGamepadAxisMovement(gamepad: number, axis: number): number {
	return (raylib.symbols.GetGamepadAxisMovement as Function)(gamepad, axis) as number;
}
/** @alias getGamepadAxisMovement */
export const GetGamepadAxisMovement = getGamepadAxisMovement;

/** Set internal gamepad mappings (SDL_GameControllerDB) */
export function setGamepadMappings(mappings: string): number {
	return (raylib.symbols.SetGamepadMappings as Function)(ptr(toCString(mappings))) as number;
}
/** @alias setGamepadMappings */
export const SetGamepadMappings = setGamepadMappings;

/** Set gamepad vibration for both motors (duration in seconds) */
export function setGamepadVibration(gamepad: number, leftMotor: number, rightMotor: number, duration: number): void {
	(raylib.symbols.SetGamepadVibration as Function)(gamepad, leftMotor, rightMotor, duration);
}
/** @alias setGamepadVibration */
export const SetGamepadVibration = setGamepadVibration;

/** Check if a mouse button has been pressed once */
export function isMouseButtonPressed(button: number): boolean {
	return (raylib.symbols.IsMouseButtonPressed as Function)(button) as boolean;
}
/** @alias isMouseButtonPressed */
export const IsMouseButtonPressed = isMouseButtonPressed;

/** Check if a mouse button is being pressed */
export function isMouseButtonDown(button: number): boolean {
	return (raylib.symbols.IsMouseButtonDown as Function)(button) as boolean;
}
/** @alias isMouseButtonDown */
export const IsMouseButtonDown = isMouseButtonDown;

/** Check if a mouse button has been released once */
export function isMouseButtonReleased(button: number): boolean {
	return (raylib.symbols.IsMouseButtonReleased as Function)(button) as boolean;
}
/** @alias isMouseButtonReleased */
export const IsMouseButtonReleased = isMouseButtonReleased;

/** Check if a mouse button is NOT being pressed */
export function isMouseButtonUp(button: number): boolean {
	return (raylib.symbols.IsMouseButtonUp as Function)(button) as boolean;
}
/** @alias isMouseButtonUp */
export const IsMouseButtonUp = isMouseButtonUp;

/** Get mouse position X */
export function getMouseX(): number {
	return (raylib.symbols.GetMouseX as Function)() as number;
}
/** @alias getMouseX */
export const GetMouseX = getMouseX;

/** Get mouse position Y */
export function getMouseY(): number {
	return (raylib.symbols.GetMouseY as Function)() as number;
}
/** @alias getMouseY */
export const GetMouseY = getMouseY;

/** Get mouse position XY */
export function getMousePosition(): Structs.Vector2 {
	const result = (raylib.symbols.GetMousePosition as Function)();
	return Structs.Vector2.fromU64(result as bigint);
}
/** @alias getMousePosition */
export const GetMousePosition = getMousePosition;

/** Get mouse delta between frames */
export function getMouseDelta(): Structs.Vector2 {
	const result = (raylib.symbols.GetMouseDelta as Function)();
	return Structs.Vector2.fromU64(result as bigint);
}
/** @alias getMouseDelta */
export const GetMouseDelta = getMouseDelta;

/** Set mouse position XY */
export function setMousePosition(x: number, y: number): void {
	(raylib.symbols.SetMousePosition as Function)(x, y);
}
/** @alias setMousePosition */
export const SetMousePosition = setMousePosition;

/** Set mouse offset */
export function setMouseOffset(offsetX: number, offsetY: number): void {
	(raylib.symbols.SetMouseOffset as Function)(offsetX, offsetY);
}
/** @alias setMouseOffset */
export const SetMouseOffset = setMouseOffset;

/** Set mouse scaling */
export function setMouseScale(scaleX: number, scaleY: number): void {
	(raylib.symbols.SetMouseScale as Function)(scaleX, scaleY);
}
/** @alias setMouseScale */
export const SetMouseScale = setMouseScale;

/** Get mouse wheel movement for X or Y, whichever is larger */
export function getMouseWheelMove(): number {
	return (raylib.symbols.GetMouseWheelMove as Function)() as number;
}
/** @alias getMouseWheelMove */
export const GetMouseWheelMove = getMouseWheelMove;

/** Get mouse wheel movement for both X and Y */
export function getMouseWheelMoveV(): Structs.Vector2 {
	const result = (raylib.symbols.GetMouseWheelMoveV as Function)();
	return Structs.Vector2.fromU64(result as bigint);
}
/** @alias getMouseWheelMoveV */
export const GetMouseWheelMoveV = getMouseWheelMoveV;

/** Set mouse cursor */
export function setMouseCursor(cursor: number): void {
	(raylib.symbols.SetMouseCursor as Function)(cursor);
}
/** @alias setMouseCursor */
export const SetMouseCursor = setMouseCursor;

/** Get touch position X for touch point 0 (relative to screen size) */
export function getTouchX(): number {
	return (raylib.symbols.GetTouchX as Function)() as number;
}
/** @alias getTouchX */
export const GetTouchX = getTouchX;

/** Get touch position Y for touch point 0 (relative to screen size) */
export function getTouchY(): number {
	return (raylib.symbols.GetTouchY as Function)() as number;
}
/** @alias getTouchY */
export const GetTouchY = getTouchY;

/** Get touch position XY for a touch point index (relative to screen size) */
export function getTouchPosition(index: number): Structs.Vector2 {
	const result = (raylib.symbols.GetTouchPosition as Function)(index);
	return Structs.Vector2.fromU64(result as bigint);
}
/** @alias getTouchPosition */
export const GetTouchPosition = getTouchPosition;

/** Get touch point identifier for given index */
export function getTouchPointId(index: number): number {
	return (raylib.symbols.GetTouchPointId as Function)(index) as number;
}
/** @alias getTouchPointId */
export const GetTouchPointId = getTouchPointId;

/** Get number of touch points */
export function getTouchPointCount(): number {
	return (raylib.symbols.GetTouchPointCount as Function)() as number;
}
/** @alias getTouchPointCount */
export const GetTouchPointCount = getTouchPointCount;

/** Enable a set of gestures using flags */
export function setGesturesEnabled(flags: number): void {
	(raylib.symbols.SetGesturesEnabled as Function)(flags);
}
/** @alias setGesturesEnabled */
export const SetGesturesEnabled = setGesturesEnabled;

/** Check if a gesture have been detected */
export function isGestureDetected(gesture: number): boolean {
	return (raylib.symbols.IsGestureDetected as Function)(gesture) as boolean;
}
/** @alias isGestureDetected */
export const IsGestureDetected = isGestureDetected;

/** Get latest detected gesture */
export function getGestureDetected(): number {
	return (raylib.symbols.GetGestureDetected as Function)() as number;
}
/** @alias getGestureDetected */
export const GetGestureDetected = getGestureDetected;

/** Get gesture hold time in seconds */
export function getGestureHoldDuration(): number {
	return (raylib.symbols.GetGestureHoldDuration as Function)() as number;
}
/** @alias getGestureHoldDuration */
export const GetGestureHoldDuration = getGestureHoldDuration;

/** Get gesture drag vector */
export function getGestureDragVector(): Structs.Vector2 {
	const result = (raylib.symbols.GetGestureDragVector as Function)();
	return Structs.Vector2.fromU64(result as bigint);
}
/** @alias getGestureDragVector */
export const GetGestureDragVector = getGestureDragVector;

/** Get gesture drag angle */
export function getGestureDragAngle(): number {
	return (raylib.symbols.GetGestureDragAngle as Function)() as number;
}
/** @alias getGestureDragAngle */
export const GetGestureDragAngle = getGestureDragAngle;

/** Get gesture pinch delta */
export function getGesturePinchVector(): Structs.Vector2 {
	const result = (raylib.symbols.GetGesturePinchVector as Function)();
	return Structs.Vector2.fromU64(result as bigint);
}
/** @alias getGesturePinchVector */
export const GetGesturePinchVector = getGesturePinchVector;

/** Get gesture pinch angle */
export function getGesturePinchAngle(): number {
	return (raylib.symbols.GetGesturePinchAngle as Function)() as number;
}
/** @alias getGesturePinchAngle */
export const GetGesturePinchAngle = getGesturePinchAngle;

/** Update camera position for selected mode */
export function updateCamera(camera: number, mode: number): void {
	(raylib.symbols.UpdateCamera as Function)(camera, mode);
}
/** @alias updateCamera */
export const UpdateCamera = updateCamera;

/** Update camera movement/rotation */
export function updateCameraPro(camera: number, movement: Structs.Vector3, rotation: Structs.Vector3, zoom: number): void {
	(raylib.symbols.UpdateCameraPro as Function)(camera, ptr(movement.rawBuffer), ptr(rotation.rawBuffer), zoom);
}
/** @alias updateCameraPro */
export const UpdateCameraPro = updateCameraPro;

/** Set texture and rectangle to be used on shapes drawing */
export function setShapesTexture(texture: Structs.Texture, source: Structs.Rectangle): void {
	(raylib.symbols.SetShapesTexture as Function)(ptr(texture.rawBuffer), ptr(source.rawBuffer));
}
/** @alias setShapesTexture */
export const SetShapesTexture = setShapesTexture;

/** Get texture that is used for shapes drawing */
export function getShapesTexture(): Structs.Texture {
	const result = (raylib.symbols.GetShapesTexture as Function)();
	return Structs.Texture.fromPointer(result as Pointer);
}
/** @alias getShapesTexture */
export const GetShapesTexture = getShapesTexture;

/** Get texture source rectangle that is used for shapes drawing */
export function getShapesTextureRectangle(): Structs.Rectangle {
	const result = (raylib.symbols.GetShapesTextureRectangle as Function)();
	return Structs.Rectangle.fromPointer(result as Pointer);
}
/** @alias getShapesTextureRectangle */
export const GetShapesTextureRectangle = getShapesTextureRectangle;

/** Draw a pixel using geometry [Can be slow, use with care] */
export function drawPixel(posX: number, posY: number, color: Structs.Color): void {
	(raylib.symbols.DrawPixel as Function)(posX, posY, color.toU32());
}
/** @alias drawPixel */
export const DrawPixel = drawPixel;

/** Draw a pixel using geometry (Vector version) [Can be slow, use with care] */
export function drawPixelV(position: Structs.Vector2, color: Structs.Color): void {
	(raylib.symbols.DrawPixelV as Function)(position.toU64(), color.toU32());
}
/** @alias drawPixelV */
export const DrawPixelV = drawPixelV;

/** Draw a line */
export function drawLine(startPosX: number, startPosY: number, endPosX: number, endPosY: number, color: Structs.Color): void {
	(raylib.symbols.DrawLine as Function)(startPosX, startPosY, endPosX, endPosY, color.toU32());
}
/** @alias drawLine */
export const DrawLine = drawLine;

/** Draw a line (using gl lines) */
export function drawLineV(startPos: Structs.Vector2, endPos: Structs.Vector2, color: Structs.Color): void {
	(raylib.symbols.DrawLineV as Function)(startPos.toU64(), endPos.toU64(), color.toU32());
}
/** @alias drawLineV */
export const DrawLineV = drawLineV;

/** Draw a line (using triangles/quads) */
export function drawLineEx(startPos: Structs.Vector2, endPos: Structs.Vector2, thick: number, color: Structs.Color): void {
	(raylib.symbols.DrawLineEx as Function)(startPos.toU64(), endPos.toU64(), thick, color.toU32());
}
/** @alias drawLineEx */
export const DrawLineEx = drawLineEx;

/** Draw lines sequence (using gl lines) */
export function drawLineStrip(points: number, pointCount: number, color: Structs.Color): void {
	(raylib.symbols.DrawLineStrip as Function)(points, pointCount, color.toU32());
}
/** @alias drawLineStrip */
export const DrawLineStrip = drawLineStrip;

/** Draw line segment cubic-bezier in-out interpolation */
export function drawLineBezier(startPos: Structs.Vector2, endPos: Structs.Vector2, thick: number, color: Structs.Color): void {
	(raylib.symbols.DrawLineBezier as Function)(startPos.toU64(), endPos.toU64(), thick, color.toU32());
}
/** @alias drawLineBezier */
export const DrawLineBezier = drawLineBezier;

/** Draw a color-filled circle */
export function drawCircle(centerX: number, centerY: number, radius: number, color: Structs.Color): void {
	(raylib.symbols.DrawCircle as Function)(centerX, centerY, radius, color.toU32());
}
/** @alias drawCircle */
export const DrawCircle = drawCircle;

/** Draw a piece of a circle */
export function drawCircleSector(center: Structs.Vector2, radius: number, startAngle: number, endAngle: number, segments: number, color: Structs.Color): void {
	(raylib.symbols.DrawCircleSector as Function)(center.toU64(), radius, startAngle, endAngle, segments, color.toU32());
}
/** @alias drawCircleSector */
export const DrawCircleSector = drawCircleSector;

/** Draw circle sector outline */
export function drawCircleSectorLines(center: Structs.Vector2, radius: number, startAngle: number, endAngle: number, segments: number, color: Structs.Color): void {
	(raylib.symbols.DrawCircleSectorLines as Function)(center.toU64(), radius, startAngle, endAngle, segments, color.toU32());
}
/** @alias drawCircleSectorLines */
export const DrawCircleSectorLines = drawCircleSectorLines;

/** Draw a gradient-filled circle */
export function drawCircleGradient(centerX: number, centerY: number, radius: number, inner: Structs.Color, outer: Structs.Color): void {
	(raylib.symbols.DrawCircleGradient as Function)(centerX, centerY, radius, inner.toU32(), outer.toU32());
}
/** @alias drawCircleGradient */
export const DrawCircleGradient = drawCircleGradient;

/** Draw a color-filled circle (Vector version) */
export function drawCircleV(center: Structs.Vector2, radius: number, color: Structs.Color): void {
	(raylib.symbols.DrawCircleV as Function)(center.toU64(), radius, color.toU32());
}
/** @alias drawCircleV */
export const DrawCircleV = drawCircleV;

/** Draw circle outline */
export function drawCircleLines(centerX: number, centerY: number, radius: number, color: Structs.Color): void {
	(raylib.symbols.DrawCircleLines as Function)(centerX, centerY, radius, color.toU32());
}
/** @alias drawCircleLines */
export const DrawCircleLines = drawCircleLines;

/** Draw circle outline (Vector version) */
export function drawCircleLinesV(center: Structs.Vector2, radius: number, color: Structs.Color): void {
	(raylib.symbols.DrawCircleLinesV as Function)(center.toU64(), radius, color.toU32());
}
/** @alias drawCircleLinesV */
export const DrawCircleLinesV = drawCircleLinesV;

/** Draw ellipse */
export function drawEllipse(centerX: number, centerY: number, radiusH: number, radiusV: number, color: Structs.Color): void {
	(raylib.symbols.DrawEllipse as Function)(centerX, centerY, radiusH, radiusV, color.toU32());
}
/** @alias drawEllipse */
export const DrawEllipse = drawEllipse;

/** Draw ellipse outline */
export function drawEllipseLines(centerX: number, centerY: number, radiusH: number, radiusV: number, color: Structs.Color): void {
	(raylib.symbols.DrawEllipseLines as Function)(centerX, centerY, radiusH, radiusV, color.toU32());
}
/** @alias drawEllipseLines */
export const DrawEllipseLines = drawEllipseLines;

/** Draw ring */
export function drawRing(center: Structs.Vector2, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number, segments: number, color: Structs.Color): void {
	(raylib.symbols.DrawRing as Function)(center.toU64(), innerRadius, outerRadius, startAngle, endAngle, segments, color.toU32());
}
/** @alias drawRing */
export const DrawRing = drawRing;

/** Draw ring outline */
export function drawRingLines(center: Structs.Vector2, innerRadius: number, outerRadius: number, startAngle: number, endAngle: number, segments: number, color: Structs.Color): void {
	(raylib.symbols.DrawRingLines as Function)(center.toU64(), innerRadius, outerRadius, startAngle, endAngle, segments, color.toU32());
}
/** @alias drawRingLines */
export const DrawRingLines = drawRingLines;

/** Draw a color-filled rectangle */
export function drawRectangle(posX: number, posY: number, width: number, height: number, color: Structs.Color): void {
	(raylib.symbols.DrawRectangle as Function)(posX, posY, width, height, color.toU32());
}
/** @alias drawRectangle */
export const DrawRectangle = drawRectangle;

/** Draw a color-filled rectangle (Vector version) */
export function drawRectangleV(position: Structs.Vector2, size: Structs.Vector2, color: Structs.Color): void {
	(raylib.symbols.DrawRectangleV as Function)(position.toU64(), size.toU64(), color.toU32());
}
/** @alias drawRectangleV */
export const DrawRectangleV = drawRectangleV;

/** Draw a color-filled rectangle */
export function drawRectangleRec(rec: Structs.Rectangle, color: Structs.Color): void {
	(raylib.symbols.DrawRectangleRec as Function)(ptr(rec.rawBuffer), color.toU32());
}
/** @alias drawRectangleRec */
export const DrawRectangleRec = drawRectangleRec;

/** Draw a color-filled rectangle with pro parameters */
export function drawRectanglePro(rec: Structs.Rectangle, origin: Structs.Vector2, rotation: number, color: Structs.Color): void {
	(raylib.symbols.DrawRectanglePro as Function)(ptr(rec.rawBuffer), origin.toU64(), rotation, color.toU32());
}
/** @alias drawRectanglePro */
export const DrawRectanglePro = drawRectanglePro;

/** Draw a vertical-gradient-filled rectangle */
export function drawRectangleGradientV(posX: number, posY: number, width: number, height: number, top: Structs.Color, bottom: Structs.Color): void {
	(raylib.symbols.DrawRectangleGradientV as Function)(posX, posY, width, height, top.toU32(), bottom.toU32());
}
/** @alias drawRectangleGradientV */
export const DrawRectangleGradientV = drawRectangleGradientV;

/** Draw a horizontal-gradient-filled rectangle */
export function drawRectangleGradientH(posX: number, posY: number, width: number, height: number, left: Structs.Color, right: Structs.Color): void {
	(raylib.symbols.DrawRectangleGradientH as Function)(posX, posY, width, height, left.toU32(), right.toU32());
}
/** @alias drawRectangleGradientH */
export const DrawRectangleGradientH = drawRectangleGradientH;

/** Draw a gradient-filled rectangle with custom vertex colors */
export function drawRectangleGradientEx(rec: Structs.Rectangle, topLeft: Structs.Color, bottomLeft: Structs.Color, topRight: Structs.Color, bottomRight: Structs.Color): void {
	(raylib.symbols.DrawRectangleGradientEx as Function)(ptr(rec.rawBuffer), topLeft.toU32(), bottomLeft.toU32(), topRight.toU32(), bottomRight.toU32());
}
/** @alias drawRectangleGradientEx */
export const DrawRectangleGradientEx = drawRectangleGradientEx;

/** Draw rectangle outline */
export function drawRectangleLines(posX: number, posY: number, width: number, height: number, color: Structs.Color): void {
	(raylib.symbols.DrawRectangleLines as Function)(posX, posY, width, height, color.toU32());
}
/** @alias drawRectangleLines */
export const DrawRectangleLines = drawRectangleLines;

/** Draw rectangle outline with extended parameters */
export function drawRectangleLinesEx(rec: Structs.Rectangle, lineThick: number, color: Structs.Color): void {
	(raylib.symbols.DrawRectangleLinesEx as Function)(ptr(rec.rawBuffer), lineThick, color.toU32());
}
/** @alias drawRectangleLinesEx */
export const DrawRectangleLinesEx = drawRectangleLinesEx;

/** Draw rectangle with rounded edges */
export function drawRectangleRounded(rec: Structs.Rectangle, roundness: number, segments: number, color: Structs.Color): void {
	(raylib.symbols.DrawRectangleRounded as Function)(ptr(rec.rawBuffer), roundness, segments, color.toU32());
}
/** @alias drawRectangleRounded */
export const DrawRectangleRounded = drawRectangleRounded;

/** Draw rectangle lines with rounded edges */
export function drawRectangleRoundedLines(rec: Structs.Rectangle, roundness: number, segments: number, color: Structs.Color): void {
	(raylib.symbols.DrawRectangleRoundedLines as Function)(ptr(rec.rawBuffer), roundness, segments, color.toU32());
}
/** @alias drawRectangleRoundedLines */
export const DrawRectangleRoundedLines = drawRectangleRoundedLines;

/** Draw rectangle with rounded edges outline */
export function drawRectangleRoundedLinesEx(rec: Structs.Rectangle, roundness: number, segments: number, lineThick: number, color: Structs.Color): void {
	(raylib.symbols.DrawRectangleRoundedLinesEx as Function)(ptr(rec.rawBuffer), roundness, segments, lineThick, color.toU32());
}
/** @alias drawRectangleRoundedLinesEx */
export const DrawRectangleRoundedLinesEx = drawRectangleRoundedLinesEx;

/** Draw a color-filled triangle (vertex in counter-clockwise order!) */
export function drawTriangle(v1: Structs.Vector2, v2: Structs.Vector2, v3: Structs.Vector2, color: Structs.Color): void {
	(raylib.symbols.DrawTriangle as Function)(v1.toU64(), v2.toU64(), v3.toU64(), color.toU32());
}
/** @alias drawTriangle */
export const DrawTriangle = drawTriangle;

/** Draw triangle outline (vertex in counter-clockwise order!) */
export function drawTriangleLines(v1: Structs.Vector2, v2: Structs.Vector2, v3: Structs.Vector2, color: Structs.Color): void {
	(raylib.symbols.DrawTriangleLines as Function)(v1.toU64(), v2.toU64(), v3.toU64(), color.toU32());
}
/** @alias drawTriangleLines */
export const DrawTriangleLines = drawTriangleLines;

/** Draw a triangle fan defined by points (first vertex is the center) */
export function drawTriangleFan(points: number, pointCount: number, color: Structs.Color): void {
	(raylib.symbols.DrawTriangleFan as Function)(points, pointCount, color.toU32());
}
/** @alias drawTriangleFan */
export const DrawTriangleFan = drawTriangleFan;

/** Draw a triangle strip defined by points */
export function drawTriangleStrip(points: number, pointCount: number, color: Structs.Color): void {
	(raylib.symbols.DrawTriangleStrip as Function)(points, pointCount, color.toU32());
}
/** @alias drawTriangleStrip */
export const DrawTriangleStrip = drawTriangleStrip;

/** Draw a regular polygon (Vector version) */
export function drawPoly(center: Structs.Vector2, sides: number, radius: number, rotation: number, color: Structs.Color): void {
	(raylib.symbols.DrawPoly as Function)(center.toU64(), sides, radius, rotation, color.toU32());
}
/** @alias drawPoly */
export const DrawPoly = drawPoly;

/** Draw a polygon outline of n sides */
export function drawPolyLines(center: Structs.Vector2, sides: number, radius: number, rotation: number, color: Structs.Color): void {
	(raylib.symbols.DrawPolyLines as Function)(center.toU64(), sides, radius, rotation, color.toU32());
}
/** @alias drawPolyLines */
export const DrawPolyLines = drawPolyLines;

/** Draw a polygon outline of n sides with extended parameters */
export function drawPolyLinesEx(center: Structs.Vector2, sides: number, radius: number, rotation: number, lineThick: number, color: Structs.Color): void {
	(raylib.symbols.DrawPolyLinesEx as Function)(center.toU64(), sides, radius, rotation, lineThick, color.toU32());
}
/** @alias drawPolyLinesEx */
export const DrawPolyLinesEx = drawPolyLinesEx;

/** Draw spline: Linear, minimum 2 points */
export function drawSplineLinear(points: number, pointCount: number, thick: number, color: Structs.Color): void {
	(raylib.symbols.DrawSplineLinear as Function)(points, pointCount, thick, color.toU32());
}
/** @alias drawSplineLinear */
export const DrawSplineLinear = drawSplineLinear;

/** Draw spline: B-Spline, minimum 4 points */
export function drawSplineBasis(points: number, pointCount: number, thick: number, color: Structs.Color): void {
	(raylib.symbols.DrawSplineBasis as Function)(points, pointCount, thick, color.toU32());
}
/** @alias drawSplineBasis */
export const DrawSplineBasis = drawSplineBasis;

/** Draw spline: Catmull-Rom, minimum 4 points */
export function drawSplineCatmullRom(points: number, pointCount: number, thick: number, color: Structs.Color): void {
	(raylib.symbols.DrawSplineCatmullRom as Function)(points, pointCount, thick, color.toU32());
}
/** @alias drawSplineCatmullRom */
export const DrawSplineCatmullRom = drawSplineCatmullRom;

/** Draw spline: Quadratic Bezier, minimum 3 points (1 control point): [p1, c2, p3, c4...] */
export function drawSplineBezierQuadratic(points: number, pointCount: number, thick: number, color: Structs.Color): void {
	(raylib.symbols.DrawSplineBezierQuadratic as Function)(points, pointCount, thick, color.toU32());
}
/** @alias drawSplineBezierQuadratic */
export const DrawSplineBezierQuadratic = drawSplineBezierQuadratic;

/** Draw spline: Cubic Bezier, minimum 4 points (2 control points): [p1, c2, c3, p4, c5, c6...] */
export function drawSplineBezierCubic(points: number, pointCount: number, thick: number, color: Structs.Color): void {
	(raylib.symbols.DrawSplineBezierCubic as Function)(points, pointCount, thick, color.toU32());
}
/** @alias drawSplineBezierCubic */
export const DrawSplineBezierCubic = drawSplineBezierCubic;

/** Draw spline segment: Linear, 2 points */
export function drawSplineSegmentLinear(p1: Structs.Vector2, p2: Structs.Vector2, thick: number, color: Structs.Color): void {
	(raylib.symbols.DrawSplineSegmentLinear as Function)(p1.toU64(), p2.toU64(), thick, color.toU32());
}
/** @alias drawSplineSegmentLinear */
export const DrawSplineSegmentLinear = drawSplineSegmentLinear;

/** Draw spline segment: B-Spline, 4 points */
export function drawSplineSegmentBasis(p1: Structs.Vector2, p2: Structs.Vector2, p3: Structs.Vector2, p4: Structs.Vector2, thick: number, color: Structs.Color): void {
	(raylib.symbols.DrawSplineSegmentBasis as Function)(p1.toU64(), p2.toU64(), p3.toU64(), p4.toU64(), thick, color.toU32());
}
/** @alias drawSplineSegmentBasis */
export const DrawSplineSegmentBasis = drawSplineSegmentBasis;

/** Draw spline segment: Catmull-Rom, 4 points */
export function drawSplineSegmentCatmullRom(p1: Structs.Vector2, p2: Structs.Vector2, p3: Structs.Vector2, p4: Structs.Vector2, thick: number, color: Structs.Color): void {
	(raylib.symbols.DrawSplineSegmentCatmullRom as Function)(p1.toU64(), p2.toU64(), p3.toU64(), p4.toU64(), thick, color.toU32());
}
/** @alias drawSplineSegmentCatmullRom */
export const DrawSplineSegmentCatmullRom = drawSplineSegmentCatmullRom;

/** Draw spline segment: Quadratic Bezier, 2 points, 1 control point */
export function drawSplineSegmentBezierQuadratic(p1: Structs.Vector2, c2: Structs.Vector2, p3: Structs.Vector2, thick: number, color: Structs.Color): void {
	(raylib.symbols.DrawSplineSegmentBezierQuadratic as Function)(p1.toU64(), c2.toU64(), p3.toU64(), thick, color.toU32());
}
/** @alias drawSplineSegmentBezierQuadratic */
export const DrawSplineSegmentBezierQuadratic = drawSplineSegmentBezierQuadratic;

/** Draw spline segment: Cubic Bezier, 2 points, 2 control points */
export function drawSplineSegmentBezierCubic(p1: Structs.Vector2, c2: Structs.Vector2, c3: Structs.Vector2, p4: Structs.Vector2, thick: number, color: Structs.Color): void {
	(raylib.symbols.DrawSplineSegmentBezierCubic as Function)(p1.toU64(), c2.toU64(), c3.toU64(), p4.toU64(), thick, color.toU32());
}
/** @alias drawSplineSegmentBezierCubic */
export const DrawSplineSegmentBezierCubic = drawSplineSegmentBezierCubic;

/** Get (evaluate) spline point: Linear */
export function getSplinePointLinear(startPos: Structs.Vector2, endPos: Structs.Vector2, t: number): Structs.Vector2 {
	const result = (raylib.symbols.GetSplinePointLinear as Function)(startPos.toU64(), endPos.toU64(), t);
	return Structs.Vector2.fromU64(result as bigint);
}
/** @alias getSplinePointLinear */
export const GetSplinePointLinear = getSplinePointLinear;

/** Get (evaluate) spline point: B-Spline */
export function getSplinePointBasis(p1: Structs.Vector2, p2: Structs.Vector2, p3: Structs.Vector2, p4: Structs.Vector2, t: number): Structs.Vector2 {
	const result = (raylib.symbols.GetSplinePointBasis as Function)(p1.toU64(), p2.toU64(), p3.toU64(), p4.toU64(), t);
	return Structs.Vector2.fromU64(result as bigint);
}
/** @alias getSplinePointBasis */
export const GetSplinePointBasis = getSplinePointBasis;

/** Get (evaluate) spline point: Catmull-Rom */
export function getSplinePointCatmullRom(p1: Structs.Vector2, p2: Structs.Vector2, p3: Structs.Vector2, p4: Structs.Vector2, t: number): Structs.Vector2 {
	const result = (raylib.symbols.GetSplinePointCatmullRom as Function)(p1.toU64(), p2.toU64(), p3.toU64(), p4.toU64(), t);
	return Structs.Vector2.fromU64(result as bigint);
}
/** @alias getSplinePointCatmullRom */
export const GetSplinePointCatmullRom = getSplinePointCatmullRom;

/** Get (evaluate) spline point: Quadratic Bezier */
export function getSplinePointBezierQuad(p1: Structs.Vector2, c2: Structs.Vector2, p3: Structs.Vector2, t: number): Structs.Vector2 {
	const result = (raylib.symbols.GetSplinePointBezierQuad as Function)(p1.toU64(), c2.toU64(), p3.toU64(), t);
	return Structs.Vector2.fromU64(result as bigint);
}
/** @alias getSplinePointBezierQuad */
export const GetSplinePointBezierQuad = getSplinePointBezierQuad;

/** Get (evaluate) spline point: Cubic Bezier */
export function getSplinePointBezierCubic(p1: Structs.Vector2, c2: Structs.Vector2, c3: Structs.Vector2, p4: Structs.Vector2, t: number): Structs.Vector2 {
	const result = (raylib.symbols.GetSplinePointBezierCubic as Function)(p1.toU64(), c2.toU64(), c3.toU64(), p4.toU64(), t);
	return Structs.Vector2.fromU64(result as bigint);
}
/** @alias getSplinePointBezierCubic */
export const GetSplinePointBezierCubic = getSplinePointBezierCubic;

/** Check collision between two rectangles */
export function checkCollisionRecs(rec1: Structs.Rectangle, rec2: Structs.Rectangle): boolean {
	return (raylib.symbols.CheckCollisionRecs as Function)(ptr(rec1.rawBuffer), ptr(rec2.rawBuffer)) as boolean;
}
/** @alias checkCollisionRecs */
export const CheckCollisionRecs = checkCollisionRecs;

/** Check collision between two circles */
export function checkCollisionCircles(center1: Structs.Vector2, radius1: number, center2: Structs.Vector2, radius2: number): boolean {
	return (raylib.symbols.CheckCollisionCircles as Function)(center1.toU64(), radius1, center2.toU64(), radius2) as boolean;
}
/** @alias checkCollisionCircles */
export const CheckCollisionCircles = checkCollisionCircles;

/** Check collision between circle and rectangle */
export function checkCollisionCircleRec(center: Structs.Vector2, radius: number, rec: Structs.Rectangle): boolean {
	return (raylib.symbols.CheckCollisionCircleRec as Function)(center.toU64(), radius, ptr(rec.rawBuffer)) as boolean;
}
/** @alias checkCollisionCircleRec */
export const CheckCollisionCircleRec = checkCollisionCircleRec;

/** Check if circle collides with a line created betweeen two points [p1] and [p2] */
export function checkCollisionCircleLine(center: Structs.Vector2, radius: number, p1: Structs.Vector2, p2: Structs.Vector2): boolean {
	return (raylib.symbols.CheckCollisionCircleLine as Function)(center.toU64(), radius, p1.toU64(), p2.toU64()) as boolean;
}
/** @alias checkCollisionCircleLine */
export const CheckCollisionCircleLine = checkCollisionCircleLine;

/** Check if point is inside rectangle */
export function checkCollisionPointRec(point: Structs.Vector2, rec: Structs.Rectangle): boolean {
	return (raylib.symbols.CheckCollisionPointRec as Function)(point.toU64(), ptr(rec.rawBuffer)) as boolean;
}
/** @alias checkCollisionPointRec */
export const CheckCollisionPointRec = checkCollisionPointRec;

/** Check if point is inside circle */
export function checkCollisionPointCircle(point: Structs.Vector2, center: Structs.Vector2, radius: number): boolean {
	return (raylib.symbols.CheckCollisionPointCircle as Function)(point.toU64(), center.toU64(), radius) as boolean;
}
/** @alias checkCollisionPointCircle */
export const CheckCollisionPointCircle = checkCollisionPointCircle;

/** Check if point is inside a triangle */
export function checkCollisionPointTriangle(point: Structs.Vector2, p1: Structs.Vector2, p2: Structs.Vector2, p3: Structs.Vector2): boolean {
	return (raylib.symbols.CheckCollisionPointTriangle as Function)(point.toU64(), p1.toU64(), p2.toU64(), p3.toU64()) as boolean;
}
/** @alias checkCollisionPointTriangle */
export const CheckCollisionPointTriangle = checkCollisionPointTriangle;

/** Check if point belongs to line created between two points [p1] and [p2] with defined margin in pixels [threshold] */
export function checkCollisionPointLine(point: Structs.Vector2, p1: Structs.Vector2, p2: Structs.Vector2, threshold: number): boolean {
	return (raylib.symbols.CheckCollisionPointLine as Function)(point.toU64(), p1.toU64(), p2.toU64(), threshold) as boolean;
}
/** @alias checkCollisionPointLine */
export const CheckCollisionPointLine = checkCollisionPointLine;

/** Check if point is within a polygon described by array of vertices */
export function checkCollisionPointPoly(point: Structs.Vector2, points: number, pointCount: number): boolean {
	return (raylib.symbols.CheckCollisionPointPoly as Function)(point.toU64(), points, pointCount) as boolean;
}
/** @alias checkCollisionPointPoly */
export const CheckCollisionPointPoly = checkCollisionPointPoly;

/** Check the collision between two lines defined by two points each, returns collision point by reference */
export function checkCollisionLines(startPos1: Structs.Vector2, endPos1: Structs.Vector2, startPos2: Structs.Vector2, endPos2: Structs.Vector2, collisionPoint: number): boolean {
	return (raylib.symbols.CheckCollisionLines as Function)(startPos1.toU64(), endPos1.toU64(), startPos2.toU64(), endPos2.toU64(), collisionPoint) as boolean;
}
/** @alias checkCollisionLines */
export const CheckCollisionLines = checkCollisionLines;

/** Get collision rectangle for two rectangles collision */
export function getCollisionRec(rec1: Structs.Rectangle, rec2: Structs.Rectangle): Structs.Rectangle {
	const result = (raylib.symbols.GetCollisionRec as Function)(ptr(rec1.rawBuffer), ptr(rec2.rawBuffer));
	return Structs.Rectangle.fromPointer(result as Pointer);
}
/** @alias getCollisionRec */
export const GetCollisionRec = getCollisionRec;

/** Load image from file into CPU memory (RAM) */
export function loadImage(fileName: string): Structs.Image {
	const result = (raylib.symbols.LoadImage as Function)(ptr(toCString(fileName)));
	return Structs.Image.fromPointer(result as Pointer);
}
/** @alias loadImage */
export const LoadImage = loadImage;

/** Load image from RAW file data */
export function loadImageRaw(fileName: string, width: number, height: number, format: number, headerSize: number): Structs.Image {
	const result = (raylib.symbols.LoadImageRaw as Function)(ptr(toCString(fileName)), width, height, format, headerSize);
	return Structs.Image.fromPointer(result as Pointer);
}
/** @alias loadImageRaw */
export const LoadImageRaw = loadImageRaw;

/** Load image sequence from file (frames appended to image.data) */
export function loadImageAnim(fileName: string, frames: number): Structs.Image {
	const result = (raylib.symbols.LoadImageAnim as Function)(ptr(toCString(fileName)), frames);
	return Structs.Image.fromPointer(result as Pointer);
}
/** @alias loadImageAnim */
export const LoadImageAnim = loadImageAnim;

/** Load image sequence from memory buffer */
export function loadImageAnimFromMemory(fileType: string, fileData: number, dataSize: number, frames: number): Structs.Image {
	const result = (raylib.symbols.LoadImageAnimFromMemory as Function)(ptr(toCString(fileType)), fileData, dataSize, frames);
	return Structs.Image.fromPointer(result as Pointer);
}
/** @alias loadImageAnimFromMemory */
export const LoadImageAnimFromMemory = loadImageAnimFromMemory;

/** Load image from memory buffer, fileType refers to extension: i.e. '.png' */
export function loadImageFromMemory(fileType: string, fileData: number, dataSize: number): Structs.Image {
	const result = (raylib.symbols.LoadImageFromMemory as Function)(ptr(toCString(fileType)), fileData, dataSize);
	return Structs.Image.fromPointer(result as Pointer);
}
/** @alias loadImageFromMemory */
export const LoadImageFromMemory = loadImageFromMemory;

/** Load image from GPU texture data */
export function loadImageFromTexture(texture: Structs.Texture): Structs.Image {
	const result = (raylib.symbols.LoadImageFromTexture as Function)(ptr(texture.rawBuffer));
	return Structs.Image.fromPointer(result as Pointer);
}
/** @alias loadImageFromTexture */
export const LoadImageFromTexture = loadImageFromTexture;

/** Load image from screen buffer and (screenshot) */
export function loadImageFromScreen(): Structs.Image {
	const result = (raylib.symbols.LoadImageFromScreen as Function)();
	return Structs.Image.fromPointer(result as Pointer);
}
/** @alias loadImageFromScreen */
export const LoadImageFromScreen = loadImageFromScreen;

/** Check if an image is valid (data and parameters) */
export function isImageValid(image: Structs.Image): boolean {
	return (raylib.symbols.IsImageValid as Function)(ptr(image.rawBuffer)) as boolean;
}
/** @alias isImageValid */
export const IsImageValid = isImageValid;

/** Unload image from CPU memory (RAM) */
export function unloadImage(image: Structs.Image): void {
	(raylib.symbols.UnloadImage as Function)(ptr(image.rawBuffer));
}
/** @alias unloadImage */
export const UnloadImage = unloadImage;

/** Export image data to file, returns true on success */
export function exportImage(image: Structs.Image, fileName: string): boolean {
	return (raylib.symbols.ExportImage as Function)(ptr(image.rawBuffer), ptr(toCString(fileName))) as boolean;
}
/** @alias exportImage */
export const ExportImage = exportImage;

/** Export image to memory buffer */
export function exportImageToMemory(image: Structs.Image, fileType: string, fileSize: number): number {
	return (raylib.symbols.ExportImageToMemory as Function)(ptr(image.rawBuffer), ptr(toCString(fileType)), fileSize) as number;
}
/** @alias exportImageToMemory */
export const ExportImageToMemory = exportImageToMemory;

/** Export image as code file defining an array of bytes, returns true on success */
export function exportImageAsCode(image: Structs.Image, fileName: string): boolean {
	return (raylib.symbols.ExportImageAsCode as Function)(ptr(image.rawBuffer), ptr(toCString(fileName))) as boolean;
}
/** @alias exportImageAsCode */
export const ExportImageAsCode = exportImageAsCode;

/** Generate image: plain color */
export function genImageColor(width: number, height: number, color: Structs.Color): Structs.Image {
	const result = (raylib.symbols.GenImageColor as Function)(width, height, color.toU32());
	return Structs.Image.fromPointer(result as Pointer);
}
/** @alias genImageColor */
export const GenImageColor = genImageColor;

/** Generate image: linear gradient, direction in degrees [0..360], 0=Vertical gradient */
export function genImageGradientLinear(width: number, height: number, direction: number, start: Structs.Color, end: Structs.Color): Structs.Image {
	const result = (raylib.symbols.GenImageGradientLinear as Function)(width, height, direction, start.toU32(), end.toU32());
	return Structs.Image.fromPointer(result as Pointer);
}
/** @alias genImageGradientLinear */
export const GenImageGradientLinear = genImageGradientLinear;

/** Generate image: radial gradient */
export function genImageGradientRadial(width: number, height: number, density: number, inner: Structs.Color, outer: Structs.Color): Structs.Image {
	const result = (raylib.symbols.GenImageGradientRadial as Function)(width, height, density, inner.toU32(), outer.toU32());
	return Structs.Image.fromPointer(result as Pointer);
}
/** @alias genImageGradientRadial */
export const GenImageGradientRadial = genImageGradientRadial;

/** Generate image: square gradient */
export function genImageGradientSquare(width: number, height: number, density: number, inner: Structs.Color, outer: Structs.Color): Structs.Image {
	const result = (raylib.symbols.GenImageGradientSquare as Function)(width, height, density, inner.toU32(), outer.toU32());
	return Structs.Image.fromPointer(result as Pointer);
}
/** @alias genImageGradientSquare */
export const GenImageGradientSquare = genImageGradientSquare;

/** Generate image: checked */
export function genImageChecked(width: number, height: number, checksX: number, checksY: number, col1: Structs.Color, col2: Structs.Color): Structs.Image {
	const result = (raylib.symbols.GenImageChecked as Function)(width, height, checksX, checksY, col1.toU32(), col2.toU32());
	return Structs.Image.fromPointer(result as Pointer);
}
/** @alias genImageChecked */
export const GenImageChecked = genImageChecked;

/** Generate image: white noise */
export function genImageWhiteNoise(width: number, height: number, factor: number): Structs.Image {
	const result = (raylib.symbols.GenImageWhiteNoise as Function)(width, height, factor);
	return Structs.Image.fromPointer(result as Pointer);
}
/** @alias genImageWhiteNoise */
export const GenImageWhiteNoise = genImageWhiteNoise;

/** Generate image: perlin noise */
export function genImagePerlinNoise(width: number, height: number, offsetX: number, offsetY: number, scale: number): Structs.Image {
	const result = (raylib.symbols.GenImagePerlinNoise as Function)(width, height, offsetX, offsetY, scale);
	return Structs.Image.fromPointer(result as Pointer);
}
/** @alias genImagePerlinNoise */
export const GenImagePerlinNoise = genImagePerlinNoise;

/** Generate image: cellular algorithm, bigger tileSize means bigger cells */
export function genImageCellular(width: number, height: number, tileSize: number): Structs.Image {
	const result = (raylib.symbols.GenImageCellular as Function)(width, height, tileSize);
	return Structs.Image.fromPointer(result as Pointer);
}
/** @alias genImageCellular */
export const GenImageCellular = genImageCellular;

/** Generate image: grayscale image from text data */
export function genImageText(width: number, height: number, text: string): Structs.Image {
	const result = (raylib.symbols.GenImageText as Function)(width, height, ptr(toCString(text)));
	return Structs.Image.fromPointer(result as Pointer);
}
/** @alias genImageText */
export const GenImageText = genImageText;

/** Create an image duplicate (useful for transformations) */
export function imageCopy(image: Structs.Image): Structs.Image {
	const result = (raylib.symbols.ImageCopy as Function)(ptr(image.rawBuffer));
	return Structs.Image.fromPointer(result as Pointer);
}
/** @alias imageCopy */
export const ImageCopy = imageCopy;

/** Create an image from another image piece */
export function imageFromImage(image: Structs.Image, rec: Structs.Rectangle): Structs.Image {
	const result = (raylib.symbols.ImageFromImage as Function)(ptr(image.rawBuffer), ptr(rec.rawBuffer));
	return Structs.Image.fromPointer(result as Pointer);
}
/** @alias imageFromImage */
export const ImageFromImage = imageFromImage;

/** Create an image from a selected channel of another image (GRAYSCALE) */
export function imageFromChannel(image: Structs.Image, selectedChannel: number): Structs.Image {
	const result = (raylib.symbols.ImageFromChannel as Function)(ptr(image.rawBuffer), selectedChannel);
	return Structs.Image.fromPointer(result as Pointer);
}
/** @alias imageFromChannel */
export const ImageFromChannel = imageFromChannel;

/** Create an image from text (default font) */
export function imageText(text: string, fontSize: number, color: Structs.Color): Structs.Image {
	const result = (raylib.symbols.ImageText as Function)(ptr(toCString(text)), fontSize, color.toU32());
	return Structs.Image.fromPointer(result as Pointer);
}
/** @alias imageText */
export const ImageText = imageText;

/** Create an image from text (custom sprite font) */
export function imageTextEx(font: Structs.Font, text: string, fontSize: number, spacing: number, tint: Structs.Color): Structs.Image {
	const result = (raylib.symbols.ImageTextEx as Function)(ptr(font.rawBuffer), ptr(toCString(text)), fontSize, spacing, tint.toU32());
	return Structs.Image.fromPointer(result as Pointer);
}
/** @alias imageTextEx */
export const ImageTextEx = imageTextEx;

/** Convert image data to desired format */
export function imageFormat(image: number, newFormat: number): void {
	(raylib.symbols.ImageFormat as Function)(image, newFormat);
}
/** @alias imageFormat */
export const ImageFormat = imageFormat;

/** Convert image to POT (power-of-two) */
export function imageToPOT(image: number, fill: Structs.Color): void {
	(raylib.symbols.ImageToPOT as Function)(image, fill.toU32());
}
/** @alias imageToPOT */
export const ImageToPOT = imageToPOT;

/** Crop an image to a defined rectangle */
export function imageCrop(image: number, crop: Structs.Rectangle): void {
	(raylib.symbols.ImageCrop as Function)(image, ptr(crop.rawBuffer));
}
/** @alias imageCrop */
export const ImageCrop = imageCrop;

/** Crop image depending on alpha value */
export function imageAlphaCrop(image: number, threshold: number): void {
	(raylib.symbols.ImageAlphaCrop as Function)(image, threshold);
}
/** @alias imageAlphaCrop */
export const ImageAlphaCrop = imageAlphaCrop;

/** Clear alpha channel to desired color */
export function imageAlphaClear(image: number, color: Structs.Color, threshold: number): void {
	(raylib.symbols.ImageAlphaClear as Function)(image, color.toU32(), threshold);
}
/** @alias imageAlphaClear */
export const ImageAlphaClear = imageAlphaClear;

/** Apply alpha mask to image */
export function imageAlphaMask(image: number, alphaMask: Structs.Image): void {
	(raylib.symbols.ImageAlphaMask as Function)(image, ptr(alphaMask.rawBuffer));
}
/** @alias imageAlphaMask */
export const ImageAlphaMask = imageAlphaMask;

/** Premultiply alpha channel */
export function imageAlphaPremultiply(image: number): void {
	(raylib.symbols.ImageAlphaPremultiply as Function)(image);
}
/** @alias imageAlphaPremultiply */
export const ImageAlphaPremultiply = imageAlphaPremultiply;

/** Apply Gaussian blur using a box blur approximation */
export function imageBlurGaussian(image: number, blurSize: number): void {
	(raylib.symbols.ImageBlurGaussian as Function)(image, blurSize);
}
/** @alias imageBlurGaussian */
export const ImageBlurGaussian = imageBlurGaussian;

/** Apply custom square convolution kernel to image */
export function imageKernelConvolution(image: number, kernel: number, kernelSize: number): void {
	(raylib.symbols.ImageKernelConvolution as Function)(image, kernel, kernelSize);
}
/** @alias imageKernelConvolution */
export const ImageKernelConvolution = imageKernelConvolution;

/** Resize image (Bicubic scaling algorithm) */
export function imageResize(image: number, newWidth: number, newHeight: number): void {
	(raylib.symbols.ImageResize as Function)(image, newWidth, newHeight);
}
/** @alias imageResize */
export const ImageResize = imageResize;

/** Resize image (Nearest-Neighbor scaling algorithm) */
export function imageResizeNN(image: number, newWidth: number, newHeight: number): void {
	(raylib.symbols.ImageResizeNN as Function)(image, newWidth, newHeight);
}
/** @alias imageResizeNN */
export const ImageResizeNN = imageResizeNN;

/** Resize canvas and fill with color */
export function imageResizeCanvas(image: number, newWidth: number, newHeight: number, offsetX: number, offsetY: number, fill: Structs.Color): void {
	(raylib.symbols.ImageResizeCanvas as Function)(image, newWidth, newHeight, offsetX, offsetY, fill.toU32());
}
/** @alias imageResizeCanvas */
export const ImageResizeCanvas = imageResizeCanvas;

/** Compute all mipmap levels for a provided image */
export function imageMipmaps(image: number): void {
	(raylib.symbols.ImageMipmaps as Function)(image);
}
/** @alias imageMipmaps */
export const ImageMipmaps = imageMipmaps;

/** Dither image data to 16bpp or lower (Floyd-Steinberg dithering) */
export function imageDither(image: number, rBpp: number, gBpp: number, bBpp: number, aBpp: number): void {
	(raylib.symbols.ImageDither as Function)(image, rBpp, gBpp, bBpp, aBpp);
}
/** @alias imageDither */
export const ImageDither = imageDither;

/** Flip image vertically */
export function imageFlipVertical(image: number): void {
	(raylib.symbols.ImageFlipVertical as Function)(image);
}
/** @alias imageFlipVertical */
export const ImageFlipVertical = imageFlipVertical;

/** Flip image horizontally */
export function imageFlipHorizontal(image: number): void {
	(raylib.symbols.ImageFlipHorizontal as Function)(image);
}
/** @alias imageFlipHorizontal */
export const ImageFlipHorizontal = imageFlipHorizontal;

/** Rotate image by input angle in degrees (-359 to 359) */
export function imageRotate(image: number, degrees: number): void {
	(raylib.symbols.ImageRotate as Function)(image, degrees);
}
/** @alias imageRotate */
export const ImageRotate = imageRotate;

/** Rotate image clockwise 90deg */
export function imageRotateCW(image: number): void {
	(raylib.symbols.ImageRotateCW as Function)(image);
}
/** @alias imageRotateCW */
export const ImageRotateCW = imageRotateCW;

/** Rotate image counter-clockwise 90deg */
export function imageRotateCCW(image: number): void {
	(raylib.symbols.ImageRotateCCW as Function)(image);
}
/** @alias imageRotateCCW */
export const ImageRotateCCW = imageRotateCCW;

/** Modify image color: tint */
export function imageColorTint(image: number, color: Structs.Color): void {
	(raylib.symbols.ImageColorTint as Function)(image, color.toU32());
}
/** @alias imageColorTint */
export const ImageColorTint = imageColorTint;

/** Modify image color: invert */
export function imageColorInvert(image: number): void {
	(raylib.symbols.ImageColorInvert as Function)(image);
}
/** @alias imageColorInvert */
export const ImageColorInvert = imageColorInvert;

/** Modify image color: grayscale */
export function imageColorGrayscale(image: number): void {
	(raylib.symbols.ImageColorGrayscale as Function)(image);
}
/** @alias imageColorGrayscale */
export const ImageColorGrayscale = imageColorGrayscale;

/** Modify image color: contrast (-100 to 100) */
export function imageColorContrast(image: number, contrast: number): void {
	(raylib.symbols.ImageColorContrast as Function)(image, contrast);
}
/** @alias imageColorContrast */
export const ImageColorContrast = imageColorContrast;

/** Modify image color: brightness (-255 to 255) */
export function imageColorBrightness(image: number, brightness: number): void {
	(raylib.symbols.ImageColorBrightness as Function)(image, brightness);
}
/** @alias imageColorBrightness */
export const ImageColorBrightness = imageColorBrightness;

/** Modify image color: replace color */
export function imageColorReplace(image: number, color: Structs.Color, replace: Structs.Color): void {
	(raylib.symbols.ImageColorReplace as Function)(image, color.toU32(), replace.toU32());
}
/** @alias imageColorReplace */
export const ImageColorReplace = imageColorReplace;

/** Load color data from image as a Color array (RGBA - 32bit) */
export function loadImageColors(image: Structs.Image): number {
	return (raylib.symbols.LoadImageColors as Function)(ptr(image.rawBuffer)) as number;
}
/** @alias loadImageColors */
export const LoadImageColors = loadImageColors;

/** Load colors palette from image as a Color array (RGBA - 32bit) */
export function loadImagePalette(image: Structs.Image, maxPaletteSize: number, colorCount: number): number {
	return (raylib.symbols.LoadImagePalette as Function)(ptr(image.rawBuffer), maxPaletteSize, colorCount) as number;
}
/** @alias loadImagePalette */
export const LoadImagePalette = loadImagePalette;

/** Unload color data loaded with LoadImageColors() */
export function unloadImageColors(colors: number): void {
	(raylib.symbols.UnloadImageColors as Function)(colors);
}
/** @alias unloadImageColors */
export const UnloadImageColors = unloadImageColors;

/** Unload colors palette loaded with LoadImagePalette() */
export function unloadImagePalette(colors: number): void {
	(raylib.symbols.UnloadImagePalette as Function)(colors);
}
/** @alias unloadImagePalette */
export const UnloadImagePalette = unloadImagePalette;

/** Get image alpha border rectangle */
export function getImageAlphaBorder(image: Structs.Image, threshold: number): Structs.Rectangle {
	const result = (raylib.symbols.GetImageAlphaBorder as Function)(ptr(image.rawBuffer), threshold);
	return Structs.Rectangle.fromPointer(result as Pointer);
}
/** @alias getImageAlphaBorder */
export const GetImageAlphaBorder = getImageAlphaBorder;

/** Get image pixel color at (x, y) position */
export function getImageColor(image: Structs.Image, x: number, y: number): Structs.Color {
	const result = (raylib.symbols.GetImageColor as Function)(ptr(image.rawBuffer), x, y);
	return Structs.Color.fromU32(result as number);
}
/** @alias getImageColor */
export const GetImageColor = getImageColor;

/** Clear image background with given color */
export function imageClearBackground(dst: number, color: Structs.Color): void {
	(raylib.symbols.ImageClearBackground as Function)(dst, color.toU32());
}
/** @alias imageClearBackground */
export const ImageClearBackground = imageClearBackground;

/** Draw pixel within an image */
export function imageDrawPixel(dst: number, posX: number, posY: number, color: Structs.Color): void {
	(raylib.symbols.ImageDrawPixel as Function)(dst, posX, posY, color.toU32());
}
/** @alias imageDrawPixel */
export const ImageDrawPixel = imageDrawPixel;

/** Draw pixel within an image (Vector version) */
export function imageDrawPixelV(dst: number, position: Structs.Vector2, color: Structs.Color): void {
	(raylib.symbols.ImageDrawPixelV as Function)(dst, position.toU64(), color.toU32());
}
/** @alias imageDrawPixelV */
export const ImageDrawPixelV = imageDrawPixelV;

/** Draw line within an image */
export function imageDrawLine(dst: number, startPosX: number, startPosY: number, endPosX: number, endPosY: number, color: Structs.Color): void {
	(raylib.symbols.ImageDrawLine as Function)(dst, startPosX, startPosY, endPosX, endPosY, color.toU32());
}
/** @alias imageDrawLine */
export const ImageDrawLine = imageDrawLine;

/** Draw line within an image (Vector version) */
export function imageDrawLineV(dst: number, start: Structs.Vector2, end: Structs.Vector2, color: Structs.Color): void {
	(raylib.symbols.ImageDrawLineV as Function)(dst, start.toU64(), end.toU64(), color.toU32());
}
/** @alias imageDrawLineV */
export const ImageDrawLineV = imageDrawLineV;

/** Draw a line defining thickness within an image */
export function imageDrawLineEx(dst: number, start: Structs.Vector2, end: Structs.Vector2, thick: number, color: Structs.Color): void {
	(raylib.symbols.ImageDrawLineEx as Function)(dst, start.toU64(), end.toU64(), thick, color.toU32());
}
/** @alias imageDrawLineEx */
export const ImageDrawLineEx = imageDrawLineEx;

/** Draw a filled circle within an image */
export function imageDrawCircle(dst: number, centerX: number, centerY: number, radius: number, color: Structs.Color): void {
	(raylib.symbols.ImageDrawCircle as Function)(dst, centerX, centerY, radius, color.toU32());
}
/** @alias imageDrawCircle */
export const ImageDrawCircle = imageDrawCircle;

/** Draw a filled circle within an image (Vector version) */
export function imageDrawCircleV(dst: number, center: Structs.Vector2, radius: number, color: Structs.Color): void {
	(raylib.symbols.ImageDrawCircleV as Function)(dst, center.toU64(), radius, color.toU32());
}
/** @alias imageDrawCircleV */
export const ImageDrawCircleV = imageDrawCircleV;

/** Draw circle outline within an image */
export function imageDrawCircleLines(dst: number, centerX: number, centerY: number, radius: number, color: Structs.Color): void {
	(raylib.symbols.ImageDrawCircleLines as Function)(dst, centerX, centerY, radius, color.toU32());
}
/** @alias imageDrawCircleLines */
export const ImageDrawCircleLines = imageDrawCircleLines;

/** Draw circle outline within an image (Vector version) */
export function imageDrawCircleLinesV(dst: number, center: Structs.Vector2, radius: number, color: Structs.Color): void {
	(raylib.symbols.ImageDrawCircleLinesV as Function)(dst, center.toU64(), radius, color.toU32());
}
/** @alias imageDrawCircleLinesV */
export const ImageDrawCircleLinesV = imageDrawCircleLinesV;

/** Draw rectangle within an image */
export function imageDrawRectangle(dst: number, posX: number, posY: number, width: number, height: number, color: Structs.Color): void {
	(raylib.symbols.ImageDrawRectangle as Function)(dst, posX, posY, width, height, color.toU32());
}
/** @alias imageDrawRectangle */
export const ImageDrawRectangle = imageDrawRectangle;

/** Draw rectangle within an image (Vector version) */
export function imageDrawRectangleV(dst: number, position: Structs.Vector2, size: Structs.Vector2, color: Structs.Color): void {
	(raylib.symbols.ImageDrawRectangleV as Function)(dst, position.toU64(), size.toU64(), color.toU32());
}
/** @alias imageDrawRectangleV */
export const ImageDrawRectangleV = imageDrawRectangleV;

/** Draw rectangle within an image */
export function imageDrawRectangleRec(dst: number, rec: Structs.Rectangle, color: Structs.Color): void {
	(raylib.symbols.ImageDrawRectangleRec as Function)(dst, ptr(rec.rawBuffer), color.toU32());
}
/** @alias imageDrawRectangleRec */
export const ImageDrawRectangleRec = imageDrawRectangleRec;

/** Draw rectangle lines within an image */
export function imageDrawRectangleLines(dst: number, rec: Structs.Rectangle, thick: number, color: Structs.Color): void {
	(raylib.symbols.ImageDrawRectangleLines as Function)(dst, ptr(rec.rawBuffer), thick, color.toU32());
}
/** @alias imageDrawRectangleLines */
export const ImageDrawRectangleLines = imageDrawRectangleLines;

/** Draw triangle within an image */
export function imageDrawTriangle(dst: number, v1: Structs.Vector2, v2: Structs.Vector2, v3: Structs.Vector2, color: Structs.Color): void {
	(raylib.symbols.ImageDrawTriangle as Function)(dst, v1.toU64(), v2.toU64(), v3.toU64(), color.toU32());
}
/** @alias imageDrawTriangle */
export const ImageDrawTriangle = imageDrawTriangle;

/** Draw triangle with interpolated colors within an image */
export function imageDrawTriangleEx(dst: number, v1: Structs.Vector2, v2: Structs.Vector2, v3: Structs.Vector2, c1: Structs.Color, c2: Structs.Color, c3: Structs.Color): void {
	(raylib.symbols.ImageDrawTriangleEx as Function)(dst, v1.toU64(), v2.toU64(), v3.toU64(), c1.toU32(), c2.toU32(), c3.toU32());
}
/** @alias imageDrawTriangleEx */
export const ImageDrawTriangleEx = imageDrawTriangleEx;

/** Draw triangle outline within an image */
export function imageDrawTriangleLines(dst: number, v1: Structs.Vector2, v2: Structs.Vector2, v3: Structs.Vector2, color: Structs.Color): void {
	(raylib.symbols.ImageDrawTriangleLines as Function)(dst, v1.toU64(), v2.toU64(), v3.toU64(), color.toU32());
}
/** @alias imageDrawTriangleLines */
export const ImageDrawTriangleLines = imageDrawTriangleLines;

/** Draw a triangle fan defined by points within an image (first vertex is the center) */
export function imageDrawTriangleFan(dst: number, points: number, pointCount: number, color: Structs.Color): void {
	(raylib.symbols.ImageDrawTriangleFan as Function)(dst, points, pointCount, color.toU32());
}
/** @alias imageDrawTriangleFan */
export const ImageDrawTriangleFan = imageDrawTriangleFan;

/** Draw a triangle strip defined by points within an image */
export function imageDrawTriangleStrip(dst: number, points: number, pointCount: number, color: Structs.Color): void {
	(raylib.symbols.ImageDrawTriangleStrip as Function)(dst, points, pointCount, color.toU32());
}
/** @alias imageDrawTriangleStrip */
export const ImageDrawTriangleStrip = imageDrawTriangleStrip;

/** Draw a source image within a destination image (tint applied to source) */
export function imageDraw(dst: number, src: Structs.Image, srcRec: Structs.Rectangle, dstRec: Structs.Rectangle, tint: Structs.Color): void {
	(raylib.symbols.ImageDraw as Function)(dst, ptr(src.rawBuffer), ptr(srcRec.rawBuffer), ptr(dstRec.rawBuffer), tint.toU32());
}
/** @alias imageDraw */
export const ImageDraw = imageDraw;

/** Draw text (using default font) within an image (destination) */
export function imageDrawText(dst: number, text: string, posX: number, posY: number, fontSize: number, color: Structs.Color): void {
	(raylib.symbols.ImageDrawText as Function)(dst, ptr(toCString(text)), posX, posY, fontSize, color.toU32());
}
/** @alias imageDrawText */
export const ImageDrawText = imageDrawText;

/** Draw text (custom sprite font) within an image (destination) */
export function imageDrawTextEx(dst: number, font: Structs.Font, text: string, position: Structs.Vector2, fontSize: number, spacing: number, tint: Structs.Color): void {
	(raylib.symbols.ImageDrawTextEx as Function)(dst, ptr(font.rawBuffer), ptr(toCString(text)), position.toU64(), fontSize, spacing, tint.toU32());
}
/** @alias imageDrawTextEx */
export const ImageDrawTextEx = imageDrawTextEx;

/** Load texture from file into GPU memory (VRAM) */
export function loadTexture(fileName: string): Structs.Texture {
	const result = (raylib.symbols.LoadTexture as Function)(ptr(toCString(fileName)));
	return Structs.Texture.fromPointer(result as Pointer);
}
/** @alias loadTexture */
export const LoadTexture = loadTexture;

/** Load texture from image data */
export function loadTextureFromImage(image: Structs.Image): Structs.Texture {
	const result = (raylib.symbols.LoadTextureFromImage as Function)(ptr(image.rawBuffer));
	return Structs.Texture.fromPointer(result as Pointer);
}
/** @alias loadTextureFromImage */
export const LoadTextureFromImage = loadTextureFromImage;

/** Load cubemap from image, multiple image cubemap layouts supported */
export function loadTextureCubemap(image: Structs.Image, layout: number): Structs.Texture {
	const result = (raylib.symbols.LoadTextureCubemap as Function)(ptr(image.rawBuffer), layout);
	return Structs.Texture.fromPointer(result as Pointer);
}
/** @alias loadTextureCubemap */
export const LoadTextureCubemap = loadTextureCubemap;

/** Load texture for rendering (framebuffer) */
export function loadRenderTexture(width: number, height: number): Structs.RenderTexture {
	const result = (raylib.symbols.LoadRenderTexture as Function)(width, height);
	return Structs.RenderTexture.fromPointer(result as Pointer);
}
/** @alias loadRenderTexture */
export const LoadRenderTexture = loadRenderTexture;

/** Check if a texture is valid (loaded in GPU) */
export function isTextureValid(texture: Structs.Texture): boolean {
	return (raylib.symbols.IsTextureValid as Function)(ptr(texture.rawBuffer)) as boolean;
}
/** @alias isTextureValid */
export const IsTextureValid = isTextureValid;

/** Unload texture from GPU memory (VRAM) */
export function unloadTexture(texture: Structs.Texture): void {
	(raylib.symbols.UnloadTexture as Function)(ptr(texture.rawBuffer));
}
/** @alias unloadTexture */
export const UnloadTexture = unloadTexture;

/** Check if a render texture is valid (loaded in GPU) */
export function isRenderTextureValid(target: Structs.RenderTexture): boolean {
	return (raylib.symbols.IsRenderTextureValid as Function)(ptr(target.rawBuffer)) as boolean;
}
/** @alias isRenderTextureValid */
export const IsRenderTextureValid = isRenderTextureValid;

/** Unload render texture from GPU memory (VRAM) */
export function unloadRenderTexture(target: Structs.RenderTexture): void {
	(raylib.symbols.UnloadRenderTexture as Function)(ptr(target.rawBuffer));
}
/** @alias unloadRenderTexture */
export const UnloadRenderTexture = unloadRenderTexture;

/** Update GPU texture with new data */
export function updateTexture(texture: Structs.Texture, pixels: number): void {
	(raylib.symbols.UpdateTexture as Function)(ptr(texture.rawBuffer), pixels);
}
/** @alias updateTexture */
export const UpdateTexture = updateTexture;

/** Update GPU texture rectangle with new data */
export function updateTextureRec(texture: Structs.Texture, rec: Structs.Rectangle, pixels: number): void {
	(raylib.symbols.UpdateTextureRec as Function)(ptr(texture.rawBuffer), ptr(rec.rawBuffer), pixels);
}
/** @alias updateTextureRec */
export const UpdateTextureRec = updateTextureRec;

/** Generate GPU mipmaps for a texture */
export function genTextureMipmaps(texture: number): void {
	(raylib.symbols.GenTextureMipmaps as Function)(texture);
}
/** @alias genTextureMipmaps */
export const GenTextureMipmaps = genTextureMipmaps;

/** Set texture scaling filter mode */
export function setTextureFilter(texture: Structs.Texture, filter: number): void {
	(raylib.symbols.SetTextureFilter as Function)(ptr(texture.rawBuffer), filter);
}
/** @alias setTextureFilter */
export const SetTextureFilter = setTextureFilter;

/** Set texture wrapping mode */
export function setTextureWrap(texture: Structs.Texture, wrap: number): void {
	(raylib.symbols.SetTextureWrap as Function)(ptr(texture.rawBuffer), wrap);
}
/** @alias setTextureWrap */
export const SetTextureWrap = setTextureWrap;

/** Draw a Texture2D */
export function drawTexture(texture: Structs.Texture, posX: number, posY: number, tint: Structs.Color): void {
	(raylib.symbols.DrawTexture as Function)(ptr(texture.rawBuffer), posX, posY, tint.toU32());
}
/** @alias drawTexture */
export const DrawTexture = drawTexture;

/** Draw a Texture2D with position defined as Vector2 */
export function drawTextureV(texture: Structs.Texture, position: Structs.Vector2, tint: Structs.Color): void {
	(raylib.symbols.DrawTextureV as Function)(ptr(texture.rawBuffer), position.toU64(), tint.toU32());
}
/** @alias drawTextureV */
export const DrawTextureV = drawTextureV;

/** Draw a Texture2D with extended parameters */
export function drawTextureEx(texture: Structs.Texture, position: Structs.Vector2, rotation: number, scale: number, tint: Structs.Color): void {
	(raylib.symbols.DrawTextureEx as Function)(ptr(texture.rawBuffer), position.toU64(), rotation, scale, tint.toU32());
}
/** @alias drawTextureEx */
export const DrawTextureEx = drawTextureEx;

/** Draw a part of a texture defined by a rectangle */
export function drawTextureRec(texture: Structs.Texture, source: Structs.Rectangle, position: Structs.Vector2, tint: Structs.Color): void {
	(raylib.symbols.DrawTextureRec as Function)(ptr(texture.rawBuffer), ptr(source.rawBuffer), position.toU64(), tint.toU32());
}
/** @alias drawTextureRec */
export const DrawTextureRec = drawTextureRec;

/** Draw a part of a texture defined by a rectangle with 'pro' parameters */
export function drawTexturePro(texture: Structs.Texture, source: Structs.Rectangle, dest: Structs.Rectangle, origin: Structs.Vector2, rotation: number, tint: Structs.Color): void {
	(raylib.symbols.DrawTexturePro as Function)(ptr(texture.rawBuffer), ptr(source.rawBuffer), ptr(dest.rawBuffer), origin.toU64(), rotation, tint.toU32());
}
/** @alias drawTexturePro */
export const DrawTexturePro = drawTexturePro;

/** Draws a texture (or part of it) that stretches or shrinks nicely */
export function drawTextureNPatch(texture: Structs.Texture, nPatchInfo: Structs.NPatchInfo, dest: Structs.Rectangle, origin: Structs.Vector2, rotation: number, tint: Structs.Color): void {
	(raylib.symbols.DrawTextureNPatch as Function)(ptr(texture.rawBuffer), ptr(nPatchInfo.rawBuffer), ptr(dest.rawBuffer), origin.toU64(), rotation, tint.toU32());
}
/** @alias drawTextureNPatch */
export const DrawTextureNPatch = drawTextureNPatch;

/** Check if two colors are equal */
export function colorIsEqual(col1: Structs.Color, col2: Structs.Color): boolean {
	return (raylib.symbols.ColorIsEqual as Function)(col1.toU32(), col2.toU32()) as boolean;
}
/** @alias colorIsEqual */
export const ColorIsEqual = colorIsEqual;

/** Get color with alpha applied, alpha goes from 0.0f to 1.0f */
export function fade(color: Structs.Color, alpha: number): Structs.Color {
	const result = (raylib.symbols.Fade as Function)(color.toU32(), alpha);
	return Structs.Color.fromU32(result as number);
}
/** @alias fade */
export const Fade = fade;

/** Get hexadecimal value for a Color (0xRRGGBBAA) */
export function colorToInt(color: Structs.Color): number {
	return (raylib.symbols.ColorToInt as Function)(color.toU32()) as number;
}
/** @alias colorToInt */
export const ColorToInt = colorToInt;

/** Get Color normalized as float [0..1] */
export function colorNormalize(color: Structs.Color): Structs.Vector4 {
	const result = (raylib.symbols.ColorNormalize as Function)(color.toU32());
	return Structs.Vector4.fromPointer(result as Pointer);
}
/** @alias colorNormalize */
export const ColorNormalize = colorNormalize;

/** Get Color from normalized values [0..1] */
export function colorFromNormalized(normalized: Structs.Vector4): Structs.Color {
	const result = (raylib.symbols.ColorFromNormalized as Function)(ptr(normalized.rawBuffer));
	return Structs.Color.fromU32(result as number);
}
/** @alias colorFromNormalized */
export const ColorFromNormalized = colorFromNormalized;

/** Get HSV values for a Color, hue [0..360], saturation/value [0..1] */
export function colorToHSV(color: Structs.Color): Structs.Vector3 {
	const result = (raylib.symbols.ColorToHSV as Function)(color.toU32());
	return Structs.Vector3.fromPointer(result as Pointer);
}
/** @alias colorToHSV */
export const ColorToHSV = colorToHSV;

/** Get a Color from HSV values, hue [0..360], saturation/value [0..1] */
export function colorFromHSV(hue: number, saturation: number, value: number): Structs.Color {
	const result = (raylib.symbols.ColorFromHSV as Function)(hue, saturation, value);
	return Structs.Color.fromU32(result as number);
}
/** @alias colorFromHSV */
export const ColorFromHSV = colorFromHSV;

/** Get color multiplied with another color */
export function colorTint(color: Structs.Color, tint: Structs.Color): Structs.Color {
	const result = (raylib.symbols.ColorTint as Function)(color.toU32(), tint.toU32());
	return Structs.Color.fromU32(result as number);
}
/** @alias colorTint */
export const ColorTint = colorTint;

/** Get color with brightness correction, brightness factor goes from -1.0f to 1.0f */
export function colorBrightness(color: Structs.Color, factor: number): Structs.Color {
	const result = (raylib.symbols.ColorBrightness as Function)(color.toU32(), factor);
	return Structs.Color.fromU32(result as number);
}
/** @alias colorBrightness */
export const ColorBrightness = colorBrightness;

/** Get color with contrast correction, contrast values between -1.0f and 1.0f */
export function colorContrast(color: Structs.Color, contrast: number): Structs.Color {
	const result = (raylib.symbols.ColorContrast as Function)(color.toU32(), contrast);
	return Structs.Color.fromU32(result as number);
}
/** @alias colorContrast */
export const ColorContrast = colorContrast;

/** Get color with alpha applied, alpha goes from 0.0f to 1.0f */
export function colorAlpha(color: Structs.Color, alpha: number): Structs.Color {
	const result = (raylib.symbols.ColorAlpha as Function)(color.toU32(), alpha);
	return Structs.Color.fromU32(result as number);
}
/** @alias colorAlpha */
export const ColorAlpha = colorAlpha;

/** Get src alpha-blended into dst color with tint */
export function colorAlphaBlend(dst: Structs.Color, src: Structs.Color, tint: Structs.Color): Structs.Color {
	const result = (raylib.symbols.ColorAlphaBlend as Function)(dst.toU32(), src.toU32(), tint.toU32());
	return Structs.Color.fromU32(result as number);
}
/** @alias colorAlphaBlend */
export const ColorAlphaBlend = colorAlphaBlend;

/** Get color lerp interpolation between two colors, factor [0.0f..1.0f] */
export function colorLerp(color1: Structs.Color, color2: Structs.Color, factor: number): Structs.Color {
	const result = (raylib.symbols.ColorLerp as Function)(color1.toU32(), color2.toU32(), factor);
	return Structs.Color.fromU32(result as number);
}
/** @alias colorLerp */
export const ColorLerp = colorLerp;

/** Get Color structure from hexadecimal value */
export function getColor(hexValue: number): Structs.Color {
	const result = (raylib.symbols.GetColor as Function)(hexValue);
	return Structs.Color.fromU32(result as number);
}
/** @alias getColor */
export const GetColor = getColor;

/** Get Color from a source pixel pointer of certain format */
export function getPixelColor(srcPtr: number, format: number): Structs.Color {
	const result = (raylib.symbols.GetPixelColor as Function)(srcPtr, format);
	return Structs.Color.fromU32(result as number);
}
/** @alias getPixelColor */
export const GetPixelColor = getPixelColor;

/** Set color formatted into destination pixel pointer */
export function setPixelColor(dstPtr: number, color: Structs.Color, format: number): void {
	(raylib.symbols.SetPixelColor as Function)(dstPtr, color.toU32(), format);
}
/** @alias setPixelColor */
export const SetPixelColor = setPixelColor;

/** Get pixel data size in bytes for certain format */
export function getPixelDataSize(width: number, height: number, format: number): number {
	return (raylib.symbols.GetPixelDataSize as Function)(width, height, format) as number;
}
/** @alias getPixelDataSize */
export const GetPixelDataSize = getPixelDataSize;

/** Get the default Font */
export function getFontDefault(): Structs.Font {
	const result = (raylib.symbols.GetFontDefault as Function)();
	return Structs.Font.fromPointer(result as Pointer);
}
/** @alias getFontDefault */
export const GetFontDefault = getFontDefault;

/** Load font from file into GPU memory (VRAM) */
export function loadFont(fileName: string): Structs.Font {
	const result = (raylib.symbols.LoadFont as Function)(ptr(toCString(fileName)));
	return Structs.Font.fromPointer(result as Pointer);
}
/** @alias loadFont */
export const LoadFont = loadFont;

/** Load font from file with extended parameters, use NULL for codepoints and 0 for codepointCount to load the default character set, font size is provided in pixels height */
export function loadFontEx(fileName: string, fontSize: number, codepoints: number, codepointCount: number): Structs.Font {
	const result = (raylib.symbols.LoadFontEx as Function)(ptr(toCString(fileName)), fontSize, codepoints, codepointCount);
	return Structs.Font.fromPointer(result as Pointer);
}
/** @alias loadFontEx */
export const LoadFontEx = loadFontEx;

/** Load font from Image (XNA style) */
export function loadFontFromImage(image: Structs.Image, key: Structs.Color, firstChar: number): Structs.Font {
	const result = (raylib.symbols.LoadFontFromImage as Function)(ptr(image.rawBuffer), key.toU32(), firstChar);
	return Structs.Font.fromPointer(result as Pointer);
}
/** @alias loadFontFromImage */
export const LoadFontFromImage = loadFontFromImage;

/** Load font from memory buffer, fileType refers to extension: i.e. '.ttf' */
export function loadFontFromMemory(fileType: string, fileData: number, dataSize: number, fontSize: number, codepoints: number, codepointCount: number): Structs.Font {
	const result = (raylib.symbols.LoadFontFromMemory as Function)(ptr(toCString(fileType)), fileData, dataSize, fontSize, codepoints, codepointCount);
	return Structs.Font.fromPointer(result as Pointer);
}
/** @alias loadFontFromMemory */
export const LoadFontFromMemory = loadFontFromMemory;

/** Check if a font is valid (font data loaded, WARNING: GPU texture not checked) */
export function isFontValid(font: Structs.Font): boolean {
	return (raylib.symbols.IsFontValid as Function)(ptr(font.rawBuffer)) as boolean;
}
/** @alias isFontValid */
export const IsFontValid = isFontValid;

/** Load font data for further use */
export function loadFontData(fileData: number, dataSize: number, fontSize: number, codepoints: number, codepointCount: number, type: number): number {
	return (raylib.symbols.LoadFontData as Function)(fileData, dataSize, fontSize, codepoints, codepointCount, type) as number;
}
/** @alias loadFontData */
export const LoadFontData = loadFontData;

/** Generate image font atlas using chars info */
export function genImageFontAtlas(glyphs: number, glyphRecs: number, glyphCount: number, fontSize: number, padding: number, packMethod: number): Structs.Image {
	const result = (raylib.symbols.GenImageFontAtlas as Function)(glyphs, glyphRecs, glyphCount, fontSize, padding, packMethod);
	return Structs.Image.fromPointer(result as Pointer);
}
/** @alias genImageFontAtlas */
export const GenImageFontAtlas = genImageFontAtlas;

/** Unload font chars info data (RAM) */
export function unloadFontData(glyphs: number, glyphCount: number): void {
	(raylib.symbols.UnloadFontData as Function)(glyphs, glyphCount);
}
/** @alias unloadFontData */
export const UnloadFontData = unloadFontData;

/** Unload font from GPU memory (VRAM) */
export function unloadFont(font: Structs.Font): void {
	(raylib.symbols.UnloadFont as Function)(ptr(font.rawBuffer));
}
/** @alias unloadFont */
export const UnloadFont = unloadFont;

/** Export font as code file, returns true on success */
export function exportFontAsCode(font: Structs.Font, fileName: string): boolean {
	return (raylib.symbols.ExportFontAsCode as Function)(ptr(font.rawBuffer), ptr(toCString(fileName))) as boolean;
}
/** @alias exportFontAsCode */
export const ExportFontAsCode = exportFontAsCode;

/** Draw current FPS */
export function drawFPS(posX: number, posY: number): void {
	(raylib.symbols.DrawFPS as Function)(posX, posY);
}
/** @alias drawFPS */
export const DrawFPS = drawFPS;

/** Draw text (using default font) */
export function drawText(text: string, posX: number, posY: number, fontSize: number, color: Structs.Color): void {
	(raylib.symbols.DrawText as Function)(ptr(toCString(text)), posX, posY, fontSize, color.toU32());
}
/** @alias drawText */
export const DrawText = drawText;

/** Draw text using font and additional parameters */
export function drawTextEx(font: Structs.Font, text: string, position: Structs.Vector2, fontSize: number, spacing: number, tint: Structs.Color): void {
	(raylib.symbols.DrawTextEx as Function)(ptr(font.rawBuffer), ptr(toCString(text)), position.toU64(), fontSize, spacing, tint.toU32());
}
/** @alias drawTextEx */
export const DrawTextEx = drawTextEx;

/** Draw text using Font and pro parameters (rotation) */
export function drawTextPro(font: Structs.Font, text: string, position: Structs.Vector2, origin: Structs.Vector2, rotation: number, fontSize: number, spacing: number, tint: Structs.Color): void {
	(raylib.symbols.DrawTextPro as Function)(ptr(font.rawBuffer), ptr(toCString(text)), position.toU64(), origin.toU64(), rotation, fontSize, spacing, tint.toU32());
}
/** @alias drawTextPro */
export const DrawTextPro = drawTextPro;

/** Draw one character (codepoint) */
export function drawTextCodepoint(font: Structs.Font, codepoint: number, position: Structs.Vector2, fontSize: number, tint: Structs.Color): void {
	(raylib.symbols.DrawTextCodepoint as Function)(ptr(font.rawBuffer), codepoint, position.toU64(), fontSize, tint.toU32());
}
/** @alias drawTextCodepoint */
export const DrawTextCodepoint = drawTextCodepoint;

/** Draw multiple character (codepoint) */
export function drawTextCodepoints(font: Structs.Font, codepoints: number, codepointCount: number, position: Structs.Vector2, fontSize: number, spacing: number, tint: Structs.Color): void {
	(raylib.symbols.DrawTextCodepoints as Function)(ptr(font.rawBuffer), codepoints, codepointCount, position.toU64(), fontSize, spacing, tint.toU32());
}
/** @alias drawTextCodepoints */
export const DrawTextCodepoints = drawTextCodepoints;

/** Set vertical line spacing when drawing with line-breaks */
export function setTextLineSpacing(spacing: number): void {
	(raylib.symbols.SetTextLineSpacing as Function)(spacing);
}
/** @alias setTextLineSpacing */
export const SetTextLineSpacing = setTextLineSpacing;

/** Measure string width for default font */
export function measureText(text: string, fontSize: number): number {
	return (raylib.symbols.MeasureText as Function)(ptr(toCString(text)), fontSize) as number;
}
/** @alias measureText */
export const MeasureText = measureText;

/** Measure string size for Font */
export function measureTextEx(font: Structs.Font, text: string, fontSize: number, spacing: number): Structs.Vector2 {
	const result = (raylib.symbols.MeasureTextEx as Function)(ptr(font.rawBuffer), ptr(toCString(text)), fontSize, spacing);
	return Structs.Vector2.fromU64(result as bigint);
}
/** @alias measureTextEx */
export const MeasureTextEx = measureTextEx;

/** Get glyph index position in font for a codepoint (unicode character), fallback to '?' if not found */
export function getGlyphIndex(font: Structs.Font, codepoint: number): number {
	return (raylib.symbols.GetGlyphIndex as Function)(ptr(font.rawBuffer), codepoint) as number;
}
/** @alias getGlyphIndex */
export const GetGlyphIndex = getGlyphIndex;

/** Get glyph font info data for a codepoint (unicode character), fallback to '?' if not found */
export function getGlyphInfo(font: Structs.Font, codepoint: number): Structs.GlyphInfo {
	const result = (raylib.symbols.GetGlyphInfo as Function)(ptr(font.rawBuffer), codepoint);
	return Structs.GlyphInfo.fromPointer(result as Pointer);
}
/** @alias getGlyphInfo */
export const GetGlyphInfo = getGlyphInfo;

/** Get glyph rectangle in font atlas for a codepoint (unicode character), fallback to '?' if not found */
export function getGlyphAtlasRec(font: Structs.Font, codepoint: number): Structs.Rectangle {
	const result = (raylib.symbols.GetGlyphAtlasRec as Function)(ptr(font.rawBuffer), codepoint);
	return Structs.Rectangle.fromPointer(result as Pointer);
}
/** @alias getGlyphAtlasRec */
export const GetGlyphAtlasRec = getGlyphAtlasRec;

/** Load UTF-8 text encoded from codepoints array */
export function loadUTF8(codepoints: number, length: number): number {
	return (raylib.symbols.LoadUTF8 as Function)(codepoints, length) as number;
}
/** @alias loadUTF8 */
export const LoadUTF8 = loadUTF8;

/** Unload UTF-8 text encoded from codepoints array */
export function unloadUTF8(text: string): void {
	(raylib.symbols.UnloadUTF8 as Function)(ptr(toCString(text)));
}
/** @alias unloadUTF8 */
export const UnloadUTF8 = unloadUTF8;

/** Load all codepoints from a UTF-8 text string, codepoints count returned by parameter */
export function loadCodepoints(text: string, count: number): number {
	return (raylib.symbols.LoadCodepoints as Function)(ptr(toCString(text)), count) as number;
}
/** @alias loadCodepoints */
export const LoadCodepoints = loadCodepoints;

/** Unload codepoints data from memory */
export function unloadCodepoints(codepoints: number): void {
	(raylib.symbols.UnloadCodepoints as Function)(codepoints);
}
/** @alias unloadCodepoints */
export const UnloadCodepoints = unloadCodepoints;

/** Get total number of codepoints in a UTF-8 encoded string */
export function getCodepointCount(text: string): number {
	return (raylib.symbols.GetCodepointCount as Function)(ptr(toCString(text))) as number;
}
/** @alias getCodepointCount */
export const GetCodepointCount = getCodepointCount;

/** Get next codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure */
export function getCodepoint(text: string, codepointSize: number): number {
	return (raylib.symbols.GetCodepoint as Function)(ptr(toCString(text)), codepointSize) as number;
}
/** @alias getCodepoint */
export const GetCodepoint = getCodepoint;

/** Get next codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure */
export function getCodepointNext(text: string, codepointSize: number): number {
	return (raylib.symbols.GetCodepointNext as Function)(ptr(toCString(text)), codepointSize) as number;
}
/** @alias getCodepointNext */
export const GetCodepointNext = getCodepointNext;

/** Get previous codepoint in a UTF-8 encoded string, 0x3f('?') is returned on failure */
export function getCodepointPrevious(text: string, codepointSize: number): number {
	return (raylib.symbols.GetCodepointPrevious as Function)(ptr(toCString(text)), codepointSize) as number;
}
/** @alias getCodepointPrevious */
export const GetCodepointPrevious = getCodepointPrevious;

/** Encode one codepoint into UTF-8 byte array (array length returned as parameter) */
export function codepointToUTF8(codepoint: number, utf8Size: number): string {
	const result = (raylib.symbols.CodepointToUTF8 as Function)(codepoint, utf8Size);
	return result ? String(result) : "";
}
/** @alias codepointToUTF8 */
export const CodepointToUTF8 = codepointToUTF8;

/** Copy one string to another, returns bytes copied */
export function textCopy(dst: string, src: string): number {
	return (raylib.symbols.TextCopy as Function)(ptr(toCString(dst)), ptr(toCString(src))) as number;
}
/** @alias textCopy */
export const TextCopy = textCopy;

/** Check if two text string are equal */
export function textIsEqual(text1: string, text2: string): boolean {
	return (raylib.symbols.TextIsEqual as Function)(ptr(toCString(text1)), ptr(toCString(text2))) as boolean;
}
/** @alias textIsEqual */
export const TextIsEqual = textIsEqual;

/** Get text length, checks for '\0' ending */
export function textLength(text: string): number {
	return (raylib.symbols.TextLength as Function)(ptr(toCString(text))) as number;
}
/** @alias textLength */
export const TextLength = textLength;

/** Get a piece of a text string */
export function textSubtext(text: string, position: number, length: number): string {
	const result = (raylib.symbols.TextSubtext as Function)(ptr(toCString(text)), position, length);
	return result ? String(result) : "";
}
/** @alias textSubtext */
export const TextSubtext = textSubtext;

/** Replace text string (WARNING: memory must be freed!) */
export function textReplace(text: string, replace: string, by: string): number {
	return (raylib.symbols.TextReplace as Function)(ptr(toCString(text)), ptr(toCString(replace)), ptr(toCString(by))) as number;
}
/** @alias textReplace */
export const TextReplace = textReplace;

/** Insert text in a position (WARNING: memory must be freed!) */
export function textInsert(text: string, insert: string, position: number): number {
	return (raylib.symbols.TextInsert as Function)(ptr(toCString(text)), ptr(toCString(insert)), position) as number;
}
/** @alias textInsert */
export const TextInsert = textInsert;

/** Join text strings with delimiter */
export function textJoin(textList: number, count: number, delimiter: string): string {
	const result = (raylib.symbols.TextJoin as Function)(textList, count, ptr(toCString(delimiter)));
	return result ? String(result) : "";
}
/** @alias textJoin */
export const TextJoin = textJoin;

/** Split text into multiple strings */
export function textSplit(text: string, delimiter: number, count: number): number {
	return (raylib.symbols.TextSplit as Function)(ptr(toCString(text)), delimiter, count) as number;
}
/** @alias textSplit */
export const TextSplit = textSplit;

/** Append text at specific position and move cursor! */
export function textAppend(text: string, append: string, position: number): void {
	(raylib.symbols.TextAppend as Function)(ptr(toCString(text)), ptr(toCString(append)), position);
}
/** @alias textAppend */
export const TextAppend = textAppend;

/** Find first text occurrence within a string */
export function textFindIndex(text: string, find: string): number {
	return (raylib.symbols.TextFindIndex as Function)(ptr(toCString(text)), ptr(toCString(find))) as number;
}
/** @alias textFindIndex */
export const TextFindIndex = textFindIndex;

/** Get upper case version of provided string */
export function textToUpper(text: string): string {
	const result = (raylib.symbols.TextToUpper as Function)(ptr(toCString(text)));
	return result ? String(result) : "";
}
/** @alias textToUpper */
export const TextToUpper = textToUpper;

/** Get lower case version of provided string */
export function textToLower(text: string): string {
	const result = (raylib.symbols.TextToLower as Function)(ptr(toCString(text)));
	return result ? String(result) : "";
}
/** @alias textToLower */
export const TextToLower = textToLower;

/** Get Pascal case notation version of provided string */
export function textToPascal(text: string): string {
	const result = (raylib.symbols.TextToPascal as Function)(ptr(toCString(text)));
	return result ? String(result) : "";
}
/** @alias textToPascal */
export const TextToPascal = textToPascal;

/** Get Snake case notation version of provided string */
export function textToSnake(text: string): string {
	const result = (raylib.symbols.TextToSnake as Function)(ptr(toCString(text)));
	return result ? String(result) : "";
}
/** @alias textToSnake */
export const TextToSnake = textToSnake;

/** Get Camel case notation version of provided string */
export function textToCamel(text: string): string {
	const result = (raylib.symbols.TextToCamel as Function)(ptr(toCString(text)));
	return result ? String(result) : "";
}
/** @alias textToCamel */
export const TextToCamel = textToCamel;

/** Get integer value from text (negative values not supported) */
export function textToInteger(text: string): number {
	return (raylib.symbols.TextToInteger as Function)(ptr(toCString(text))) as number;
}
/** @alias textToInteger */
export const TextToInteger = textToInteger;

/** Get float value from text (negative values not supported) */
export function textToFloat(text: string): number {
	return (raylib.symbols.TextToFloat as Function)(ptr(toCString(text))) as number;
}
/** @alias textToFloat */
export const TextToFloat = textToFloat;

/** Draw a line in 3D world space */
export function drawLine3D(startPos: Structs.Vector3, endPos: Structs.Vector3, color: Structs.Color): void {
	(raylib.symbols.DrawLine3D as Function)(ptr(startPos.rawBuffer), ptr(endPos.rawBuffer), color.toU32());
}
/** @alias drawLine3D */
export const DrawLine3D = drawLine3D;

/** Draw a point in 3D space, actually a small line */
export function drawPoint3D(position: Structs.Vector3, color: Structs.Color): void {
	(raylib.symbols.DrawPoint3D as Function)(ptr(position.rawBuffer), color.toU32());
}
/** @alias drawPoint3D */
export const DrawPoint3D = drawPoint3D;

/** Draw a circle in 3D world space */
export function drawCircle3D(center: Structs.Vector3, radius: number, rotationAxis: Structs.Vector3, rotationAngle: number, color: Structs.Color): void {
	(raylib.symbols.DrawCircle3D as Function)(ptr(center.rawBuffer), radius, ptr(rotationAxis.rawBuffer), rotationAngle, color.toU32());
}
/** @alias drawCircle3D */
export const DrawCircle3D = drawCircle3D;

/** Draw a color-filled triangle (vertex in counter-clockwise order!) */
export function drawTriangle3D(v1: Structs.Vector3, v2: Structs.Vector3, v3: Structs.Vector3, color: Structs.Color): void {
	(raylib.symbols.DrawTriangle3D as Function)(ptr(v1.rawBuffer), ptr(v2.rawBuffer), ptr(v3.rawBuffer), color.toU32());
}
/** @alias drawTriangle3D */
export const DrawTriangle3D = drawTriangle3D;

/** Draw a triangle strip defined by points */
export function drawTriangleStrip3D(points: number, pointCount: number, color: Structs.Color): void {
	(raylib.symbols.DrawTriangleStrip3D as Function)(points, pointCount, color.toU32());
}
/** @alias drawTriangleStrip3D */
export const DrawTriangleStrip3D = drawTriangleStrip3D;

/** Draw cube */
export function drawCube(position: Structs.Vector3, width: number, height: number, length: number, color: Structs.Color): void {
	(raylib.symbols.DrawCube as Function)(ptr(position.rawBuffer), width, height, length, color.toU32());
}
/** @alias drawCube */
export const DrawCube = drawCube;

/** Draw cube (Vector version) */
export function drawCubeV(position: Structs.Vector3, size: Structs.Vector3, color: Structs.Color): void {
	(raylib.symbols.DrawCubeV as Function)(ptr(position.rawBuffer), ptr(size.rawBuffer), color.toU32());
}
/** @alias drawCubeV */
export const DrawCubeV = drawCubeV;

/** Draw cube wires */
export function drawCubeWires(position: Structs.Vector3, width: number, height: number, length: number, color: Structs.Color): void {
	(raylib.symbols.DrawCubeWires as Function)(ptr(position.rawBuffer), width, height, length, color.toU32());
}
/** @alias drawCubeWires */
export const DrawCubeWires = drawCubeWires;

/** Draw cube wires (Vector version) */
export function drawCubeWiresV(position: Structs.Vector3, size: Structs.Vector3, color: Structs.Color): void {
	(raylib.symbols.DrawCubeWiresV as Function)(ptr(position.rawBuffer), ptr(size.rawBuffer), color.toU32());
}
/** @alias drawCubeWiresV */
export const DrawCubeWiresV = drawCubeWiresV;

/** Draw sphere */
export function drawSphere(centerPos: Structs.Vector3, radius: number, color: Structs.Color): void {
	(raylib.symbols.DrawSphere as Function)(ptr(centerPos.rawBuffer), radius, color.toU32());
}
/** @alias drawSphere */
export const DrawSphere = drawSphere;

/** Draw sphere with extended parameters */
export function drawSphereEx(centerPos: Structs.Vector3, radius: number, rings: number, slices: number, color: Structs.Color): void {
	(raylib.symbols.DrawSphereEx as Function)(ptr(centerPos.rawBuffer), radius, rings, slices, color.toU32());
}
/** @alias drawSphereEx */
export const DrawSphereEx = drawSphereEx;

/** Draw sphere wires */
export function drawSphereWires(centerPos: Structs.Vector3, radius: number, rings: number, slices: number, color: Structs.Color): void {
	(raylib.symbols.DrawSphereWires as Function)(ptr(centerPos.rawBuffer), radius, rings, slices, color.toU32());
}
/** @alias drawSphereWires */
export const DrawSphereWires = drawSphereWires;

/** Draw a cylinder/cone */
export function drawCylinder(position: Structs.Vector3, radiusTop: number, radiusBottom: number, height: number, slices: number, color: Structs.Color): void {
	(raylib.symbols.DrawCylinder as Function)(ptr(position.rawBuffer), radiusTop, radiusBottom, height, slices, color.toU32());
}
/** @alias drawCylinder */
export const DrawCylinder = drawCylinder;

/** Draw a cylinder with base at startPos and top at endPos */
export function drawCylinderEx(startPos: Structs.Vector3, endPos: Structs.Vector3, startRadius: number, endRadius: number, sides: number, color: Structs.Color): void {
	(raylib.symbols.DrawCylinderEx as Function)(ptr(startPos.rawBuffer), ptr(endPos.rawBuffer), startRadius, endRadius, sides, color.toU32());
}
/** @alias drawCylinderEx */
export const DrawCylinderEx = drawCylinderEx;

/** Draw a cylinder/cone wires */
export function drawCylinderWires(position: Structs.Vector3, radiusTop: number, radiusBottom: number, height: number, slices: number, color: Structs.Color): void {
	(raylib.symbols.DrawCylinderWires as Function)(ptr(position.rawBuffer), radiusTop, radiusBottom, height, slices, color.toU32());
}
/** @alias drawCylinderWires */
export const DrawCylinderWires = drawCylinderWires;

/** Draw a cylinder wires with base at startPos and top at endPos */
export function drawCylinderWiresEx(startPos: Structs.Vector3, endPos: Structs.Vector3, startRadius: number, endRadius: number, sides: number, color: Structs.Color): void {
	(raylib.symbols.DrawCylinderWiresEx as Function)(ptr(startPos.rawBuffer), ptr(endPos.rawBuffer), startRadius, endRadius, sides, color.toU32());
}
/** @alias drawCylinderWiresEx */
export const DrawCylinderWiresEx = drawCylinderWiresEx;

/** Draw a capsule with the center of its sphere caps at startPos and endPos */
export function drawCapsule(startPos: Structs.Vector3, endPos: Structs.Vector3, radius: number, slices: number, rings: number, color: Structs.Color): void {
	(raylib.symbols.DrawCapsule as Function)(ptr(startPos.rawBuffer), ptr(endPos.rawBuffer), radius, slices, rings, color.toU32());
}
/** @alias drawCapsule */
export const DrawCapsule = drawCapsule;

/** Draw capsule wireframe with the center of its sphere caps at startPos and endPos */
export function drawCapsuleWires(startPos: Structs.Vector3, endPos: Structs.Vector3, radius: number, slices: number, rings: number, color: Structs.Color): void {
	(raylib.symbols.DrawCapsuleWires as Function)(ptr(startPos.rawBuffer), ptr(endPos.rawBuffer), radius, slices, rings, color.toU32());
}
/** @alias drawCapsuleWires */
export const DrawCapsuleWires = drawCapsuleWires;

/** Draw a plane XZ */
export function drawPlane(centerPos: Structs.Vector3, size: Structs.Vector2, color: Structs.Color): void {
	(raylib.symbols.DrawPlane as Function)(ptr(centerPos.rawBuffer), size.toU64(), color.toU32());
}
/** @alias drawPlane */
export const DrawPlane = drawPlane;

/** Draw a ray line */
export function drawRay(ray: Structs.Ray, color: Structs.Color): void {
	(raylib.symbols.DrawRay as Function)(ptr(ray.rawBuffer), color.toU32());
}
/** @alias drawRay */
export const DrawRay = drawRay;

/** Draw a grid (centered at (0, 0, 0)) */
export function drawGrid(slices: number, spacing: number): void {
	(raylib.symbols.DrawGrid as Function)(slices, spacing);
}
/** @alias drawGrid */
export const DrawGrid = drawGrid;

/** Load model from files (meshes and materials) */
export function loadModel(fileName: string): Structs.Model {
	const result = (raylib.symbols.LoadModel as Function)(ptr(toCString(fileName)));
	return Structs.Model.fromPointer(result as Pointer);
}
/** @alias loadModel */
export const LoadModel = loadModel;

/** Load model from generated mesh (default material) */
export function loadModelFromMesh(mesh: Structs.Mesh): Structs.Model {
	const result = (raylib.symbols.LoadModelFromMesh as Function)(ptr(mesh.rawBuffer));
	return Structs.Model.fromPointer(result as Pointer);
}
/** @alias loadModelFromMesh */
export const LoadModelFromMesh = loadModelFromMesh;

/** Check if a model is valid (loaded in GPU, VAO/VBOs) */
export function isModelValid(model: Structs.Model): boolean {
	return (raylib.symbols.IsModelValid as Function)(ptr(model.rawBuffer)) as boolean;
}
/** @alias isModelValid */
export const IsModelValid = isModelValid;

/** Unload model (including meshes) from memory (RAM and/or VRAM) */
export function unloadModel(model: Structs.Model): void {
	(raylib.symbols.UnloadModel as Function)(ptr(model.rawBuffer));
}
/** @alias unloadModel */
export const UnloadModel = unloadModel;

/** Compute model bounding box limits (considers all meshes) */
export function getModelBoundingBox(model: Structs.Model): Structs.BoundingBox {
	const result = (raylib.symbols.GetModelBoundingBox as Function)(ptr(model.rawBuffer));
	return Structs.BoundingBox.fromPointer(result as Pointer);
}
/** @alias getModelBoundingBox */
export const GetModelBoundingBox = getModelBoundingBox;

/** Draw a model (with texture if set) */
export function drawModel(model: Structs.Model, position: Structs.Vector3, scale: number, tint: Structs.Color): void {
	(raylib.symbols.DrawModel as Function)(ptr(model.rawBuffer), ptr(position.rawBuffer), scale, tint.toU32());
}
/** @alias drawModel */
export const DrawModel = drawModel;

/** Draw a model with extended parameters */
export function drawModelEx(model: Structs.Model, position: Structs.Vector3, rotationAxis: Structs.Vector3, rotationAngle: number, scale: Structs.Vector3, tint: Structs.Color): void {
	(raylib.symbols.DrawModelEx as Function)(ptr(model.rawBuffer), ptr(position.rawBuffer), ptr(rotationAxis.rawBuffer), rotationAngle, ptr(scale.rawBuffer), tint.toU32());
}
/** @alias drawModelEx */
export const DrawModelEx = drawModelEx;

/** Draw a model wires (with texture if set) */
export function drawModelWires(model: Structs.Model, position: Structs.Vector3, scale: number, tint: Structs.Color): void {
	(raylib.symbols.DrawModelWires as Function)(ptr(model.rawBuffer), ptr(position.rawBuffer), scale, tint.toU32());
}
/** @alias drawModelWires */
export const DrawModelWires = drawModelWires;

/** Draw a model wires (with texture if set) with extended parameters */
export function drawModelWiresEx(model: Structs.Model, position: Structs.Vector3, rotationAxis: Structs.Vector3, rotationAngle: number, scale: Structs.Vector3, tint: Structs.Color): void {
	(raylib.symbols.DrawModelWiresEx as Function)(ptr(model.rawBuffer), ptr(position.rawBuffer), ptr(rotationAxis.rawBuffer), rotationAngle, ptr(scale.rawBuffer), tint.toU32());
}
/** @alias drawModelWiresEx */
export const DrawModelWiresEx = drawModelWiresEx;

/** Draw a model as points */
export function drawModelPoints(model: Structs.Model, position: Structs.Vector3, scale: number, tint: Structs.Color): void {
	(raylib.symbols.DrawModelPoints as Function)(ptr(model.rawBuffer), ptr(position.rawBuffer), scale, tint.toU32());
}
/** @alias drawModelPoints */
export const DrawModelPoints = drawModelPoints;

/** Draw a model as points with extended parameters */
export function drawModelPointsEx(model: Structs.Model, position: Structs.Vector3, rotationAxis: Structs.Vector3, rotationAngle: number, scale: Structs.Vector3, tint: Structs.Color): void {
	(raylib.symbols.DrawModelPointsEx as Function)(ptr(model.rawBuffer), ptr(position.rawBuffer), ptr(rotationAxis.rawBuffer), rotationAngle, ptr(scale.rawBuffer), tint.toU32());
}
/** @alias drawModelPointsEx */
export const DrawModelPointsEx = drawModelPointsEx;

/** Draw bounding box (wires) */
export function drawBoundingBox(box: Structs.BoundingBox, color: Structs.Color): void {
	(raylib.symbols.DrawBoundingBox as Function)(ptr(box.rawBuffer), color.toU32());
}
/** @alias drawBoundingBox */
export const DrawBoundingBox = drawBoundingBox;

/** Draw a billboard texture */
export function drawBillboard(camera: Structs.Camera3D, texture: Structs.Texture, position: Structs.Vector3, scale: number, tint: Structs.Color): void {
	(raylib.symbols.DrawBillboard as Function)(ptr(camera.rawBuffer), ptr(texture.rawBuffer), ptr(position.rawBuffer), scale, tint.toU32());
}
/** @alias drawBillboard */
export const DrawBillboard = drawBillboard;

/** Draw a billboard texture defined by source */
export function drawBillboardRec(camera: Structs.Camera3D, texture: Structs.Texture, source: Structs.Rectangle, position: Structs.Vector3, size: Structs.Vector2, tint: Structs.Color): void {
	(raylib.symbols.DrawBillboardRec as Function)(ptr(camera.rawBuffer), ptr(texture.rawBuffer), ptr(source.rawBuffer), ptr(position.rawBuffer), size.toU64(), tint.toU32());
}
/** @alias drawBillboardRec */
export const DrawBillboardRec = drawBillboardRec;

/** Draw a billboard texture defined by source and rotation */
export function drawBillboardPro(camera: Structs.Camera3D, texture: Structs.Texture, source: Structs.Rectangle, position: Structs.Vector3, up: Structs.Vector3, size: Structs.Vector2, origin: Structs.Vector2, rotation: number, tint: Structs.Color): void {
	(raylib.symbols.DrawBillboardPro as Function)(ptr(camera.rawBuffer), ptr(texture.rawBuffer), ptr(source.rawBuffer), ptr(position.rawBuffer), ptr(up.rawBuffer), size.toU64(), origin.toU64(), rotation, tint.toU32());
}
/** @alias drawBillboardPro */
export const DrawBillboardPro = drawBillboardPro;

/** Upload mesh vertex data in GPU and provide VAO/VBO ids */
export function uploadMesh(mesh: number, dynamic: boolean): void {
	(raylib.symbols.UploadMesh as Function)(mesh, dynamic);
}
/** @alias uploadMesh */
export const UploadMesh = uploadMesh;

/** Update mesh vertex data in GPU for a specific buffer index */
export function updateMeshBuffer(mesh: Structs.Mesh, index: number, data: number, dataSize: number, offset: number): void {
	(raylib.symbols.UpdateMeshBuffer as Function)(ptr(mesh.rawBuffer), index, data, dataSize, offset);
}
/** @alias updateMeshBuffer */
export const UpdateMeshBuffer = updateMeshBuffer;

/** Unload mesh data from CPU and GPU */
export function unloadMesh(mesh: Structs.Mesh): void {
	(raylib.symbols.UnloadMesh as Function)(ptr(mesh.rawBuffer));
}
/** @alias unloadMesh */
export const UnloadMesh = unloadMesh;

/** Draw a 3d mesh with material and transform */
export function drawMesh(mesh: Structs.Mesh, material: Structs.Material, transform: Structs.Matrix): void {
	(raylib.symbols.DrawMesh as Function)(ptr(mesh.rawBuffer), ptr(material.rawBuffer), ptr(transform.rawBuffer));
}
/** @alias drawMesh */
export const DrawMesh = drawMesh;

/** Draw multiple mesh instances with material and different transforms */
export function drawMeshInstanced(mesh: Structs.Mesh, material: Structs.Material, transforms: number, instances: number): void {
	(raylib.symbols.DrawMeshInstanced as Function)(ptr(mesh.rawBuffer), ptr(material.rawBuffer), transforms, instances);
}
/** @alias drawMeshInstanced */
export const DrawMeshInstanced = drawMeshInstanced;

/** Compute mesh bounding box limits */
export function getMeshBoundingBox(mesh: Structs.Mesh): Structs.BoundingBox {
	const result = (raylib.symbols.GetMeshBoundingBox as Function)(ptr(mesh.rawBuffer));
	return Structs.BoundingBox.fromPointer(result as Pointer);
}
/** @alias getMeshBoundingBox */
export const GetMeshBoundingBox = getMeshBoundingBox;

/** Compute mesh tangents */
export function genMeshTangents(mesh: number): void {
	(raylib.symbols.GenMeshTangents as Function)(mesh);
}
/** @alias genMeshTangents */
export const GenMeshTangents = genMeshTangents;

/** Export mesh data to file, returns true on success */
export function exportMesh(mesh: Structs.Mesh, fileName: string): boolean {
	return (raylib.symbols.ExportMesh as Function)(ptr(mesh.rawBuffer), ptr(toCString(fileName))) as boolean;
}
/** @alias exportMesh */
export const ExportMesh = exportMesh;

/** Export mesh as code file (.h) defining multiple arrays of vertex attributes */
export function exportMeshAsCode(mesh: Structs.Mesh, fileName: string): boolean {
	return (raylib.symbols.ExportMeshAsCode as Function)(ptr(mesh.rawBuffer), ptr(toCString(fileName))) as boolean;
}
/** @alias exportMeshAsCode */
export const ExportMeshAsCode = exportMeshAsCode;

/** Generate polygonal mesh */
export function genMeshPoly(sides: number, radius: number): Structs.Mesh {
	const result = (raylib.symbols.GenMeshPoly as Function)(sides, radius);
	return Structs.Mesh.fromPointer(result as Pointer);
}
/** @alias genMeshPoly */
export const GenMeshPoly = genMeshPoly;

/** Generate plane mesh (with subdivisions) */
export function genMeshPlane(width: number, length: number, resX: number, resZ: number): Structs.Mesh {
	const result = (raylib.symbols.GenMeshPlane as Function)(width, length, resX, resZ);
	return Structs.Mesh.fromPointer(result as Pointer);
}
/** @alias genMeshPlane */
export const GenMeshPlane = genMeshPlane;

/** Generate cuboid mesh */
export function genMeshCube(width: number, height: number, length: number): Structs.Mesh {
	const result = (raylib.symbols.GenMeshCube as Function)(width, height, length);
	return Structs.Mesh.fromPointer(result as Pointer);
}
/** @alias genMeshCube */
export const GenMeshCube = genMeshCube;

/** Generate sphere mesh (standard sphere) */
export function genMeshSphere(radius: number, rings: number, slices: number): Structs.Mesh {
	const result = (raylib.symbols.GenMeshSphere as Function)(radius, rings, slices);
	return Structs.Mesh.fromPointer(result as Pointer);
}
/** @alias genMeshSphere */
export const GenMeshSphere = genMeshSphere;

/** Generate half-sphere mesh (no bottom cap) */
export function genMeshHemiSphere(radius: number, rings: number, slices: number): Structs.Mesh {
	const result = (raylib.symbols.GenMeshHemiSphere as Function)(radius, rings, slices);
	return Structs.Mesh.fromPointer(result as Pointer);
}
/** @alias genMeshHemiSphere */
export const GenMeshHemiSphere = genMeshHemiSphere;

/** Generate cylinder mesh */
export function genMeshCylinder(radius: number, height: number, slices: number): Structs.Mesh {
	const result = (raylib.symbols.GenMeshCylinder as Function)(radius, height, slices);
	return Structs.Mesh.fromPointer(result as Pointer);
}
/** @alias genMeshCylinder */
export const GenMeshCylinder = genMeshCylinder;

/** Generate cone/pyramid mesh */
export function genMeshCone(radius: number, height: number, slices: number): Structs.Mesh {
	const result = (raylib.symbols.GenMeshCone as Function)(radius, height, slices);
	return Structs.Mesh.fromPointer(result as Pointer);
}
/** @alias genMeshCone */
export const GenMeshCone = genMeshCone;

/** Generate torus mesh */
export function genMeshTorus(radius: number, size: number, radSeg: number, sides: number): Structs.Mesh {
	const result = (raylib.symbols.GenMeshTorus as Function)(radius, size, radSeg, sides);
	return Structs.Mesh.fromPointer(result as Pointer);
}
/** @alias genMeshTorus */
export const GenMeshTorus = genMeshTorus;

/** Generate trefoil knot mesh */
export function genMeshKnot(radius: number, size: number, radSeg: number, sides: number): Structs.Mesh {
	const result = (raylib.symbols.GenMeshKnot as Function)(radius, size, radSeg, sides);
	return Structs.Mesh.fromPointer(result as Pointer);
}
/** @alias genMeshKnot */
export const GenMeshKnot = genMeshKnot;

/** Generate heightmap mesh from image data */
export function genMeshHeightmap(heightmap: Structs.Image, size: Structs.Vector3): Structs.Mesh {
	const result = (raylib.symbols.GenMeshHeightmap as Function)(ptr(heightmap.rawBuffer), ptr(size.rawBuffer));
	return Structs.Mesh.fromPointer(result as Pointer);
}
/** @alias genMeshHeightmap */
export const GenMeshHeightmap = genMeshHeightmap;

/** Generate cubes-based map mesh from image data */
export function genMeshCubicmap(cubicmap: Structs.Image, cubeSize: Structs.Vector3): Structs.Mesh {
	const result = (raylib.symbols.GenMeshCubicmap as Function)(ptr(cubicmap.rawBuffer), ptr(cubeSize.rawBuffer));
	return Structs.Mesh.fromPointer(result as Pointer);
}
/** @alias genMeshCubicmap */
export const GenMeshCubicmap = genMeshCubicmap;

/** Load materials from model file */
export function loadMaterials(fileName: string, materialCount: number): number {
	return (raylib.symbols.LoadMaterials as Function)(ptr(toCString(fileName)), materialCount) as number;
}
/** @alias loadMaterials */
export const LoadMaterials = loadMaterials;

/** Load default material (Supports: DIFFUSE, SPECULAR, NORMAL maps) */
export function loadMaterialDefault(): Structs.Material {
	const result = (raylib.symbols.LoadMaterialDefault as Function)();
	return Structs.Material.fromPointer(result as Pointer);
}
/** @alias loadMaterialDefault */
export const LoadMaterialDefault = loadMaterialDefault;

/** Check if a material is valid (shader assigned, map textures loaded in GPU) */
export function isMaterialValid(material: Structs.Material): boolean {
	return (raylib.symbols.IsMaterialValid as Function)(ptr(material.rawBuffer)) as boolean;
}
/** @alias isMaterialValid */
export const IsMaterialValid = isMaterialValid;

/** Unload material from GPU memory (VRAM) */
export function unloadMaterial(material: Structs.Material): void {
	(raylib.symbols.UnloadMaterial as Function)(ptr(material.rawBuffer));
}
/** @alias unloadMaterial */
export const UnloadMaterial = unloadMaterial;

/** Set texture for a material map type (MATERIAL_MAP_DIFFUSE, MATERIAL_MAP_SPECULAR...) */
export function setMaterialTexture(material: number, mapType: number, texture: Structs.Texture): void {
	(raylib.symbols.SetMaterialTexture as Function)(material, mapType, ptr(texture.rawBuffer));
}
/** @alias setMaterialTexture */
export const SetMaterialTexture = setMaterialTexture;

/** Set material for a mesh */
export function setModelMeshMaterial(model: number, meshId: number, materialId: number): void {
	(raylib.symbols.SetModelMeshMaterial as Function)(model, meshId, materialId);
}
/** @alias setModelMeshMaterial */
export const SetModelMeshMaterial = setModelMeshMaterial;

/** Load model animations from file */
export function loadModelAnimations(fileName: string, animCount: number): number {
	return (raylib.symbols.LoadModelAnimations as Function)(ptr(toCString(fileName)), animCount) as number;
}
/** @alias loadModelAnimations */
export const LoadModelAnimations = loadModelAnimations;

/** Update model animation pose (CPU) */
export function updateModelAnimation(model: Structs.Model, anim: Structs.ModelAnimation, frame: number): void {
	(raylib.symbols.UpdateModelAnimation as Function)(ptr(model.rawBuffer), ptr(anim.rawBuffer), frame);
}
/** @alias updateModelAnimation */
export const UpdateModelAnimation = updateModelAnimation;

/** Update model animation mesh bone matrices (GPU skinning) */
export function updateModelAnimationBones(model: Structs.Model, anim: Structs.ModelAnimation, frame: number): void {
	(raylib.symbols.UpdateModelAnimationBones as Function)(ptr(model.rawBuffer), ptr(anim.rawBuffer), frame);
}
/** @alias updateModelAnimationBones */
export const UpdateModelAnimationBones = updateModelAnimationBones;

/** Unload animation data */
export function unloadModelAnimation(anim: Structs.ModelAnimation): void {
	(raylib.symbols.UnloadModelAnimation as Function)(ptr(anim.rawBuffer));
}
/** @alias unloadModelAnimation */
export const UnloadModelAnimation = unloadModelAnimation;

/** Unload animation array data */
export function unloadModelAnimations(animations: number, animCount: number): void {
	(raylib.symbols.UnloadModelAnimations as Function)(animations, animCount);
}
/** @alias unloadModelAnimations */
export const UnloadModelAnimations = unloadModelAnimations;

/** Check model animation skeleton match */
export function isModelAnimationValid(model: Structs.Model, anim: Structs.ModelAnimation): boolean {
	return (raylib.symbols.IsModelAnimationValid as Function)(ptr(model.rawBuffer), ptr(anim.rawBuffer)) as boolean;
}
/** @alias isModelAnimationValid */
export const IsModelAnimationValid = isModelAnimationValid;

/** Check collision between two spheres */
export function checkCollisionSpheres(center1: Structs.Vector3, radius1: number, center2: Structs.Vector3, radius2: number): boolean {
	return (raylib.symbols.CheckCollisionSpheres as Function)(ptr(center1.rawBuffer), radius1, ptr(center2.rawBuffer), radius2) as boolean;
}
/** @alias checkCollisionSpheres */
export const CheckCollisionSpheres = checkCollisionSpheres;

/** Check collision between two bounding boxes */
export function checkCollisionBoxes(box1: Structs.BoundingBox, box2: Structs.BoundingBox): boolean {
	return (raylib.symbols.CheckCollisionBoxes as Function)(ptr(box1.rawBuffer), ptr(box2.rawBuffer)) as boolean;
}
/** @alias checkCollisionBoxes */
export const CheckCollisionBoxes = checkCollisionBoxes;

/** Check collision between box and sphere */
export function checkCollisionBoxSphere(box: Structs.BoundingBox, center: Structs.Vector3, radius: number): boolean {
	return (raylib.symbols.CheckCollisionBoxSphere as Function)(ptr(box.rawBuffer), ptr(center.rawBuffer), radius) as boolean;
}
/** @alias checkCollisionBoxSphere */
export const CheckCollisionBoxSphere = checkCollisionBoxSphere;

/** Get collision info between ray and sphere */
export function getRayCollisionSphere(ray: Structs.Ray, center: Structs.Vector3, radius: number): Structs.RayCollision {
	const result = (raylib.symbols.GetRayCollisionSphere as Function)(ptr(ray.rawBuffer), ptr(center.rawBuffer), radius);
	return Structs.RayCollision.fromPointer(result as Pointer);
}
/** @alias getRayCollisionSphere */
export const GetRayCollisionSphere = getRayCollisionSphere;

/** Get collision info between ray and box */
export function getRayCollisionBox(ray: Structs.Ray, box: Structs.BoundingBox): Structs.RayCollision {
	const result = (raylib.symbols.GetRayCollisionBox as Function)(ptr(ray.rawBuffer), ptr(box.rawBuffer));
	return Structs.RayCollision.fromPointer(result as Pointer);
}
/** @alias getRayCollisionBox */
export const GetRayCollisionBox = getRayCollisionBox;

/** Get collision info between ray and mesh */
export function getRayCollisionMesh(ray: Structs.Ray, mesh: Structs.Mesh, transform: Structs.Matrix): Structs.RayCollision {
	const result = (raylib.symbols.GetRayCollisionMesh as Function)(ptr(ray.rawBuffer), ptr(mesh.rawBuffer), ptr(transform.rawBuffer));
	return Structs.RayCollision.fromPointer(result as Pointer);
}
/** @alias getRayCollisionMesh */
export const GetRayCollisionMesh = getRayCollisionMesh;

/** Get collision info between ray and triangle */
export function getRayCollisionTriangle(ray: Structs.Ray, p1: Structs.Vector3, p2: Structs.Vector3, p3: Structs.Vector3): Structs.RayCollision {
	const result = (raylib.symbols.GetRayCollisionTriangle as Function)(ptr(ray.rawBuffer), ptr(p1.rawBuffer), ptr(p2.rawBuffer), ptr(p3.rawBuffer));
	return Structs.RayCollision.fromPointer(result as Pointer);
}
/** @alias getRayCollisionTriangle */
export const GetRayCollisionTriangle = getRayCollisionTriangle;

/** Get collision info between ray and quad */
export function getRayCollisionQuad(ray: Structs.Ray, p1: Structs.Vector3, p2: Structs.Vector3, p3: Structs.Vector3, p4: Structs.Vector3): Structs.RayCollision {
	const result = (raylib.symbols.GetRayCollisionQuad as Function)(ptr(ray.rawBuffer), ptr(p1.rawBuffer), ptr(p2.rawBuffer), ptr(p3.rawBuffer), ptr(p4.rawBuffer));
	return Structs.RayCollision.fromPointer(result as Pointer);
}
/** @alias getRayCollisionQuad */
export const GetRayCollisionQuad = getRayCollisionQuad;

/** Initialize audio device and context */
export function initAudioDevice(): void {
	(raylib.symbols.InitAudioDevice as Function)();
}
/** @alias initAudioDevice */
export const InitAudioDevice = initAudioDevice;

/** Close the audio device and context */
export function closeAudioDevice(): void {
	(raylib.symbols.CloseAudioDevice as Function)();
}
/** @alias closeAudioDevice */
export const CloseAudioDevice = closeAudioDevice;

/** Check if audio device has been initialized successfully */
export function isAudioDeviceReady(): boolean {
	return (raylib.symbols.IsAudioDeviceReady as Function)() as boolean;
}
/** @alias isAudioDeviceReady */
export const IsAudioDeviceReady = isAudioDeviceReady;

/** Set master volume (listener) */
export function setMasterVolume(volume: number): void {
	(raylib.symbols.SetMasterVolume as Function)(volume);
}
/** @alias setMasterVolume */
export const SetMasterVolume = setMasterVolume;

/** Get master volume (listener) */
export function getMasterVolume(): number {
	return (raylib.symbols.GetMasterVolume as Function)() as number;
}
/** @alias getMasterVolume */
export const GetMasterVolume = getMasterVolume;

/** Load wave data from file */
export function loadWave(fileName: string): Structs.Wave {
	const result = (raylib.symbols.LoadWave as Function)(ptr(toCString(fileName)));
	return Structs.Wave.fromPointer(result as Pointer);
}
/** @alias loadWave */
export const LoadWave = loadWave;

/** Load wave from memory buffer, fileType refers to extension: i.e. '.wav' */
export function loadWaveFromMemory(fileType: string, fileData: number, dataSize: number): Structs.Wave {
	const result = (raylib.symbols.LoadWaveFromMemory as Function)(ptr(toCString(fileType)), fileData, dataSize);
	return Structs.Wave.fromPointer(result as Pointer);
}
/** @alias loadWaveFromMemory */
export const LoadWaveFromMemory = loadWaveFromMemory;

/** Checks if wave data is valid (data loaded and parameters) */
export function isWaveValid(wave: Structs.Wave): boolean {
	return (raylib.symbols.IsWaveValid as Function)(ptr(wave.rawBuffer)) as boolean;
}
/** @alias isWaveValid */
export const IsWaveValid = isWaveValid;

/** Load sound from file */
export function loadSound(fileName: string): Structs.Sound {
	const result = (raylib.symbols.LoadSound as Function)(ptr(toCString(fileName)));
	return Structs.Sound.fromPointer(result as Pointer);
}
/** @alias loadSound */
export const LoadSound = loadSound;

/** Load sound from wave data */
export function loadSoundFromWave(wave: Structs.Wave): Structs.Sound {
	const result = (raylib.symbols.LoadSoundFromWave as Function)(ptr(wave.rawBuffer));
	return Structs.Sound.fromPointer(result as Pointer);
}
/** @alias loadSoundFromWave */
export const LoadSoundFromWave = loadSoundFromWave;

/** Create a new sound that shares the same sample data as the source sound, does not own the sound data */
export function loadSoundAlias(source: Structs.Sound): Structs.Sound {
	const result = (raylib.symbols.LoadSoundAlias as Function)(ptr(source.rawBuffer));
	return Structs.Sound.fromPointer(result as Pointer);
}
/** @alias loadSoundAlias */
export const LoadSoundAlias = loadSoundAlias;

/** Checks if a sound is valid (data loaded and buffers initialized) */
export function isSoundValid(sound: Structs.Sound): boolean {
	return (raylib.symbols.IsSoundValid as Function)(ptr(sound.rawBuffer)) as boolean;
}
/** @alias isSoundValid */
export const IsSoundValid = isSoundValid;

/** Update sound buffer with new data */
export function updateSound(sound: Structs.Sound, data: number, sampleCount: number): void {
	(raylib.symbols.UpdateSound as Function)(ptr(sound.rawBuffer), data, sampleCount);
}
/** @alias updateSound */
export const UpdateSound = updateSound;

/** Unload wave data */
export function unloadWave(wave: Structs.Wave): void {
	(raylib.symbols.UnloadWave as Function)(ptr(wave.rawBuffer));
}
/** @alias unloadWave */
export const UnloadWave = unloadWave;

/** Unload sound */
export function unloadSound(sound: Structs.Sound): void {
	(raylib.symbols.UnloadSound as Function)(ptr(sound.rawBuffer));
}
/** @alias unloadSound */
export const UnloadSound = unloadSound;

/** Unload a sound alias (does not deallocate sample data) */
export function unloadSoundAlias(alias: Structs.Sound): void {
	(raylib.symbols.UnloadSoundAlias as Function)(ptr(alias.rawBuffer));
}
/** @alias unloadSoundAlias */
export const UnloadSoundAlias = unloadSoundAlias;

/** Export wave data to file, returns true on success */
export function exportWave(wave: Structs.Wave, fileName: string): boolean {
	return (raylib.symbols.ExportWave as Function)(ptr(wave.rawBuffer), ptr(toCString(fileName))) as boolean;
}
/** @alias exportWave */
export const ExportWave = exportWave;

/** Export wave sample data to code (.h), returns true on success */
export function exportWaveAsCode(wave: Structs.Wave, fileName: string): boolean {
	return (raylib.symbols.ExportWaveAsCode as Function)(ptr(wave.rawBuffer), ptr(toCString(fileName))) as boolean;
}
/** @alias exportWaveAsCode */
export const ExportWaveAsCode = exportWaveAsCode;

/** Play a sound */
export function playSound(sound: Structs.Sound): void {
	(raylib.symbols.PlaySound as Function)(ptr(sound.rawBuffer));
}
/** @alias playSound */
export const PlaySound = playSound;

/** Stop playing a sound */
export function stopSound(sound: Structs.Sound): void {
	(raylib.symbols.StopSound as Function)(ptr(sound.rawBuffer));
}
/** @alias stopSound */
export const StopSound = stopSound;

/** Pause a sound */
export function pauseSound(sound: Structs.Sound): void {
	(raylib.symbols.PauseSound as Function)(ptr(sound.rawBuffer));
}
/** @alias pauseSound */
export const PauseSound = pauseSound;

/** Resume a paused sound */
export function resumeSound(sound: Structs.Sound): void {
	(raylib.symbols.ResumeSound as Function)(ptr(sound.rawBuffer));
}
/** @alias resumeSound */
export const ResumeSound = resumeSound;

/** Check if a sound is currently playing */
export function isSoundPlaying(sound: Structs.Sound): boolean {
	return (raylib.symbols.IsSoundPlaying as Function)(ptr(sound.rawBuffer)) as boolean;
}
/** @alias isSoundPlaying */
export const IsSoundPlaying = isSoundPlaying;

/** Set volume for a sound (1.0 is max level) */
export function setSoundVolume(sound: Structs.Sound, volume: number): void {
	(raylib.symbols.SetSoundVolume as Function)(ptr(sound.rawBuffer), volume);
}
/** @alias setSoundVolume */
export const SetSoundVolume = setSoundVolume;

/** Set pitch for a sound (1.0 is base level) */
export function setSoundPitch(sound: Structs.Sound, pitch: number): void {
	(raylib.symbols.SetSoundPitch as Function)(ptr(sound.rawBuffer), pitch);
}
/** @alias setSoundPitch */
export const SetSoundPitch = setSoundPitch;

/** Set pan for a sound (0.5 is center) */
export function setSoundPan(sound: Structs.Sound, pan: number): void {
	(raylib.symbols.SetSoundPan as Function)(ptr(sound.rawBuffer), pan);
}
/** @alias setSoundPan */
export const SetSoundPan = setSoundPan;

/** Copy a wave to a new wave */
export function waveCopy(wave: Structs.Wave): Structs.Wave {
	const result = (raylib.symbols.WaveCopy as Function)(ptr(wave.rawBuffer));
	return Structs.Wave.fromPointer(result as Pointer);
}
/** @alias waveCopy */
export const WaveCopy = waveCopy;

/** Crop a wave to defined frames range */
export function waveCrop(wave: number, initFrame: number, finalFrame: number): void {
	(raylib.symbols.WaveCrop as Function)(wave, initFrame, finalFrame);
}
/** @alias waveCrop */
export const WaveCrop = waveCrop;

/** Convert wave data to desired format */
export function waveFormat(wave: number, sampleRate: number, sampleSize: number, channels: number): void {
	(raylib.symbols.WaveFormat as Function)(wave, sampleRate, sampleSize, channels);
}
/** @alias waveFormat */
export const WaveFormat = waveFormat;

/** Load samples data from wave as a 32bit float data array */
export function loadWaveSamples(wave: Structs.Wave): number {
	return (raylib.symbols.LoadWaveSamples as Function)(ptr(wave.rawBuffer)) as number;
}
/** @alias loadWaveSamples */
export const LoadWaveSamples = loadWaveSamples;

/** Unload samples data loaded with LoadWaveSamples() */
export function unloadWaveSamples(samples: number): void {
	(raylib.symbols.UnloadWaveSamples as Function)(samples);
}
/** @alias unloadWaveSamples */
export const UnloadWaveSamples = unloadWaveSamples;

/** Load music stream from file */
export function loadMusicStream(fileName: string): Structs.Music {
	const result = (raylib.symbols.LoadMusicStream as Function)(ptr(toCString(fileName)));
	return Structs.Music.fromPointer(result as Pointer);
}
/** @alias loadMusicStream */
export const LoadMusicStream = loadMusicStream;

/** Load music stream from data */
export function loadMusicStreamFromMemory(fileType: string, data: number, dataSize: number): Structs.Music {
	const result = (raylib.symbols.LoadMusicStreamFromMemory as Function)(ptr(toCString(fileType)), data, dataSize);
	return Structs.Music.fromPointer(result as Pointer);
}
/** @alias loadMusicStreamFromMemory */
export const LoadMusicStreamFromMemory = loadMusicStreamFromMemory;

/** Checks if a music stream is valid (context and buffers initialized) */
export function isMusicValid(music: Structs.Music): boolean {
	return (raylib.symbols.IsMusicValid as Function)(ptr(music.rawBuffer)) as boolean;
}
/** @alias isMusicValid */
export const IsMusicValid = isMusicValid;

/** Unload music stream */
export function unloadMusicStream(music: Structs.Music): void {
	(raylib.symbols.UnloadMusicStream as Function)(ptr(music.rawBuffer));
}
/** @alias unloadMusicStream */
export const UnloadMusicStream = unloadMusicStream;

/** Start music playing */
export function playMusicStream(music: Structs.Music): void {
	(raylib.symbols.PlayMusicStream as Function)(ptr(music.rawBuffer));
}
/** @alias playMusicStream */
export const PlayMusicStream = playMusicStream;

/** Check if music is playing */
export function isMusicStreamPlaying(music: Structs.Music): boolean {
	return (raylib.symbols.IsMusicStreamPlaying as Function)(ptr(music.rawBuffer)) as boolean;
}
/** @alias isMusicStreamPlaying */
export const IsMusicStreamPlaying = isMusicStreamPlaying;

/** Updates buffers for music streaming */
export function updateMusicStream(music: Structs.Music): void {
	(raylib.symbols.UpdateMusicStream as Function)(ptr(music.rawBuffer));
}
/** @alias updateMusicStream */
export const UpdateMusicStream = updateMusicStream;

/** Stop music playing */
export function stopMusicStream(music: Structs.Music): void {
	(raylib.symbols.StopMusicStream as Function)(ptr(music.rawBuffer));
}
/** @alias stopMusicStream */
export const StopMusicStream = stopMusicStream;

/** Pause music playing */
export function pauseMusicStream(music: Structs.Music): void {
	(raylib.symbols.PauseMusicStream as Function)(ptr(music.rawBuffer));
}
/** @alias pauseMusicStream */
export const PauseMusicStream = pauseMusicStream;

/** Resume playing paused music */
export function resumeMusicStream(music: Structs.Music): void {
	(raylib.symbols.ResumeMusicStream as Function)(ptr(music.rawBuffer));
}
/** @alias resumeMusicStream */
export const ResumeMusicStream = resumeMusicStream;

/** Seek music to a position (in seconds) */
export function seekMusicStream(music: Structs.Music, position: number): void {
	(raylib.symbols.SeekMusicStream as Function)(ptr(music.rawBuffer), position);
}
/** @alias seekMusicStream */
export const SeekMusicStream = seekMusicStream;

/** Set volume for music (1.0 is max level) */
export function setMusicVolume(music: Structs.Music, volume: number): void {
	(raylib.symbols.SetMusicVolume as Function)(ptr(music.rawBuffer), volume);
}
/** @alias setMusicVolume */
export const SetMusicVolume = setMusicVolume;

/** Set pitch for a music (1.0 is base level) */
export function setMusicPitch(music: Structs.Music, pitch: number): void {
	(raylib.symbols.SetMusicPitch as Function)(ptr(music.rawBuffer), pitch);
}
/** @alias setMusicPitch */
export const SetMusicPitch = setMusicPitch;

/** Set pan for a music (0.5 is center) */
export function setMusicPan(music: Structs.Music, pan: number): void {
	(raylib.symbols.SetMusicPan as Function)(ptr(music.rawBuffer), pan);
}
/** @alias setMusicPan */
export const SetMusicPan = setMusicPan;

/** Get music time length (in seconds) */
export function getMusicTimeLength(music: Structs.Music): number {
	return (raylib.symbols.GetMusicTimeLength as Function)(ptr(music.rawBuffer)) as number;
}
/** @alias getMusicTimeLength */
export const GetMusicTimeLength = getMusicTimeLength;

/** Get current music time played (in seconds) */
export function getMusicTimePlayed(music: Structs.Music): number {
	return (raylib.symbols.GetMusicTimePlayed as Function)(ptr(music.rawBuffer)) as number;
}
/** @alias getMusicTimePlayed */
export const GetMusicTimePlayed = getMusicTimePlayed;

/** Load audio stream (to stream raw audio pcm data) */
export function loadAudioStream(sampleRate: number, sampleSize: number, channels: number): Structs.AudioStream {
	const result = (raylib.symbols.LoadAudioStream as Function)(sampleRate, sampleSize, channels);
	return Structs.AudioStream.fromPointer(result as Pointer);
}
/** @alias loadAudioStream */
export const LoadAudioStream = loadAudioStream;

/** Checks if an audio stream is valid (buffers initialized) */
export function isAudioStreamValid(stream: Structs.AudioStream): boolean {
	return (raylib.symbols.IsAudioStreamValid as Function)(ptr(stream.rawBuffer)) as boolean;
}
/** @alias isAudioStreamValid */
export const IsAudioStreamValid = isAudioStreamValid;

/** Unload audio stream and free memory */
export function unloadAudioStream(stream: Structs.AudioStream): void {
	(raylib.symbols.UnloadAudioStream as Function)(ptr(stream.rawBuffer));
}
/** @alias unloadAudioStream */
export const UnloadAudioStream = unloadAudioStream;

/** Update audio stream buffers with data */
export function updateAudioStream(stream: Structs.AudioStream, data: number, frameCount: number): void {
	(raylib.symbols.UpdateAudioStream as Function)(ptr(stream.rawBuffer), data, frameCount);
}
/** @alias updateAudioStream */
export const UpdateAudioStream = updateAudioStream;

/** Check if any audio stream buffers requires refill */
export function isAudioStreamProcessed(stream: Structs.AudioStream): boolean {
	return (raylib.symbols.IsAudioStreamProcessed as Function)(ptr(stream.rawBuffer)) as boolean;
}
/** @alias isAudioStreamProcessed */
export const IsAudioStreamProcessed = isAudioStreamProcessed;

/** Play audio stream */
export function playAudioStream(stream: Structs.AudioStream): void {
	(raylib.symbols.PlayAudioStream as Function)(ptr(stream.rawBuffer));
}
/** @alias playAudioStream */
export const PlayAudioStream = playAudioStream;

/** Pause audio stream */
export function pauseAudioStream(stream: Structs.AudioStream): void {
	(raylib.symbols.PauseAudioStream as Function)(ptr(stream.rawBuffer));
}
/** @alias pauseAudioStream */
export const PauseAudioStream = pauseAudioStream;

/** Resume audio stream */
export function resumeAudioStream(stream: Structs.AudioStream): void {
	(raylib.symbols.ResumeAudioStream as Function)(ptr(stream.rawBuffer));
}
/** @alias resumeAudioStream */
export const ResumeAudioStream = resumeAudioStream;

/** Check if audio stream is playing */
export function isAudioStreamPlaying(stream: Structs.AudioStream): boolean {
	return (raylib.symbols.IsAudioStreamPlaying as Function)(ptr(stream.rawBuffer)) as boolean;
}
/** @alias isAudioStreamPlaying */
export const IsAudioStreamPlaying = isAudioStreamPlaying;

/** Stop audio stream */
export function stopAudioStream(stream: Structs.AudioStream): void {
	(raylib.symbols.StopAudioStream as Function)(ptr(stream.rawBuffer));
}
/** @alias stopAudioStream */
export const StopAudioStream = stopAudioStream;

/** Set volume for audio stream (1.0 is max level) */
export function setAudioStreamVolume(stream: Structs.AudioStream, volume: number): void {
	(raylib.symbols.SetAudioStreamVolume as Function)(ptr(stream.rawBuffer), volume);
}
/** @alias setAudioStreamVolume */
export const SetAudioStreamVolume = setAudioStreamVolume;

/** Set pitch for audio stream (1.0 is base level) */
export function setAudioStreamPitch(stream: Structs.AudioStream, pitch: number): void {
	(raylib.symbols.SetAudioStreamPitch as Function)(ptr(stream.rawBuffer), pitch);
}
/** @alias setAudioStreamPitch */
export const SetAudioStreamPitch = setAudioStreamPitch;

/** Set pan for audio stream (0.5 is centered) */
export function setAudioStreamPan(stream: Structs.AudioStream, pan: number): void {
	(raylib.symbols.SetAudioStreamPan as Function)(ptr(stream.rawBuffer), pan);
}
/** @alias setAudioStreamPan */
export const SetAudioStreamPan = setAudioStreamPan;

/** Default size for new audio streams */
export function setAudioStreamBufferSizeDefault(size: number): void {
	(raylib.symbols.SetAudioStreamBufferSizeDefault as Function)(size);
}
/** @alias setAudioStreamBufferSizeDefault */
export const SetAudioStreamBufferSizeDefault = setAudioStreamBufferSizeDefault;
