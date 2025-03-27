//Literally anything works -> Defeats the pupose of TS.
let a: any = 4;

a = "Any value";
a = {};
a = [];

//Union Types
let b: string | number;

b = 5;
b = "Heyyy";

//Union Types for arrays
let arr1: (string|number)[];

arr1 = [3, "string"];

let arr2: Array<string|number>; //Better way to do the same thing.

//Tuples
let tup: [number, string]; //Fixed size array with defined types

tup = [1, "Shresth"];

//Objects with flexible types

let obj: {name: string; age: (string|number)};

obj = {name : "Shresth", age : "Deorari"};

//{} Type
let weird: {} = 0;
weird = "String";
weird = {};
weird = ""

//Flexible Objects
let flex_obj: Record<string|number, string|number>;

flex_obj = {
    string: 22,         //Damn
    3: 43
};