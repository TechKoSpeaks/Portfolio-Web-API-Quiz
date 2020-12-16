// Define question variables



// positioning is position of where the user is within the test or which question they're up to on the test itself.
var positioning = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0, incorrect = 1;


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
        question: "How do you add/append something to its parent element?",
        a: "appendChild",
        b: "addMydaughter",
        c: "additionTime",
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
    if (positioning >= questions.length) {
        test.innerHTML = "<h2>You got " + correct + " of " + questions.length + " questions correct!!</h2>";
        get("test_status").innerHTML = "All finished!";

        // resets the variable to allow users to restart the test
        positioning = 0;
        correct = 0;

        // stops rest of renderQuestion function running when test is completed
        return false;
    }
    // shows the status of where user is in questions, adds 1 to position when answered
    get("test_status").innerHTML = "Question " + (positioning + 1) + " of " + questions.length;

    // Defining variables for choices and appending data
    var question = questions[positioning].question;
    var chA = questions[positioning].a;
    var chB = questions[positioning].b;
    var chC = questions[positioning].c;

    // display the question
    test.innerHTML = "<h3>" + question + "</h3>";

    // display the answer options
    // the += appends to the data that was created on the line above
    test.innerHTML += "<label> <input type='radio' name='choices' value='A'> " + chA + "</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='B'> " + chB + "</label><br>";
    test.innerHTML += "<label> <input type='radio' name='choices' value='C'> " + chC + "</label><br><br>";
    test.innerHTML += "<button onclick='checkAnswer()'>Submit Answer</button>";
}

function checkAnswer() {
    // use getElementsByName to loop through the previously created array for choices
    choices = document.getElementsByName("choices");
    for (var i = 0; i < choices.length; i++) {
        if (choices[i].checked) {
            choice = choices[i].value;
        }
    }
    // checks if answer matches the correct choice
    if (choice == questions[positioning].answer) {
        //each time there is a correct answer this value increases
        correct++;
        // creates an alert to show you are correct
        alert("That is correct!!");

    }

    if (choice !== questions[positioning].answer) {
        //each time there is an incorrect answer this value increases
        incorrect++;
        // creates an alert to show you are incorrect
        alert("Do a bit more studying please... PLEASE!");

    }

    // changes position of which character user is on
    positioning++;
    // then the renderQuestion function runs again to go to next question
    renderQuestion();
}
// Add event listener to call renderQuestion on page load event
window.addEventListener("load", renderQuestion);


