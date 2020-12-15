// Define question variables



// pos is position of where the user in the test or which question they're up to
var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0, incorrect = 1;


// this is a multidimensional array divided as such:
//  4 inner array elements (each question divided here)
//  5 elements inside each array (question, a, b, c, answer)
var questions = [
    {
        question: "What is the order of Bootstrap CDN Structure?",
        a: "Rows, Columns, Sections",
        b: "Columns, Rows, Cats",
        c: "Sections, Columns, Monkeys",
        answer: "A"
    },
    {
        question: "What does Pseudocoding mean in programming?",
        a: "Solving a sudoku puzzle while trying to code",
        b: "Writing out all the necessary steps in code prior to creating it",
        c: "Writing code describing fictional things in life",
        answer: "B"
    },
    {
        question: "How do you add an event listener to your code?",
        a: ".addEarsfordays",
        b: ".addMelisteninghard",
        c: ".addEventlistener",
        answer: "C"
    },
    {
        question: "What are the basic elements of a webpage?",
        a: "HTML, CSS, JavaScript",
        b: "Fire, wind, water",
        c: "Magnesium, Chromium, Iron",
        answer: "A"
    }
];



// Creating a function here to display the questions, this get function is an abbreviated getElementById function  
function get(x) {
    return document.getElementById(x);
}
// this function provides a question to display on the page
function renderQuestion() {
    test = get("test");
    // this will display the number of questions correctly chosen
    if (pos >= questions.length) {
        test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct</h2>";
        get("test_status").innerHTML = "All finished!";

        // resets the variable to allow users to restart the test
        pos = 0;
        correct = 0;

        // stops rest of renderQuestion function running when test is completed
        return false;
    }
    get("test_status").innerHTML = "Question " + (pos + 1) + " of " + questions.length;

    question = questions[pos].question;
    chA = questions[pos].a;
    chB = questions[pos].b;
    chC = questions[pos].c;

    // display the question
    test.innerHTML = "<h3>" + question + "</h3>";

    // display the answer options
    // the += appends to the data we started on the line above
    test.innerHTML += "<label> <input type='radio' name='choices' value='A'> " + chA + "</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='B'> " + chB + "</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='C'> " + chC + "</label><br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}
function checkAnswer() {
    // use getElementsByName because we have an array which it will loop through
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    // checks if answer matches the correct choice
    if (choice == questions[pos].answer) {
        //each time there is a correct answer this value increases
        correct++;
        // creates an alert to show you are correct
        alert("That is correct!!");

    }

    if (choice !== questions[pos].answer) {
        //each time there is an incorrect answer this value increases
        incorrect++;
        // creates an alert to show you are incorrect
        alert("Do a bit more studying please... PLEASE!");

    }

    // changes position of which character user is on
    pos++;
    // then the renderQuestion function runs again to go to next question
    renderQuestion();
}
// Add event listener to call renderQuestion on page load event
window.addEventListener("load", renderQuestion);










// var startBtn = document.querySelector("#start-quiz");
// var timerEl = document.querySelector("timer");
// var startView = document.querySelector("#start-view");
// var questionView = document.querySelector("#quiz-view");

// var counter = 60;
// var timerInterval = 0;

// function startQuiz() {
//     // remove the start button or hide it 
//     startView.getElementsByClassName.display = "none";
//     questionView.getElementsByClassName.display = "block";

//     timerInterval = setInterval(function () {
//         counter--;
//         if (counter >= 0) {
//             timerEl.innerHTML = counter;

//         }   else if (counter < 0) {
//             clearInterval(timerInterval);
//             timerEl.innerHTML = counter + 61;
//             counter = 60;
//         }
//     }, 1000)


// };

// function handleAnswer() {
//     //if last question is reached
//     //then stop the timer
//     clearInterval(timerInterval)
// };

// function setCounterText() {
//     var countEl = document.querySelector("correct-answer")
//     countEl.textContent = count;
// }
// startBtn.addEventListener("click", startQuiz() {
//     count++;
//     setCounterText
// });