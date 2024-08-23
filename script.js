let start = document.getElementById("start")
let quizRules = document.getElementById("rules")
let exitQuiz = document.getElementById("btn-exit")
let continueQuiz = document.getElementById("continue-btn")
let questions = document.getElementById("questions")



let QuestionBank = [
    {
    "type": "multiple",
    "difficulty": "medium",
    "category": "Entertainment: Cartoon &amp; Animations",
    "question": "In the animated series RWBY, what is the name of the weapon used by Weiss Schnee?",
    "correct_answer": "Myrtenaster",
    "incorrect_answers": [
    "Gambol Shroud",
    "Crescent Rose",
    "Ember Celica"
    ]
    },
    {
    "type": "multiple",
    "difficulty": "medium",
    "category": "Entertainment: Japanese Anime &amp; Manga",
    "question": "The main protagonist of the fourth part of JoJo&#039;s Bizarre Adventure is which of the following?",
    "correct_answer": "Josuke Higashikata",
    "incorrect_answers": [
    "Yoshikage kira",
    "Koichi Hirose",
    "Joey JoJo"
    ]
    },
    {
    "type": "boolean",
    "difficulty": "easy",
    "category": "General Knowledge",
    "question": "French is an official language in Canada.",
    "correct_answer": "True",
    "incorrect_answers": [
    "False"
    ]
    },
    {
    "type": "multiple",
    "difficulty": "medium",
    "category": "History",
    "question": "How many times was Albert Einstein married in his lifetime?",
    "correct_answer": "Twice",
    "incorrect_answers": [
    "Five",
    "Thrice",
    "Once"
    ]
    },
    {
    "type": "boolean",
    "difficulty": "easy",
    "category": "History",
    "question": "The Tiananmen Square protests of 1989 were held in Hong Kong.",
    "correct_answer": "False",
    "incorrect_answers": [
    "True"
    ]
    },
    {
    "type": "multiple",
    "difficulty": "medium",
    "category": "Celebrities",
    "question": "How much weight did Chris Pratt lose for his role as Star-Lord in &quot;Guardians of the Galaxy&quot;?",
    "correct_answer": "60 lbs",
    "incorrect_answers": [
    "30 lbs",
    "50 lbs",
    "70 lbs"
    ]
    },
    {
    "type": "boolean",
    "difficulty": "medium",
    "category": "Science &amp; Nature",
    "question": "The Doppler effect applies to light.",
    "correct_answer": "True",
    "incorrect_answers": [
    "False"
    ]
    },
    {
    "type": "multiple",
    "difficulty": "medium",
    "category": "Entertainment: Music",
    "question": "&#039;74&ndash;&#039;75 is a 1993 single from the album Ring by what American band?",
    "correct_answer": "The Connells",
    "incorrect_answers": [
    "R.E.M.",
    "The Ocean Blue",
    "The Bangles"
    ]
    },
    {
    "type": "boolean",
    "difficulty": "easy",
    "category": "Entertainment: Music",
    "question": "John Williams composed the music for &quot;Star Wars&quot;.",
    "correct_answer": "True",
    "incorrect_answers": [
    "False"
    ]
    },
    {
    "type": "multiple",
    "difficulty": "hard",
    "category": "Entertainment: Books",
    "question": "In Margaret Atwood&#039;s &quot;The Handmaid&#039;s Tale&quot;, what is Offred&#039;s real name is implied to be?",
    "correct_answer": "June",
    "incorrect_answers": [
    "August",
    "April",
    "May"
    ]
    }
]

start.addEventListener("click", () => {
    quizRules.style.display = "flex"
    start.style.display = "none"

})

// Exit the Quiz App
exitQuiz.addEventListener("click", () => {
    start.style.display = "flex"
    quizRules.style.display = "none"
})

continueQuiz.addEventListener("click", () => {
    quizRules.style.display = "none"
    questions.style.display = "flex"
})

