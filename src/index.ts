import { ChildNodes } from "@cedoor/smt/dist/types/smt"
import { SMT } from "@cedoor/smt"
import { poseidon } from "circomlib"
import nodemark from "nodemark"

// Hexadecimal hashes.
const hash = (childNodes: ChildNodes) => poseidon(childNodes)


console.log("Starting benchmarks..")

for (let i = 1; i < 15; i++) {
    let tree = new SMT(hash, true)
    console.log("2^" + i + " leaves")
    console.time()
    for (let k = 0; k < 2**i; k++) {
        tree.add(BigInt(k), BigInt(1))
    }
    console.timeEnd()
}
console.log("Done")

