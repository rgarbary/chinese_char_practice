import { vocabulary } from "./data.js";
import { Quiz } from "./quiz.js";
import { UI } from "./ui.js";

const quiz = new Quiz(vocabulary);

function render() {
  const q = quiz.getQuestion();
  UI.showQuestion(q);
  UI.updateScore(quiz.score);
}

document.getElementById("submitBtn").onclick = () => {
  const input = UI.inputEl.value;

  const q = quiz.getQuestion();

  if (quiz.checkAnswer(input)) {
    quiz.incrementScore();
    UI.showCorrect();
  } else {
    UI.showWrong(q.answer);
  }

  UI.updateScore(quiz.score);
};

document.getElementById("nextBtn").onclick = () => {
  quiz.next();
  render();
};

document.getElementById("showBtn").onclick = () => {
  const q = quiz.getQuestion();
  UI.showWrong(q.answer);
};

render();
