import { readFileSync } from "fs";
import path from "path";

export const getData = (fileName) => {
  const filePath = path.resolve(process.cwd(), `src/${fileName}`);
  let input;
  try {
    input = readFileSync(filePath, "utf-8");
  } catch (error) {
    console.error(error);
  }
  return input;
};
