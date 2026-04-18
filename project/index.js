import questions from "./questions.js";
import inquirer from "@inquirer/prompts";

let score = 0;
let timeLeft = 30;
let timerId; // This will be called later in put into clearInterval

const timer = (startTime, interval) => {
  const startTimer = setInterval(() => {
    console.log(timeLeft);
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(startTimer);
      console.log("Times up!");
      endGame(); // This will be defined later
    }
  }, interval);
  return startTimer;
};

const askQuestions = async (questionObj) => {
  const userAnswer = await inquirer.select({
    message: questionObj.question,
    choices: questionObj.choices,
  });
  if (userAnswer === questionObj.answer) {
    console.log("Correct!");
    score++;
  } else {
    console.log("Wrong!");
  }
};
