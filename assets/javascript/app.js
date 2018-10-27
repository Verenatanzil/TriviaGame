// on click start to begin game
// timer comes up, 120 seconds
// question came up after being clicked
// each question can only have one answer
// submit button to show the result
// question dissapear
// result came up, correct, incorrect and unanswered

// variables for score and timer
var quizArea = $('#quest');
var correct = 0;
var incorrect = 0;
var counter = 70;

// click function
// start button
$(document).on('click', '#start', function(e) {
    begin();
});
//  submit button 
  $(document).on('click', '#submit', function(e) {
    finish();
});
// reset button
$(document).on('click', '#reset', function(e) {
    reset();
});

// array for the questions
var questions = [{
    q: "What is the smallest planet in the Solar System?",
    a: [" Mercury "," Jupiter "," Mars "," Uranus "],
    c: " Mercury ",
},{
    q: "What is the largest planet in the Solar System?",
    a: [" Earth "," Saturn "," Jupiter "," Mars "],
    c: " Jupiter ",
},{
    q: "What planet is nicknamed the ‘Red Planet’?",
    a: [" Mars "," Jupiter "," Venus "," Neptune "],
    c: " Mars ",
},{
    q: "What is the brightest planet in the night sky?",
    a: [" Neptune "," Venus "," Mars "," Saturn "],
    c: " Venus ",
},{
    q: "What planet is closest to the Sun?",
    a: [" Mercury "," Jupiter "," Mars "," Uranus "],
    c: " Mercury ",
},{
    q: "What planet is closest in size to Earth?",
    a: [" Mars "," Jupiter "," Venus "," Neptune "],
    c: " Venus ",
},{
    q: "What planet in the solar system is farthest from the Sun?",
    a: [" Neptune "," Venus "," Mars "," Saturn "],
    c: " Neptune ",
}]

// countdown function
function countdown(){
    counter--;
    $('#counternum').html(counter);
    if (counter === 0) {
        console.log("time is up"); 
        finish(); 
    }
}

// when start button is clicked, timer appear, question popped uout and submit button appear
function begin() {
    timer = setInterval(countdown, 1000) 
    console.log("test")
    
    $('#subWrapper').prepend('<h2 class="time">Time Remaining: <span id="counternum">70</span> Seconds</h2>');
    $('#start').remove()

    for (var i = 0; i < questions.length; i++) {
        quizArea.append('<h2>' + questions[i].q + '</h2>');
        for (var j = 0; j < questions[i].a.length; j++) {
          quizArea.append('<input type="radio" name="q' + '-' + i + '" value="' + questions[i].a[j] + '">' + questions[i].a[j]);
        }
      }  quizArea.append('<button id="submit">Submit</button>');
};

// when submit button is clicked, each question is being checked to see if the answer match the question, 
// if they match, correct increase by one 
function finish() {
    $.each($("input[name='q-0']:checked"), function() {
        if ($(this).val() == questions[0].c) {
        correct++;
        } else {
        incorrect++;
        }
    });
    $.each($("input[name='q-1']:checked"), function() {
        if ($(this).val() == questions[1].c) {
        correct++;
        } else {
        incorrect++;
        }
    });
    $.each($("input[name='q-2']:checked"), function() {
        if ($(this).val() == questions[2].c) {
        correct++;
        } else {
        incorrect++;
        }
    });
    $.each($("input[name='q-3']:checked"), function() {
        if ($(this).val() == questions[3].c) {
        correct++;
        } else {
        incorrect++;
        }
    });
    $.each($("input[name='q-4']:checked"), function() {
        if ($(this).val() == questions[4].c) {
        correct++;
        } else {
        incorrect++;
        }
    });
    $.each($("input[name='q-5']:checked"), function() {
        if ($(this).val() == questions[5].c) {
        correct++;
        } else {
        ncorrect++;
        }
    });
    $.each($("input[name='q-6']:checked"), function() {
        if ($(this).val() == questions[6].c) {
        correct++;
        console.log("correct");
        } else {
        incorrect++;
        }
    });
    result();
    
        
};

// when submit button is clicked and the time run out, the result shows up
// the timer is remove and the question dissapear
function result(){
    clearInterval(timer);
    $('#subWrapper h2').remove();
    quizArea.html('<h2 class="gj">Great Job!</h2>');
    quizArea.append('<h3>Correct Answers: ' + correct + '</h3>');
    quizArea.append('<h3>Incorrect Answers: ' + incorrect + '</h3>');
    quizArea.append('<h3>Unanswered Questions: ' + (questions.length - (incorrect + correct)) + '</h3>');
    quizArea.append('<button id="reset">Reset</button>');
}

// Reset function
function reset(){$
    $('#subWrapper h3').remove();
    $('#subWrapper h2').remove();
    $('#reset').remove();
    correct = 0;
    incorrect = 0;
    counter = 70;
    clearInterval(timer);
    begin();
}