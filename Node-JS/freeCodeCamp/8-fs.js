const { readFileSync, writeFileSync } = require("fs");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/subfolder/test.txt", "utf-8");

writeFileSync("./content/result-sync.txt", first + "\n" + second + "\n", {
  flag: "a",
});