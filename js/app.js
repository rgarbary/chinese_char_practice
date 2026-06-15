import { vocabulary } from "./data.js";
import { Quiz } from "./quiz.js";
import { UI } from "./ui.js";

const quiz = new Quiz(vocabulary);

function render() {
  const q = quiz.getQuestion();

  UI.typeEl.textContent = `Question type: ${q.type}`;
  UI.questionEl.textContent = q.value;

  const field = q.answerField;

  const choices = getRandomChoices(
    vocabulary,
    q.answer,
    field
  );

  UI.showChoices(choices, (selected) => {
  if (selected === q.answer) {
    quiz.incrementScore();
    UI.showCorrect();
  } else {
    UI.showWrong(q.answer);
  }

  UI.updateScore(quiz.score);

  setTimeout(() => {
    quiz.next();
    render();
  }, 600);
});
} // ✅ THIS WAS MISSING — closes render()

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
