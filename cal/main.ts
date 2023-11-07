#!/usr/bin/env node
import { add } from "./operations/add.js";
import { subtract } from "./operations/subtract.js";
import { multiply } from "./operations/multiply.js";
import { division } from "./operations/division.js";
import { modulus } from "./operations/modulus.js";
import { exponent } from "./operations/exponent.js";
import inquirer from "inquirer";
import chalk  from "chalk";
let inqAns = await inquirer.prompt([
  {
    message: "Enter your num1",
    type: "number",
    name: "num1",
  },
  {
    message: "Enter your num2",
    type: "number",
    name: "num2",
  },
  {
    message: "Select your operator",
    type: "list",
    name: "operator",
    choices: ["+", "-", "*", "/", "%", "**"],
  },
]);
let result;
if (inqAns.operator === "+") {
  result = add(inqAns.num1, inqAns.operator, inqAns.num2);
  console.log(chalk.bold(chalk.bgGreen(`your answer is  ${result}`)));
} else if (inqAns.operator === "-") {
  result = subtract(inqAns.num1, inqAns.operator, inqAns.num2);
  console.log(chalk.bold(chalk.bgGreen(`your answer is  ${result}`)));
} else if (inqAns.operator === "/") {
  result = division(inqAns.num1, inqAns.operator, inqAns.num2);
  console.log(chalk.bold(chalk.bgGreen(`your answer is  ${result}`)));
} else if (inqAns.operator === "*") {
  result = multiply(inqAns.num1, inqAns.operator, inqAns.num2);
  console.log(chalk.bold(chalk.bgGreen(`your answer is  ${result}`)));
} else if (inqAns.operator === "%") {
  result = modulus(inqAns.num1, inqAns.operator, inqAns.num2);
  console.log(chalk.bold(chalk.bgGreen(`your answer is  ${result}`)));
} else if (inqAns.operator === "**") {
  result = exponent(inqAns.num1, inqAns.operator, inqAns.num2);
  console.log(chalk.bold(chalk.bgGreen(`your answer is  ${result}`)));
} else {
  console.log("Invalid operator");
}