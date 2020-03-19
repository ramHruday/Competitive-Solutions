const isOurPositionSame = (index, lindaArray, myArray) => {
  const lindaPositionNow = lindaArray.slice(0, index);
  const myPositionNow = lindaArray.slice(0, index);
  const Ly = lindaPositionNow.filter(x => x === "S").length;
  const Lx = lindaPositionNow.filter(x => x === "E").length;
  const My = myPositionNow.filter(x => x === "S").length;
  const Mx = myPositionNow.filter(x => x === "E").length;
  return Mx === Lx && Ly === My;
};

const switchDirection = direction => {
  switch (direction) {
    case "S":
      return "E";
    case "E":
      return "S";
  }
};

const main = () => {
  const readline = require("readline");
  let problem = [];

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  rl.on("line", line => {
    problem.push(line);
  }).on("close", () => {
    try {
      mainSolver(problem.pop().split(""));
    } catch (e) {
      console.log(e);
    }
  });
};

const mainSolver = lindaArray => {
  const sideLength = lindaArray.length / 2;
  const myArray = Array(sideLength)
    .fill("S")
    .concat(Array(sideLength).fill("E"));
  for (let i = 0; i < lindaArray.length; i++) {
    const direction = lindaArray[i];
    if (isOurPositionSame(i, lindaArray, myArray)) {
      myArray[i] = switchDirection(direction);
    }
  }
  console.log(myArray);
};

if (!module.parent) {
  main();
}
