const questions = [
  {
    question: "What is HTML?",
    answers: ["Programming Language", "Markup Language", "Database", "OS"],
    correct: 1
  },
  {
    question: "CSS is used for?",
    answers: ["Logic", "Styling", "Database", "Server"],
    correct: 1
  },
  {
    question: "JavaScript is used for?",
    answers: ["Structure", "Styling", "Interactivity", "Storage"],
    correct: 2
  }
];

let currentQuestion = 0;

function loadQuestion() {
  let q = questions[currentQuestion];
  document.getElementById("question").innerText = q.question;

  let buttons = document.querySelectorAll(".btn");
  buttons.forEach((btn, index) => {
    btn.innerText = q.answers[index];
    btn.style.background = "";
  });
}

function selectAnswer(btn) {
  let buttons = document.querySelectorAll(".btn");
  buttons.forEach(b => b.disabled = true);

  let correctIndex = questions[currentQuestion].correct;
  if (btn.innerText === questions[currentQuestion].answers[correctIndex]) {
    btn.style.background = "green";
  } else {
    btn.style.background = "red";
    buttons[correctIndex].style.background = "green";
  }
}

function nextQuestion() {
  currentQuestion++;
  let buttons = document.querySelectorAll(".btn");
  buttons.forEach(b => b.disabled = false);

  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    document.querySelector(".quiz-container").innerHTML = "<h2>Quiz Completed!</h2>";
  }
}

loadQuestion();