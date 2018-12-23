function populate() {
    if(quiz.isEnded()) {
        showScores(); 
    }
    else{
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        //Show answers
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i< choices.length; i++){
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess)
        populate();
    }
}

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}


function showScores() {
    var gameOverHtml = "<h1>Result</h1>";
    var restartBtn = "<br><br> <button class='btn4' value='Refresh Page' onClick='window.location.href=window.location.href'> Restart </button>"
    var scoreImg = "<br> <img src='3858621.gif' alt='M.Scott'>"
    gameOverHtml += "<h2 id='score'> Your Score: " + quiz.score + restartBtn + scoreImg + "</h2>"    

    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHtml;

}


var questions = [
/*1*/ new Question("During his embarrassing Dundie award presentation, Michael covers a number of popular songs. To whom is Michael presenting a Dundie award when he sings along to 'You Sexy Thing'?", ['Pam', 'Dwight', 'Ryan', 'Jim'], 'Ryan'),
/*2*/ new Question("What disappointing homemade Secret Santa gift did Michael receive from Phyllis that prompted 'Yankee Swap,' a game which enabled characters to steal someone else's gift?", ['Fruit cake', 'Painting', 'Oven Mitt', 'Sculpture'], 'Oven Mitt'),
/*3*/ new Question("What ringtone song played repeatedly on Andy's cell phone when Jim hid it in the ceiling at the office?", ["Can't Touch This", 'Mrs. Robinson', 'Hungry Eyes', "Rockin' Robin"], "Rockin' Robin"),
/*4*/ new Question("Which of the following members of the office do NOT bring a child to work in the season 2 episode 'Take Your Daughter to Work Day'?", ['Stanley', 'Toby', 'Creed', 'Kevin'], 'Creed'),
/*5*/ new Question("Who admits responsibility for inhaling pot smoke at an Alicia Keys concert in 'Drug Testing'?", ['Ryan', 'Michael', 'Creed', 'Jim'], 'Michael'),
/*6*/ new Question("Which of the following guests is not present at Michael and Jan's condo in the season 4 episode 'Dinner Party'?", ['Oscar', 'Angela', 'Pam', 'Jim'], 'Oscar'),
/*7*/ new Question("In the season 4 pilot episode 'Fun Run', what cause does Michael organise a fun run for?", ['Aids', 'Rabies', 'Depression', 'Cancer'], 'Rabies'),
/*8*/ new Question("In season 3, which branch merges with the Scranton branch?", ['Utica', 'Buffalo', 'Nashua', 'Stamford'], 'Stamford'),
/*9*/ new Question("In the season 6 episode 'Scott's Tots', what does Michael give the children in exchange for not being able to supply them with college funds?", ['Laptop batteries', 'Starbucks Giftcard', '10$ each', 'Notebooks'], 'Laptop batteries'),
/*10*/new Question("When a new manager was installed to oversee the Dunder Mifflin Scranton office, Michael quit and opened his own paper company. What was the name of this enterprise?", ['Best paper', 'Michael Scott Paper Company', 'Paper & me', 'Dunder Michael'], 'Michael Scott Paper Company'),
/*11*/new Question("In S1E2 Diversity Day': What famous comedian's stand up routine does Michael imitate?", ["Eddie Murphy", "Chris Rock", "Chris Farley", "Bernie Mac"], "Chris Rock"),
/*12*/new Question("In S2E15 'Boys and Girls': What does Jan encourage Pam to pursue?", ["Design training program in New York", "Sales Position", "New York receptionist Job ", "Call center position"], "Design training program in New York"),
/*13*/new Question("In S2E19 'Michael's Birthday': Who has a cancer scare?", ["Jim", "Creed", "Kevin", "Phyllis"], "Kevin"),
/*14*/new Question("In S4E1 'Fun Run' Dwight mercy kills Angela's cat.  Name that cat.", ["Bandit", "Sprinkles", "Fluffy", "Princess Lady"], "Sprinkles"),
/*15*/new Question("In S4E11 'Night Out': What is the security guard's name?", ["Hank", "Frank", "Elliot", "John"], "Hank"),
]

var quiz = new Quiz(questions);

populate();