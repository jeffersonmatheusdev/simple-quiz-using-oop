class Quiz {
    constructor(UI, question_file) {
      this.state = 0;
      this.score = 0;
      this.UI = UI;
      this.question_file = question_file.data;
    };
  
    amountOfQuestions() {
      return this.question_file.length;
    };
  
    itsOver() {
      return this.state === this.amountOfQuestions() ? true : false;
    };
  
    getCurrentQuestion() {
      return this.question_file[this.state];
    };
  
    showCurrentQuestion() {
      const { question, options } = this.getCurrentQuestion();
      this.UI.clearOptions();
      this.UI.setQuestion(question);
      this.UI.setOptions(options);
      this.UI.setProgress(this.state, this.amountOfQuestions());
    };
  
    computeAnswer(selected_option) {
      const { answer } = this.getCurrentQuestion();
      if (selected_option === answer) {
        this.score += 1;
      };
      this.state += 1;
      this.initQuiz();
    }
  
    initQuiz() {
      if (this.state < this.amountOfQuestions()) {
        this.showCurrentQuestion();
      } else {
         this.UI.showScore(this.score);
      };
    };
  
};

export {
  Quiz
}