#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
// interface Currency {
//   code: string;
//   name: string;
//   rate: number; // rate against USD
// }
// const currencies: Currency[] = [
//   { code: "USD", name: "United States Dollar", rate: 1 },
//   { code: "EUR", name: "Euro", rate: 0.85 },
//   // Add more currencies here
// ];
// async function main() {
//   const { fromCurrency } = await inquirer.prompt({
//     type: "list",
//     name: "fromCurrency",
//     message: "Choose the currency you want to convert from:",
//     choices: currencies.map((currency) => currency.code),
//   });
//   const { toCurrency } = await inquirer.prompt({
//     type: "list",
//     name: "toCurrency",
//     message: "Choose the currency you want to convert to:",
//     choices: currencies.map((currency) => currency.code),
//   });
//   const { amount } = await inquirer.prompt({
//     type: "input",
//     name: "amount",
//     message: "Enter the amount you want to convert:",
//     validate: (value: string) => {
//       const number = parseInt(value, 10);
//       return isNaN(number) ? "Please enter a number." : true;
//     },
//   });
//   const from = currencies.find((currency) => currency.code === fromCurrency);
//   const to = currencies.find((currency) => currency.code === toCurrency);
//   if (from && to) {
//     const result = (parseInt(amount, 10) * to.rate) / from.rate;
//     console.log(chalk.green(`The converted amount is: ${result} ${to.name}`));
//   } else {
//     console.log(chalk.red("Error: Invalid currency."));
//   }
// }
// main();
// xxxxxxxxxxxxxxxxxxxxxx
// currency rates api
let apiLink = "https://v6.exchangerate-api.com/v6/83589899cb22dd3002e9e2cd/latest/PKR";
//  Data fetch
let fetchData = async (Data) => {
    let fetchData = await fetch(Data);
    let response = await fetchData.json();
    return response.conversion_rates;
};
let data = await fetchData(apiLink);
let countries = Object.keys(data);
let firstCountry = await inquirer.prompt({
    type: "list",
    name: "firstCountry",
    message: "please select the country you want to convert from",
    choices: countries
});
console.log(`converting from ${chalk.greenBright.bold(firstCountry.firstCountry)}`);
let money = await inquirer.prompt({
    type: "input",
    name: "money",
    message: `please enter the amount in ${chalk.magentaBright.bold(firstCountry.firstCountry)}'s currency`,
});
let secondCountry = await inquirer.prompt({
    type: "list",
    name: "secondCountry",
    message: "please select the country you want to convert to",
    choices: countries
});
let conversion = `https://v6.exchangerate-api.com/v6/83589899cb22dd3002e9e2cd/pair/${firstCountry.firstCountry}/${secondCountry.secondCountry}`;
// fetching data for conversion rates
let cnvData = async (Data) => {
    let cnvData = await fetch(Data);
    let response = await cnvData.json();
    return response.conversion_rate;
};
let conversionRate = await cnvData(conversion);
let convertedRate = money.money * conversionRate;
console.log(chalk.magentaBright.bold(`Here is your money conversion from  ${chalk.blueBright.bold(firstCountry.firstCountry)} in ${chalk.blueBright.bold(secondCountry.secondCountry)} : ${chalk.greenBright.bold(convertedRate)}`));
