'use strict'
// Please don't delete the 'use strict' line above

//Modifying www.codechrysalis.io

let h1 = document.getElementsByTagName("h1")[0]


h1.style.backGroundColor = "green"


h1.style.color = "green"


h1.style.textAlign = "left"


h1.style.color = "black"


const h2element = document.createElement("h2");

h2element.innerText = "Starring Carlos"

h1.appendChild(h2element)



// Slide 17  Event Listener   blog.codinghorror.com
let siteHead = document.getElementsByClassName("site-head")[0];

function theHorror(){ 
    console.log("The Horror") 
}

siteHead.addEventListener('click',theHorror);

