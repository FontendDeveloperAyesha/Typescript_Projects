#!/usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';

class BankAccount {
  private balance: number = 0;

  constructor(private accountHolder: string) {}

  deposit(amount: number) {
    this.balance += amount;
  }

  withdraw(amount: number) {
    if (amount <= this.balance) {
      this.balance -= amount;
    } else {
      console.log('Insufficient balance.');
    }
  }

  getBalance() {
    return this.balance;
  }
}

async function main() {
  const account = await inquirer.prompt([
    {
      type: 'input',
      name: 'accountHolder',
      message: 'Enter your name:',
    },
  ]);

  const bankAccount = new BankAccount(account.accountHolder);

  while (true) {
    const action = await inquirer.prompt([
      {
        type: 'list',
        name: 'action',
        message: 'Choose an action:',
        choices: ['Deposit', 'Withdraw', 'Check Balance', 'Exit'],
      },
    ]);

    if (action.action === 'Exit') {
      console.log(chalk.redBright.bold.italic('Thank you for choosing us. Goodbye!'));
      process.exit()
    }

    if (action.action === 'Check Balance') {
      console.log(`Account balance for ${bankAccount.getBalance()}`);
      continue;
    }

    const amount = await inquirer.prompt([
      {
        type: 'number',
        name: 'amount',
        message: `Enter the ${action.action} amount:`,
      },
    ]);

    if (action.action === 'Deposit') {
      bankAccount.deposit(amount.amount);
      console.log(`Deposited $${amount.amount}. New balance: $${bankAccount.getBalance()}`);
    } else if (action.action === 'Withdraw') {
      bankAccount.withdraw(amount.amount);
      console.log(`Withdrawn $${amount.amount}. New balance: $${bankAccount.getBalance()}`);
    }
  }
}

main();
