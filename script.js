let questions = [
    {
        numb: 1,
        type: "multiple",
        question: "When an operator’s value is NULL, the typeof returned by the unary operator is:",
        answer: "Object",
        options: [
            "Integer",
            "Object",
            "Undefined",
            "Boolean"
        ]
    },
    {
        numb: 2,
        type: "multiple",
        question: "When the switch statement matches the expression with the given labels, how is the comparison done?",
        answer: "Both the datatype and the result of the expression are compared",
        options: [
            "Both the datatype and the result of the expression are compared",
            "Only the datatype of the expression is compared",
            "Only the value of the expression is compared",
            "None of the above"
        ]
    },
    {
        numb: 3,
        type: "multiple",
        question: "Which function is used to serialize an object into a JSON string in Javascript?",
        answer: "stringify()",
        options: [
            "stringify()",
            "parse()",
            "convert()",
            "None of the above"
        ]
    },
    {
        numb: 4,
        type: "multiple",
        question: "Which object in Javascript doesn’t have a prototype?",
        answer: "Base Object",
        options: [
            "Base Object",
            "All Objects have a prototype",
            "None of the Objects have a prototype",
            "None of the above"
        ]
    },
    {
        numb: 5,
        type: "multiple",
        question:  "Which of the following are closures in Javascript?",
        answer: "All of the above",
        options: [
            "Variables",
            "Functions",
            "Objects",
            "All of the above"
        ]
    },
    {
        numb: 6,
        type: "multiple",
        question:  "Which of the following are not server-side Javascript objects?",
        answer: "All of the above",
        options: [
            "Date",
            "FileUpload",
            "Function",
            "All of the above"
        ]
    },
    {
        numb: 7,
        type: "multiple",
        question:  "Which of the following is not a Javascript framework?",
        answer: "Cassandra",
        options: [
            "Node",
            "React",
            "Vue",
            "Cassandra"
        ]
    },
    {
        numb: 8,
        type: "multiple",
        question:  " Which of the following keywords is used to define a variable in Javascript?",
        answer: "Both 'var' and 'let'",
        options:  [
            "var",
            "let",
            "Both 'var' and 'let'",
            "None of the above"
        ]
    },
    {
        numb: 9,
        type: "multiple",
        question:  "Which of the following methods can be used to display data in some form using Javascript?",
        answer: "All of the above",
        options:  [
            "document.write()",
            "console.log()",
            "window.alert()",
            "All of the above"
        ]
    },
    {
        numb: 10,
        type: "multiple",
        question:  "What is the use of the '<noscript>' tag in Javascript?",
        answer: "The contents are displayed by non-JS-based browsers",
        options:  [
            "Clears all the cookies and cache",
            "Makes the page to load faster",
            "The contents are displayed by non-JS-based browsers",
            "None of the above"
        ]
    },
    {
        numb: 11,
        type: "multiple",
        question:  "How can a datatype be declared to be a constant type?",
        answer:  "const",
        options: [
            "const",
            "let",
            "var",
            "constant"
        ]
    },
    {
        numb: 12,
        type: "multiple",
        question:  "How do we write a comment in javascript?",
        answer:  "//",
        options: [
            "/* */",
            "//",
            "#",
            "$$"
        ]
    },
    {
        numb: 13,
        type: "multiple",
        question:  "How to stop an interval timer in Javascript?",
        answer:  "clearInterval",
        options: [
            "clearInterval",
            "clearTimer",
            "intervalOver",
            "cancelTimer"
        ]
    },
    {
        numb: 14,
        type: "multiple",
        question:   "Javascript is an _______ language?",
        answer:   "Object Oriented",
        options: [
            "Object-Based",
            "Object Oriented",
            "Procedural",
            "None of the above"
        ]
    },
    {
        numb: 15,
        type: "multiple",
        question:   "The 3 basic object attributes in Javascript are:",
        answer:   "Class, prototype, object's extensible flag",
        options: [
            "Class, prototype, object's parameters",
            "Class, prototype, object's extensible flag",
            "Class, parameters, objects extensible flag",
            "None of the above"
        ]
    },
    {
        numb: 16,
        type: "multiple",
        question:   "Upon encountering empty statements, what does the Javascript Interpreter do?",
        answer:   "Ignores the statements",
        options: [
            "Throws an error",
            "Ignores the statements",
            "Gives a warning",
            "None of the above"
        ]
    },
    {
        numb: 17,
        type: "multiple",
        question:  "What does the Javascript “debugger” statement do?",
        answer:   "It acts as a breakpoint in a program",
        options: [
            "It will debug all the errors in the program at runtime",
            "It acts as a breakpoint in a program",
            "It will debug error in the current statement if any",
            "All of the above"
        ]
    },
    {
        numb: 18,
        type: "multiple",
        question:  "What does the ‘toLocateString()’ method do in JS?",
        answer:   "Returns a localized string representation of an object",
        options: [
            "Returns a localised object representation",
            "Returns a parsed string",
            "Returns a localized string representation of an object",
            "None of the above"
        ]
    },
    {
        numb: 19,
        type: "multiple",
        question:  "What does … operator do in JS?",
        answer:   "It is used to spread iterables to individual elements",
        options: [
            "It is used to spread iterables to individual elements",
            "It is used to describe a datatype of undefined size",
            "No such operator exists",
            "None of the above"
        ]
    },
    {
        numb: 20,
        type: "multiple",
        question:  " What is the output of the following code snippet? print(NaN === NaN);",
        answer:   "false",
        options: [
            "true",
            "false",
            "undefined",
            "Error"
        ]
    },
    {
        numb: 21,
        type: "multiple",
        question:  "How are objects compared when they are checked with the strict equality operator?",
        answer:    "There references are compared",
        options: [
            "The contents of the objects are compared",
            "There references are compared",
            "None of the above",
            "All of the above"
        ]
    },
    {
        numb: 22,
        type: "multiple",
        question: "What keyword is used to check whether a given property is valid or not?",
        answer:    "in",
        options: [
            "in",
            "is in",
            "exists",
            "lies"
        ]
    },
    {
        numb: 23,
        type: "multiple",
        question: "What keyword is used to declare an asynchronous function in Javascript?",
        answer:    "async",
        options: [
            "async",
            "await",
            "function",
            "setTimeOut"
        ]
    },
    {
        numb: 24,
        type: "multiple",
        question: "In JavaScript, what is a block of statement?",
        answer:    "block that combines a number of statements into a single compound statement",
        options: [
            "Conditional block",
            "block that combines a number of statements into a single compound statement",
            "both conditional block and a single statement",
            "block that contains a single statement"
        ]
    },
    {
        numb: 25,
        type: "multiple",
        question: "The 'function' and 'var' are known as:",
        answer:    "Declaration statements",
        options: [
            "Keywords",
            "Data types",
            "Declaration statements",
            "Prototypes"
        ]
    },
    {
        numb: 26,
        type: "multiple",
        question: "In the JavaScript, which one of the following is not considered as an error:",
        answer:    "Division by zero",
        options: [
            "Syntax error",
            "Missing of semicolons",
            "Division by zero",
            "Missing of Bracket"
        ]
    },
    {
        numb: 27,
        type: "multiple",
        question: "Which one of the following is an ternary operator:",
        answer:    "?",
        options: [
            "?",
            ":",
            "-",
            "+"
        ]
    },
    {
        numb: 28,
        type: "multiple",
        question: "What we will get if we compare the 'one' with '8' using the less than operator ('one'<8)?",
        answer:     "False",
        options: [
            "False",
            "True",
            "NaN",
            "Undefined"
        ]
    },
    {
        numb: 29,
        type: "multiple",
        question: "Which one of the following is not a keyword:",
        answer:     "use strict",
        options: [
            "if",
            "with",
            "debugger",
            "use strict"
        ]
    },
    {
        numb: 30,
        type: "multiple",
        question: "What are the three important manipulations for a loop on a loop variable?",
        answer:     "Initialization, Testing, Updation",
        options: [
            "Updation, Incrementation, Initialization",
            "Initialization, Testing, Incrementation",
            "Testing, Updation, Testing",
            "Initialization, Testing, Updation"
        ]
    },
    {
        numb: 31,
        type: "multiple",
        question: "For which purpose the array 'map()' methods is used ?",
        answer:     "It passes every element of the array on which it is invoked to the function you specify, and returns an array containing the values returned by that function.",
        options: [
            "It used for mapping the elements of another array into itself.",
            "It passes each data-item of the array and returns the necessary mapped elements.",
            "It passes the data-items of an array into another array.",
            "It passes every element of the array on which it is invoked to the function you specify, and returns an array containing the values returned by that function."
        ]
    },
    {
        numb: 32,
        type: "multiple",
        question: "Which one of the following given task is performed by the 'pop()' method of the array?",
        answer:     "updates the element removes one element of an array on each time the 'pop()' function called",
        options: [
            "It updates the element of the array",
            "it increments the total length of the array by 1",
            "It prints the first element and made no impact on the length of the array",
            "updates the element removes one element of an array on each time the 'pop()' function called"
        ]
    },
    {
        numb: 33,
        type: "multiple",
        question: `What will happen if we use the "join()" method along with the "reverse()" method?`,
        answer:     "It will reverse the element and store the elements in the same array",
        options: [
            "It will reverse and concatenates the elements of the array",
            "It will reverse the element and store the elements in the same array",
            "It will just reverse the element of the array",
            "It will store the elements of the specified array in the normal order"
        ]
    },
    {
        numb: 34,
        type: "multiple",
        question: `What is the primary role of the "return ()" statement in a function body?`,
        answer:     "It returns the value and stops executing the function",
        options: [
            "It returns the value and continues executing rest of the statements",
            "It returns the value and stops the program execution",
            "Stops executing the function and returns the value",
            "It returns the value and stops executing the function"
        ]
    },
    {
        numb: 35,
        type: "multiple",
        question: "If a function which does not return a value is known as _____",
        answer:     "Procedures",
        options: [
            "Static function",
            "Procedures",
            "Method",
            "Dynamic function"
        ]
    },
    {
        numb: 36,
        type: "multiple",
        question: "The execution of a function stops when the program control encounters the _________ statement in the body of the function.",
        answer:     "return statement",
        options: [
            "return statement",
            "continue statement",
            "break statement",
            "goto statement"
        ]
    },
    {
        numb: 37,
        type: "multiple",
        question: "In which events/scenarios, A function name gets optional in JavaScript?",
        answer:  "When a function is defined as expressions",
        options: [
            "When a function is defined as a looping statement",
            "When the function is called",
            "When a function is defined as expressions",
            "When the function is predefined"
        ]
    },
    {
        numb: 38,
        type: "multiple",
        question: "What happens if the return statement has no related expression?",
        answer:  "It will return a undefined value",
        options: [
            "It will return a undefined value",
            "It will throw a exception",
            "It will throw a error",
            "None of the above"
        ]
    },
    {
        numb: 39,
        type: "multiple",
        question:  "Which one of the following keywords is used for defining the function in the JavaScript?",
        answer:  "function",
        options: [
            "Void",
            "init",
            "main",
            "function"
        ]
    },
    {
        numb: 40,
        type: "multiple",
        question:  "Why is JavaScript called a structured programming language?",
        answer:  "Because it follows the syntax and structure of the C programming language, which is a structured programming language",
        options: [
            "Because all popular web browsers support JavaScript as they provide built-in execution environments",
            "Because it is an object-oriented programming language that uses prototypes rather than using classes for inheritance",
            "Because it follows the syntax and structure of the C programming language, which is a structured programming language",
            "Because it ignores spaces, tabs, and newlines that appear in JavaScript programs"
        ]
    },
    {
        numb: 41,
        type: "multiple",
        question:  "Which of the following is not a JavaScript Data Types?",
        answer:  "Float",
        options: [
            "Boolean",
            "Undefined",
            "Number",
            "Float"
        ]
    },
    {
        numb: 42,
        type: "multiple",
        question:  "Which of the following is the correct statement of WHILE loop start?",
        answer:  "while (i <= 10)",
        options: [
            "while (i <= 10)",
            "while (i <= 10; i++)",
            "while i = 1 to 10",
            "None of These"
        ]
    },
    {
        numb: 43,
        type: "multiple",
        question:  "What are the different types of Pop up boxes available in JavaScript?",
        answer: "All of the above",
        options: [
            "Alert",
            "Prompt",
            "Confirm",
            "All of the above"
        ]
    },
    {
        numb: 44,
        type: "multiple",
        question:  "What are the different types of errors in JavaScript?",
        answer: "Run time errors",
        options: [
            "Load time errors",
            "Run time errors",
            "Logical Errors",
            "All of the above"
        ]
    },
    {
        numb: 45,
        type: "multiple",
        question:  "What is the main difference between var and let keywords in JavaScript?",
        answer: "var defined function scoped variable while let define block scoped variable",
        options: [
            "var defines a variable while let defines a constant",
            "var defined function scoped variable while let define block scoped variable",
            "The value of a variable declared with var can be changed while the value of a variable declared with let cannot be changed",
            "All of the above"
        ]
    },
    {
        numb: 46,
        type: "multiple",
        question:  "Which is the exponentiation operator in JavaScript?",
        answer: "**",
        options: [
            "exp()",
            "^",
            "**",
            "pow"
        ]
    },
    {
        numb: 47,
        type: "multiple",
        question:  "In JavaScript, the string template literals use ____ rather than the quotes ('') to define a string?",
        answer: "Back-ticks (``)",
        options: [
            "Single quotes ('')",
            "Backslash with single quote (\’'\')",
            "Backslashes (\\)",
            "Back-ticks (``)"
        ]
    },
    {
        numb: 48,
        type: "multiple",
        question:  "Which JavaScript method is used to call a function (a callback function) once for each array element?",
        answer: "forEach()",
        options: [
            "for()",
            "traverse()",
            "foreach()",
            "forEach()"
        ]
    },
    {
        numb: 49,
        type: "multiple",
        question:  "Which JavaScript method is used to create a new array with array elements that passes a test?",
        answer: "filter()",
        options: [
            "forEach()",
            "map()",
            "forMap()",
            "filter()"
        ]
    },
    {
        numb: 50,
        type: "multiple",
        question:  "What is the basic difference between JavaScript and Java?",
        answer: "Functions are values, and there is no hard distinction between methods and fields",
        options: [
            " Functions are considered as fields",
            "Functions are values, and there is no hard distinction between methods and fields",
            "Variables are specific",
            "There is no difference"
        ]
    },
]


//selecting all required elements
const start_btn = document.querySelector(".start_btn button");
const rule_box = document.querySelector(".rule_box");
const exit_btn = rule_box.querySelector(".buttons .quit");
const continue_btn = rule_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const time_line = document.querySelector("header .time_line");
const timeText = document.querySelector(".timer .time_left_txt");
const timeCount = document.querySelector(".timer .timer_sec");

// if startQuiz button clicked
start_btn.onclick = ()=>{
    rule_box.classList.add("activeInfo");
}

// if exitQuiz button clicked
exit_btn.onclick = ()=>{
    rule_box.classList.remove("activeInfo"); 
}

// if continueQuiz button clicked
continue_btn.onclick = ()=>{
    rule_box.classList.remove("activeInfo"); 
    quiz_box.classList.add("activeQuiz"); 
    showQuetions(0); 
    queCounter(1); 
    startTimer(15); 
    startTimerLine(0); 
}

let timeValue =  15;
let que_count = 0;
let que_numb = 1;
let userScore = 0;
let counter;
let counterLine;
let widthValue = 0;

const restart_quiz = result_box.querySelector(".buttons .restart");
const quit_quiz = result_box.querySelector(".buttons .quit");

// if restartQuiz button clicked
restart_quiz.onclick = ()=>{
    quiz_box.classList.add("activeQuiz"); 
    result_box.classList.remove("activeResult"); 
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    showQuetions(que_count); 
    queCounter(que_numb); 
    clearInterval(counter); 
    clearInterval(counterLine); 
    startTimer(timeValue); 
    startTimerLine(widthValue); 
    timeText.textContent = "Time Left"; 
    next_btn.classList.remove("show");
}

// if quitQuiz button clicked
quit_quiz.onclick = ()=>{
    window.location.reload(); //reload the current window
}

const next_btn = document.querySelector("footer .next_btn");
const bottom_ques_counter = document.querySelector("footer .total_que");

// if Next Que button clicked
next_btn.onclick = ()=>{
    if(que_count < questions.length - 1){
        que_count++; 
        que_numb++; 
        showQuetions(que_count); 
        queCounter(que_numb);
        clearInterval(counter); 
        clearInterval(counterLine); 
        startTimer(timeValue); 
        startTimerLine(widthValue);
        timeText.textContent = "Time Left";
        next_btn.classList.remove("show");
    }else{
        clearInterval(counter); 
        clearInterval(counterLine); 
        showResult(); 
    }
}

// getting questions and options from array
function showQuetions(index){
    const que_text = document.querySelector(".que_text");

    //creating a new html block for question and option and passing the value using array index
    let que_tag = '<span>'+ questions[index].numb + ". " + questions[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questions[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questions[index].options[3] +'</span></div>';
    que_text.innerHTML = que_tag; 
    option_list.innerHTML = option_tag; 
    
    const option = option_list.querySelectorAll(".option");

    // set onclick attribute to all available options
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
// creating the new div tags which for icons
let tickIconTag = '<div class="icon tick"><i class="fas fa-check"></i></div>';
let crossIconTag = '<div class="icon cross"><i class="fas fa-times"></i></div>';

//if user clicked on option
function optionSelected(answer){
    clearInterval(counter); 
    clearInterval(counterLine); 
    let userAns = answer.textContent; //getting user selected option
    let correcAns = questions[que_count].answer; 
    const allOptions = option_list.children.length;
    
    if(userAns == correcAns){ //if user selected option is equal to array's correct answer
        userScore += 1; //upgrading score value with 1
        answer.classList.add("correct"); //add green color to correct selected option
        answer.insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to correct selected option
        console.log("Correct Answer");
        console.log("Your correct answers = " + userScore);
    }else{
        answer.classList.add("incorrect"); //add red color to correct selected option
        answer.insertAdjacentHTML("beforeend", crossIconTag); //adding cross icon to correct selected option
        console.log("Wrong Answer");

        for(i=0; i < allOptions; i++){
            if(option_list.children[i].textContent == correcAns){ //if there is an option which is matched to an array answer 
                option_list.children[i].setAttribute("class", "option correct"); //adding green color to matched option
                option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //adding tick icon to matched option
                console.log("Auto selected correct answer.");
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
    }
    next_btn.classList.add("show"); //show the next button if user selected any option
}

function showResult(){
    rule_box.classList.remove("activeInfo"); //hide rule box
    quiz_box.classList.remove("activeQuiz"); //hide quiz box
    result_box.classList.add("activeResult"); //show result box
    const scoreText = result_box.querySelector(".score_text");
    if (userScore > 3){ // if user scored more than 3
        //creating a new span tag and passing the user score number and total question number
        let scoreTag = '<span>and congrats! 🎉, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;  //adding new span tag inside score_Text
    }
    else if(userScore > 1){ // if user scored more than 1
        let scoreTag = '<span>and nice 😎, You got <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
    else{ // if user scored less than 1
        let scoreTag = '<span>and sorry 😐, You got only <p>'+ userScore +'</p> out of <p>'+ questions.length +'</p></span>';
        scoreText.innerHTML = scoreTag;
    }
}

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--; 
        if(time < 9){ //if timer is less than 9
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){ 
            clearInterval(counter); 
            timeText.textContent = "Time Elasped"; 
            const allOptions = option_list.children.length; 
            let correcAns = questions[que_count].answer; //get correct answer from array
            for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ 
                    option_list.children[i].setAttribute("class", "option correct"); //add green color to matched option
                    option_list.children[i].insertAdjacentHTML("beforeend", tickIconTag); //add tick icon to matched option
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); //once user select an option then disabled all options
            }
            next_btn.classList.add("show"); 
        }
    }
}

function startTimerLine(time){
    counterLine = setInterval(timer, 29);
    function timer(){
        time += 1; //updating time value with 1
        time_line.style.width = time + "px"; 
        if(time > 549){ 
            clearInterval(counterLine); 
        }
    }
}

function queCounter(index){
   
    let totalQueCounTag = '<span><p>'+ index +'</p> of <p>'+ questions.length +'</p> Questions</span>';
    bottom_ques_counter.innerHTML = totalQueCounTag;  
}
