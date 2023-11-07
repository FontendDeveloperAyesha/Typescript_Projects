#!/usr/bin/env node
// import inquirer from "inquirer";
// import chalk from "chalk";
// class Player{
//     name: string;
//     fuel: number=100
//     constructor(name: string){
//         this.name = name 
//         this.fuel=this.fuel   
//     }
//     decreaseFuel(){
//         let feuel = this.fuel-25
//         this.fuel=feuel
//     }
//     IncreaseFuel(){
//         let feuel = this.fuel+25
//         this.fuel=feuel
//     }
// }
// class Opponent{
//    name: string
//    fuel: number=100
//    constructor(name: string){
//        this.name = name
//        this.fuel=this.fuel
//    }
//    decreaseFuel(){
//     let feuel = this.fuel-25
//     this.fuel=feuel
// } 

// }

//      let player = await inquirer.prompt([
//     {
//         name: "name",
//         message: "Enter your name",
//         type: "input"
//     }
// ]);
// console.log(chalk.magentaBright(`Welcome Dear ${chalk.greenBright.bold(player.name)} in our adventure game`))


// let opponent = await inquirer.prompt([
// {
//     name: "opponent",
//     message: "Select your oponent",
//     type: "list", 
//     choices:["Skeleton",'zombie','Assassin']  

// }
// ])
// let playerName= new Player(player.name)
// let opponentName = new Opponent(opponent.opponent)
// console.log(`${chalk.green(playerName.name)} VS ${chalk.redBright(opponentName.name)} `)
// if(opponent.opponent==="zombie"){
//     let opt1 = await inquirer.prompt([
//         {
//             name: "opt1",
//             message: "Select your oponent",
//             type: "list", 
//             choices:["Attack",'Drink Potion','Run for  your life.....']  
        
//         }
//         ]);
//         if(opt1.opt1==="Attack"){
//             let num = Math.round(Math.random()*2)
//             if(num>0){
//                 playerName.decreaseFuel()
//                 console.log(`${chalk.bold.red(player.name)} fuel is ${player.fuel}`)
//                 console.log(`${chalk.bold.green(opponent.name)} fuel is ${opponent.fuel}`)
//         }
//         if(num<=0){
//             opponent.decreaseFuel()
//             console.log(`${chalk.bold.red(opponent.name)} fuel is ${opponent.fuel}`)
//             console.log(`${chalk.bold.green(player.name)} fuel is ${player.fuel}`)
//         }
//         if (opt1.opt1==="Drink Potion"){ 
//             playerName.IncreaseFuel()
//             console.log(`${chalk.bold.red(player.name)} your fuel is now ${player.fuel}`)
    
//          }
//         if(opt1.opt1==="Run for  your life....."){
//             console.log(chalk.red.bold.italic(`Game Over ... Better Luck Next Time`))
//         }
// }
// }
// xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// xxxxxxxxxxxx

import inquirer from "inquirer";
import chalk from "chalk";

class Player {
  name: string;
  fuel: number = 100;

  constructor(name: string) {
    this.name = name;
  }

  decreaseFuel() {
    this.fuel -= 25;
  }

  increaseFuel() {
    this.fuel += 25;
  }
}

class Opponent {
  name: string="ZOOMBIE"
  fuel: number = 100;

  constructor() {
    this.name = "ZOOMBIE";
  }

  decreaseFuel() {
    this.fuel -= 25;
  }
}

async function main() {
    while(true){
        let aski= await inquirer.prompt([
            {
                name:"askii",
                type:"list",
                message:"please select your desiring operation",
                choices:["exit","play"],
            }
          ])
          if(aski.askii==="exit"){
            console.log(chalk.red.bold.italic( "Thank you for playing our advanture game SEE YOU NEXT TIME :)"))
            process.exit()
          }
          if(aski.askii==="play"){
        
  let player = await inquirer.prompt([
    {
      name: "name",
      message: "Enter your name",
      type: "input",
    },
  ]);

  console.log(
    chalk.magentaBright(
      `Welcome Dear ${chalk.greenBright.bold(player.name)} in our adventure game`
    )
  );

  let playerName = new Player(player.name);
  let opponentName = new Opponent();
  console.log(
    `${chalk.green(playerName.name)} VS ${chalk.redBright(opponentName.name)}`
  );

    let opt1 = await inquirer.prompt([
      {
        name: "opt1",
        message: "Select your action",
        type: "list",
        choices: ["Attack", "Drink Potion", "Run for your life....."],
      },
    ]);

    if (opt1.opt1 === "Attack") {
      let num = Math.round(Math.random()*2);

      if (num >0) {
        playerName.decreaseFuel();
        console.log(`${chalk.bold.red(playerName.name)} fuel is ${playerName.fuel}`);
        console.log(`${chalk.bold.green(opponentName.name)} fuel is ${opponentName.fuel}`);
      } else{ 
        opponentName.decreaseFuel();
        console.log(`${chalk.bold.red(opponentName.name)} fuel is ${opponentName.fuel}`);
        console.log(`${chalk.bold.green(playerName.name)} fuel is ${playerName.fuel}`);
      }
    }
if (opt1.opt1 === "Drink Potion") {
      playerName.increaseFuel();
      console.log(`${chalk.bold.red(playerName.name)} your fuel is now ${playerName.fuel}`);
}
   if (opt1.opt1 === "Run for your life.....") {
      console.log(chalk.red.bold.italic(`Game Over... Better Luck Next Time`));
    }
  


  }
}
}
    main();
