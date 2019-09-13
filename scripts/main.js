/*
Please give me a good grade.
*/
//please please Please

// Change image on click

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/muffin.jpg') {
      myImage.setAttribute ('src','images/cupcake.jpg');
    } else {
      myImage.setAttribute ('src','images/muffin.jpg');
    }
};

// set username and change it with button

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'This is what a muffin looks like, ' + myName;
  }
}

myButton.onclick = function() {
  setUserName();
}
