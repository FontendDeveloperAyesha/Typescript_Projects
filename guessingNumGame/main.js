#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from "inquirer";
async function start() {
    const randomNum = Math.round(Math.random() * 10);
    console.log(chalk.blueBright(`welcome to number guessing game`));
    console.log(chalk.bgMagenta(`enter your number between 1 to 100`));
    for (let attempts = 0; attempts < 3; attempts++) {
        let guess = await inquirer.prompt([{
                type: "input",
                message: `enter your number ${attempts + 1} Enter your guess between 1 to 100`,
                name: "guess"
            }]);
        if (guess === randomNum) {
            console.log(chalk.yellow(`you guess the number in ${randomNum} in ${attempts + 1} attempts`));
            return;
        }
        else if (attempts != randomNum) {
            console.log(chalk.yellow(`Incorrect please try again`));
        }
    }
    console.log(chalk.bgGreen(`Sorry, you've run out of attempts. The correct number was ${randomNum}`));
}
start();
