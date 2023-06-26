const progresBar = document.querySelector(".progress-bar"),
      progresText = document.querySelector(".progress-text");

const progress =(value) =>{
    const percentage = (value / time) * 100;
    progresBar.style.width = `${percentage}%`;
    progresText.innerHTML = `${value}`
}
let questions =[],
     time = 30, 
     score = 0,
     currentQuestion,
     timer;

  const starBtn = document.querySelector(".start"),
        numQuestions = document.querySelector("#num-questions"),
        category = document.querySelector("#category"),
        difficulty = document.querySelector("#difficulty"),
        timePerQuestion = document.querySelector("#time"),
        quiz = document.querySelector(".quiz"),
        startscreen = document.querySelector(".start-screen");

const startQuiz = () =>{
    const num = numQuestions.value;
    cat = category.value;
    diff = difficulty.value;
// api url6
    const url = `https://opentdb.com/api.php?amount=${num}&category=${cat}&difficulty=${diff}&type=multiple`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
         questions = data.results;
         startscreen.classList.add(hide)
         quiz.classList.remove(hide)
      })
};

starBtn.addEventListener("click" , startQuiz)















