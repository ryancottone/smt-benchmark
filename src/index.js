"use strict";
exports.__esModule = true;
var smt_1 = require("@cedoor/smt");
var circomlib_1 = require("circomlib");
// Hexadecimal hashes.
var hash = function (childNodes) { return (0, circomlib_1.poseidon)(childNodes); };
console.log("Starting benchmarks..");
for (var i = 1; i < 15; i++) {
    var tree = new smt_1.SMT(hash, true);
    console.log("2^" + i + " leaves");
    console.time();
    for (var k = 0; k < Math.pow(2, i); k++) {
        tree.add(BigInt(k), BigInt(1));
    }
    console.timeEnd();
}
console.log("Done");
