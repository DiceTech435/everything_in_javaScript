//KEYWORDS VARIABLES - container for storing data
//var - declares a variable--for older browsers
//let - declares a block variable
//const - declares a block constant(cannot be declared again)


//OPERATORS
//Arithmetic Operators - -- + ++ *  / < > ** % 
//Assignment Operator = += -= *= /= %= **=
     //+= -= String/number concatenation, appending
// Comparison Operators == != !== < > <= >= ? ===  Identical or datatype comparism operator
//Logical OPerators &&     || !"
     //spread operator [...](expands array or string(iterable) into seperate elements)
     //(...)Rest parameters is the opposite and it used only as a paramter in a function
//Nullish Coalescing(??)-val ?? fallback--provide fallback only if val is null or undefined
//optional chaining(?.)-obj?.prop--avoids crashon undefined/null access

// HTML SPECIAL CHARACTERS FOR VARIOUS SYMBOLS
// less than(<)- &lt;
// greater than(>)- &gt;
// plus(+)- &plus;
// minus(-)- &minus;
// times(x)- &times;
// animation, arrow, spin, rotate, group, contact, 


// PUNCTUATIONS
// `` - Backticks
// '' - Single Qoute
// "" - Double Qoute
// ! - Exclamation (isNot)
// # - Hash
// @ - At
// % - Percent
// ^ - Exponent
// & - Ampersand
// * - Asterix, Star, times, multiplicaton
// () - Parenthesis, bracket, braces (Round Brackets)
// - - Hyphen, Minus Sign
// _ - Underscore
// + - Plus Sign
// = - Assignment Operator, equal sign
// {} - Curly braces
// [] - Square Brackets
// / - Forward Slash
// \ - Backward Slash
// | - Pipe Symbol
// : - Colon
// ; - Semi-colony 
// , - coma
// ? - Question Mark
// <> - Angle Brackets, Less than and Greater than sign 
// .  - Period, dot, full stop
// ++ - Increment by 1
// -- - Reduce by 1
// \n - space down

//DATA-TYPES console.log(typeof x)
//typeof() finds the data type of a variable or an expression
//undefined-not assigned
//null
//string
//boolean
//number
     //int---whole number, 30, -5, 
     //bigInt
     //float/double--with decimal points, 3.142, 7.00,
//array[]
//objects{}
//symbol



//DATA-TYPE CONVERSION (They are Functions)
//typeof() finds the type of a variable or an expression
     //Number(x, typeof x)
//parseFloat()-changes string to float(decimal number)
//.tostring() OR String()--changes number to string 
//Number()-changes string to number(float, int)
//Boolean()-changes string to boolean
//parseInt()-changes string to integer(whole number)
     //num.parseInt(str, 10-ie;radix) OR Number()



// DISPLAY POSSIBILITIES(Functions)
console.dir(document); //used for debugging purposes only
console.log(document); //used for debugging purposes only
console.error(); //used for catching errors(caught, type or syntax error)
console.assert();
document.write();//this will delete all existing HTML, used only for testing purposes
window.alert(); alert() //used for 
window.print(); //used to print the content of the current window 
window.prompt("")
window.confirm("")

// DISPLAY POSSIBILITIES(Methods)---meaning they can be added(concatenated) on the same line for execution
.innerHTML =""//(texts in semantic/format tags) 
.innerText =""
.textContent =""//(texts inside the containers)



//DOM---DOCUMENT OBJECT MODEL
     //ELEMENT SELECTORS                                                                           PROTOTYPE
document.title = "HTML page";
document.body.style.backgroundColor = "red";
document.head, 
document.footer, etc
document.Name
window.innerWidth
window.innerHeight

window.addEventListener("resize", {})

document.getElementById("")//                                                            ELEMENT OR NULL
document.querySelector('#id or .class or h4')//                                          FIRST ELEMENT OR NULL
document.querySelectorAll("#id or .class or h4")//                                       NODELIST
document.getElementsByClassName("fruits")//fruits[0], Array.from(fruits).forEach()       HTML COLLECTION (iterable)
document.getElementsByTagName("h4")//h4[0], Array.from(h4).forEach()                     HTML COLLETION (iterable)                                   


//NODELIST
document.querySelectorAll("#id or .class or h4")


//   Example 1
// let ele = document.getElementsByTagName("div");
// console.log(ele);

//   Example 2
// let datas = document.querySelectorAll("div");
// console.log(datas[0]);

//   Example 3
// let datas = document.getElementsByName("firstname");
// console.log(datas[0].innerHTML);



//DOM NAVIGATION
.firstElementChild
.lastElementChild
.nextElementSibling
.previousElementSibling
.parentElement
.children




//EVENT-LISTENERS/event handler attribute
 onclick="document.getElementById('time').innerHTML = Date();"
//submit-onsubmit--by form ID
//change-onchange---input or image changed
//load-onload---web page finish loading

//click/onclick="()"         
btn.addEventListener('click', function(event){
     btn.target.style.backgroundColor = "red";
     btn.target.textContent = "Submit";
});
//mouseover/onmouseover
btn.addEventListener('mouseover', function(event){
     btn.target.style.backgroundColor = "yellow";
     btn.target.textContent = "Pls dont do it";
});
//mouseout/onmouseout
btn.addEventListener('mouseout', event => {
     btn.target.style.backgroundColor = "blue";
     btn.target.textContent = "Login";
});
// resize/onresize
window.addEventListener("resize", {});
window.removeEventListener("resize", {});


     //KEY EVENTS
//keypress-older versions
//keydown
btn.addEventListener('keydown', event => {
     console.log(event.key);
     });
//keyup
btn.addEventListener('keyup', event => {
     console.log(event.key);
     });

//e.preventDefault()---prevents default behaviour of an event from occuring
// e.target
// e.target.value



     //JAVASCRIPT SYNTAX
//(Declaring/Assigning, GetElement, Display-Assign-HTML content)
let h2 = document.getElementById("h2").innerHTML = "Hello World";

//(Assign-Property)
let input = document.getElementById("input").prop("value");

//(ChangeElements-using style attribute)
let paragraph = document.getElementById("p").style.fontSize = "30px";

//(Declare-Action/function)
let btn = document.getElementById("btn").onclick = function(){};

//(Change-using src attribute)
let image = document.getElementById("demo").src = "img1.png";

//(Change-using classList attribute)
let button = document.getElementById("btn").classList = "img1.png";

//OTHER PROPERTIES/METHODS AVAILABLE
     //Form attributes
//.value---For input
//.checked---For checkbox/radio
     //Changing attributes
//.class = ""
//.classList=""
//.id = ""
//.title = ""
//.innerHTML = ""
//.textContent = ""
//.onclick = function();
     //Using attributes
//.style.fontSize, color, width, backgroundColor, 
//.src = ""
//.href = ""
//.prop("value");


//CLASSLIST--Element property
btn.classList.toggle("enabled");
     //.add()
     //.remove()
     //.toggle()
     //.replace("oldclass", "newclass")
     //.contains()



//ADD & CHANGE HTML ELEMENTS
// Step 1--Create the Element.createElement()
          let myH1 = document.createElement("h1")
//Step 2--Add Attributes/properties
     myH1.id ="myH1"
     myH1.textContent = "I like pizz"
     document.getElementById("h2").innerHTML = "Hello World";
     document.getElementById("users").prop("value");
     document.getElementById("p").style.fontSize = "30px";
     document.getElementById("div").style.color = "Red";
     document.getElementById("div").style.backgroundColor = "black";
     document.getElementById("box").style.width = "150px";
     document.getElementById("img").src = "pictures/logo.png";
     document.getElementById("img").style.visibility = "hidden/visible";
     document.getElementById("button").style.color = "Red";
     document.getElementById("submit").onclick = function(){};
     document.getElementById("myH1").textContent = "";
     document.getElementById("firstname").value;
//Step 3--Append Element to DOM
     //.prepend()
     document.body.prepend(myH1)//--puts myH1 as the first body element 
     //.append()
     document.getElementById("fruits").append(myH1)//--puts myH1 after the fruits container
     //.insertBefore(newElement, currentElement)
     document.body.insertBefore(myH1, box2)//insert myH1 before box2
//Step 4--Remove HTML Elements.removeChild()
     document.getElementById("box1").removeChild(myH1)//--remove myH1 found in box1





               //FUNCTIONS

//MATHS FUNCTIONS -Builtin object with collection of properties(Math.PI, E) and methods()
     //properties
//Math.PI
//Math.E--Eular's number

     //Maths Methods()
//Math.random()
//Math.round()
//Math.floor()
//Math.ceil()
     //Example: Math.floor(Math.random() * (max-min)) - min
//Math.trunc()-eliminates any decimal point
//Math.pow(y, 2)-variable y to the power of 2
//Math.abs()-gives same number but + instead of -
//Math.max()
//Math.min()
//Math.sqrt()
//Math.log(20)
//Math.sin(12)
//Math.cos(9)
//Math.tan(15)
//Math.sign()


                              //METHODS
     //String Property--
//.length--String Property(pre-computed value)-helps manipulate and work with Js strings
     //String Methods -- helps manipulate and work with strings
//.test()
//.then()--used with Promise objects
//.toLowerCase()
//.toUpperCase()
//.trim()-removes leading white space
//.repeat(3)-repeats 3times
//.replaceAll("-", "")-replace - with no space
//.padStart(15, "0")-beginning pads with 0 until it is 15 chars long
//.padEnd(15, "0")-ending pads with 0 until it is 15 chars long
//.tostring() OR String()--number to string 

               //Character Position--Iterable
//names[0]-first string of a character or array
//.at(-1)-last string of a character
//.charAt(2)-second string of a character
//.indexOf("a")-returns the index of the first occurance of a character
//.lastIndexOf("b")-returns the index of the first occurance of a character from reverse
//.slice(start, end)-creating a substring from a portion of anoda string or array
//.substring(indexStart, indexEnd)--same as slice, but it dosen't create another string
//.split(seperator, limit)--divide strings into an array of substrings like this ["", "", ""]

               //Boolean Array-Iterable Methods
//.includes(" ")-if it includes a space, return TRUE
//.startsWith(" ")-if it starts with a space, return TRUE
//.endsWith(" ")-if it ends with a space, return TRUE

               // Number/Format Methods
// eval()--mathematical built-in function which takes an expression and evaluates giving a result
// isNaN()
//.toFixed(2)-to two decimal point
//.toLocaleString()-adds , to number; 100,000
// .toPrecision()
// .toString()
// Number.isNaN()
// Number.isInterger()

               //Array-Iterable Methods
//.sort()-arrange in lexicographical order
//.reverse()-reverse the arrangemnt 
//.join(', ')-concatenates all elements in an array and returns a single string
//.concat()-combines two or more arrays
// image.push()
     // let image = []
     // (`<img src = "images/${value}.png" alt="Dice ${value}">`)

               //Promise Methods
//.then()--only works on promise objects, it recieves the value that was passed to resolve() inside the promise
//.catch()--used for reject parameters, it handles errors or rejected promises
//.fetch()--
// Promise.all()
// Promise.race()
// Promise.resolve()
// Promise.reject()

               // Objects Methods
// Objects.keys()
// Objects.values()
// Objects.entries()
// Objects.assign()
// Objects.freeze()
// Objects.seal()
// Objects.create()
// Objects.hasOwnProperty()
// Objects.getPrototypeOf()


               // Events Methods
// .addEventListener()
// .removeEventListener()
// .stopPropagation()
// .preventDefault()

               // Error Handling
// try{}
// catch(error)
// finally{}
// throw
// throw new Error()


               // Miscellaneous
// setTimeout()
// setInterval()
// clearTimeout()
// clearInterval()
// parseInt()
// parseFloat()
// JSON.stringify()
// JSON.parse()
// typeof
// instanceof

               // Function Types
// Regular Functions
// Arrow Functions
// Anonymous Functions
// Immediately Invoked Function Expression (IIFE)
// Callback Functions
// Higher-Order Functions