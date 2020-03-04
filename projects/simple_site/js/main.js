function loadImage(id, targetId) { //define a function that can take two parameters called id and targetID
  let el = document.getElementById(id); //fetch the HTML element by using the value of id
  let targetEl = targetId ? document.getElementById(targetId) : el; //fetch a target element to add a class to, but only if a targetId is provided. Otherwise, we revert to the element above:
  let imageToLoad; //instantiate the imageToLoad variable

/* There are 3 (mutually exclusive) cases to set the value of imageToLoad :
if data-image is provided, we use that value
if the browser doesn't support srcset and currentSrc , we use the src value of the <img>
otherwise we can simply use currentSrc */

  if (el.dataset.image) {
    imageToLoad = el.dataset.image;
  }
  else if (typeof el.currentSrc === 'undefined') {
    imageToLoad = el.src;
  }
  else {
    imageToLoad = el.currentSrc;
  }

  if (imageToLoad) { ////Check if imageToLoad holds a value
    let img = new Image(); //create a new image from which the 'src' is the value of the imageToLoad
    img.src = imageToLoad;
    img.onload = function() { //when image is loaded by browser, we add CSS class is-loaded to target element
      targetEl.classList.add('is-loaded');
    };
  }
}

//load in whole document, then trigger loadImage event
document.addEventListener('DOMContentLoaded', function() {
  loadImage('wallpaper');
  loadImage('pictureImage', 'picture');
});
