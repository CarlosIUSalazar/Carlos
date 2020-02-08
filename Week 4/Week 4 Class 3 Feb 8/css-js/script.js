'use strict'
// Please don't delete the 'use strict' line above


// Exercises
// Basic Requirements
// Go to (https://news.ycombinator.com/) and open up your Chrome Developer Tools

// Select the first .title element and change its font size to 20px.
// Select all .title elements on the page. Loop through them and change their background colors to blue.

const e = document.getElementsByClassName("title")

e[1].style.fontSize = "20px"

const athingArray = document.getElementsByClassName("athing");

for (let item of athingArray) {
    item.style.backgroundColor = "cyan"
}


// Medium Requirements
// Select all .title elements on the page. Hide every second element on the page using only javascript and css. hint: you need to use the display property.

let counter = 1;
for (let item of athingArray) {
    if (counter % 2 === 0) {
        item.style.display = "none"
    }
    counter++
}




// Advanced Requirements
// Write a function which selects all .title elements and changes each elements background color to either red, blue, or yellow, chosen at random. Invoke your function.

function randomColor5() {


    for (let item of athingArray) {
        let randomColor = Math.floor(Math.random() * Math.floor(3));

        let colorToApply = '';

        if (randomColor === 0) {
            colorToApply = "red"
        } else if (randomColor === 1) {
            colorToApply = "blue"
        } else if (randomColor === 2) {
            colorToApply = "yellow"
        }
        item.style.backgroundColor = colorToApply;
    }

}

