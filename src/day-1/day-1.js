import { readFileSync } from "fs";
import path from "path";

const filename = "src/day-1/data-day-1.txt";
const filePath = path.resolve(process.cwd(), filename);
const input = readFileSync(filePath, "utf-8");

const elfList = input.split(/\n\n/).map((data) => data.split(/\n/));
const totals = elfList.map((elf) =>
  Number(elf.reduce((prev, current) => Number(prev) + Number(current)))
);

// Answer 1
// const max = Math.max(...totals);
// console.log("🚀 ~ file: day-1.js:18 ~ max", max);

const sortedTotals = totals.sort((prev, next) => prev - next);
const lastElves = sortedTotals.slice(-3, sortedTotals.length);
const lastElvesTotal = lastElves.reduce(
  (prev, current) => Number(prev) + Number(current)
);

console.log("🚀 ~ file: day-1.js:31 ~ lastElvesTotal", lastElvesTotal);
