#!/usr/bin/env node
import  inquirer  from "inquirer";
import chalk  from "chalk";
// making  a word counter function
while(true){
console.log(chalk.greenBright.bold(`Welcome to our Word Counter App`));
let aski = await inquirer.prompt({
    name: "ask",
    message: chalk.yellowBright.bold("Please select your desireing option : "),
    type: "list",
    choices: ["Use the app", "Exit"]
})
if(aski.ask == "Exit"){
    console.log(chalk.redBright.bold("Thank you Dear customer for using our app"));
    process.exit();
}
if(aski.ask == "Use the app"){
    let inputText = await inquirer.prompt([
        {
          name: "text",
          message: "Enter your text : ",
          type: "input"
        }
      ]);
    function wordCounter(text: string): number {
      let words = text.trim().split(" ");
      return words.length;
    }       
    
    let result = wordCounter(inputText.text);
    console.log(chalk.magentaBright(`Your text has total ${chalk.yellow.bold(result)} words`));
    
}


}