#!/user/bin/env node
import inquirer from "inquirer";
import chalk from 'chalk';
import { Withdraw } from "./atm_menu/Withdraw.mjs";
import { Deposit } from "./atm_menu/Deposite.mjs";
let balance = 10000  ;
// let dep;
 async function Confirmation(userpin:number,password:number) {
    let balance = 10000  ;
    

        console.log(chalk.bgBlueBright(`welcome dear customer please follow the following instructions`));
       console.log(chalk.bgGreen(` your current balance is ${balance}`));
 }
let user = await inquirer.prompt([{
    type:"input",
    message:"pLEASE ENTER your userpin",
    name:"userpin"
},{
    type:"password",
    message:"pLEASE ENTER your userpassword",
    name:"userpassword"
}
]);

Confirmation(user.userPin,user.userPassword)
let depConfo = await inquirer.prompt([
    {
        type:'list',
        choices:["yes","no"],
        message:"Do you want to deposite your Amount",
        name:'depconf'
    }
])
if(depConfo.depconf==="yes"){
    let depAmount = await inquirer.prompt([
        {
            type:'number',
            message:"Enter your desposit amount",
            name:'depAmount1'
        }
    ])
 let deposit = Deposit(depAmount.depAmount1);
console.log(chalk.bgBlue(`You have successfuly deposit your ${deposit}$ in your account`))
}else{
    console.log(chalk.bgYellow(`you deposit 0$ in your account your current balance is  ${balance}`))
};
let WithdrawConfo = await inquirer.prompt([
    {
        type:'list',
        choices:["yes","no"],
        message:"Do you want to withdraw your cash ",
        name:'withdrawconf'
    }
]);
if(WithdrawConfo.withdrawconf=== "yes"){
    let  withAmount = await inquirer.prompt([
        {
            type:'number',
            message:"Enter your Withdraw amount",
            name:'withAmount1'
        }
    ])
var withdraw =  Withdraw(withAmount.withAmount1);
console.log(chalk.bgBlue(`you have successfuly made  withdrawl of ${withdraw}$ from your account`));
console.log(chalk.redBright(` Thank you dear customer visiting our site . Have a nice day !`))
}else{
console.log(chalk.redBright(` Thank you dear customer visiting our site . Have a nice day !`))
}