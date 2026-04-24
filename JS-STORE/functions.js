//FUNCTIONS -- Are blocks of code that executes when it's been called upon, the function must be told what to do E.g: console.log, return OR when the function is called, the display method must be given if it wasnt given initially in the function.

// PARAMETERS-variable that a function recieves and are only accessible inside that function (variable scope)
// ARGUMENTS-value(that a function recieves) passed to a function which becomes the parameter for that specific function call. 

//NOTE-- FUNCTION DECLARATIONS ARE USED IN; 
//          ---callbacks in asynchronous operations
//          ---Closures
//          ---higher-order Functions
//          ---Event Listeners


//Function DECLARATION-- By passing reference to the function by defining a reusable block of code that performs a specific task(used as call backs)
function showFruit(fruit){
    console.log(fruit);
}
fruits.forEach(showFruit);



//Function EXPRESSION-- Define a function as values or variable
fruits.forEach(function(fruits){
    console.log(fruits);
});

numbers.map(function(element){
    return Math.pow(element, 2);
})




// CALLBACKS-a function passed as an argument to another function, hey when you're done, call this next.
// -----------1
hello(wait);
function hello(callback){
    console.log("Hello!");
    callback();
};
// function hello(invoke){
//      console.log("Hello!")
//      invoke();
// };
function wait(){
    console.log("Wait");
};

// -----------2
sum(displayPage, 1, 2);

function sum(callback, x, y){
    let result = x + y;
    callback(result);
};

function displayPage(result){
    document.getElementById("myH1").textContent = result;
}

function displayConsole(result){
    console.log(result);
}







// CLOSURES
// --functions defined inside another function, the inner function has access to the variables and scope of the outer function. Allows for private variables and state maintenance.
function outer(){
    let message = "Hello";

    function inner(){
        console.log(message);
    }
    inner();
} 
outer();

// --Allow for private variable and state maintenance
function createCounter(){
    let count = 0;

    function increment(){
    count++;
    console.log(`count increased to ${count}`);
    }

    function getCount(){
        return count;
    }

    // return {increment:increment}; 
    //OR
    return {increment, getCount}; 
}
let counter = createCounter();
counter.increment();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());
counter.increment();
console.log(counter.getCount());



function createGame(){
    let score = 0;

    function increaseScore(points){
        score += points;
        console.log(`+${points}pts`);
    }
    function decreaseseScore(points){
        score -= points;
        console.log(`-${points}pts`);
    }
    function getScore(){
        return score;
    }

    return{increaseScore, decreaseseScore, getScore};
}
let game = createGame();

game.increaseScore(5);
game.increaseScore(6);
console.log(`The final score is ${game.getScore()}pts`);
game.decreaseseScore(5);
console.log(`The final score is ${game.getScore()}pts`);
game.decreaseseScore(5);
console.log(`The final score is ${game.getScore()}pts`);






//ASYNCHRONOUS CODE--
//Synchronous-executes line by line consecutively in a sequential manner. Code that  waits for an operation to complete

//Asynchronous-allows multiple operations to be performed concurently without waiting. Doesnt block the execution flow and allows the program to continue (I/O operations, network requests, fetching data). Handled with: callbacks, promises, Async/Await 

//In Callback
function func1(callback){
    setTimeout(()=> {
        console.log("Task 1");
        callback()
    }, 3000);
}

function func2(){
    console.log("Task 2");
    console.log("Task 3");
    console.log("Task 4");
}

func1(func2);




//CALLBACK HELL
function bread(callback){
    console.log("I love bread");
    callback();
}
function noodles(callback){
    console.log("I love noodles");
    callback();
}
function chinchin(){
    console.log("I love chinchin");
}

bread(()=>{
    noodles(()=>{
        chinchin(()=>{ console.log("I love you all");
        });
    })
});


//PROMISES .then()--An object that manages asynchronous operations. Chain-based
function walkDog(){
    
    return new Promise((resolve, reject)=>{

        setTimeout(()=>{

            let walkDog = true;

                if(walkDog){
                    resolve("You walk the dog");
                }
                else{
                    reject("You DIDN'T walk the dog");
                }   
                }, 1500);
        });
}

function cleanKitchen(){

    return new Promise((resolve, reject)=>{

        setTimeout(()=>{

            let kitchenCleaned = true;

                if(kitchenCleaned){
                    resolve("You clean the kitchen");
                }
                else{
                    reject("You DIDN'T clean the kitchen");
                }
                }, 2500);
        });
}

function takeOutTrash(){

    return new Promise((resolve, reject) => {
        
    setTimeout(()=>{

        let takeTrashOut = false;

            if(takeTrashOut){
                resolve("You take out the trash");
            }
            else{
                reject("You DIDN'T take out the trash");
            }
            }, 500);
    });
}


walkDog().then(value => {console.log(value); return cleanKitchen()})
         .then(value => {console.log(value); return takeOutTrash()})
         .then(value => {console.log(value); console.log("You finished all the chores")})
         .catch(error => console.error(error));

//.then()--only works on promise objects, it recieves the value that was passed to resolve parameter inside the promise
//.catch()--used for reject parameters, it handles errors with rejected promises
//HENCE, resolve is shown in .then() & reject is shown in .catch().



//ASYNC/AWAIT keyword. Looks synchronous
//async--makes a function return promise(s)
//await--makes an async function wait for a promise
async function doChores(){
    try{
        let walkDogResult = await walkDog();
        console.log(walkDogResult);

        let cleanKitchenResult = await cleanKitchen();
        console.log(cleanKitchenResult);

        let takeOutTrashResult = await takeOutTrash();
        console.log(takeOutTrashResult);

        console.log("You finished all the chores!");
    }
    catch(error){
        console.error(error);
    }
}
doChores()

//NOTE:
// Promise -- Method chain. Works with built-in functions
// Async/Await -- Calls a single function directly. Works by creating a custom function