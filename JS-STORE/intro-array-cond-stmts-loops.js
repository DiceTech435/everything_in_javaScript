//CONCATENATION
let name = "Emmanuel";
let age = 25;
let address = "Behind old market";
let bio = "My name is " + name + ". I live " + address + ". I am " + age + " years";
// Template String
let bio2 = `My name is ${name}. I live ${address}. I am ${age} years old`;




////ARRAY METHODS
let fruits1 = new Array("Mango", "Orange", "Apple", "Strawberry");
// let fruits2 = ["Mango", "Orange", "Apple", "Strawberry"];
//[...]-spread operator

fruits1[2] = "Berry" //--change Apple to Berry 
fruits1.push("Cashew") //--adds to the end
fruits1.pop() //--removes from the end
fruits1.shift() //--removes from the beginning
fruits1.unshift("Pinneaple") //--adds to the beginning
fruits1.splice(0, 1) //--adds or removes from a specific index
        //Array Methods
fruits1.sort() //-sorts the elements of the array in place
fruits.concat("Pear"); //add new item to the last -- for words
    let allFruits = fruits.concat(fruits1); //joins two arrays together
fruits1.reverse() //-reverses the order of the element 
console.log(`I like ${fruits1[1]} and ${fruits1[2]}`);
//Check if item is in array
if(fruits.includes("Bananas") == true){
  console.log("Item is on the list");
}else{
  console.log("Item is not on the list");
}
//for(let fruit of fruits)

//image.push()
     // let image = []
     // (`<img src = "images/${value}.png" alt="Dice ${value}">`)

// .slice()
// .indexOf
// .lastIndexOf
// .find()
// finfIndex()
// .filter()
// .map()
// .reduce()
// .forEach()
// .some()
// .every()
// .join()




//SWITCH STATEMENT
let fruit = "pinneaple";

switch(fruit){
    case fruit = "orange":
        console.log("fruit is orange");
        break;

    case fruit = "apple":
        console.log("fruit is apple");
        break;

    case fruit = "mango":
        console.log("fruit is mango");
        break;

    case fruit = "banana":
        console.log("fruit is banana");
        break;

    default:
        console.log("Unknown fruit");
}
        

//  BOOLEAN/ALTERNATIVE SWITCH
let testScore = 33;

switch(true){
    case testScore >= 90:
        console.log("A");
        break;

    case testScore >= 80:
        console.log("B");
        break;

    case testScore >= 70:
        console.log("C");
        break;

    case testScore >= 70:
        console.log("D");
        break;

    default:
        console.log("F");
}







// LOOPS (for, while, do while, for of)

let fruits = ["Pile🌭","Tomato🍅","Cucumber🍆","Pie🥑","Strawberry🍓","Melon🍉","Carrot🥕", "Potato"];


// FOR LOOP
for(i = 1; i <= 20; i++){
    console.log(i);
}

Alternatively
for(i=0; i < fruits.length; i++){
    console.log(fruits[i]);
}


//WHILE LOOP
i = 1;
while(i <= 20){
    console.log(i);
    i++;
 if(i == 13){
     continue;
}
}

//Alternatively
let i = 0;
let count = 1;
while(i < fruits.length){
    console.log(count +". " + fruits[i]);    
    i++;
    count++;
}

i=0; 
while(i < datas.length){
    console.log(datas[i].innerHTML);
    i++;
}


//for-of LOOP
for(let fruit of fruits){
    console.log(fruit);
}

let datas = document.getElementsByClassName("data");
for(let data of datas){
    console.log(data.innerHTML);
}

