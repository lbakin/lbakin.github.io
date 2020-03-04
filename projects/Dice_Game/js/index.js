// let imageSource
//
// function randomImage () {
//   let randomNumber1
//   randomNumber1 = Math.floor(6*Math.random())+1;
//   console.log(randomNumber1);
//   imageSource = "images/dice" + randomNumber1 + ".png";
//   console.log(imageSource);
// }
//
// randomImage();
//
// document.querySelector(".img1").setAttribute("src", imageSource);
//
// randomImage();
//
//
// document.querySelector(".img2").setAttribute("src", imageSource);

// How to track the result from the random number generator and create an else if?
// do some sort of getAttribute from each image and slicing the values
// prbly best to just rewrite it all


var randomNumber1 = Math.floor(6*Math.random())+1;
console.log(randomNumber1);


var imageSource1 = "images/dice" + randomNumber1 + ".png";
console.log(imageSource1);

document.querySelector(".img1").setAttribute("src", imageSource1);

var randomNumber2
randomNumber2 = Math.floor(6*Math.random())+1;
console.log(randomNumber2);

var imageSource2 = "images/dice" + randomNumber2 + ".png";
console.log(imageSource2);

document.querySelector(".img2").setAttribute("src", imageSource2);


function winnerText() {
  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").innerHTML = "D R A W";
  }
  else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
  }
  else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
  }
}

winnerText();

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
