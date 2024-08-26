let start = document.getElementById("start")
let quizRules = document.getElementById("rules")
let exitQuiz = document.getElementById("btn-exit")
let continueQuiz = document.getElementById("continue-btn")
let questions = document.getElementById("question-words")
let options = document.getElementById("options")
let next_question = document.getElementById("next-que")
let question_range = document.getElementById("que-no")
let time = document.getElementById("time")



let QuestionBank = [
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "When an operator’s value is NULL, the typeof returned by the unary operator is:",
    "correct_answer": "Object",
    "incorrect_answers": [
        "Integer",
        "Object",
        "Undefined",
        "Boolean"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "When the switch statement matches the expression with the given labels, how is the comparison done?",
    "correct_answer": "Both the datatype and the result of the expression are compared",
    "incorrect_answers": [
        "Both the datatype and the result of the expression are compared",
        "Only the datatype of the expression is compared",
        "Only the value of the expression is compared",
        "None of the above"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "Which function is used to serialize an object into a JSON string in Javascript?",
    "correct_answer": "stringify()",
    "incorrect_answers": [
        "stringify()",
        "parse()",
        "convert()",
        "None of the above"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "Which object in Javascript doesn’t have a prototype?",
    "correct_answer": "Base Object",
    "incorrect_answers": [
        "Base Object",
        "All Objects have a prototype",
        "None of the Objects have a prototype",
        "None of the above"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "Which of the following are closures in Javascript?",
    "correct_answer": "All of the above",
    "incorrect_answers": [
        "Variables",
        "Functions",
        "Objects",
        "All of the above"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "Which of the following are not server-side Javascript objects?",
    "correct_answer": "All of the above",
    "incorrect_answers": [
        "Date",
        "FileUpload",
        "Function",
        "All of the above"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "Which of the following is not a Javascript framework?",
    "correct_answer": "Cassandra",
    "incorrect_answers": [
        "Node",
        "React",
        "Vue",
        "Cassandra"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": " Which of the following keywords is used to define a variable in Javascript?",
    "correct_answer": "Both 'var' and 'let'",
    "incorrect_answers": [
        "var",
        "let",
        "Both 'var' and 'let'",
        "None of the above"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "Which of the following methods can be used to display data in some form using Javascript?",
    "correct_answer": "All of the above",
    "incorrect_answers": [
        "document.write()",
        "console.log()",
        "window.alert()",
        "All of the above"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "What is the use of the <noscript> tag in Javascript?",
    "correct_answer": "The contents are displayed by non-JS-based browsers",
    "incorrect_answers": [
        "Clears all the cookies and cache",
        "Makes the page to load faster",
        "The contents are displayed by non-JS-based browsers",
        "None of the above"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "How can a datatype be declared to be a constant type?",
    "correct_answer": "const",
    "incorrect_answers": [
        "const",
        "let",
        "var",
        "constant"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "How do we write a comment in javascript?",
    "correct_answer": "//",
    "incorrect_answers": [
        "/* */",
        "//",
        "#",
        "$$"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "How to stop an interval timer in Javascript?",
    "correct_answer": "clearInterval",
    "incorrect_answers": [
        "clearInterval",
        "clearTimer",
        "intervalOver",
        "cancelTimer"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "Javascript is an _______ language?",
    "correct_answer": "Object Oriented",
    "incorrect_answers": [
        "Object-Based",
        "Object Oriented",
        "Procedural",
        "None of the above"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "The 3 basic object attributes in Javascript are:",
    "correct_answer": "Class, prototype, object's extensible flag",
    "incorrect_answers": [
        "Class, prototype, object's parameters",
        "Class, prototype, object's extensible flag",
        "Class, parameters, objects extensible flag",
        "None of the above"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "Upon encountering empty statements, what does the Javascript Interpreter do?",
    "correct_answer": "Ignores the statements",
    "incorrect_answers": [
        "Throws an error",
        "Ignores the statements",
        "Gives a warning",
        "None of the above"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "What does the Javascript “debugger” statement do?",
    "correct_answer": "It acts as a breakpoint in a program",
    "incorrect_answers": [
        "It will debug all the errors in the program at runtime",
        "It acts as a breakpoint in a program",
        "It will debug error in the current statement if any",
        "All of the above"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "What does the ‘toLocateString()’ method do in JS?",
    "correct_answer": "Returns a localized string representation of an object",
    "incorrect_answers": [
        "Returns a localised object representation",
        "Returns a parsed string",
        "Returns a localized string representation of an object",
        "None of the above"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "What does … operator do in JS?",
    "correct_answer": "It is used to spread iterables to individual elements",
    "incorrect_answers": [
        "It is used to spread iterables to individual elements",
        "It is used to describe a datatype of undefined size",
        "No such operator exists",
        "None of the above"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": " What is the output of the following code snippet? print(NaN === NaN);",
    "correct_answer": "false",
    "incorrect_answers": [
        "true",
        "false",
        "undefined",
        "Error"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "How are objects compared when they are checked with the strict equality operator?",
    "correct_answer": "There references are compared",
    "incorrect_answers": [
        "The contents of the objects are compared",
        "There references are compared",
        "None of the above",
        "All of the above"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "What keyword is used to check whether a given property is valid or not?",
    "correct_answer": "in",
    "incorrect_answers": [
        "in",
        "is in",
        "exists",
        "lies"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "What keyword is used to declare an asynchronous function in Javascript?",
    "correct_answer": "async",
    "incorrect_answers": [
        "async",
        "await",
        "function",
        "setTimeOut"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "In JavaScript, what is a block of statement?",
    "correct_answer": "block that combines a number of statements into a single compound statement",
    "incorrect_answers": [
        "Conditional block",
        "block that combines a number of statements into a single compound statement",
        "both conditional block and a single statement",
        "block that contains a single statement"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "The 'function' and 'var' are known as:",
    "correct_answer": "Declaration statements",
    "incorrect_answers": [
        "Keywords",
        "Data types",
        "Declaration statements",
        "Prototypes"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "In the JavaScript, which one of the following is not considered as an error:",
    "correct_answer": "Division by zero",
    "incorrect_answers": [
        "Syntax error",
        "Missing of semicolons",
        "Division by zero",
        "Missing of Bracket"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "Which one of the following is an ternary operator:",
    "correct_answer": "?",
    "incorrect_answers": [
        "?",
        ":",
        "-",
        "+"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "What we will get if we compare the 'one' with '8' using the less than operator ('one'<8)?",
    "correct_answer": "False",
    "incorrect_answers": [
        "False",
        "True",
        "NaN",
        "Undefined"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "Which one of the following is not a keyword:",
    "correct_answer": "use strict",
    "incorrect_answers": [
        "if",
        "with",
        "debugger",
        "use strict"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "What are the three important manipulations for a loop on a loop variable?",
    "correct_answer": "Initialization, Testing, Updation",
    "incorrect_answers": [
        "Updation, Incrementation, Initialization",
        "Initialization, Testing, Incrementation",
        "Testing, Updation, Testing",
        "Initialization, Testing, Updation"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "For which purpose the array 'map()' methods is used ?",
    "correct_answer": "It passes every element of the array on which it is invoked to the function you specify, and returns an array containing the values returned by that function.",
    "incorrect_answers": [
        "It used for mapping the elements of another array into itself.",
        "It passes each data-item of the array and returns the necessary mapped elements.",
        "It passes the data-items of an array into another array.",
        "It passes every element of the array on which it is invoked to the function you specify, and returns an array containing the values returned by that function."
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "Which one of the following given task is performed by the 'pop()' method of the array?",
    "correct_answer": "Myrtenaster",
    "incorrect_answers": [
        "Itupdates the element of the array",
        "it increments the total length of the array by 1",
        "It prints the first element and made no impact on the length of the array",
        "updates the element removes one element of an array on each time the 'pop()' function called"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": `What will happen if we use the "join()" method along with the "reverse()" method?`,
    "correct_answer": "It will reverse the element and store the elements in the same array",
    "incorrect_answers": [
        "It will reverse and concatenates the elements of the array",
        "It will reverse the element and store the elements in the same array",
        "It will just reverse the element of the array",
        "It will store the elements of the specified array in the normal order"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": `What is the primary role of the "return ()" statement in a function body?`,
    "correct_answer": "It returns the value and stops executing the function",
    "incorrect_answers": [
        "It returns the value and continues executing rest of the statements",
        "It returns the value and stops the program execution",
        "Stops executing the function and returns the value",
        "It returns the value and stops executing the function"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "If a function which does not return a value is known as _____",
    "correct_answer": "Procedures",
    "incorrect_answers": [
        "Static function",
        "Procedures",
        "Method",
        "Dynamic function"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "The execution of a function stops when the program control encounters the _________ statement in the body of the function.",
    "correct_answer": "return statement",
    "incorrect_answers": [
        "return statement",
        "continue statement",
        "break statement",
        "goto statement"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "In which events/scenarios, A function name gets optional in JavaScript?",
    "correct_answer": "When a function is defined as expressions",
    "incorrect_answers": [
        "When a function is defined as a looping statement",
        "When the function is called",
        "When a function is defined as expressions",
        "When the function is predefined"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "What happens if the return statement has no related expression?",
    "correct_answer": "It will return a undefined value",
    "incorrect_answers": [
        "It will return a undefined value",
        "It will throw a exception",
        "It will throw a error"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "Which one of the following keywords is used for defining the function in the JavaScript?",
    "correct_answer": "function",
    "incorrect_answers": [
        "Void",
        "init",
        "main",
        "function"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "Why is JavaScript called a structured programming language?",
    "correct_answer": "Because it follows the syntax and structure of the C programming language, which is a structured programming language",
    "incorrect_answers": [
        "Because all popular web browsers support JavaScript as they provide built-in execution environments",
        "Because it is an object-oriented programming language that uses prototypes rather than using classes for inheritance",
        "Because it follows the syntax and structure of the C programming language, which is a structured programming language",
        "Because it ignores spaces, tabs, and newlines that appear in JavaScript programs"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "Which of the following is not a JavaScript Data Types?",
    "correct_answer": "Float",
    "incorrect_answers": [
        "Boolean",
        "Undefined",
        "Number",
        "Float"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "Which of the following is the correct statement of WHILE loop start?",
    "correct_answer": "while (i <= 10)",
    "incorrect_answers": [
        "while (i <= 10)",
        "while (i <= 10; i++)",
        "while i = 1 to 10",
        "None of These"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": " What are the different types of Pop up boxes available in JavaScript?",
    "correct_answer": "All of the above",
    "incorrect_answers": [
        "Alert",
        "Prompt",
        "Confirm",
        "All of the above"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "What are the different types of errors in JavaScript?",
    "correct_answer": "Run time errors",
    "incorrect_answers": [
        "Load time errors",
        "Run time errors",
        "Logical Errors",
        "All of the above"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "What is the main difference between var and let keywords in JavaScript?",
    "correct_answer": "var defined function scoped variable while let define block scoped variable",
    "incorrect_answers": [
        "var defines a variable while let defines a constant",
        "var defined function scoped variable while let define block scoped variable",
        "The value of a variable declared with var can be changed while the value of a variable declared with let cannot be changed",
        "All of the above"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "Which is the exponentiation operator in JavaScript?",
    "correct_answer": "**",
    "incorrect_answers": [
        "exp()",
        "^",
        "**",
        "pow"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "In JavaScript, the string template literals use ____ rather than the quotes ('') to define a string?",
    "correct_answer": "Back-ticks (``)",
    "incorrect_answers": [
        "Single quotes ('')",
        "Backslash with single quote (\’'\')",
        "Backslashes (\\)",
        "Back-ticks (``)"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "Which JavaScript method is used to call a function (a callback function) once for each array element?",
    "correct_answer": "forEach()",
    "incorrect_answers": [
        "for()",
        "traverse()",
        "foreach()",
        "forEach()"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "Which JavaScript method is used to create a new array with array elements that passes a test?",
    "correct_answer": "filter()",
    "incorrect_answers": [
        "forEach()",
        "map()",
        "forMap()",
        "filter()"
    ]
    },
    {
    "type": "multiple",
    "category": "Programming JavaScript",
    "question": "What is the basic difference between JavaScript and Java?",
    "correct_answer": "Functions are values, and there is no hard distinction between methods and fields",
    "incorrect_answers": [
        " Functions are considered as fields",
        "Functions are values, and there is no hard distinction between methods and fields",
        "Variables are specific",
        "There is no difference"
    ]
    },
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

let currentQuestionIndex = 0
let timeValue =  15;
let counter;



function getQuestion(){
    let currentQuestion = QuestionBank[currentQuestionIndex]
    
    questions.textContent = `${currentQuestionIndex + 1}. ${currentQuestion.question}`

    options.innerHTML = ""
    currentQuestion.incorrect_answers.forEach((option, index) => {
        let optionBtn = document.createElement("button")
        optionBtn.setAttribute("value", option)
        optionBtn.setAttribute("class", "opt-btn")
        optionBtn.textContent = option
        options.appendChild(optionBtn)

        optionBtn.addEventListener("click", (e) => {
            // optionBtn.classList.toggle()
            if (e.target.textContent === currentQuestion.correct_answer){
                optionBtn.style.backgroundColor = "green"
                optionBtn.ariaDisabled
            }else {
                optionBtn.style.backgroundColor = "red"
            }
            
        })
    })

    question_range.innerText = `${currentQuestionIndex + 1} of ${QuestionBank.length}`
    startTimer(timeValue)
}

getQuestion()


next_question.addEventListener("click", () => {
    clearInterval(counter)
    if (currentQuestionIndex < QuestionBank.length - 1 ){
        currentQuestionIndex += 1
        getQuestion()
    }
    else {
        next_question.innerText = "Finish"
        next_question.addEventListener("click", () => {
            alert("Quiz End")
        })
    }
})

function startTimer(timeCount){
    counter = setInterval(timer, 1000);
    function timer(){
        time.textContent = timeCount; //changing the value of timeCount with time value
        timeCount--; //decrement the time value
        if(timeCount < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 before time value
        }
        if(timeCount < 0){ //if timer is less than 0
            clearInterval(counter); //clear counter
            currentQuestionIndex += 1
            getQuestion()
        }
    }
}
