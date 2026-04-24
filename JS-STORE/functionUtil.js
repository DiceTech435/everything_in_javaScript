//CALCULATE DISCOUNTS
// let price = 120;

// let discount = price >= 100 ? 10 : 0;

// total = price - price * (discount/100);
// console.log("Your total is " + "$" + total);


export function capitalize(word){
    return word[0].toUpperCase() + word.substring(1).toLowerCase()
}
console.log(capitalize("sAm"));

 
export function getNumberOfChars(name){
    return name.length;
};

export function getFirstChar(name){
    return name[0];
};

export function getLastChar(name){
    return name[name.length - 1];
    // OR
    // return name.at(-1);
};

export function getLower(name){
    return name.toLowerCase();
}

export function getUpper(name){
    return name.toUpperCase();
}

export function getCapitalized(name){
    return name[0].toUpperCase + name.substring(1).toLowerCase();
}

export function getNextAge(age){
    return Number.parseInt(age, 10) + 1;
}

export function evenOrOdd(number){
    // if(number % 2 === 0){
    //     return "even";
    // }
    // return "odd";
    //     OR
    return (number % 2 === 0) ? "even" : "odd";
}

export function logUserIds(userIds){
    userIds.forEach(function(userId){
        console.log(userId);
    });
    return true;
}

export function sumGrades(grades){
    let sum = 0;
    grades.forEach(function(grade){
        sum += grade;
    });
    return sum;
}

export function isEven(number){
    return number % 2 === 0 ? true : false;
}

export function isValidEmail(email){
    if(email.includes("a")){
        return true;
    }
    else{
        return false;
    }
}
// console.log(isValidEmail("amevye@g.com"));

export function toFahrenheit(number){
    let temp = Number(number);
    temp = temp * 9 / 5 + 32;
    console.log(temp.toFixed(1) + "F");
}

export function toCelcius(number){
    let temp = Number(number);
    temp = (temp - 32) * (5/9);
    console.log(temp.toFixed(1) + "C");
}

export function getVotersCount(ages){
    return ages.filter(function(age){
        return age >= 18;
    }).length;
    //OR
    let filteredVoters = age.filter(function(age){
        return age >= 18;
    });
    return filteredVoters.length;
}

export function isAppUSed(apps, app){
    return apps.includes(app);
}
// console.log(isAppUsed(["Twitter", "Calculator"], "Calculator"));

export function getStringSizes(strings){
    return strings.map(function(string){
        return string.length;
    })
}

export function getNumberOfGrades(grades){
    return grades.length;
}

export function getSumGrades(grades){
    let sum = 0;
    grades.forEach(function(grade){
         sum += grade
    });
    return sum;
}

export function getAverageValue(grades){
    return getSumGrades(grades) / grades.length //Note; getSumGrades is already a declared function
}

export function getPassingGrades(grades){
    return grades.filter(function(grade){
        return grade >= 10;
    });
}

export function getFailingGrades(grades){
    return grades.filter(function(grade){
        return grade < 10;
    });
}

export function getRaisedGrades(grades){
    return grades.map(function(grade){
        if (grade + 1 > 20){
            return 20;
        }
        return grade + 1;
    });
}

// let grades = [10, 20, 9];
// let sum = 0;
// grades.forEach(function(grade){
//     sum += grade
//     return sum / grades.length;
// })


export function sumPositiveNumbers(numbers){
    let sum = 0;
    numbers.filter(function(number){
        if(number >= 0){
            sum = sum + number;
        }
    });
    return sum;
}

export function sumOddNumbers(numbers){
    let sum = 0;
    numbers.filter(function(number){
        if(number % 2 !== 1){
            sum = sum + number;
        }
    });
    return sum;
}

//Take note of the concatenated html, left to me, giving it a variable first is useless
export function getDropDown(countries){
    let html = `<option value="">Please Select</option>`;
    countries.forEach(function(country){
        html += `<option value="${country.toLowerCase()}"> ${country} </option>`; 
    });
    return html;
}

//ANOTHER WAY
export function renderTableRows(rows){
    let html = "";
    rows.forEach(function(row){
        html += `<tr>
                    <td>${row[0]}</td>
                    <td>${row[1]}</td>
                 </tr>`
    });
    return html;
}



export function elementFromHtml(html){
    let template = document.createElement("template");

    template.innerHTML = html.trim();
    return template.content.firstElementChild;
}