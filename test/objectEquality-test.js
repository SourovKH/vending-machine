const testObject = require("../lib/objectEquality.js");

const isObjectEqual = testObject.isObjectEqual;

console.log(isObjectEqual({a:1},{a:1}));
