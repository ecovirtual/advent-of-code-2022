import { getData } from "../utils.mjs";

const input = getData("day-3/data-day-3.txt");
// console.log("🚀 ~ file: day-3.js:4 ~ input", input);

const priorityIndex = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const getPriority = (item) => priorityIndex.indexOf(item) + 1;

const allRucksacks = input.split(/\n/).map((rucksack) => {
  const half = Math.floor(rucksack.length / 2);
  return [rucksack.slice(0, half), rucksack.slice(half, rucksack.length)];
});
// console.log("🚀 ~ file: day-3.js:7 ~ rucksacks", allRucksacks);

const priorityItems = allRucksacks
  .map((rucksack) =>
    [...rucksack[0]].filter((item) => [...rucksack[1]].indexOf(item) > -1)
  )
  .map((priorityItems) => {
    const item = [...new Set(priorityItems)][0];
    return getPriority(item);
  });
// console.log("🚀 ~ file: day-3.js:15 ~ priorityItems", priorityItems);

const total = priorityItems.reduce(
  (prev, current) => Number(prev) + Number(current)
);
// console.log("🚀 ~ file: day-3.js:28 ~ total", total);

// --------------------- Part Two ---------------------- //
const allGroups = input.split(/\n/);
console.log("🚀 ~ file: day-3.js:32 ~ allGroups", allGroups);

const chunkedGroups = allGroups.reduce((result, group, index) => {
  console.log(group);
  const chunkIndex = Math.floor(index / 3);
  if (!result[chunkIndex]) result[chunkIndex] = [];
  result[chunkIndex].push(group);
  return result;
}, []);

console.log(
  "🚀 ~ file: day-3.js:34 ~ chunkedGroups ~ chunkedGroups",
  chunkedGroups
);

const batchItems = chunkedGroups.map(
  (group) =>
    [...group[0]]
      .filter((item) => [...group[1]].indexOf(item) > -1)
      .filter((item) => [...group[2]].indexOf(item) > -1)[0]
);
console.log("🚀 ~ file: day-3.js:57 ~ batchItems ~ batchItems", batchItems);

const batchPriorities = batchItems.map((item) => getPriority(item));
console.log("🚀 ~ file: day-3.js:56 ~ batchPriorities", batchPriorities);

const totalGroupPriorities = batchPriorities.reduce(
  (prev, current) => Number(prev) + Number(current)
);
console.log(
  "🚀 ~ file: day-3.js:61 ~ totalGroupPriorities",
  totalGroupPriorities
);
