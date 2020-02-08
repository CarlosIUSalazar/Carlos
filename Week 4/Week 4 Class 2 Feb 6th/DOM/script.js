'use strict'
// Please don't delete the 'use strict' line above

//EXERCISES

let array = document.getElementsByTagName('p');
console.log(array);

let array2 = document.getElementsByClassName('inner-paragraph')
console.log(array2)

let element = document.getElementById('main-header')
console.log(element)

for (let item of array2){
    console.log(item)
}

//2
let img = document.createElement('img');
img.src = "https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg?resize=750px:*"
let src = document.getElementById("x");

src.appendChild(img);

// 3 Write a function that takes a string of letters as input and returns the same 
//string but all capitalized (e.g. 'hello123' -> 'HELLO123')

let innerParagraphA = array2[0];

innerParagraphA.textContent = innerParagraphA.textContent.toUpperCase()

console.log(innerParagraphA.textContent.toUpperCase())


for(let item of array2){
    item.textContent = item.textContent.toUpperCase();
}