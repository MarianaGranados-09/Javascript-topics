// Javascript string length property 
// Returns length of a string:

let txt = "Hello"
let length = txt.length

//Extracting string parts 

//Three main methods:
-slice(start, end)
-substring(start, end)
-substr(start, length)

//slice() extracts a part of a string and returns the extracted part in a new string
//The method takes 2 parameters: the start position, and the end position

let str = "Apple, Banana, Kiwi";

let part = str.slice(7,13)

//substr() the second parameter specifies the length of the extracted part 

// Replacing string content 
//The replace method replaces a specified value with another value in a string

let text  = "Please visit microsoft!";
let newText = text.replace("microsoft", "mcdonalds");

//Notes: The replace() method returns a new string and replaces only the first match

//To replace all matches, we use a regular expression with a /g flag

let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "mcdonalds");

//Or, to make it case insensitive, we use an /i flag 
let text = "Please visit Microsoft!";
let newText = text.replace(/MICROSOFT/i, "mcdonalds");

//The concat()  method can be used instead of the plus operator to join strings
//charAt() method returns the character at a specified index in a string
//A string can be converted to an array with the split() method
