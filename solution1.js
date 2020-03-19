const solveCases = (cases) => {
  for (let index = 0; index < cases.length; index++) {
    const result = cases[index]
    console.log(`Case #${index + 1}: ${result}`)
  }
}

const main = () => {
  const readline = require('readline')
  let problem = [];

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  rl.on('line', (line) => {
    problem.push(line);
  }).on('close', () => {
      problem.shift()
    let cases = problem.map((element,index) => strMain(element.toString()));
    solveCases(cases)
  })
}

const strMain =(ele)=>{
    let num = Number(ele.replace(/4/g,1));
  return `${num} ${Number(ele)-num}`
}
if (!module.parent) {
  main()
}
