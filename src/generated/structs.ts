// Auto-generated raylib structs
// Do not edit manually - regenerate with: bun run src/generator/generate.ts

import { ptr, toArrayBuffer, type Pointer } from "bun:ffi";

/** Vector2, 2 components */

export class Vector2 {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(x: number = 0, y: number = 0) {
		this._buffer = new Uint8Array(8);
		this._view = new DataView(this._buffer.buffer);
		this._view.setFloat32(0, x, true);
		this._view.setFloat32(4, y, true);
	}

	/** Vector x component */
	get x(): number {
		return this._view.getFloat32(0, true);
	}

	set x(value: number) {
		this._view.setFloat32(0, value, true);
	}

	/** Vector y component */
	get y(): number {
		return this._view.getFloat32(4, true);
	}

	set y(value: number) {
		this._view.setFloat32(4, value, true);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 8;

	/** Create a copy of this struct */
	clone(): Vector2 {
		const clone = new Vector2();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): Vector2 {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 8));
		const instance = new Vector2();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** Vector3, 3 components */

export class Vector3 {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(x: number = 0, y: number = 0, z: number = 0) {
		this._buffer = new Uint8Array(12);
		this._view = new DataView(this._buffer.buffer);
		this._view.setFloat32(0, x, true);
		this._view.setFloat32(4, y, true);
		this._view.setFloat32(8, z, true);
	}

	/** Vector x component */
	get x(): number {
		return this._view.getFloat32(0, true);
	}

	set x(value: number) {
		this._view.setFloat32(0, value, true);
	}

	/** Vector y component */
	get y(): number {
		return this._view.getFloat32(4, true);
	}

	set y(value: number) {
		this._view.setFloat32(4, value, true);
	}

	/** Vector z component */
	get z(): number {
		return this._view.getFloat32(8, true);
	}

	set z(value: number) {
		this._view.setFloat32(8, value, true);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 12;

	/** Create a copy of this struct */
	clone(): Vector3 {
		const clone = new Vector3();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): Vector3 {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 12));
		const instance = new Vector3();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** Vector4, 4 components */

export class Vector4 {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(x: number = 0, y: number = 0, z: number = 0, w: number = 0) {
		this._buffer = new Uint8Array(16);
		this._view = new DataView(this._buffer.buffer);
		this._view.setFloat32(0, x, true);
		this._view.setFloat32(4, y, true);
		this._view.setFloat32(8, z, true);
		this._view.setFloat32(12, w, true);
	}

	/** Vector x component */
	get x(): number {
		return this._view.getFloat32(0, true);
	}

	set x(value: number) {
		this._view.setFloat32(0, value, true);
	}

	/** Vector y component */
	get y(): number {
		return this._view.getFloat32(4, true);
	}

	set y(value: number) {
		this._view.setFloat32(4, value, true);
	}

	/** Vector z component */
	get z(): number {
		return this._view.getFloat32(8, true);
	}

	set z(value: number) {
		this._view.setFloat32(8, value, true);
	}

	/** Vector w component */
	get w(): number {
		return this._view.getFloat32(12, true);
	}

	set w(value: number) {
		this._view.setFloat32(12, value, true);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 16;

	/** Create a copy of this struct */
	clone(): Vector4 {
		const clone = new Vector4();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): Vector4 {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 16));
		const instance = new Vector4();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** Matrix, 4x4 components, column major, OpenGL style, right-handed */

export class Matrix {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(m0: number = 0, m4: number = 0, m8: number = 0, m12: number = 0, m1: number = 0, m5: number = 0, m9: number = 0, m13: number = 0, m2: number = 0, m6: number = 0, m10: number = 0, m14: number = 0, m3: number = 0, m7: number = 0, m11: number = 0, m15: number = 0) {
		this._buffer = new Uint8Array(64);
		this._view = new DataView(this._buffer.buffer);
		this._view.setFloat32(0, m0, true);
		this._view.setFloat32(4, m4, true);
		this._view.setFloat32(8, m8, true);
		this._view.setFloat32(12, m12, true);
		this._view.setFloat32(16, m1, true);
		this._view.setFloat32(20, m5, true);
		this._view.setFloat32(24, m9, true);
		this._view.setFloat32(28, m13, true);
		this._view.setFloat32(32, m2, true);
		this._view.setFloat32(36, m6, true);
		this._view.setFloat32(40, m10, true);
		this._view.setFloat32(44, m14, true);
		this._view.setFloat32(48, m3, true);
		this._view.setFloat32(52, m7, true);
		this._view.setFloat32(56, m11, true);
		this._view.setFloat32(60, m15, true);
	}

	/** Matrix first row (4 components) */
	get m0(): number {
		return this._view.getFloat32(0, true);
	}

	set m0(value: number) {
		this._view.setFloat32(0, value, true);
	}

	/** Matrix first row (4 components) */
	get m4(): number {
		return this._view.getFloat32(4, true);
	}

	set m4(value: number) {
		this._view.setFloat32(4, value, true);
	}

	/** Matrix first row (4 components) */
	get m8(): number {
		return this._view.getFloat32(8, true);
	}

	set m8(value: number) {
		this._view.setFloat32(8, value, true);
	}

	/** Matrix first row (4 components) */
	get m12(): number {
		return this._view.getFloat32(12, true);
	}

	set m12(value: number) {
		this._view.setFloat32(12, value, true);
	}

	/** Matrix second row (4 components) */
	get m1(): number {
		return this._view.getFloat32(16, true);
	}

	set m1(value: number) {
		this._view.setFloat32(16, value, true);
	}

	/** Matrix second row (4 components) */
	get m5(): number {
		return this._view.getFloat32(20, true);
	}

	set m5(value: number) {
		this._view.setFloat32(20, value, true);
	}

	/** Matrix second row (4 components) */
	get m9(): number {
		return this._view.getFloat32(24, true);
	}

	set m9(value: number) {
		this._view.setFloat32(24, value, true);
	}

	/** Matrix second row (4 components) */
	get m13(): number {
		return this._view.getFloat32(28, true);
	}

	set m13(value: number) {
		this._view.setFloat32(28, value, true);
	}

	/** Matrix third row (4 components) */
	get m2(): number {
		return this._view.getFloat32(32, true);
	}

	set m2(value: number) {
		this._view.setFloat32(32, value, true);
	}

	/** Matrix third row (4 components) */
	get m6(): number {
		return this._view.getFloat32(36, true);
	}

	set m6(value: number) {
		this._view.setFloat32(36, value, true);
	}

	/** Matrix third row (4 components) */
	get m10(): number {
		return this._view.getFloat32(40, true);
	}

	set m10(value: number) {
		this._view.setFloat32(40, value, true);
	}

	/** Matrix third row (4 components) */
	get m14(): number {
		return this._view.getFloat32(44, true);
	}

	set m14(value: number) {
		this._view.setFloat32(44, value, true);
	}

	/** Matrix fourth row (4 components) */
	get m3(): number {
		return this._view.getFloat32(48, true);
	}

	set m3(value: number) {
		this._view.setFloat32(48, value, true);
	}

	/** Matrix fourth row (4 components) */
	get m7(): number {
		return this._view.getFloat32(52, true);
	}

	set m7(value: number) {
		this._view.setFloat32(52, value, true);
	}

	/** Matrix fourth row (4 components) */
	get m11(): number {
		return this._view.getFloat32(56, true);
	}

	set m11(value: number) {
		this._view.setFloat32(56, value, true);
	}

	/** Matrix fourth row (4 components) */
	get m15(): number {
		return this._view.getFloat32(60, true);
	}

	set m15(value: number) {
		this._view.setFloat32(60, value, true);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 64;

	/** Create a copy of this struct */
	clone(): Matrix {
		const clone = new Matrix();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): Matrix {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 64));
		const instance = new Matrix();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** Color, 4 components, R8G8B8A8 (32bit) */

export class Color {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(r: number = 0, g: number = 0, b: number = 0, a: number = 0) {
		this._buffer = new Uint8Array(4);
		this._view = new DataView(this._buffer.buffer);
		this._view.setUint8(0, r);
		this._view.setUint8(1, g);
		this._view.setUint8(2, b);
		this._view.setUint8(3, a);
	}

	/** Color red value */
	get r(): number {
		return this._view.getUint8(0);
	}

	set r(value: number) {
		this._view.setUint8(0, value);
	}

	/** Color green value */
	get g(): number {
		return this._view.getUint8(1);
	}

	set g(value: number) {
		this._view.setUint8(1, value);
	}

	/** Color blue value */
	get b(): number {
		return this._view.getUint8(2);
	}

	set b(value: number) {
		this._view.setUint8(2, value);
	}

	/** Color alpha value */
	get a(): number {
		return this._view.getUint8(3);
	}

	set a(value: number) {
		this._view.setUint8(3, value);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 4;

	/** Create a copy of this struct */
	clone(): Color {
		const clone = new Color();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Pack struct into a u32 for FFI calls (pass by value) */
	toU32(): number {
		return this._view.getUint32(0, true);
	}

	/** Create struct from a packed u32 value */
	static fromU32(value: number): Color {
		const instance = new Color();
		instance._view.setUint32(0, value, true);
		return instance;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): Color {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 4));
		const instance = new Color();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** Rectangle, 4 components */

export class Rectangle {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(x: number = 0, y: number = 0, width: number = 0, height: number = 0) {
		this._buffer = new Uint8Array(16);
		this._view = new DataView(this._buffer.buffer);
		this._view.setFloat32(0, x, true);
		this._view.setFloat32(4, y, true);
		this._view.setFloat32(8, width, true);
		this._view.setFloat32(12, height, true);
	}

	/** Rectangle top-left corner position x */
	get x(): number {
		return this._view.getFloat32(0, true);
	}

	set x(value: number) {
		this._view.setFloat32(0, value, true);
	}

	/** Rectangle top-left corner position y */
	get y(): number {
		return this._view.getFloat32(4, true);
	}

	set y(value: number) {
		this._view.setFloat32(4, value, true);
	}

	/** Rectangle width */
	get width(): number {
		return this._view.getFloat32(8, true);
	}

	set width(value: number) {
		this._view.setFloat32(8, value, true);
	}

	/** Rectangle height */
	get height(): number {
		return this._view.getFloat32(12, true);
	}

	set height(value: number) {
		this._view.setFloat32(12, value, true);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 16;

	/** Create a copy of this struct */
	clone(): Rectangle {
		const clone = new Rectangle();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): Rectangle {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 16));
		const instance = new Rectangle();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** Image, pixel data stored in CPU memory (RAM) */

export class Image {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(data?: number, width: number = 0, height: number = 0, mipmaps: number = 0, format: number = 0) {
		this._buffer = new Uint8Array(24);
		this._view = new DataView(this._buffer.buffer);
		this._view.setInt32(8, width, true);
		this._view.setInt32(12, height, true);
		this._view.setInt32(16, mipmaps, true);
		this._view.setInt32(20, format, true);
	}

	/** Image raw data (pointer) */
	get data(): number {
		return Number(this._view.getBigUint64(0, true));
	}

	set data(value: number) {
		this._view.setBigUint64(0, BigInt(value), true);
	}

	/** Image base width */
	get width(): number {
		return this._view.getInt32(8, true);
	}

	set width(value: number) {
		this._view.setInt32(8, value, true);
	}

	/** Image base height */
	get height(): number {
		return this._view.getInt32(12, true);
	}

	set height(value: number) {
		this._view.setInt32(12, value, true);
	}

	/** Mipmap levels, 1 by default */
	get mipmaps(): number {
		return this._view.getInt32(16, true);
	}

	set mipmaps(value: number) {
		this._view.setInt32(16, value, true);
	}

	/** Data format (PixelFormat type) */
	get format(): number {
		return this._view.getInt32(20, true);
	}

	set format(value: number) {
		this._view.setInt32(20, value, true);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 24;

	/** Create a copy of this struct */
	clone(): Image {
		const clone = new Image();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): Image {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 24));
		const instance = new Image();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** Texture, tex data stored in GPU memory (VRAM) */

export class Texture {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(id: number = 0, width: number = 0, height: number = 0, mipmaps: number = 0, format: number = 0) {
		this._buffer = new Uint8Array(20);
		this._view = new DataView(this._buffer.buffer);
		this._view.setUint32(0, id, true);
		this._view.setInt32(4, width, true);
		this._view.setInt32(8, height, true);
		this._view.setInt32(12, mipmaps, true);
		this._view.setInt32(16, format, true);
	}

	/** OpenGL texture id */
	get id(): number {
		return this._view.getUint32(0, true);
	}

	set id(value: number) {
		this._view.setUint32(0, value, true);
	}

	/** Texture base width */
	get width(): number {
		return this._view.getInt32(4, true);
	}

	set width(value: number) {
		this._view.setInt32(4, value, true);
	}

	/** Texture base height */
	get height(): number {
		return this._view.getInt32(8, true);
	}

	set height(value: number) {
		this._view.setInt32(8, value, true);
	}

	/** Mipmap levels, 1 by default */
	get mipmaps(): number {
		return this._view.getInt32(12, true);
	}

	set mipmaps(value: number) {
		this._view.setInt32(12, value, true);
	}

	/** Data format (PixelFormat type) */
	get format(): number {
		return this._view.getInt32(16, true);
	}

	set format(value: number) {
		this._view.setInt32(16, value, true);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 20;

	/** Create a copy of this struct */
	clone(): Texture {
		const clone = new Texture();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): Texture {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 20));
		const instance = new Texture();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** RenderTexture, fbo for texture rendering */

export class RenderTexture {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(id: number = 0, texture?: Texture, depth?: Texture) {
		this._buffer = new Uint8Array(44);
		this._view = new DataView(this._buffer.buffer);
		this._view.setUint32(0, id, true);
		if (texture) this._buffer.set(texture.rawBuffer, 4);
		if (depth) this._buffer.set(depth.rawBuffer, 24);
	}

	/** OpenGL framebuffer object id */
	get id(): number {
		return this._view.getUint32(0, true);
	}

	set id(value: number) {
		this._view.setUint32(0, value, true);
	}

	/** Color buffer attachment texture */
	get texture(): Texture {
		return Texture.fromPointer(ptr(this._buffer), 4);
	}

	set texture(value: Texture) {
		this._buffer.set(value.rawBuffer, 4);
	}

	/** Depth buffer attachment texture */
	get depth(): Texture {
		return Texture.fromPointer(ptr(this._buffer), 24);
	}

	set depth(value: Texture) {
		this._buffer.set(value.rawBuffer, 24);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 44;

	/** Create a copy of this struct */
	clone(): RenderTexture {
		const clone = new RenderTexture();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): RenderTexture {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 44));
		const instance = new RenderTexture();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** NPatchInfo, n-patch layout info */

export class NPatchInfo {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(source?: Rectangle, left: number = 0, top: number = 0, right: number = 0, bottom: number = 0, layout: number = 0) {
		this._buffer = new Uint8Array(36);
		this._view = new DataView(this._buffer.buffer);
		if (source) this._buffer.set(source.rawBuffer, 0);
		this._view.setInt32(16, left, true);
		this._view.setInt32(20, top, true);
		this._view.setInt32(24, right, true);
		this._view.setInt32(28, bottom, true);
		this._view.setInt32(32, layout, true);
	}

	/** Texture source rectangle */
	get source(): Rectangle {
		return Rectangle.fromPointer(ptr(this._buffer), 0);
	}

	set source(value: Rectangle) {
		this._buffer.set(value.rawBuffer, 0);
	}

	/** Left border offset */
	get left(): number {
		return this._view.getInt32(16, true);
	}

	set left(value: number) {
		this._view.setInt32(16, value, true);
	}

	/** Top border offset */
	get top(): number {
		return this._view.getInt32(20, true);
	}

	set top(value: number) {
		this._view.setInt32(20, value, true);
	}

	/** Right border offset */
	get right(): number {
		return this._view.getInt32(24, true);
	}

	set right(value: number) {
		this._view.setInt32(24, value, true);
	}

	/** Bottom border offset */
	get bottom(): number {
		return this._view.getInt32(28, true);
	}

	set bottom(value: number) {
		this._view.setInt32(28, value, true);
	}

	/** Layout of the n-patch: 3x3, 1x3 or 3x1 */
	get layout(): number {
		return this._view.getInt32(32, true);
	}

	set layout(value: number) {
		this._view.setInt32(32, value, true);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 36;

	/** Create a copy of this struct */
	clone(): NPatchInfo {
		const clone = new NPatchInfo();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): NPatchInfo {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 36));
		const instance = new NPatchInfo();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** GlyphInfo, font characters glyphs info */

export class GlyphInfo {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(value: number = 0, offsetX: number = 0, offsetY: number = 0, advanceX: number = 0, image?: Image) {
		this._buffer = new Uint8Array(40);
		this._view = new DataView(this._buffer.buffer);
		this._view.setInt32(0, value, true);
		this._view.setInt32(4, offsetX, true);
		this._view.setInt32(8, offsetY, true);
		this._view.setInt32(12, advanceX, true);
		if (image) this._buffer.set(image.rawBuffer, 16);
	}

	/** Character value (Unicode) */
	get value(): number {
		return this._view.getInt32(0, true);
	}

	set value(value: number) {
		this._view.setInt32(0, value, true);
	}

	/** Character offset X when drawing */
	get offsetX(): number {
		return this._view.getInt32(4, true);
	}

	set offsetX(value: number) {
		this._view.setInt32(4, value, true);
	}

	/** Character offset Y when drawing */
	get offsetY(): number {
		return this._view.getInt32(8, true);
	}

	set offsetY(value: number) {
		this._view.setInt32(8, value, true);
	}

	/** Character advance position X */
	get advanceX(): number {
		return this._view.getInt32(12, true);
	}

	set advanceX(value: number) {
		this._view.setInt32(12, value, true);
	}

	/** Character image data */
	get image(): Image {
		return Image.fromPointer(ptr(this._buffer), 16);
	}

	set image(value: Image) {
		this._buffer.set(value.rawBuffer, 16);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 40;

	/** Create a copy of this struct */
	clone(): GlyphInfo {
		const clone = new GlyphInfo();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): GlyphInfo {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 40));
		const instance = new GlyphInfo();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** Font, font texture and GlyphInfo array data */

export class Font {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(baseSize: number = 0, glyphCount: number = 0, glyphPadding: number = 0, texture: number = 0, recs?: number, glyphs?: number) {
		this._buffer = new Uint8Array(32);
		this._view = new DataView(this._buffer.buffer);
		this._view.setInt32(0, baseSize, true);
		this._view.setInt32(4, glyphCount, true);
		this._view.setInt32(8, glyphPadding, true);
	}

	/** Base size (default chars height) */
	get baseSize(): number {
		return this._view.getInt32(0, true);
	}

	set baseSize(value: number) {
		this._view.setInt32(0, value, true);
	}

	/** Number of glyph characters */
	get glyphCount(): number {
		return this._view.getInt32(4, true);
	}

	set glyphCount(value: number) {
		this._view.setInt32(4, value, true);
	}

	/** Padding around the glyph characters */
	get glyphPadding(): number {
		return this._view.getInt32(8, true);
	}

	set glyphPadding(value: number) {
		this._view.setInt32(8, value, true);
	}


	/** Rectangles in texture for the glyphs (pointer) */
	get recs(): number {
		return Number(this._view.getBigUint64(16, true));
	}

	set recs(value: number) {
		this._view.setBigUint64(16, BigInt(value), true);
	}

	/** Glyphs info data (pointer) */
	get glyphs(): number {
		return Number(this._view.getBigUint64(24, true));
	}

	set glyphs(value: number) {
		this._view.setBigUint64(24, BigInt(value), true);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 32;

	/** Create a copy of this struct */
	clone(): Font {
		const clone = new Font();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): Font {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 32));
		const instance = new Font();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** Camera, defines position/orientation in 3d space */

export class Camera3D {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(position?: Vector3, target?: Vector3, up?: Vector3, fovy: number = 0, projection: number = 0) {
		this._buffer = new Uint8Array(44);
		this._view = new DataView(this._buffer.buffer);
		if (position) this._buffer.set(position.rawBuffer, 0);
		if (target) this._buffer.set(target.rawBuffer, 12);
		if (up) this._buffer.set(up.rawBuffer, 24);
		this._view.setFloat32(36, fovy, true);
		this._view.setInt32(40, projection, true);
	}

	/** Camera position */
	get position(): Vector3 {
		return Vector3.fromPointer(ptr(this._buffer), 0);
	}

	set position(value: Vector3) {
		this._buffer.set(value.rawBuffer, 0);
	}

	/** Camera target it looks-at */
	get target(): Vector3 {
		return Vector3.fromPointer(ptr(this._buffer), 12);
	}

	set target(value: Vector3) {
		this._buffer.set(value.rawBuffer, 12);
	}

	/** Camera up vector (rotation over its axis) */
	get up(): Vector3 {
		return Vector3.fromPointer(ptr(this._buffer), 24);
	}

	set up(value: Vector3) {
		this._buffer.set(value.rawBuffer, 24);
	}

	/** Camera field-of-view aperture in Y (degrees) in perspective, used as near plane width in orthographic */
	get fovy(): number {
		return this._view.getFloat32(36, true);
	}

	set fovy(value: number) {
		this._view.setFloat32(36, value, true);
	}

	/** Camera projection: CAMERA_PERSPECTIVE or CAMERA_ORTHOGRAPHIC */
	get projection(): number {
		return this._view.getInt32(40, true);
	}

	set projection(value: number) {
		this._view.setInt32(40, value, true);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 44;

	/** Create a copy of this struct */
	clone(): Camera3D {
		const clone = new Camera3D();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): Camera3D {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 44));
		const instance = new Camera3D();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** Camera2D, defines position/orientation in 2d space */

export class Camera2D {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(offset?: Vector2, target?: Vector2, rotation: number = 0, zoom: number = 0) {
		this._buffer = new Uint8Array(24);
		this._view = new DataView(this._buffer.buffer);
		if (offset) this._buffer.set(offset.rawBuffer, 0);
		if (target) this._buffer.set(target.rawBuffer, 8);
		this._view.setFloat32(16, rotation, true);
		this._view.setFloat32(20, zoom, true);
	}

	/** Camera offset (displacement from target) */
	get offset(): Vector2 {
		return Vector2.fromPointer(ptr(this._buffer), 0);
	}

	set offset(value: Vector2) {
		this._buffer.set(value.rawBuffer, 0);
	}

	/** Camera target (rotation and zoom origin) */
	get target(): Vector2 {
		return Vector2.fromPointer(ptr(this._buffer), 8);
	}

	set target(value: Vector2) {
		this._buffer.set(value.rawBuffer, 8);
	}

	/** Camera rotation in degrees */
	get rotation(): number {
		return this._view.getFloat32(16, true);
	}

	set rotation(value: number) {
		this._view.setFloat32(16, value, true);
	}

	/** Camera zoom (scaling), should be 1.0f by default */
	get zoom(): number {
		return this._view.getFloat32(20, true);
	}

	set zoom(value: number) {
		this._view.setFloat32(20, value, true);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 24;

	/** Create a copy of this struct */
	clone(): Camera2D {
		const clone = new Camera2D();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): Camera2D {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 24));
		const instance = new Camera2D();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** Mesh, vertex data and vao/vbo */

export class Mesh {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(vertexCount: number = 0, triangleCount: number = 0, vertices?: number, texcoords?: number, texcoords2?: number, normals?: number, tangents?: number, colors?: number, indices?: number, animVertices?: number, animNormals?: number, boneIds?: number, boneWeights?: number, boneMatrices?: number, boneCount: number = 0, vaoId: number = 0, vboId?: number) {
		this._buffer = new Uint8Array(120);
		this._view = new DataView(this._buffer.buffer);
		this._view.setInt32(0, vertexCount, true);
		this._view.setInt32(4, triangleCount, true);
		this._view.setInt32(104, boneCount, true);
		this._view.setUint32(108, vaoId, true);
	}

	/** Number of vertices stored in arrays */
	get vertexCount(): number {
		return this._view.getInt32(0, true);
	}

	set vertexCount(value: number) {
		this._view.setInt32(0, value, true);
	}

	/** Number of triangles stored (indexed or not) */
	get triangleCount(): number {
		return this._view.getInt32(4, true);
	}

	set triangleCount(value: number) {
		this._view.setInt32(4, value, true);
	}

	/** Vertex position (XYZ - 3 components per vertex) (shader-location = 0) (pointer) */
	get vertices(): number {
		return Number(this._view.getBigUint64(8, true));
	}

	set vertices(value: number) {
		this._view.setBigUint64(8, BigInt(value), true);
	}

	/** Vertex texture coordinates (UV - 2 components per vertex) (shader-location = 1) (pointer) */
	get texcoords(): number {
		return Number(this._view.getBigUint64(16, true));
	}

	set texcoords(value: number) {
		this._view.setBigUint64(16, BigInt(value), true);
	}

	/** Vertex texture second coordinates (UV - 2 components per vertex) (shader-location = 5) (pointer) */
	get texcoords2(): number {
		return Number(this._view.getBigUint64(24, true));
	}

	set texcoords2(value: number) {
		this._view.setBigUint64(24, BigInt(value), true);
	}

	/** Vertex normals (XYZ - 3 components per vertex) (shader-location = 2) (pointer) */
	get normals(): number {
		return Number(this._view.getBigUint64(32, true));
	}

	set normals(value: number) {
		this._view.setBigUint64(32, BigInt(value), true);
	}

	/** Vertex tangents (XYZW - 4 components per vertex) (shader-location = 4) (pointer) */
	get tangents(): number {
		return Number(this._view.getBigUint64(40, true));
	}

	set tangents(value: number) {
		this._view.setBigUint64(40, BigInt(value), true);
	}

	/** Vertex colors (RGBA - 4 components per vertex) (shader-location = 3) (pointer) */
	get colors(): number {
		return Number(this._view.getBigUint64(48, true));
	}

	set colors(value: number) {
		this._view.setBigUint64(48, BigInt(value), true);
	}

	/** Vertex indices (in case vertex data comes indexed) (pointer) */
	get indices(): number {
		return Number(this._view.getBigUint64(56, true));
	}

	set indices(value: number) {
		this._view.setBigUint64(56, BigInt(value), true);
	}

	/** Animated vertex positions (after bones transformations) (pointer) */
	get animVertices(): number {
		return Number(this._view.getBigUint64(64, true));
	}

	set animVertices(value: number) {
		this._view.setBigUint64(64, BigInt(value), true);
	}

	/** Animated normals (after bones transformations) (pointer) */
	get animNormals(): number {
		return Number(this._view.getBigUint64(72, true));
	}

	set animNormals(value: number) {
		this._view.setBigUint64(72, BigInt(value), true);
	}

	/** Vertex bone ids, max 255 bone ids, up to 4 bones influence by vertex (skinning) (shader-location = 6) (pointer) */
	get boneIds(): number {
		return Number(this._view.getBigUint64(80, true));
	}

	set boneIds(value: number) {
		this._view.setBigUint64(80, BigInt(value), true);
	}

	/** Vertex bone weight, up to 4 bones influence by vertex (skinning) (shader-location = 7) (pointer) */
	get boneWeights(): number {
		return Number(this._view.getBigUint64(88, true));
	}

	set boneWeights(value: number) {
		this._view.setBigUint64(88, BigInt(value), true);
	}

	/** Bones animated transformation matrices (pointer) */
	get boneMatrices(): number {
		return Number(this._view.getBigUint64(96, true));
	}

	set boneMatrices(value: number) {
		this._view.setBigUint64(96, BigInt(value), true);
	}

	/** Number of bones */
	get boneCount(): number {
		return this._view.getInt32(104, true);
	}

	set boneCount(value: number) {
		this._view.setInt32(104, value, true);
	}

	/** OpenGL Vertex Array Object id */
	get vaoId(): number {
		return this._view.getUint32(108, true);
	}

	set vaoId(value: number) {
		this._view.setUint32(108, value, true);
	}

	/** OpenGL Vertex Buffer Objects id (default vertex data) (pointer) */
	get vboId(): number {
		return Number(this._view.getBigUint64(112, true));
	}

	set vboId(value: number) {
		this._view.setBigUint64(112, BigInt(value), true);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 120;

	/** Create a copy of this struct */
	clone(): Mesh {
		const clone = new Mesh();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): Mesh {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 120));
		const instance = new Mesh();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** Shader */

export class Shader {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(id: number = 0, locs?: number) {
		this._buffer = new Uint8Array(12);
		this._view = new DataView(this._buffer.buffer);
		this._view.setUint32(0, id, true);
	}

	/** Shader program id */
	get id(): number {
		return this._view.getUint32(0, true);
	}

	set id(value: number) {
		this._view.setUint32(0, value, true);
	}

	/** Shader locations array (RL_MAX_SHADER_LOCATIONS) (pointer) */
	get locs(): number {
		return Number(this._view.getBigUint64(4, true));
	}

	set locs(value: number) {
		this._view.setBigUint64(4, BigInt(value), true);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 12;

	/** Create a copy of this struct */
	clone(): Shader {
		const clone = new Shader();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): Shader {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 12));
		const instance = new Shader();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** MaterialMap */

export class MaterialMap {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(texture: number = 0, color?: Color, value: number = 0) {
		this._buffer = new Uint8Array(12);
		this._view = new DataView(this._buffer.buffer);
		if (color) this._buffer.set(color.rawBuffer, 4);
		this._view.setFloat32(8, value, true);
	}


	/** Material map color */
	get color(): Color {
		return Color.fromPointer(ptr(this._buffer), 4);
	}

	set color(value: Color) {
		this._buffer.set(value.rawBuffer, 4);
	}

	/** Material map value */
	get value(): number {
		return this._view.getFloat32(8, true);
	}

	set value(value: number) {
		this._view.setFloat32(8, value, true);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 12;

	/** Create a copy of this struct */
	clone(): MaterialMap {
		const clone = new MaterialMap();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): MaterialMap {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 12));
		const instance = new MaterialMap();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** Material, includes shader and maps */

export class Material {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(shader?: Shader, maps?: number, params?: Float32Array) {
		this._buffer = new Uint8Array(40);
		this._view = new DataView(this._buffer.buffer);
		if (shader) this._buffer.set(shader.rawBuffer, 0);
	}

	/** Material shader */
	get shader(): Shader {
		return Shader.fromPointer(ptr(this._buffer), 0);
	}

	set shader(value: Shader) {
		this._buffer.set(value.rawBuffer, 0);
	}

	/** Material maps array (MAX_MATERIAL_MAPS) (pointer) */
	get maps(): number {
		return Number(this._view.getBigUint64(16, true));
	}

	set maps(value: number) {
		this._view.setBigUint64(16, BigInt(value), true);
	}

	/** Material generic parameters (if required) */
	get params(): Float32Array {
		return new Float32Array(this._buffer.buffer, 24, 4);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 40;

	/** Create a copy of this struct */
	clone(): Material {
		const clone = new Material();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): Material {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 40));
		const instance = new Material();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** Transform, vertex transformation data */

export class Transform {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(translation?: Vector3, rotation: number = 0, scale?: Vector3) {
		this._buffer = new Uint8Array(28);
		this._view = new DataView(this._buffer.buffer);
		if (translation) this._buffer.set(translation.rawBuffer, 0);
		if (scale) this._buffer.set(scale.rawBuffer, 16);
	}

	/** Translation */
	get translation(): Vector3 {
		return Vector3.fromPointer(ptr(this._buffer), 0);
	}

	set translation(value: Vector3) {
		this._buffer.set(value.rawBuffer, 0);
	}


	/** Scale */
	get scale(): Vector3 {
		return Vector3.fromPointer(ptr(this._buffer), 16);
	}

	set scale(value: Vector3) {
		this._buffer.set(value.rawBuffer, 16);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 28;

	/** Create a copy of this struct */
	clone(): Transform {
		const clone = new Transform();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): Transform {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 28));
		const instance = new Transform();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** Bone, skeletal animation bone */

export class BoneInfo {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(name?: Int8Array, parent: number = 0) {
		this._buffer = new Uint8Array(36);
		this._view = new DataView(this._buffer.buffer);
		this._view.setInt32(32, parent, true);
	}

	/** Bone name */
	get name(): Int8Array {
		return new Int8Array(this._buffer.buffer, 0, 32);
	}

	/** Bone parent */
	get parent(): number {
		return this._view.getInt32(32, true);
	}

	set parent(value: number) {
		this._view.setInt32(32, value, true);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 36;

	/** Create a copy of this struct */
	clone(): BoneInfo {
		const clone = new BoneInfo();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): BoneInfo {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 36));
		const instance = new BoneInfo();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** Model, meshes, materials and animation data */

export class Model {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(transform?: Matrix, meshCount: number = 0, materialCount: number = 0, meshes?: number, materials?: number, meshMaterial?: number, boneCount: number = 0, bones?: number, bindPose?: number) {
		this._buffer = new Uint8Array(116);
		this._view = new DataView(this._buffer.buffer);
		if (transform) this._buffer.set(transform.rawBuffer, 0);
		this._view.setInt32(64, meshCount, true);
		this._view.setInt32(68, materialCount, true);
		this._view.setInt32(96, boneCount, true);
	}

	/** Local transform matrix */
	get transform(): Matrix {
		return Matrix.fromPointer(ptr(this._buffer), 0);
	}

	set transform(value: Matrix) {
		this._buffer.set(value.rawBuffer, 0);
	}

	/** Number of meshes */
	get meshCount(): number {
		return this._view.getInt32(64, true);
	}

	set meshCount(value: number) {
		this._view.setInt32(64, value, true);
	}

	/** Number of materials */
	get materialCount(): number {
		return this._view.getInt32(68, true);
	}

	set materialCount(value: number) {
		this._view.setInt32(68, value, true);
	}

	/** Meshes array (pointer) */
	get meshes(): number {
		return Number(this._view.getBigUint64(72, true));
	}

	set meshes(value: number) {
		this._view.setBigUint64(72, BigInt(value), true);
	}

	/** Materials array (pointer) */
	get materials(): number {
		return Number(this._view.getBigUint64(80, true));
	}

	set materials(value: number) {
		this._view.setBigUint64(80, BigInt(value), true);
	}

	/** Mesh material number (pointer) */
	get meshMaterial(): number {
		return Number(this._view.getBigUint64(88, true));
	}

	set meshMaterial(value: number) {
		this._view.setBigUint64(88, BigInt(value), true);
	}

	/** Number of bones */
	get boneCount(): number {
		return this._view.getInt32(96, true);
	}

	set boneCount(value: number) {
		this._view.setInt32(96, value, true);
	}

	/** Bones information (skeleton) (pointer) */
	get bones(): number {
		return Number(this._view.getBigUint64(100, true));
	}

	set bones(value: number) {
		this._view.setBigUint64(100, BigInt(value), true);
	}

	/** Bones base transformation (pose) (pointer) */
	get bindPose(): number {
		return Number(this._view.getBigUint64(108, true));
	}

	set bindPose(value: number) {
		this._view.setBigUint64(108, BigInt(value), true);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 116;

	/** Create a copy of this struct */
	clone(): Model {
		const clone = new Model();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): Model {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 116));
		const instance = new Model();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** ModelAnimation */

export class ModelAnimation {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(boneCount: number = 0, frameCount: number = 0, bones?: number, framePoses?: number, name?: Int8Array) {
		this._buffer = new Uint8Array(56);
		this._view = new DataView(this._buffer.buffer);
		this._view.setInt32(0, boneCount, true);
		this._view.setInt32(4, frameCount, true);
	}

	/** Number of bones */
	get boneCount(): number {
		return this._view.getInt32(0, true);
	}

	set boneCount(value: number) {
		this._view.setInt32(0, value, true);
	}

	/** Number of animation frames */
	get frameCount(): number {
		return this._view.getInt32(4, true);
	}

	set frameCount(value: number) {
		this._view.setInt32(4, value, true);
	}

	/** Bones information (skeleton) (pointer) */
	get bones(): number {
		return Number(this._view.getBigUint64(8, true));
	}

	set bones(value: number) {
		this._view.setBigUint64(8, BigInt(value), true);
	}

	/** Poses array by frame (pointer) */
	get framePoses(): number {
		return Number(this._view.getBigUint64(16, true));
	}

	set framePoses(value: number) {
		this._view.setBigUint64(16, BigInt(value), true);
	}

	/** Animation name */
	get name(): Int8Array {
		return new Int8Array(this._buffer.buffer, 24, 32);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 56;

	/** Create a copy of this struct */
	clone(): ModelAnimation {
		const clone = new ModelAnimation();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): ModelAnimation {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 56));
		const instance = new ModelAnimation();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** Ray, ray for raycasting */

export class Ray {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(position?: Vector3, direction?: Vector3) {
		this._buffer = new Uint8Array(24);
		this._view = new DataView(this._buffer.buffer);
		if (position) this._buffer.set(position.rawBuffer, 0);
		if (direction) this._buffer.set(direction.rawBuffer, 12);
	}

	/** Ray position (origin) */
	get position(): Vector3 {
		return Vector3.fromPointer(ptr(this._buffer), 0);
	}

	set position(value: Vector3) {
		this._buffer.set(value.rawBuffer, 0);
	}

	/** Ray direction (normalized) */
	get direction(): Vector3 {
		return Vector3.fromPointer(ptr(this._buffer), 12);
	}

	set direction(value: Vector3) {
		this._buffer.set(value.rawBuffer, 12);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 24;

	/** Create a copy of this struct */
	clone(): Ray {
		const clone = new Ray();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): Ray {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 24));
		const instance = new Ray();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** RayCollision, ray hit information */

export class RayCollision {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(hit: boolean = false, distance: number = 0, point?: Vector3, normal?: Vector3) {
		this._buffer = new Uint8Array(29);
		this._view = new DataView(this._buffer.buffer);
		this._view.setUint8(0, hit ? 1 : 0);
		this._view.setFloat32(1, distance, true);
		if (point) this._buffer.set(point.rawBuffer, 5);
		if (normal) this._buffer.set(normal.rawBuffer, 17);
	}

	/** Did the ray hit something? */
	get hit(): boolean {
		return this._view.getUint8(0) !== 0;
	}

	set hit(value: boolean) {
		this._view.setUint8(0, value ? 1 : 0);
	}

	/** Distance to the nearest hit */
	get distance(): number {
		return this._view.getFloat32(1, true);
	}

	set distance(value: number) {
		this._view.setFloat32(1, value, true);
	}

	/** Point of the nearest hit */
	get point(): Vector3 {
		return Vector3.fromPointer(ptr(this._buffer), 5);
	}

	set point(value: Vector3) {
		this._buffer.set(value.rawBuffer, 5);
	}

	/** Surface normal of hit */
	get normal(): Vector3 {
		return Vector3.fromPointer(ptr(this._buffer), 17);
	}

	set normal(value: Vector3) {
		this._buffer.set(value.rawBuffer, 17);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 29;

	/** Create a copy of this struct */
	clone(): RayCollision {
		const clone = new RayCollision();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): RayCollision {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 29));
		const instance = new RayCollision();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** BoundingBox */

export class BoundingBox {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(min?: Vector3, max?: Vector3) {
		this._buffer = new Uint8Array(24);
		this._view = new DataView(this._buffer.buffer);
		if (min) this._buffer.set(min.rawBuffer, 0);
		if (max) this._buffer.set(max.rawBuffer, 12);
	}

	/** Minimum vertex box-corner */
	get min(): Vector3 {
		return Vector3.fromPointer(ptr(this._buffer), 0);
	}

	set min(value: Vector3) {
		this._buffer.set(value.rawBuffer, 0);
	}

	/** Maximum vertex box-corner */
	get max(): Vector3 {
		return Vector3.fromPointer(ptr(this._buffer), 12);
	}

	set max(value: Vector3) {
		this._buffer.set(value.rawBuffer, 12);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 24;

	/** Create a copy of this struct */
	clone(): BoundingBox {
		const clone = new BoundingBox();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): BoundingBox {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 24));
		const instance = new BoundingBox();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** Wave, audio wave data */

export class Wave {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(frameCount: number = 0, sampleRate: number = 0, sampleSize: number = 0, channels: number = 0, data?: number) {
		this._buffer = new Uint8Array(24);
		this._view = new DataView(this._buffer.buffer);
		this._view.setUint32(0, frameCount, true);
		this._view.setUint32(4, sampleRate, true);
		this._view.setUint32(8, sampleSize, true);
		this._view.setUint32(12, channels, true);
	}

	/** Total number of frames (considering channels) */
	get frameCount(): number {
		return this._view.getUint32(0, true);
	}

	set frameCount(value: number) {
		this._view.setUint32(0, value, true);
	}

	/** Frequency (samples per second) */
	get sampleRate(): number {
		return this._view.getUint32(4, true);
	}

	set sampleRate(value: number) {
		this._view.setUint32(4, value, true);
	}

	/** Bit depth (bits per sample): 8, 16, 32 (24 not supported) */
	get sampleSize(): number {
		return this._view.getUint32(8, true);
	}

	set sampleSize(value: number) {
		this._view.setUint32(8, value, true);
	}

	/** Number of channels (1-mono, 2-stereo, ...) */
	get channels(): number {
		return this._view.getUint32(12, true);
	}

	set channels(value: number) {
		this._view.setUint32(12, value, true);
	}

	/** Buffer data pointer (pointer) */
	get data(): number {
		return Number(this._view.getBigUint64(16, true));
	}

	set data(value: number) {
		this._view.setBigUint64(16, BigInt(value), true);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 24;

	/** Create a copy of this struct */
	clone(): Wave {
		const clone = new Wave();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): Wave {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 24));
		const instance = new Wave();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** AudioStream, custom audio stream */

export class AudioStream {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(buffer?: number, processor?: number, sampleRate: number = 0, sampleSize: number = 0, channels: number = 0) {
		this._buffer = new Uint8Array(28);
		this._view = new DataView(this._buffer.buffer);
		this._view.setUint32(16, sampleRate, true);
		this._view.setUint32(20, sampleSize, true);
		this._view.setUint32(24, channels, true);
	}

	/** Pointer to internal data used by the audio system (pointer) */
	get buffer(): number {
		return Number(this._view.getBigUint64(0, true));
	}

	set buffer(value: number) {
		this._view.setBigUint64(0, BigInt(value), true);
	}

	/** Pointer to internal data processor, useful for audio effects (pointer) */
	get processor(): number {
		return Number(this._view.getBigUint64(8, true));
	}

	set processor(value: number) {
		this._view.setBigUint64(8, BigInt(value), true);
	}

	/** Frequency (samples per second) */
	get sampleRate(): number {
		return this._view.getUint32(16, true);
	}

	set sampleRate(value: number) {
		this._view.setUint32(16, value, true);
	}

	/** Bit depth (bits per sample): 8, 16, 32 (24 not supported) */
	get sampleSize(): number {
		return this._view.getUint32(20, true);
	}

	set sampleSize(value: number) {
		this._view.setUint32(20, value, true);
	}

	/** Number of channels (1-mono, 2-stereo, ...) */
	get channels(): number {
		return this._view.getUint32(24, true);
	}

	set channels(value: number) {
		this._view.setUint32(24, value, true);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 28;

	/** Create a copy of this struct */
	clone(): AudioStream {
		const clone = new AudioStream();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): AudioStream {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 28));
		const instance = new AudioStream();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** Sound */

export class Sound {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(stream?: AudioStream, frameCount: number = 0) {
		this._buffer = new Uint8Array(36);
		this._view = new DataView(this._buffer.buffer);
		if (stream) this._buffer.set(stream.rawBuffer, 0);
		this._view.setUint32(32, frameCount, true);
	}

	/** Audio stream */
	get stream(): AudioStream {
		return AudioStream.fromPointer(ptr(this._buffer), 0);
	}

	set stream(value: AudioStream) {
		this._buffer.set(value.rawBuffer, 0);
	}

	/** Total number of frames (considering channels) */
	get frameCount(): number {
		return this._view.getUint32(32, true);
	}

	set frameCount(value: number) {
		this._view.setUint32(32, value, true);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 36;

	/** Create a copy of this struct */
	clone(): Sound {
		const clone = new Sound();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): Sound {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 36));
		const instance = new Sound();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** Music, audio stream, anything longer than ~10 seconds should be streamed */

export class Music {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(stream?: AudioStream, frameCount: number = 0, looping: boolean = false, ctxType: number = 0, ctxData?: number) {
		this._buffer = new Uint8Array(49);
		this._view = new DataView(this._buffer.buffer);
		if (stream) this._buffer.set(stream.rawBuffer, 0);
		this._view.setUint32(32, frameCount, true);
		this._view.setUint8(36, looping ? 1 : 0);
		this._view.setInt32(37, ctxType, true);
	}

	/** Audio stream */
	get stream(): AudioStream {
		return AudioStream.fromPointer(ptr(this._buffer), 0);
	}

	set stream(value: AudioStream) {
		this._buffer.set(value.rawBuffer, 0);
	}

	/** Total number of frames (considering channels) */
	get frameCount(): number {
		return this._view.getUint32(32, true);
	}

	set frameCount(value: number) {
		this._view.setUint32(32, value, true);
	}

	/** Music looping enable */
	get looping(): boolean {
		return this._view.getUint8(36) !== 0;
	}

	set looping(value: boolean) {
		this._view.setUint8(36, value ? 1 : 0);
	}

	/** Type of music context (audio filetype) */
	get ctxType(): number {
		return this._view.getInt32(37, true);
	}

	set ctxType(value: number) {
		this._view.setInt32(37, value, true);
	}

	/** Audio context data, depends on type (pointer) */
	get ctxData(): number {
		return Number(this._view.getBigUint64(41, true));
	}

	set ctxData(value: number) {
		this._view.setBigUint64(41, BigInt(value), true);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 49;

	/** Create a copy of this struct */
	clone(): Music {
		const clone = new Music();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): Music {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 49));
		const instance = new Music();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** VrDeviceInfo, Head-Mounted-Display device parameters */

export class VrDeviceInfo {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(hResolution: number = 0, vResolution: number = 0, hScreenSize: number = 0, vScreenSize: number = 0, eyeToScreenDistance: number = 0, lensSeparationDistance: number = 0, interpupillaryDistance: number = 0, lensDistortionValues?: Float32Array, chromaAbCorrection?: Float32Array) {
		this._buffer = new Uint8Array(60);
		this._view = new DataView(this._buffer.buffer);
		this._view.setInt32(0, hResolution, true);
		this._view.setInt32(4, vResolution, true);
		this._view.setFloat32(8, hScreenSize, true);
		this._view.setFloat32(12, vScreenSize, true);
		this._view.setFloat32(16, eyeToScreenDistance, true);
		this._view.setFloat32(20, lensSeparationDistance, true);
		this._view.setFloat32(24, interpupillaryDistance, true);
	}

	/** Horizontal resolution in pixels */
	get hResolution(): number {
		return this._view.getInt32(0, true);
	}

	set hResolution(value: number) {
		this._view.setInt32(0, value, true);
	}

	/** Vertical resolution in pixels */
	get vResolution(): number {
		return this._view.getInt32(4, true);
	}

	set vResolution(value: number) {
		this._view.setInt32(4, value, true);
	}

	/** Horizontal size in meters */
	get hScreenSize(): number {
		return this._view.getFloat32(8, true);
	}

	set hScreenSize(value: number) {
		this._view.setFloat32(8, value, true);
	}

	/** Vertical size in meters */
	get vScreenSize(): number {
		return this._view.getFloat32(12, true);
	}

	set vScreenSize(value: number) {
		this._view.setFloat32(12, value, true);
	}

	/** Distance between eye and display in meters */
	get eyeToScreenDistance(): number {
		return this._view.getFloat32(16, true);
	}

	set eyeToScreenDistance(value: number) {
		this._view.setFloat32(16, value, true);
	}

	/** Lens separation distance in meters */
	get lensSeparationDistance(): number {
		return this._view.getFloat32(20, true);
	}

	set lensSeparationDistance(value: number) {
		this._view.setFloat32(20, value, true);
	}

	/** IPD (distance between pupils) in meters */
	get interpupillaryDistance(): number {
		return this._view.getFloat32(24, true);
	}

	set interpupillaryDistance(value: number) {
		this._view.setFloat32(24, value, true);
	}

	/** Lens distortion constant parameters */
	get lensDistortionValues(): Float32Array {
		return new Float32Array(this._buffer.buffer, 28, 4);
	}

	/** Chromatic aberration correction parameters */
	get chromaAbCorrection(): Float32Array {
		return new Float32Array(this._buffer.buffer, 44, 4);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 60;

	/** Create a copy of this struct */
	clone(): VrDeviceInfo {
		const clone = new VrDeviceInfo();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): VrDeviceInfo {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 60));
		const instance = new VrDeviceInfo();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** VrStereoConfig, VR stereo rendering configuration for simulator */

export class VrStereoConfig {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(projection?: number, viewOffset?: number, leftLensCenter?: Float32Array, rightLensCenter?: Float32Array, leftScreenCenter?: Float32Array, rightScreenCenter?: Float32Array, scale?: Float32Array, scaleIn?: Float32Array) {
		this._buffer = new Uint8Array(304);
		this._view = new DataView(this._buffer.buffer);
	}



	/** VR left lens center */
	get leftLensCenter(): Float32Array {
		return new Float32Array(this._buffer.buffer, 256, 2);
	}

	/** VR right lens center */
	get rightLensCenter(): Float32Array {
		return new Float32Array(this._buffer.buffer, 264, 2);
	}

	/** VR left screen center */
	get leftScreenCenter(): Float32Array {
		return new Float32Array(this._buffer.buffer, 272, 2);
	}

	/** VR right screen center */
	get rightScreenCenter(): Float32Array {
		return new Float32Array(this._buffer.buffer, 280, 2);
	}

	/** VR distortion scale */
	get scale(): Float32Array {
		return new Float32Array(this._buffer.buffer, 288, 2);
	}

	/** VR distortion scale in */
	get scaleIn(): Float32Array {
		return new Float32Array(this._buffer.buffer, 296, 2);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 304;

	/** Create a copy of this struct */
	clone(): VrStereoConfig {
		const clone = new VrStereoConfig();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): VrStereoConfig {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 304));
		const instance = new VrStereoConfig();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** File path list */

export class FilePathList {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(capacity: number = 0, count: number = 0, paths?: number) {
		this._buffer = new Uint8Array(16);
		this._view = new DataView(this._buffer.buffer);
		this._view.setUint32(0, capacity, true);
		this._view.setUint32(4, count, true);
	}

	/** Filepaths max entries */
	get capacity(): number {
		return this._view.getUint32(0, true);
	}

	set capacity(value: number) {
		this._view.setUint32(0, value, true);
	}

	/** Filepaths entries count */
	get count(): number {
		return this._view.getUint32(4, true);
	}

	set count(value: number) {
		this._view.setUint32(4, value, true);
	}

	/** Filepaths entries (pointer) */
	get paths(): number {
		return Number(this._view.getBigUint64(8, true));
	}

	set paths(value: number) {
		this._view.setBigUint64(8, BigInt(value), true);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 16;

	/** Create a copy of this struct */
	clone(): FilePathList {
		const clone = new FilePathList();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): FilePathList {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 16));
		const instance = new FilePathList();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** Automation event */

export class AutomationEvent {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(frame: number = 0, type: number = 0, params?: Int32Array) {
		this._buffer = new Uint8Array(24);
		this._view = new DataView(this._buffer.buffer);
		this._view.setUint32(0, frame, true);
		this._view.setUint32(4, type, true);
	}

	/** Event frame */
	get frame(): number {
		return this._view.getUint32(0, true);
	}

	set frame(value: number) {
		this._view.setUint32(0, value, true);
	}

	/** Event type (AutomationEventType) */
	get type(): number {
		return this._view.getUint32(4, true);
	}

	set type(value: number) {
		this._view.setUint32(4, value, true);
	}

	/** Event parameters (if required) */
	get params(): Int32Array {
		return new Int32Array(this._buffer.buffer, 8, 4);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 24;

	/** Create a copy of this struct */
	clone(): AutomationEvent {
		const clone = new AutomationEvent();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): AutomationEvent {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 24));
		const instance = new AutomationEvent();
		instance._buffer.set(buffer);
		return instance;
	}
}

/** Automation event list */

export class AutomationEventList {
	private _buffer: Uint8Array;
	private _view: DataView;

	constructor(capacity: number = 0, count: number = 0, events?: number) {
		this._buffer = new Uint8Array(16);
		this._view = new DataView(this._buffer.buffer);
		this._view.setUint32(0, capacity, true);
		this._view.setUint32(4, count, true);
	}

	/** Events max entries (MAX_AUTOMATION_EVENTS) */
	get capacity(): number {
		return this._view.getUint32(0, true);
	}

	set capacity(value: number) {
		this._view.setUint32(0, value, true);
	}

	/** Events entries count */
	get count(): number {
		return this._view.getUint32(4, true);
	}

	set count(value: number) {
		this._view.setUint32(4, value, true);
	}

	/** Events entries (pointer) */
	get events(): number {
		return Number(this._view.getBigUint64(8, true));
	}

	set events(value: number) {
		this._view.setBigUint64(8, BigInt(value), true);
	}

	/** Get pointer to struct data for FFI calls */
	get ptr(): number {
		return ptr(this._buffer);
	}

	/** Get underlying raw buffer */
	get rawBuffer(): Uint8Array {
		return this._buffer;
	}

	/** Byte size of struct */
	static readonly byteLength = 16;

	/** Create a copy of this struct */
	clone(): AutomationEventList {
		const clone = new AutomationEventList();
		clone._buffer.set(this._buffer);
		return clone;
	}

	/** Create struct from FFI pointer */
	static fromPointer(p: Pointer, byteOffset: number = 0): AutomationEventList {
		const buffer = new Uint8Array(toArrayBuffer(p, byteOffset, 16));
		const instance = new AutomationEventList();
		instance._buffer.set(buffer);
		return instance;
	}
}
