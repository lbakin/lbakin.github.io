for (var i = 0; i<document.querySelectorAll(".drum").length; i++) { //what would happen if i changed the length and the for loop goes through more times? Does it add multiple event listeners to a button?

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
  }
  );
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
  }
);

//how come it can use the function makeSound before it gets to that line?
//is all the javascript loaded at once?

// what are the "event" and "key" parameters? Do they have special significance
// or is it just a name Angela gave

function makeSound(key) {

  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
    break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
    break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
    break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
    break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
    break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
    break;

      default: console.log(key + "was entered w/o a switch case");

    }
}

//add pressed class to active button

function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey); //activeButton is now an element

  activeButton.classList.add("pressed");

  setTimeout(function(){
    activeButton.classList.remove("pressed");
  }, 100);
}

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
