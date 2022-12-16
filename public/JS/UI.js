class UI {

    constructor() { }
  
    setQuestion(title) {
      const title_elem = document.querySelector(".title");
      title_elem.innerText = title;
    };
  
    setOptions(list_questions_options) {
      list_questions_options.map((options) => {
        const btn = document.createElement("button");
        btn.innerText = options;
        btn.className = "btn";
  
        btn.addEventListener("click", (e) => {
          btn.dispatchEvent(new CustomEvent("choice",
            {
              bubbles: true,
              data: e.target.innerText
            }));
        });
  
        const btn_list = document.querySelector(".response");
        btn_list.append(btn);
      });
  
    };
  
    showScore(score) {
      const quizzDiv = document.querySelector(".quiz");
      quizzDiv.style.display = "none";
  
      const spanScore = document.querySelector(".spanScore");
      spanScore.innerText = score;
  
      const divScore = document.querySelector(".quizScore");
      divScore.style.display = "flex";
    };
  
    clearOptions() {
      const btns_list = document.querySelector(".response");
      btns_list.innerHTML = "";
    };
  
    setProgress(actual, number_questions) {
      const span_progress = document.querySelector(".options");
      span_progress.innerText = `${++actual} / ${number_questions}`;
    };
  };


export {
  UI
}