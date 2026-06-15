export const UI = {
  questionEl: document.getElementById("question"),
  typeEl: document.getElementById("questionType"),
  inputEl: document.getElementById("answerInput"),
  feedbackEl: document.getElementById("feedback"),
  scoreEl: document.getElementById("score"),

  showQuestion(q) {
    this.typeEl.textContent = `Question type: ${q.type}`;
    this.questionEl.textContent = q.value;
    this.inputEl.value = "";
    this.feedbackEl.textContent = "";
  },

  showCorrect() {
    this.feedbackEl.textContent = "Correct!";
    this.feedbackEl.style.color = "green";
  },

  showWrong(correctAnswer) {
    this.feedbackEl.textContent = `Wrong. Answer: ${correctAnswer}`;
    this.feedbackEl.style.color = "red";
  },

  updateScore(score) {
    this.scoreEl.textContent = `Score: ${score}`;
  }
};
