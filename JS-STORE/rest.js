import {renderTableRows, elementFromHtml, getStringSizes, capitalize, getNumberOfChars} from './functionUtil.js';
import {} from 'functions.js';
import {} from 'objects.js';
//ES6 MODULE-ECMASCRIPT 2015 update--An external file that contains reusable code that can be imported into other js files. 
//Write reusable code for many different apps.  
//Can contain variables, classess, functions ... and more





//SPREAD OPERATORS (...spread)-allows an iterable (array or string) to be expanded into seperate elements (unpacks the elements)
let numbers = [1, 2, 3, 4, 5];
let max = Math.max(...numbers);
let min = Math.min(...numbers);

let username = "Mat Exy";
let letters = [...username].join("-");

let fruits = ["apple", "orange", "banana"];
let vegetables = ["carrots", "celery", "potatoes"];
let food = [...fruits, ...vegetables, "eggs", "milk"];


//REST PARAMETERS(...rest)-allows a function work wit a variable number of arguments by building them into an array--bundles seperate elements into an array
function openFredge(...foods){
    console.log(foods);
};
    let food1 = "pizza";
    let food2 = "hamburger";
    let food3 = "hotdog";
    let food4 = "sushi";
openFredge(food1, food2, food3, food4);

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

function sum(...numbers){
 numbers.forEach(cube);
}

let total = sum(1, 2, 3, 4);
console.log(total);
//NOTE::::
    //Spread-expands an iterable into seperate elements
    //Rest-bundles seperate elements into an array, it works with a function per say







// ERROR-Object--created to represent a problem that occurs 
//     Occurs often with: User input, establishing a connection, Network Error, Promise rejection or Security errors 
try{}
// --encloses code that might potentially cause an error
catch (error) {console.error(error)}
// --catch and handle any thrown error from try { }
// --handle rejected promise too
finally{}
// --(optional) always executes. used mostly for clean up. Ex; close files, close connections, release resources
throw new Error(""); //-constructor
//Customize an error 