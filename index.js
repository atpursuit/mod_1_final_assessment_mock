// Sample Module 1 Assessment:

// 1. Given a string of two words, both made of only lowercase letters,
// write a function that returns the same string, with the first letter of each word capitalized

// 'mickey mouse' => 'Mickey Mouse'
// 'kiera gonzalez' => 'Kiera Gonzalez'


// Split the string into an array of words
// Iterate through each word in the array.
// Capitalize the first letter of each word.
// Append the capitalized first letter with the rest of the word.
// Update the word in the array with the capitalized word.
// Join the array of words into a single string using space as a separator.
// Return the capitalized string.

function capitalizeFirstLetter(str):
// Split the string into an array of words

// Iterate through each word in the array.

function capitalizeFirstLetter(str) {
    // Split the string into an array of words
    let words = str.split(' ');


}

// 2. Write a function that takes an array of lowercase words, return the words that have one or more 'e' but do not start with 'e'.

// ["ellen", "jane", "zigland", "pedestrian"] => ["jane", "pedestrian"]

// ['red', 'lindsay', 'equine', 'drip'] => ['red'] 

//Initialize an empty array filteredWords to store the words that meet the criteria.
//Iterate through each word in the input array wordsArray.
//Check if the word contains the letter 'e' and does not start with the letter 'e'.
//If the condition is met, add the word to the filteredWords array.
//After looping through all words, return the filteredWords array containing the words that meet the criteria.

// 3. Write a function that takes a string of lowercase letters, and returns an object with a count of how many times each letter appears

// 'asciiaske' => {
//   'a' : 2, 
//   's' : 2,
//   'c' : 1,
//   'i' : 2,
//   'k' : 1, 
//   'e' : 1
// }
