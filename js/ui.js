export const UI = {
  typeEl: document.getElementById("questionType"),
  questionEl: document.getElementById("question"),
  feedbackEl: document.getElementById("feedback"),
  scoreEl: document.getElementById("score"),

  showChoices: function(choices, onSelect) {
    const container = document.getElementById("choices");
    container.innerHTML = "";

    choices.forEach(choice => {
      const div = document.createElement("div");
      div.className = "choice";
      div.textContent = choice;

      div.onclick = () => onSelect(choice);

      container.appendChild(div);
    });
  },

  showCorrect: function() {
    this.feedbackEl.textContent = "Correct!";
    this.feedbackEl.style.color = "green";
  },

  showWrong: function(answer) {
    this.feedbackEl.textContent = `Wrong. Answer: ${answer}`;
    this.feedbackEl.style.color = "red";
  },

  updateScore: function(score) {
    this.scoreEl.textContent = `Score: ${score}`;
  }
};
