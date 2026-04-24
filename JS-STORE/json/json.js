//JSON--Javascript object notation. Data-interchange format. Used for exchanging data between a server and a web application
//object-{key:value} OR array of objects[{}, {}, {}] OR array-[value, value, value]

//JSON.stringify() = converts a js Object/array to a JSON string
//JSON.parse() = converts a JSON string to a JS object/array

// Content-Type: application/json

// JSON	                Vs                  JS OBJECTS
// String format	                    Actual object
// Keys MUST be in quotes	            Quotes optional
// No functions allowed	                Functions allowed
// No comments	                        Comments allowed
// Used for data transfer	            Used in code

// Sending data to server ==>	JSON.stringify()
// Receiving via fetch	==>  response.json()
// Manual string → object	==>  JSON.parse()

// localStorage.setItem("user", JSON.stringify({ name: "Matthew" }));  ==> .stringify()
// const user = JSON.parse(localStorage.getItem("user"));              ==> .parse()

//Stringify
let person = {
    "name": "Spongebob",
    "age" : 30,
    "isEmployed" : true,
    "hobbies": ["jellyfishing", "karate", "cooking"]
};

let jsonPerson = JSON.stringify(person);
console.log(jsonPerson);


//parse
let parsePerson = JSON.parse(jsonPerson);
console.log(parsePerson);

//OR
let names = `["Spongebob", "patrick", "Squidward", "Sandy"]`;
 names = JSON.parse(names);
console.log(names);



//Fetch--making https requests to fetch resources.
    //(JSON style, images, files)
    //used for interacting with APIs to retrieve and send data synchronously over the web. 
    //fetch(url, {option})--absolute, relative file path or url.

// Server sends JSON (string)
// ↓
// fetch() gets response
// ↓
// response.json() converts it
// ↓
// You get JavaScript object

//Using prmises
fetch("json/person.json")
    .then(response => response.json())
    .then(value => console.log(value));

fetch("json/people.json")
    .then(response => response.json())
    .then(values => values.forEach(value => console.log(value.name)))
    .catch(error => console.error(error));

//Using Async/await
fetchData();
async function fetchData(){
    try{
        let response = await fetch("json/people.json");
        if(!response.ok){
            throw new Error("Could not fetch data")
        }
        //.then(res => res.json());
        let mine = await response.json();
        // mine.forEach(value => console.log(value))
        let mineString = JSON.stringify(mine);
        console.log(mineString);
    }
    catch(error){
        console.error(error);
    }
}


//EXAMPLES:::
//Using Promises
fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
        .then(response => {
            if(!response.ok){
                throw new Error("Could not fetch resource");
            }
            return response.json();
        })
        .then(data => console.log(data))
        .catch(error => console.log(error));


//OR USING ASYNC
fetchData();
async function fetchData(){
    try{
        //first response
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/typhlosion");
        if(!response.ok){
            throw new Error("Could not fetch resource")
        }
        else{
              let data =  await response.json();
        }
        //2nd response
        let response2 = await fetch("https:thisismy/secondresponse.com")
        if(!response2.ok){
            throw new Error("Could not fetch data");
        }
        let data2 = response2.json();
    }
    catch(error){
        console.error(error);
    }
}

fetch("hjhjdhfjhd")
    .then(response =>  {
        if(!response.ok){
            throw new Error("could not fetch data")
        }
        return response.json() })
    .then(data => console.log(data))
    .catch(error => console.log(error))



async function fetchData(){
    try{
        //first response
        let response = await fetch("https://hdjfdjhfkdjkdjkdjdkjd.com")
        if(!response.ok){
            throw new Error("Could not fetch data");
        }
        let data = await response.json();

        //2nd response
        let response2 = await fetch("https://hjhjjkjkdjkujeiuieufje.com")
        if(!response2.ok){
            throw new Error("Could not fetch data");
        }
        let data2 = response2.json();

    }
    catch(error){
        console.log(error);
    }
}
        