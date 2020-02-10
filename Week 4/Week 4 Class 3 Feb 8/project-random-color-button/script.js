'use strict';
// please do not delete the 'use strict' line above

function changeColor() {
  console.log('Button clicked!'); // feel free to change/delete this line
}




// Review information
// Nested Elements
// A web page is made of nested elements. You can think of them like a movie poster.

// matrix movie poster

// The root element is the whole poster. It has everything you see. Inside the poster, there are some other elements. For example:
// A photo of a scene from the movie.
// The title of the movie.
// The credits.
// Our webpage is super simple. There is a root element (the whole page) with only one nested element (the button).

// The root element is the whole page.
// The button.
// Styles and colors
// There are many different ways to define the color of something using CSS.

// String name
// A style can be set with a string name. For example, you can set a color to be the string "red" or "black".

// RGB string
// This is a string with a value for Red, a value for Green, and a value for Blue. The values should be in the range 0-255. A higher value means a brighter color. You can experiment by searching for ‘color picker’ in Google.

// With styles, you can set a color with an RGB string. For example "rgb(12, 34, 56)" or "rgb(98, 233, 123)".

// Hex string
// Colors can also be represented as hex strings, for example "#feca54". We encourage you to learn more about hex strings, but you don’t need to use them for this project.

// Approach
// You can approach this problem however you would like. Here are some tips to help you get started. We encourage you to experiment and try your own things. If the project works as expected, then your approach is correct.

// With the current code, when you click the “Change color” button, the changeColor function is invoked. Right now, changeColor just logs a message in your console. Can you see it?

// Inside the body of the changeColor function, you can do this:

// Create a random color String.

// You might want to use Lodash, as it includes a function which generates random numbers, _.random(). If you’d rather write a random number generator yourself, you’ll probably need to use Math.random.
// You’ll probably need to use String concatenation.
// If you want to generate a hex string, you will probably need to use an array of characters.
// If you want to generate an RGB string, you should use a random number generator function to come up with some random numbers between 0 and 255.
// There are many ways of completing this project. If you find a different way and it works, that’s awesome!
// Assign the newly created color string to the root element on the page.

// You’ll probably need to use document.documentElement.
// You’ll probably need to assign something to .style of the root element.
// You’ll probably need to set the background-color property of the style of the root element.
// Advanced Requirements
// If you finish the basic color changer, try adding new elements and buttons that do other interesting things. For example:

// Change the text of a paragraph.
// Change font sizes or colors.
// Load different images (use imgbb to store images).
// Be creative!

// Additional Reading 📖
// Read Eloquent JavaScript Chapter 5. EloquentJS has fantastic exercises at the end of each chapter and we highly recommend you spend time working on them.
// Homework
// Finish this project.
// Read the Additional Reading materials.