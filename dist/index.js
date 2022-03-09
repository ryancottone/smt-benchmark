"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const smt_1 = require("@cedoor/smt");
const circomlib_1 = require("circomlib");
const nodemark_1 = __importDefault(require("nodemark"));
// Hexadecimal hashes.
const hash = (childNodes) => (0, circomlib_1.poseidon)(childNodes);
const tree = new smt_1.SMT(hash, true);
tree.add(BigInt(Math.pow(2, 256) - 1), BigInt(5));
let proofBenchmark = (0, nodemark_1.default)(() => { tree.createProof(BigInt(Math.pow(2, 252) - 1)); }, () => { }, 1);
console.log(proofBenchmark.nanoseconds()); // Extremely small values
let proof = tree.createProof(BigInt(Math.pow(2, 252) - 1));
console.log(proof);
let verifyBenchmark = (0, nodemark_1.default)(() => { tree.verifyProof(proof); }, () => { }, 1);
console.log(verifyBenchmark.nanoseconds()); // Significantly more
