// on click start to begin game
// timer comes up, 120 seconds
// question came up after being clicked
// each question can only have one answer
// submit button to show the result
// question dissapear
// result came up, correct, incorrect and unanswered


// array for the questions

var quizArea = $('#quest');

$(document).on('click', '#start', function(e) {
    begin();
});
  
  $(document).on('click', '#submit', function(e) {
    finish();
});

var questions = [{
    q: "What is the smallest planet in the Solar System?",
    a: ["Mercury","Jupiter","Mars","Uranus"],
    c: "Mercury",
},{
    q: "What is the largest planet in the Solar System?",
    a: ["Earth","Saturn","Jupiter","Mars"],
    c: "Jupiter",
},{
    q: "What planet is nicknamed the ‘Red Planet’?",
    a: ["Mars","Jupiter","Venus","Neptune"],
    c: "Mars",
},{
    q: "What is the brightest planet in the night sky?",
    a: ["Neptune","Venus","Mars","Saturn"],
    c: "Venus",
},{
    q: "What planet is closest to the Sun?",
    a: ["Mercury","Jupiter","Mars","Uranus"],
    c: "Mercury",
},{
    q: "What planet is closest in size to Earth?",
    a: ["Mars","Jupiter","Venus","Neptune"],
    c: "Venus",
},{
    q: "What planet in the solar system is farthest from the Sun?",
    a: ["Neptune","Venus","Mars","Saturn"],
    c: "Neptune",
}]

var correct = 0;
var incorrect = 0;
var counter = 70;

function countdown(){
    counter--;
    $('#counternum').html(counter);
    if (counter === 0) {
        console.log("time is up"); 
        finish(); 
    }
}

function begin() {
    timer = setInterval(countdown, 1000) 
    console.log("test")
    
    $('#subWrapper').prepend('<h2 class="time">Time Remaining: <span id="counternum">70</span> Seconds</h2>');
    $('#start').remove()

    for (var i = 0; i < questions.length; i++) {
        quizArea.append('<h2>' + questions[i].q + '</h2>');
        for (var j = 0; j < questions[i].a.length; j++) {
          quizArea.append('<input type="radio" name="question' + '-' + i + '" value="' + questions[i].a[j] + '">' + questions[i].a[j]);
        }
      }  quizArea.append('<button id="submit">Submit</button>');
};
    
function finish() {
    console.log("test");

   

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
            } else {
            incorrect++;
            }
        });
};


