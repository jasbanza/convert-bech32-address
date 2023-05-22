/*
# example node.js application. Run the following command
 node main.js cosmos1r5qkmvn9hnv0pugejr73639w07d2mughnm7qxa juno

 */
var converter = require("./convert-bech32-address.js");
// console.log(converter.lookup("osmo1p7kae67pvenee4c03ajg735kg5zxzp6ww4aarn", "test"));
// process.exit(0);
const fs = require("fs");
const from = "osmo";
const to = "stars";

// Function to process each line's string
function processLine(line, idx) {
  if (line.indexOf(from) == 0) {
    try {
      return converter.lookup(line.replace(/[^\x20-\x7E]/g, ""), to);
    } catch (error) {
      console.log();
      console.log("error parsing line:");
      console.log(line);
      console.log(error);
      console.log();
    }
  }
}

// Read the input file
fs.readFile("input.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading the file:", err);
    return;
  }

  // Split the data into lines
  const lines = data.split("\n");

  // Process each line
  const processedLines = lines
    .map(processLine)
    .filter((value) => value !== undefined);

  // Join the processed lines back into a single string
  const output = processedLines.join("\n");

  // Write the output to a new file
  fs.writeFile("output.txt", output, "utf8", (err) => {
    if (err) {
      console.error("Error writing the file:", err);
      return;
    }
    console.log("File successfully written!");
  });
});
