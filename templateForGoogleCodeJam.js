const printOutput = cases => {
  for (let index = 0; index < cases.length; index++) {
    const result = cases[index];
    console.log(`Case #${index + 1}: ${result}`);
  }
};

// creates readline,
// input[] is our input values in array
const main = () => {
  const readline = require("readline");
  let input = [];

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on("line", line => {
    input.push(line);
  }).on("close", () => {
    try {
      const cases = inputToCases(2, input);
      const caseAnswers = [];
      for (let j = 0; j < cases.length; j++) {
        caseAnswers[j] = mainSolver(cases[j]); //pass your cases here
      }
      printOutput(caseAnswers);
    } catch (e) {
      console.log(e);
    }
  });
};

/**
 *
 * @param itemsPerCase each problem would have a no. of inputs, this variable denotes that
 * @param inputArray this is the array format of the input google has given us .
 */
const inputToCases = (itemsPerCase, inputArray) => {
  const numberOfCases = inputArray.shift();
  const cases = [];
  for (let i = 0; i < numberOfCases; i++) {
    cases.push(inputArray.splice(0, itemsPerCase));
  }
  return cases;
};

// this is used to solve
const mainSolver = eachCase => {
  console.log(eachCase);
};

if (!module.parent) {
  main();
}
