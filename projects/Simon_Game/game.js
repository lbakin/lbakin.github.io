var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = [0];
var started = false;

//clicking shit
$(".btn").on("click", function(){

  if (started == true);
    var userChosenColor = this.id;

    console.log(userChosenColor);

    userClickedPattern.push(userChosenColor);

    console.log(userClickedPattern);

    $("#" + this.id).css("opacity", 0.5);

    $("#" + this.id).delay("slow").css("opacity", 1);

    playSound(userChosenColor);

    animatePress(userChosenColor);

    checkAnswer();

});


function nextSequence() {
    var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColor = buttonColors[randomNumber];

    gamePattern.push(randomChosenColor);

    console.log("this is current gamePattern so far:" + gamePattern);

    playSound(randomChosenColor);

    animatePress(randomChosenColor);


}

function playSound(name) {

  var buttonSound = new Audio("sounds/" + name + ".mp3");

  buttonSound.play();

}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function() {
    $("#" + currentColor).removeClass("pressed");
  }, 200);

  console.log(currentColor);
}

// Game Start by preessing "a" key
$(document).keypress(function(event) {
  console.log(event.key);
  if (level.length > 1) {
    return;
  }
  else if (event.key === "a"){
    nextSequence();
    started = !started;
    console.log(started);
    levelIncrease();
  }
  else {
    $("#subtitle").text("remember, only the 'a' key");
    $("#subtitle").removeClass("transparent");
  }
});

function levelIncrease(){
  $("#subtitle").addClass("transparent");
  // order matters here
  var x = level.slice(-1);
  $("#level-title").text("Level " + x);
  x++;
  level.push(x);
  if (x > 0) {
    $("#subtitle").text('Press the "a" key');
  }
}

//Check user array against game array
//make a for loop that checks the value of each location in the array against the other?
//can also use JSON stringify

function checkAnswer(){
  for (var i = 0; i < userClickedPattern.length; i++) {
    //need to let user keep going until reaches end. check for spot in array with [i].
    var x = userClickedPattern[i];
    var y = gamePattern[i];

    if (userClickedPattern.length == gamePattern.length) {
      levelPassFail();
      empty(userClickedPattern);
      console.log("if");

    }

    else if (x == y) {
      console.log("good so far, but not at end yet");
    }

    else {
      levelPassFail();
      console.log("else");
    }

    console.log ("spot in loop: " + [i] + "th iteration and color " + x);
  }
}




function levelPassFail() {
  if (JSON.stringify(gamePattern) == JSON.stringify(userClickedPattern)){

    $("#subtitle").text("Success");
    $("#subtitle").removeClass("transparent");
    setTimeout(levelIncrease, 500);
    setTimeout(nextSequence, 1000);
  }
  else {
    wrongAnswer();
  }
}

function wrongAnswer() {

  $("#level-title").text("G A M E  O V E R");
  $("#subtitle").text("You suck. Press 'a' key to restart");
  $("#subtitle").removeClass("transparent");
  var wrongSound = new Audio("sounds/wrong.mp3");
  wrongSound.play();
  $("body").addClass("game-over");
  setTimeout(function() {
    $("body").removeClass("game-over");
  }, 250);
  startOver();
}

// Clearing the array out
function empty(pattern) {
  pattern.length = 0;
}

function startOver() {
  started = !started;
  level = [0];
  empty(gamePattern);
  empty(userClickedPattern);
}


// why doesn't the code below trigger? Something in the DOM?
// if (started == true) {
//   $("#subtitle").addClass("transparent");
// }

//idea: make an easy mode button that changes it somehow. Maybe just opens a new similar page with slight differences?
//easy mode could involve something with showing stuff from the past arrays?

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */

function dropItLikeItsHot() {
  document.getElementById("projectsLinks").classList.toggle("show");
console.log(this.id);
}


// Close the dropdown if the user clicks outside of it

window.onclick = function(e) {
  if (!e.target.matches('.navDropBtn')) {
  var myDropdown = document.getElementById("projectsLinks");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}
