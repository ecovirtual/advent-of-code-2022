import { getData } from "../utils.mjs";

const input = getData("day-4/data-day-4.txt");
// console.log("🚀 ~ file: day-4.js:4 ~ input", input);

const isBetween = (x, min, max) =>
  Number(x) >= Number(min) && Number(x) <= Number(max);

const elfPairRanges = input
  .split(/\n/)
  .map((pairString) =>
    pairString.split(",").map((rangeString) => rangeString.split("-"))
  );
console.log(
  "🚀 ~ file: day-4.js:7 ~ elfPairRanges length",
  elfPairRanges.length
);

const doubleAssignmentMap = elfPairRanges.map((pair) => {
  if (
    // (isBetween(pair[0][0], pair[1][0], pair[1][1]) ||
    //   isBetween(pair[0][1], pair[1][0], pair[1][1])) ||
    // (isBetween(pair[1][0], pair[0][0], pair[0][1]) ||
    //   isBetween(pair[1][1], pair[0][0], pair[0][1]))
    // ------- Answer 2 ----------------- //
    isBetween(pair[0][0], pair[1][0], pair[1][1]) ||
    isBetween(pair[0][1], pair[1][0], pair[1][1]) ||
    isBetween(pair[1][0], pair[0][0], pair[0][1]) ||
    isBetween(pair[1][1], pair[0][0], pair[0][1])
  ) {
    return 1;
  }
  console.log(pair);
  return 0;
});
console.log(
  "🚀 ~ file: day-4.js:21 ~ doubleAssignmentMap length",
  doubleAssignmentMap.length
);

const total = doubleAssignmentMap.reduce(
  (prev, current) => Number(prev) + Number(current)
);
console.log("🚀 ~ file: day-4.js:34 ~ total", total);
