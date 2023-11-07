#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk"; 
class Student{
    name:string
    constructor(name:string){
        this.name = name
    }
}
class Person{
    students:Student[]=[]
    addStudent(obj:any){
        this.students.push( obj )
    }
}
const persons:Person = new Person()
const programmStart = async(persons:Person)=>{
    while(true){

    let answer =await inquirer.prompt([
        {
            type:"list",
            message:"Please select your desiring option",
            name:"ask",
            choices:['Use this App',,'exit']
        }
    ])
    if(answer.ask==="exit"){
        console.log(chalk.redBright.italic.bold(  `Thank you for using our app` ))
        process.exit()
    }
    if(answer.ask==="Use this App"){
        console.log(chalk.green("Welcome To OOP Program"))
      const ans = await inquirer.prompt([
        {
         type:"list",
         message:"Ap kis se bat krna psnd krenge",
         name:"aski",
         choices:['khud se :Self','student']

        }
    ])
    if(ans.aski==="khud se :Self"){}
    if(ans.aski==="student"){
        let a1 = await inquirer.prompt([
            {
                type:"input",
                message:"apko kis student se bat krni h",
                name:"name"
            }
        ])
        const student=persons.students.find(val=>val.name===a1.name)
        if(!student){
            const name= new Student(a1.name)
            persons.addStudent(name)
            console.log( `Hello Iam ${name.name},or me thek hun` )
            console.log(persons.students)
        }
        if(student){
            console.log( `Hello Iam ${student.name},or me thek hun  ....... )   ` )
            console.log(persons.students)
        }
    }
}
}
}
programmStart(persons)