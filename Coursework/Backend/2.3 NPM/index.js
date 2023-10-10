// Node Package Manager (NPM)
// var generateName = require('sillyname');


// In order to use ESM you must make you package.json a module version
import generateName from "sillyname";
var sillyName = generateName();

console.log(`My name is ${sillyName}.`);


import superheroes from "superheroes";
console.log(`I am ${superheroes.random()}`);