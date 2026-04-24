// Getting element by 
// Id
// className
// tagName
// querySelector
// querySelectorAll
// Name


// //Example 1
// let text = document.getElementById("data");
// console.log(tex);


// //Example 2
// let datas = document.getElementsByClassName("data");
// for(let data of datas){
//     console.log(data.innerHTML);
// }

// i=0; 
// while(i<datas.length){
//     console.log(datas[i].innerHTML);
//     i++;
// }



// //Example 3
// let ele = document.getElementsByTagName("div");
// console.log(ele);



// //Example 4
// let datas = document.querySelectorAll("div");
// console.log(datas[0]);


// //Example 5
// let datas = document.getElementsByName("Hello");
// console.log(datas[0].innerHTML);





//DATATYPES

//string
//number
//float
//array
//boolean

// let name = "Emmanuel";
// let age = 25;
// let address = "Behind old market";

// // CONCATENATION
// let bio = "My name is " + name + ". I live " + address + ". I am " + age + " years";

// // Template String (Concatenation)
// let bio2 = `My name is ${name}. I live ${address}. I am ${age} years old`;


// //ARRAY
// let fruits = new Array("Mango", "Orange", "Apple", "Strawberry");

// // let fruits = ["Mango", "Orange", "Apple", "Strawberry"];

// // Array Methods
// // fruits.push("Cashew");
// // fruits.unshift("Pinneaple");
// // fruits.pop();
// // fruits.shift();

// console.log(`I like ${fruits[1]} and ${fruits[2]}`);




// CONDITIONAL STATEMENTS - BOOLEAN
//Operators
// =    Asignment Operator
// +    Plus symbol
// -    Minus Symbol
// *    Times, multiplication, asterix symbol
// ==   Comparism operator 
// ===  Identical or datatype comparism operator
// ||   OR symbol
// and  and symbol
// ++   Increment by 1
// --   Reduce by 1
// >    Greater than or Angle bracket right
// <    less than or Angle bracket left


// let age = 11;

// if(age > 17){
//     console.log(`Congratulations you're ${age} years`);
// }
// else{
//     console.log(`You're not upto 18 years, you're ${age} years`);
// }


// SWITCH STATEMENT
// let fruit = "pinneaple";

// switch(fruit){
//     case fruit = "orange":
//         console.log("fruit is orange");
//     break;

//     case fruit = "apple":
//         console.log("fruit is apple");
//     break;

//     case fruit = "mango":
//         console.log("fruit is mango");
//     break;

//     case fruit = "banana":
//         console.log("fruit is banana");
//     break;

//     default:
//         console.log("Unknown fruit");
// }


//let date=2023;
//switch(true){
//  case date >2022:
//  console.log("SUBMITTED");
//  break;

//  case date <2023:
//  console.log("SUMISSION NOT YET");
//  break;

//  case date > 2023:
//  console.log("SUBMISSION DATE PASSED");
//  break;

//  default:
//  console.log("NO AVAILABLE DATE YET");
//  break;
//  }

// let country1 = "nigeria";
// let country2 = "ghana";




// LOOPS (for, while, for of, forEach, map, filter)
let fruits = ["Pile🌭","Tomato🍅","Cucumber🍆","Pie🥑","Strawberry🍓","Melon🍉","Carrot🥕", "Potato"];

//For loop
// for(i = 1; i <= 20; i++){
//     console.log(i);
// }


// WHILE loop
// i = 1;
// while(i <= 20){
//     console.log(i);
//     i++;
// }


//  //EXAMPLES


// // USING for
// for(i=0; i < fruits.length; i++){
//     console.log(fruits[i]);
// }


// // USING WHILE
// let i = 0;
// let count = 1;

// while(i < fruits.length){
//     console.log(count +". " + fruits[i]);
    
//     i++;
//     count++;
// }


// // Using for of

// for(let fruit of fruits){
//     console.log(fruit);
// }


// // using forEach
// fruits.forEach((fruit)=>{
//     console.log(fruit);
// });




// //Function - Are blocks of code that executes when it's been called

// function trigger(name, age, height){
//     console.log(`My name is ${name}, I am ${age} years old. I am ${height}`);
// }
  
// trigger("Emmanuel", 20, "5'3");
// trigger("Augustine", 36, "4'3");,
// trigger("Samuel", 26, "7'3");
// trigger("James", 34, "8'3");






// Arrow Function and Calling a function



// Js Object
let Person = {
    name: "Samuel James",
    age: 36,
    location:{
        country: "Nigeria",
        state: "Nasarawa",
        address: "Behind First Bank",
    },
    hobbies: [
        "Swimming",
        "Dancing",
        'Eating'
    ]
}

// Destructuring
// console.log(Person.hobbies[1]);

// const {name, age, location:{country, state, address}, hobbies} = Person;

// console.log(`Hello, My name is ${name}, I like ${hobbies[1]}`);

// Itertating an object (for, for of, forEach, map, filter)