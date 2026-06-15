export class Quiz {
  constructor(vocab) {
    this.vocab = this.shuffle(
         vocab.filter(v => v.include === true));
    this.index = 0;
    this.score = 0;
    this.current = this.vocab[this.index];
    this.questionMode = "character_to_pinyin";
  }

  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  next() {
    this.index++;

    if (this.index >= this.vocab.length) {
      this.vocab = this.shuffle([...this.vocab]);
      this.index = 0;
    }

    this.current = this.vocab[this.index];
  }

  getQuestion() {
    const c = this.current;

    if (this.questionMode === "character_to_pinyin") {
      return { type: "character", value: c.character, answer: c.pinyin };
    }

    if (this.questionMode === "english_to_character") {
      return { type: "english", value: c.english, answer: c.character };
    }
  }

  checkAnswer(input) {
    return input.trim().toLowerCase() ===
           this.getQuestion().answer.trim().toLowerCase();
  }

  incrementScore() {
    this.score++;
  }
}
