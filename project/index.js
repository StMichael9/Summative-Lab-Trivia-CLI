import questions from "./questions.js";
import * as inquirer from "@inquirer/prompts";

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

const startGame = async () => {
  timerId = timer(30, 1000); // Call the timer function and set time to 30 seconds
  for (const q of questions) {
    await askQuestions(q);
  }
};

const endGame = () => {
  clearInterval(timerId);
  console.log(`\nFinal Score: ${score}/${questions.length}`);
  console.log("Thanks for playing!");
};

startGame();
