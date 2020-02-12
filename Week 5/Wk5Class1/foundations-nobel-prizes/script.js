'use strict'
// Please don't delete the 'use strict' line above

let h = document.createElement("H1");
let title = document.createTextNode("Nobel Prize Winners");
h.appendChild(title);
document.body.appendChild(h);

function createH2(){
    return document.createElement("H2");
}

function appendH2(h2){
    document.body.appendChild(h2)
}

function createH3(){
    return document.createElement("H3");
}

function appendH3(h3){
    document.body.appendChild(h3)
}

function createP(){
    return document.createElement("p");
}

function appendP(p){
    document.body.appendChild(p)
}

let keys = Object.keys(nobels)

let keys2 = '';


let prizes = []
for (let key in nobels){
    prizes = nobels[key];
}

console.log(prizes)

for (let item in prizes){
    for(let key in item){
        console.log(Object.keys(item))
    }
}


console.log(keys)
console.log(keys2)

// for(let key in nobels){
//     for(let item in key){
//         for(let key2 in item){
//             createH2() = key2["year"]
//             document.body.appendChild(h2)
//             h3 = key2["category"]
//             document.body.appendChild(h3)
//         }
//     }
// }
