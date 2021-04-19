
let questions = [
  {
    id: 1,
    question: "What is part of a database that holds only one type of information?",
    answer: "Field",
    options: [
      "Report",
      "Field",
      "Record",
      "File"
    ]
  },
  {
    id: 2,
    question: "The minimum number of comparisons required to determine if an integer appears more than n/2 times in a sorted array of n integers is?",
    answer: "Θ(logn)",
    options: [
      "Θ(n)",
      "Θ(logn)",
      "Θ(log*n)",
      "Θ(1)"
    ]
  },
  {
    id: 3,
    question: "In a compiler, keywords of a language are recognized during",
    answer: "the code generation",
    options: [
      "parsing of the program",
      "the code generation",
      "The lexical analysis of the program",
      "dataflow analysis"
    ]
  },
  {
    id: 4,
    question: "Which tag is used to encapsulate navigation and then style the elements appropriately as menu items?",
    answer: "Both UL LI",
    options: [
      "UL",
      "LI",
      "Nav",
      "Both UL LI"
    ]
  },
  {
    id: 5,
    question: `Suppose we want to arrange five nos. of DIVs so that DIV4 is placed above DIV1. 
    Now, which css property will we use to control the order of stack?`,
    answer: "z-index ",
    options: [
      `d-index `,
      "x-index",
      "z-index",
      "y-index>"
    ]
  },
  {
    id: 6,
    question: "Which one of the following is not a step to install a library you need to perform the compatibility in browsers?",
    answer: "None Of These",
    options: [
      " Download the library from the github location",
      "Uncompress the file",
      "Insert the following code inside the head tag",
      "None of these"
    ]
  },
  {
    id: 7,
    question: "Which of the following selector selects the elements that are the default among a set of similar elements?",
    answer: "Both are equal in the value and data type.",
    options: [
      "Both are equal in the value and data type.",
      "Both are x and y are equal in value only.",
      "Both x and y are equal in value, type and reference address as well.",
      "Both are not same at all."
    ]
  },
  {
    id: 8,
    question: "In JavaScript the x===y statement implies that:",
    answer: "Both are equal in the value and data type",
    options: [
      "Both x and y are equal in value, type and reference address as well.",
      "Both are x and y are equal in value only.",
      "Both are equal in the value and data type",
      "Both are not same at all."
    ]
  },
  {
    id: 9,
    question: "HTML5 documents may contains a ___________ element, which is used to set the header section of a document.",
    answer: "Header",
    options: [
      `Header`,
      `Footer`,
      "Section",
      "Drive"
    ]
  },
  {
    id: 10,
    question: "Which of the following type of a variable is volatile?",
    answer: "Mutable Variable",
    options: [
      "Mutable Variable",
      "Dynamic Variable",
      "Immutable Variable",
      "Volatile Variable"
    ]
  },
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
