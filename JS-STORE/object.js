//JS OBJECTS/OBJECT ORIENTED PRORAMMING--collection of related properties and/or methods.
    //property in objects--key:value pair asin css
    //Methods in objects--functions that belong to an object and is a function expression
            //Object = {key:value--properties,
            //function()--methods}
//this--reference to the object where THIS is used. console.log(this) will list all the property in the windows. Hence the context matters, and it doesnt work with arrow functions

let Person = {
    name: "Samuel James",
    age1: 36,
    location:{
        country: "Nigeria",
        state: "Nasarawa",
        address: "Behind First Bank",
    },
    hobbies: [
        "Swimming",
        "Dancing",
        'Eating'
    ],
    isEmployed: true,
    sayHello: function() {console.log(`Hi, my name is ${this.name} and i am ${this.age} years old`);},
    sayHobbies: function() {console.log(`Hello, My name is ${this.name}, I like ${this.hobbies[1]}`);}
}
console.log(person.hobbies[1]);
console.log(person.name);
console.log(person.age);
person.sayHello();
person.sayHobbies();
//Note: THIS keyword don,t make use of arrrow functions, bcos it makes reference to the window object





// DESTRUCTURING--extracts values from array and/or objects, then assign them to variables in a convenient way
//[]-perform array destructuring
//{}-perform object destructuring

//1.Swap the value of two variables
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a);
console.log(b);

//2.Swap two elements in an array
let colors = ["red", "green", "blue", "black", "white"];
[colors[0], colors[4] = colors[4], colors[0]];
console.log(colors);

//3.Assign array elements to variables
let colors2 = ["red", "green", "blue", "black", "white"];
let [firstColor, secondColor, thirdColor, ...extraColors] = colors2;
console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);
console.log(extraColors);

//4.Extract values from objects and place as variables(must use variables of the original object).
let person1 = {
    firstname: "Matt",
    lastname: "Tem",
    age: 28,
    job: "fry cook"
}
let person2 = {
    firstname: "Vivian",
    lastname: "Dan",
    age: 32,
}
let {firstname, lastname, age, job="unemployed"} = person1;
console.log(firstname);
console.log(lastname);
console.log(age);
console.log(job);
let {name, age1, location:{country, state, address}, hobbies} = Person; //look up to person above
console.log(country);
console.log(state);

//5.Destructure in function parameters(for only a particular object)
function displayPerson({firstname, lastname, age, job="dancer"}){ //pass in the values or methods of the object here.
    console.log(`Name: ${firstname} ${lastname}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
}
displayPerson(person1);
displayPerson(person2);










//NESTED OBJECTS--objects inside other objects. 
let person = {
    fullname: "Sponge Bob",
    age: 30,
    isStudent: true,
    hobbies: ["karate", "jellyfishing", "cooking"],
    address: {
        street: "123 conch strt",
        city: "Bikini Bottom",
        country: "Int. water"
    }
}

for(let property in person.address){
    console.log(person.address[property]);
        }




//ARRAY OF OBJECTS
let fruits = [{name: "apple", color: "red", calories: 95}, 
              {name: "orange", color: "orange", calories: 45}, 
              {name: "banana", color: "yello", calories: 105}, 
              {name: "coconut", color: "white", calories: 159}, 
              {name: "pineapple", color: "yellow", calories: 37}];

console.log(fruits[0].name);
console.log(fruits[2].color);
console.log(fruits[3].calories);
console.log(fruits[5].name);









//CONSTRUCTORS-(function)--special method for defining the properties and methods of objects, helps reusability of creating objects
function Car(make, model, year, color){
    this.make = make,
    this.model = model,
    this.year = year,
    this.color = color,
    this.drive = function(){ return `You drive the ${this.model}`;}
    this.carYear = function(){ console.log(`You bought the ${this.year} car`);}
}
let Car1 = new Car("Ford", "Mustang", 2024, "red");
let Car2 = new Car("Chevrolet", "Camaro", 2025, "blue");
let Car3 = new Car("Dutch", "Charger", 2026, "silver");

console.log(Car1.make);
console.log(Car1.model);
console.log(Car1.year);
console.log(Car1.color);

console.log(Car2.make);
console.log(Car2.model);
console.log(Car2.year);
console.log(Car3.color);

console.log(Car1.drive());
Car2.carYear();
Car3.drive();






//CLASSES--(ES6 feature), more structured and clearer way to work with object compared to constructor functions
        //Ex; Static keyword, encapsulation, inheritance
class Products{  
    constructor(name, price){
        this.name = name;
        this.price = price;
    }

    displayProducts(){
        console.log(`Product: ${this.name}`);
        console.log(`Product: $${this.price.toFixed(2)}`);
    }
    calculateTotal(salesTax){
        return this.price + (this.price * salesTax);
    }
}

let product1 = new Products("Shirt", 19.99);
// let product2 = new Products("Pants", 22.50);
// let product3 = new Products("Underwear", 100.00);

product1.displayProducts();

salesTax = 0.05;
total = product1.calculateTotal(salesTax);
console.log(`The total price (with tax): ${total.toFixed(2)}`);



