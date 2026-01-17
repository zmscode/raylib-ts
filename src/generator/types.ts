/**
 * Raylib API Type Definitions
 * From the structure of raylib_api.json
 */

export type RaylibApiParam = {
	type: string;
	name: string;
	description?: string;
};

export type RaylibApiFunction = {
	name: string;
	description: string;
	returnType: string;
	params?: RaylibApiParam[];
};

export type RaylibApiStructField = {
	type: string;
	name: string;
	description?: string;
};

export type RaylibApiStruct = {
	name: string;
	description: string;
	fields: RaylibApiStructField[];
};

export type RaylibApiEnumValue = {
	name: string;
	value: number;
	description?: string;
};

export type RaylibApiEnum = {
	name: string;
	description: string;
	values: RaylibApiEnumValue[];
};

export type RaylibApiDefine = {
	name: string;
	type: string;
	value: string | number;
	description?: string;
};

export type RaylibApi = {
	structs: RaylibApiStruct[];
	enums: RaylibApiEnum[];
	functions: RaylibApiFunction[];
	defines?: RaylibApiDefine[];
};

export type RaylibApiBundle = {
	raylib: RaylibApi;
	raymath: RaylibApi;
};
