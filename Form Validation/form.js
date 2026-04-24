let btn = document.getElementById("validate");

btn.addEventListener("click", function(e){

    e.preventDefault();
    let fullname = document.getElementById("fullname").value;
    let username = document.getElementById("username").value;
    let age = document.getElementById("age").value;
    let error = document.getElementById("error");
    let success = document.getElementById("success");
    let regex = /^[a-zA-Z\s]+$/;

    if(fullname == ""){
        error.innerHTML = "Enter fullname";
    }
    else if(username == ""){
        error.innerHTML = "Enter username";
    }
    else if(age == ""){
        error.innerHTML = "Enter age";
    }
    else if(age < 18){
        error.innerHTML = "You are under age";
    }
    else if(age < 18){
        error.innerHTML = "You are under age";
    }
    else if(!regex.test(fullname)){
        error.innerHTML = "Invalid fullname";
    }
    else if(!regex.test(username)){
        error.innerHTML = "Invalid username";
    }
    else{
        success.innerHTML = "Welcome!!!";
    };

});

// let name = "Mathew";
// // console.log(name);

//  // LOOPS IN JAVASCRIPT
//  let fruits =  new Array ("mango", "orange", "berry", "gauva", "apple", true);
//  let countries = ["Nigeria", "Ghana", "America", "Australia"];

// //while
// //do while
// //for
// //foreach

// let age = 34;
// username = "Favour";

// // while(username == "favour" || age == 30) {
// //     console.log("You are welcome");
// // }

// // do{
// //     console.log("you are welcome");
// //     console.log("you are welcome");
// // }
// // while(username == "favour" || age == 34);


// // for(let i = 1; i <= 9; i+=9){
// //     console.log("You are right there");
// // }


// countries.forEach(function(countries){
//     console.log(countries);   
// });
