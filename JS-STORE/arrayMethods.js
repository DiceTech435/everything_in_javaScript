// ARRAY ITERATION METHODS(LOOPS)

// FOREACH-iterate over elements of an array applying a specified function(callback)
//      -iterate each element if condition is true


//   --Using function Declaration
// Note: element, index, array are provided automatically
function double(element, index, array){
    array[index] = element * 2;
}
function tripple(element, index, array){
    array[index] = element * 3;
}
function square(element, index, array){
    array[index] = Math.pow(element, 2);
}
function cube(element, index, array){
    array[index] = Math.pow(element, 3);
}
function capitalize(element, index, array){
    array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}
function showFruit(fruit){
    console.log(fruit);
}
let numberss = [1, 2, 3, 4, 5];
numberss.forEach(cube);
numberss.forEach(tripple);
fruits.forEach(showFruit);


//    --Using function Expression
let showFruit = fruits.forEach(function(fruits){
    console.log(fruits);
});
console.log(showFruit);


//   --Using Arrow Functions
fruits.forEach((fruit) => console.log(fruit) );
// Arrow Functions--concise way to write function expressions, good for simple functions that u use only once 
// (parameter) => some code 
        fruits.forEach((fruit)=>console.log(fruit));
// (parameter) => {many codes/conditions}
        fruits.forEach((fruit)=>{console.log(fruit);});



//  --Passing index
let names = ["Abraham", "Tim", "Isaac", "Viv", "Gab", "Mat", "Reng", "Peter"];
let ages = [25, 30, 22, 28, 24, 32, 27, 13];
let height = [55, 39, 42, 58, 54, 62, 57, 53];

names.forEach((name, index) => {
  console.log(`${name} is ${ages[index]} years old and ${height[index]} inches tall.`);
});





// MAP-accepts a specified function(callback) applying the function to each element of the array
//          --redo and transforms into another one

//              --Using function Declaration--
let students = ["spongebob", "patrick", "squidward", "sandy"];
students.map(upperCase);
students.map(lowerCase);
students.map(formatDates);

function upperCase(element){
    return element.toUpperCase();
}
function lowerCase(element){
    return element.toLowerCase();
}
function formatDates(element){
    let parts = element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}

//              --Using function Expression--define a function as values or variable
numbers.map(function(element){
    return Math.pow(element, 2);
})

//               --Using Arrow Functions
fruits.map((element) => Math.pow(element, 2) );
fruits.map((element) => Math.pow(element, 3) );




// FILTER-creates new array by filtering out elements
//          --only filters true conditions or returns empty array // []
//               --Using function Declaration-- 
numbers.filter(isEven);
numbers.filter(isOdd);

function isEven(element){
    return element % 2 === 0;
}
function isOdd(element){
    return element % 2 !== 0;
}
function isAdult(element){
    return element >= 18;
}
function isChild(element){
    return element < 18;
}
function getShortWords(element){
    return element.length <= 6;
}
function getLongWords(element){
    return element.length > 6;
}

//               --Using Arrow Functions
fruits.filter((element) => element % 2 === 0);
fruits.filter((element) => element % 2 !== 0);





// FIND-calls the callback until one/the first that returns true 
//          --only returns the first true condition or returns // undefined

//                  --Using function Expression-- it stops at the first one that satisfies the condition
numbers.find(function(number){
    return number > 10;
})
years.find(function(year, searchYear){
    return years === searchYear;    
});





// REDUCE-reduce the elements of an array to a single value
//          --reduces to a single true number, note it mostly works with numbers
//                  --Using function Declaration-- 
prices.reduce(sum);

// accumulator OR total
// element OR current
function sum(accumulator, element){
    return accumulator + element;
}
function getMax(accumulator, element){
    return Math.max(accumulator, element);
}
function getMin(accumulator, element){
    return Math.min(accumulator, element);
}

//               --Using Arrow Functions
fruits.reduce((accumulator, element) => accumulator + element);









// BOOLEAN ARRAY METHOD
// INCLUDES-only takes an item rather than a callback and returns true when that item is included in that array and false otherwise
//          --only returns the item if it is included in the array, only when true

//                  --Using function Expression
let groceries = ["Apple", "Tomato", "Bread", "Peach"]
groceries.includes("Apple"); //true
groceries.includes("Tommy"); //false
groceries.includes("Bread"); //true







// JOIN(glue) -only takes an item rather than a callback and returns true when that item is included in that array and false otherwise
//          --returns a string of the array elements seperated by the glue 
//          --only converts to a string using the .toString() method

//                  --Using function Expression
let groceries2 = ["Apple", "Peach", "Tomato"]
groceries2.join("; "); "Apple; Peach; Tomato"
groceries.join(" . "); "Apple . Peach . Tomato"
groceries.includes("Bread"); //true




//SORT
