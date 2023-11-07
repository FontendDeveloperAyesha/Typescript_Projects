#!/user/bin/env node
import inquirer from  "inquirer";
import chalk from "chalk";
let todoArray:string[]=[]
async function todoApp(arr:string[]) {
    do{
        let aski = await inquirer.prompt({
            message:chalk.bgMagenta("WELCOME TO OUR TODO_APP Please select your desiring operation ?"),
            name:"ask",
            type:"list",
            choices:['add','view','delete','exit']
        });
        if(aski.ask==="add"){
            let addItem = await inquirer.prompt({
                message:"Enter your item. ",
                name:"add",
                type:"input"
            });
            todoArray.push(addItem.add)
            console.log(chalk.bgGrey("Your item has been successfully added in your todo-List"))
        
    
        }
        if(aski.ask==="view"){
            console.log(chalk.bgGray("Here is your todo List"));
            for ( const j of todoArray) {
               
                console.log(chalk.bold(chalk.blue(`. => ${j}`)));
            }
        }
        if(aski.ask==="delete"){
            let del = await inquirer.prompt({
                message:"Select what you want to delete",
                name:"dell",
                type:"list",
                choices:todoArray.map(item=>item),
                
            })
            let updatesTodo= todoArray.filter(val => val !== del.dell)
            todoArray=updatesTodo
            console.log(chalk.bgGray("Your selected item has been successfullly deleted from your todo_list"))
           
        }
        if(aski.ask==="exit"){
            console.log(chalk.bgRedBright(`THANK YOU DEAR USER FOR CHOSING OUR TODO APP SEE YOU NEXT TIME`))
             process.exit()
        }
    

    }
    while(true)
}

todoApp(todoArray)