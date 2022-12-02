import { readFileSync } from "fs";
import path from "path";

const filename = "src/day-2/data-day-2.txt";
const filePath = path.resolve(process.cwd(), filename);
const input = readFileSync(filePath, "utf-8");

const LOSE = 0;
const TIE = 3;
const WIN = 6;

const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

const moveList = input
  .split(/\n\n/)
  .map((data) => data.split(/\n/).map((move) => move.split(" ")));

// console.log("🚀 ~ file: day-2.js:10 ~ moveListist", moveList);

/*
 * A = Rock
 * B = Paper
 * C = Scissors
 *
 * X = Rock , 1
 * Y = Paper, 2
 * Z = Scissors, 3
 *
 * Lose = 0
 * Tie = 3
 * Win = 6
 */

const getCorrectOutcomePoints = (move) => {
  const [oponent, mine] = move;
  switch (mine) {
    case "X":
      if (oponent === "A") return SCISSORS + LOSE;
      if (oponent === "B") return ROCK + LOSE;
      if (oponent === "C") return PAPER + LOSE;
      break;
    case "Y":
      if (oponent === "A") return ROCK + TIE;
      if (oponent === "B") return PAPER + TIE;
      if (oponent === "C") return SCISSORS + TIE;
      break;
    case "Z":
      if (oponent === "A") return PAPER + WIN;
      if (oponent === "B") return SCISSORS + WIN;
      if (oponent === "C") return ROCK + WIN;
      break;
  }
};

const getOutcomePoints = (move) => {
  const [oponent, mine] = move;
  switch (mine) {
    case "X":
      if (oponent === "A") return ROCK + TIE;
      if (oponent === "B") return ROCK + LOSE;
      if (oponent === "C") return ROCK + WIN;
      break;
    case "Y":
      if (oponent === "A") return PAPER + WIN;
      if (oponent === "B") return PAPER + TIE;
      if (oponent === "C") return PAPER + LOSE;
      break;
    case "Z":
      if (oponent === "A") return SCISSORS + LOSE;
      if (oponent === "B") return SCISSORS + WIN;
      if (oponent === "C") return SCISSORS + TIE;
      break;
  }
};

const matchScores = moveList[0].map((move) => getOutcomePoints(move));
// console.log("🚀 ~ file: day-2.js:58 ~ matchScores", matchScores);

const totalScore = matchScores.reduce(
  (prev, current) => Number(prev) + Number(current)
);
// console.log("🚀 ~ file: day-2.js:60 ~ totalScore", totalScore);

const correctMatchScores = moveList[0].map((move) =>
  getCorrectOutcomePoints(move)
);
const correctTotalScore = correctMatchScores.reduce(
  (prev, current) => Number(prev) + Number(current)
);
console.log("🚀 ~ file: day-2.js:92 ~ correctTotalScore", correctTotalScore);
