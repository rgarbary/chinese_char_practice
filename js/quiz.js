export class Quiz {
  constructor(vocab) {
    this.vocab = this.shuffle(
         vocab.filter(v => v.enabled === true));
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
  this.index = (this.index + 1) % this.vocab.length;
  this.current = this.vocab[this.index];
  console.log("Next question:", this.current);
}

  getQuestion() {
  const item = this.current;

  const modes = ["char_pinyin", "char_def", "def_char"];
  const mode = modes[Math.floor(Math.random() * modes.length)];

  if (mode === "char_pinyin") {
    return {
      type: "character",
      value: item.character,
      answer: item.pinyin,
      answerField: "pinyin"
      
    };
  }

  if (mode === "char_def") {
    return {
      type: "character",
      value: item.character,
      answer: item.english,
      answerField: "english"
    };
  }

  // def → char
  return {
    type: "definition",
    value: item.english,
    answer: item.character,
    answerField: "character"
  };
}

  checkAnswer(input) {
    return input.trim().toLowerCase() ===
           this.getQuestion().answer.trim().toLowerCase();
  }

  incrementScore() {
    this.score++;
  }
}
