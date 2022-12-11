import { getData } from "../utils.mjs";

const input = getData("day-10/data-day-10.txt");
// console.log("🚀 ~ file: day-4.js:4 ~ input", input);

const actions = input.split(/\n/).map((action) => {
  const actionArray = action.split(" ");
  return { type: actionArray[0], value: Number(actionArray[1]) };
});
// console.log("🚀 ~ file: day-10.js:7 ~ actions", actions);

let cycle = 1;
let registerX = 1;
const signalStrength = [];

const isMeasureableCycle = (cycle) =>
  cycle === 20 ||
  cycle === 60 ||
  cycle === 100 ||
  cycle === 140 ||
  cycle === 180 ||
  cycle === 220;

actions.forEach((action) => {
  cycle = cycle + 1;
  if (isMeasureableCycle(cycle)) {
    console.log("🚀 cycle", cycle);
    console.log("🚀 registerX", registerX);
    signalStrength.push(cycle * registerX);
  }
  if (action.type === "addx") {
    cycle = cycle + 1;
    registerX = registerX + action.value;

    if (isMeasureableCycle(cycle)) {
      console.log("🚀 cycle", cycle);
      console.log("🚀 registerX", registerX);
      signalStrength.push(cycle * registerX);
    }
  }
});

console.log("🚀 signalStrength", signalStrength);

const totalSignalStrength = signalStrength.reduce(
  (prev, current) => Number(prev) + Number(current)
);
console.log("Total Signal Strength: ", totalSignalStrength);
