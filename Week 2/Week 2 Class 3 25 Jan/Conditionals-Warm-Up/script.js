'use strict'
// Please don't delete the 'use strict' line above

// 1 Declare a function describeTheWeather.
// Arguments

// (string): the current season: “Spring”, “Summer”, “Fall”, “Winter”
// (string): the current temperature: “warm”, “hot”, “cool”, “cold”
// Returns

// (string): a description of the weather, depending on the given 
// season and temperature.

// Each season has an expected temperature:

// Spring --> warm
// Summer --> hot
// Fall --> cool
// Winter --> cold
// If the given temperature is expected, return The temperature is 
// normal for the season.. Otherwise, return The temperature is unusual 
// for the season..

function describeTheWeather(season,temp) {
    // Your code here.
    if (season === "Spring" && temp ==="warm"){
        return "The temperature is normal for the season."
    } else if (season === "Summer" && temp ==="hot"){
        return "The temperature is normal for the season."
    } else if (season === "Fall" && temp ==="cool"){
        return "The temperature is normal for the season."
    } else if (season === "Winter" && temp ==="cold"){
        return "The temperature is normal for the season."
    } else {
        return "The temperature is unusual for the season."
    }

    
  }
  
  let actual = describeTheWeather("Spring", "warm");
  let expected = "The temperature is normal for the season.";
  
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  actual = describeTheWeather("Spring", "cold");
  expected = "The temperature is unusual for the season.";
  
  if (actual === expected) {
    console.log("Yay! Test PASSED.");
  } else {
    console.error("Test FAILED. Keep trying!");
    console.log("    actual: ", actual);
    console.log("  expected: ", expected);
  }
  
  // Write more tests to make sure your code is correct.