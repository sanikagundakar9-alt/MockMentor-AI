let questions = [

  "Tell me about yourself.",

  "What are your strengths?",

  "Why should we hire you?",

  "Explain your biggest achievement.",

  "Where do you see yourself in 5 years?"

];

let currentQuestion = 0;

function startInterview(){

  document.getElementById("question").innerHTML =
  questions[currentQuestion];

  startTimer();

  currentQuestion++;

  if(currentQuestion >= questions.length){

    currentQuestion = 0;

  }

}

// TIMER

function startTimer(){

  let timeLeft = 60;

  let timer =
  document.getElementById("timer");

  let interval = setInterval(()=>{

    timer.innerHTML =
    `Time Left: ${timeLeft}s`;

    timeLeft--;

    if(timeLeft < 0){

      clearInterval(interval);

      timer.innerHTML =
      "Time Over";

    }

  },1000);

}