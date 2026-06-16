export const UI = {
  questionEl: document.getElementById("question"),
  feedbackEl: document.getElementById("feedback"),
  scoreEl: document.getElementById("score"),
  reviewEl: document.getElementById("review"),

  showChoices: function (choices, onSelect) {
    const container = document.getElementById("choices");

    if (!container) {
      console.error("Missing #choices element in HTML");
      return;
    }

    container.innerHTML = "";

    choices.forEach(choice => {
      const div = document.createElement("div");
      div.className = "choice";
      div.textContent = choice;

      div.onclick = () => {
        try {
          console.log("Choice clicked:", choice);
          onSelect(choice);
        } catch (err) {
          console.error("Error in onSelect():", err);
        }
      };

      container.appendChild(div);
    });
  },

  showCorrect: function () {
    if (!this.feedbackEl) return;

    this.feedbackEl.textContent = "Correct!";
    this.feedbackEl.style.color = "green";
  },

  showReview: function (item) {
    if (!this.reviewEl || !item) return;

    this.reviewEl.innerHTML = `
      <div><strong>Correct answer:</strong></div>
      <div>Character: ${item.character}</div>
      <div>Pinyin: ${item.pinyin}</div>
      <div>English: ${item.english}</div>
    `;
  },

  showWrong: function (answer) {
    if (!this.feedbackEl) return;

    this.feedbackEl.textContent = `Wrong. Answer: ${answer}`;
    this.feedbackEl.style.color = "red";
  },

  updateScore: function (score) {
    if (!this.scoreEl) return;

    this.scoreEl.textContent = `Score: ${score}`;
  }
};
