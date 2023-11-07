#!/usr/bin/env node
import inquirer from 'inquirer'
import chalk from 'chalk';
const quizQuestions = [
  {
    question: 'What is the capital of France?',
    choices: ['London', 'Berlin', 'Paris', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    choices: ['Earth', 'Mars', 'Venus', 'Jupiter'],
    correctAnswer: 'Mars',
  },
  {
    question: 'What is the largest mammal in the world?',
    choices: ['Elephant', 'Giraffe', 'Blue Whale', 'Lion'],
    correctAnswer: 'Blue Whale',
  },
  {
    question: 'What is the smallest country in the world?',
    choices: ['Vatican City', 'Monaco', 'San Marino', 'Liechtenstein'],
    correctAnswer: 'Vatican City',
  }
];

async function main() {
    let answer = await inquirer.prompt([
        {
            type: 'list',
            name: 'answer',
            message: 'Do you want to play the quiz?',
            choices: ['Yes', 'No'],
        }
    ])
    if(answer.answer === 'No'){
        console.log(chalk.redBright.bold.italic('Thank you Dear User for using our QuizApp GOODBYE!'));
    }
    if(answer.answer === 'Yes'){
    while(true){
  console.log(chalk.yellowBright.bold.italic('Welcome to the Quiz!'));

  let score = 0;

  for (const question of quizQuestions) {
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'answer',
        message: question.question,
        choices: question.choices,
      },
    ]);

    if (answer.answer === question.correctAnswer) {
      console.log('Correct!');
      score++;
    } else {
      console.log(`Incorrect. The correct answer is: ${question.correctAnswer}`);
    }
  }

  console.log(chalk.bgMagentaBright.bold.italic(`Quiz completed. Your score: ${score} out of ${quizQuestions.length}`));
}
}
}

main();
