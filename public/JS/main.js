import { UI } from './UI.js';
import data from '../DATA/data.js';
import { Quiz } from './Quiz.js';

const uiInstance = new UI();
const quizInstance = new Quiz(uiInstance, data);
quizInstance.initQuiz();

document.addEventListener("choice", (e) => {
    quizInstance.computeAnswer(e.target.innerText)
});