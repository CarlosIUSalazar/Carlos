'use strict'
// Please don't delete the 'use strict' line above

//Warm up 💪🏼
// You might need to Google some stuff to figure this out.

// Open any exercise from this course. (The page with the running unicorn). Using only JavaScript in the developer console, modify the document in the following ways:

// Change the <img> element’s width property to 500.
// Change the first <h1> element’s innerText to "I am the first h1 element".
// Change the first <h2> element’s innerText to "I am the first h2 element".
// Change the second <h2> element’s innerText to "I am the second h2 element".
// Change the first <h3> element’s innerHTML to "I am a <i>fancy</i> h3 element".


//let image = document.querySelectorAll("img");

//let element = document.getElementById('unicorn').setAttribute(width,'500')
// element.height = 150;
// element.width = 150;
//console.log(element)
// element.setAttribute(heigth,500)

// let text = document.querySelectorAll('h1');
// text[0].innertext = "I am the first h1 element"


// document.getElementById("firsth1").innerHTML = "yourTextHere";


// let image = document.getElementsByTagName('img')

//console.log(image)


// PUT THE SCRIPT

document.getElementsByTagName('img')[0].style = "width:500px"

document.getElementsByTagName('img')[0].style = "width:600px, opacity:0.5"

document.getElementsByTagName("h1")[0].innerText = "I am the h1 tag"

document.getElementsByTagName("h2")[1].innerText = "I am the h1 tag"

//innertext vs innerHTML

document.getElementsByTagName("h2")[1].innerHTML = "I am <i>Fancy</i> h1 tag"


document.getElementsByTagName("h2")[1].children[0].innerText = "Children"