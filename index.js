const quizData = [
  {
    question: "What does HTML stand for?",
    a: "Hyper Text Markup Language",
    b: "Hyper Text Mark Language",
    c: "How to Make Lasagna",

    correct: "a",
  },
  {
    question:
      "What is the difference between an opening tag and a closing tag?",
    a: "Opening tag has a / in front",
    b: "Closing tag has a / in front",
    c: "There is no difference",

    correct: "b",
  },
  {
    question: "<br/> What type of tag is this?",
    a: "Break tag",
    b: "A broken one",
    c: "No such tag exist",

    correct: "a",
  },
  {
    question: "What are the different types of CSS?",
    a: "Inline CSS",
    b: "Internal CSS",
    c: "External CSS",
    d: "All the above",

    correct: "d",
  },
  {
    question:
      "What is the correct HTML for referring to an external style sheet?",
    a: '<link rel="stylesheet" href="style.css">',
    b: "< src = 'mystyle.css'>",
    c: "<stylesheet>mystyle.css</stylesheet>",
    d: "All the above",

    correct: "a",
  },
];
const questionEl = document.getElementById("question");
const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const rbtn = document.getElementById("d");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];
  questionEl.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;

  if (d_text.innerText === "undefined") {
    d_text.innerText = " ";
    rbtn.style.display = "none";
  } else {
    rbtn.style.display = "inline";
  }
};

function getSelected()  {
  let answer = undefined;
  answerEls.forEach((answerEl) => {
    // console.log(answer.value);
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
};

function deselectAnswers(){
  answerEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
};

submitBtn.addEventListener("click", () => {
    const answer = getSelected();
  // console.log(answer);
  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    console.log(score)
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
        <h2>You answered correctly ${score}/${quizData.length} questions.</h2>
        
        <button onclick="location.reload()">Reload</button>`;
    }
  }
});
