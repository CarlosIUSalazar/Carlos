'use strict'
// Please don't delete the 'use strict' line above

// Basic Requirements
// 1 Like we did with books, think about what kinds of aspects of movies you would like to represent. 
// A few ideas are:

// Title
// Director
// Duration
// Release Date
// Actors/Actresses
// Studio(s)
// Synopsis
// Rating
// You can make this as detailed as you want. You also need to decide how you will store or represent 
// your data.

// For the below exercises, you’ll need to have the following details:

// title
// director
// year
// length of film in minutes
// rating




// 2 Write a factory function makeMovie that takes in inputs and outputs a movie object.
function makeMovie(title,director,year,length,rating){

    return {
        title:title,
        director:director,
        year:year,
        lengthOfFilm : length,
        rating,rating
    }

}
// Example:

// console.log(makeMovie("Jurassic Park", "Steven Spielberg", "1994" /*...*/));
// // { title: "Jurassic Park", director: "Steven Spielberg", year: "1994"...}




// 3 Make five more movie objects using your factory function and store them in an array called movies.

let movie1 = makeMovie("The Lord of The Rings", "Tolkien", 2002, 180, 8.5);
let movie2 = makeMovie("Batman", "Peter Dinklage", 1997, 120, 7);
let movie3 = makeMovie("Star Wars", "George Lucas", 1977, 90, 9.2);
let movie4 = makeMovie("Once upon a time in Hollywood", "Quentin Tarantino", 2019, 140, 8.3);
let movie5 = makeMovie("Terminator 2", "James Cameron", 1991, 120, 9.9);

console.log(movie1)
console.log(movie2)
console.log(movie3)
console.log(movie4)
console.log(movie5)


// 4 Declare a function displayMovie that works like displayBook, but for movies.

function displayMovie(movie){
    console.log(movie.title + " by " + movie.director +". Released in " + movie.year + ". Length in Minutes: " + movie.lengthOfFilm +". Rating: " + movie.rating + ".")
}

console.log(displayMovie(movie2));
console.log(displayMovie(movie4));
console.log(displayMovie(movie5));

// 5 Calculate the average length of your movies by writing a function called averageLength that will 
// accept an array of movies as a parameter and output the average length. The difficulty of this 
// problem is dependent on how you have chosen to store the duration.

let movieArray = [movie1,movie2,movie3,movie4,movie5];
console.log("movieArray is", movieArray);

function averageLength(movies){

    let averageLength = 0;
    let movieLengths = [];

    for (let item of movies){
        for (const key in item){
            //console.log("key", key)
            if (key === "lengthOfFilm"){
                //console.log("push ", item[key])
                movieLengths.push(item[key])
            }
        }
    }
    //console.log("movieLengths are ", movieLengths);

    let totalDuration = 0;

    for(let item of movieLengths){
        totalDuration += item;
    }

    averageLength = totalDuration/movieLengths.length

    //console.log("averageLength is ", averageLength);
    return averageLength

}

console.log("What is the total average lenths of my movies: ", averageLength(movieArray),"mins.");


// 6 Declare a function averageRating that accepts an array of movies and returns the average rating.

function averageRating(movies){

    let ratingsArray = [];
    let ratings = 0;

    for(const item of movies){
        for(const key in item){
            if (key === "rating"){
                ratingsArray.push(item[key])
            }
        }
    }

    for(const item of ratingsArray){
        ratings += item;
    }

    return ratings/ratingsArray.length;

}

console.log("Your movies rating average is: ", averageRating(movieArray));


