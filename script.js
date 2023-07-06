// Quiz Questions

var quizData = [
    {
      country: "Australia",
      options: ["Sydney", "Melbourne", "Canberra", "Perth"],
      answer: 2
    },
    {
      country: "Spain",
      options: ["Madrid", "Barcelona", "Seville", "Valencia"],
      answer: 0
    },
    {
      country: "Canada",
      options: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
      answer: 2
    },
    {
      country: "Brazil",
      options: ["Rio de Janeiro", "Brasília", "São Paulo", "Salvador"],
      answer: 1
    },
    {
      country: "Italy",
      options: ["Rome", "Milan", "Venice", "Florence"],
      answer: 0
    },
    {
      country: "Japan",
      options: ["Tokyo", "Kyoto", "Osaka", "Hiroshima"],
      answer: 0
    },
    {
      country: "South Africa",
      options: ["Johannesburg", "Cape Town", "Durban", "Pretoria"],
      answer: 3
    },
    {
      country: "Mexico",
      options: ["Mexico City", "Guadalajara", "Monterrey", "Cancún"],
      answer: 0
    },
    {
      country: "India",
      options: ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
      answer: 0
    },
    {
      country: "France",
      options: ["Lyon", "Marseille", "Paris", "Toulouse"],
      answer: 2
    },
];

// Quiz Variables

var currentQuestion = 0;
var score = 0;

// Display questions and options
function loadQuestion() {
  var questionElement = document.getElementById("question");
  var optionsElement = document.getElementById("options");
  var submitBtn = document.getElementById("submit-btn");

  var questionNumber = currentQuestion + 1;
  var questionText = "Q" + questionNumber + ": What is the capital of " + quizData[currentQuestion].country + "?";
  questionElement.innerHTML = questionText;

  optionsElement.innerHTML = "";
  for (var i = 0; i < quizData[currentQuestion].options.length; i++) {
    var option = document.createElement("div");
    option.classList.add("form-check");
    option.innerHTML = `
      <input class="form-check-input" type="radio" name="option" id="option-${i}" value="${i}">
      <label class="form-check-label" for="option-${i}">
        ${quizData[currentQuestion].options[i]}
      </label>
    `;
    optionsElement.appendChild(option);
  }

  submitBtn.style.display = "block";
  if (currentQuestion === quizData.length - 1) {
    submitBtn.innerText = "Submit";
  } else {
    submitBtn.innerText = "Next";
  }
}

function checkAnswer(selectedIndex) {
  if (selectedIndex === quizData[currentQuestion].answer) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  var quizContainer = document.getElementById("quiz-container");
  quizContainer.innerHTML = "<h2>Quiz completed!</h2><p>Your score: " + score + "/" + quizData.length + "</p>";
}
