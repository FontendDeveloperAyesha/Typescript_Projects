#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

const res = await inquirer.prompt({
  name: "name",
  type: "input",
  message: "Please enter the amount of time you want to set in seconds",
});

function startTime(time: number) {
  let count = time;
  const interval = setInterval(() => {
    if (count <= 0) {
      clearInterval(interval);
      console.log(chalk.green("Time's up!"));
    } else {
      console.log(chalk.yellow(`Time remaining: ${chalk.red(count)} seconds`));
      count--;
    }
  }, 1000);
}

const time = parseInt(res.name, 10);
startTime(time);


