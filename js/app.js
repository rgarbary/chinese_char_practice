import { vocabulary } from "./data.js";
import { Quiz } from "./quiz.js";
import { UI } from "./ui.js";

const quiz = new Quiz(vocabulary);

function render() {
  const item = quiz.current;
  const q = quiz.getQuestion();

  //UI.typeEl.textContent = `Question type: ${q.type}`;
  UI.questionEl.textContent = q.value;

  const field = q.answerField;

  const choices = getRandomChoices(
    vocabulary,
    q.answer,
    field
  );

 UI.showChoices(choices, (selected) => {
  const item = quiz.current; // capture BEFORE state changes

  if (selected === q.answer) {
    quiz.incrementScore();
    UI.showCorrect();
  } else {
    UI.showWrong(q.answer);
  }

  UI.updateScore(quiz.score);

  UI.showReview(item); // 👈 THIS is the key line

  setTimeout(() => {
    quiz.next();
    render();
  }, 1200); // slightly longer so user can read it
});
} 

function getRandomChoices(vocab, correctAnswer, field) {
  const others = vocab
    .filter(v => v[field] !== correctAnswer)
    .sort(() => Math.random() - 0.5)
    .slice(0, 7)
    .map(v => v[field]);

  const all = [...others, correctAnswer];

  return all.sort(() => Math.random() - 0.5);
}

render();
