// DATE OBJECTS(year, month, day, hour, minute, seconds, ms)
let dateFormat = new Date(2024, 0, 1, 2, 3, 4, 5)//date format
let dateTime = new Date("2024-01-02T12:00:002")//another date format
let time2 = new Date(17000000000);//when your pc think timing begin

let date = new Date()//-for current date and time
let year = date.getFullYear()//-get year from date object
let month = date.getMonth()//-get month from date object
let day = date.getDate()//-get day from date object
let dayOfWeek = date.getDay()//-get day from date object Sun-0, Mon-1, Teu-2
let hour = date.getHours()//-get hour from date object
let minutes = date.getMinutes()//-get minutes from date object
let seconds = date.getSeconds()//-get seconds from date object
let milliSeconds = date.getMilliSeconds()//-get milli seconds from date object
// .getMonth()
// .getTime()

let setFullYear = date.setFullYear(2024)//Set year
let setMonth = date.setMonth(0)//set month
let setDay = date.setDate(1)//set day
let setHour = date.setHours(2)//set hours
let setMin = date.setMinutes(3)//set mins
let setSeconds = date.setSeconds(4)//set seconds
let setMilliSeconds = date.setMilliSeconds(4)//set milli seconds
// .setMonth()
// .setTime()

let date1 = new Date("2023-12-31");
let date2 = new Date("2024-01-01");
if(date2 > date1){
    console.log("HAPPY NEW YEAR");
};







// SETTIMEOUT()--updates repeatedly
// setInterval(callback, delay)
// clearInterval()
// delay--in Milliseconds 
// 1000 * 60 * 60 ---Ms conversion to hours

function sayHello(){
    window.prompt("Hello");
}
//setTimeout(callback, delay)---using callback
setTimeout(sayHello, 2000);


// setTimeout(function(){}, delay)---using anonymous/function expression
setTimeout(function(){
    window.prompt("Hello");
}, 2000);

// setTimeout(function(){}, delay)---using arrow function
setTimeout(() =>  windows.prompt("Hello"), 2000);


// CLEARTIMEOUT--cancel a timeout b4 it triggers--stops the continious updating
// clearTimeout()
let timeoutId = setTimeout(() =>  windows.prompt("Hello"), 2000);
clearTimeout(timeoutId);