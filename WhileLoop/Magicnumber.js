const prompt = require("prompt-sync")();
console.log("Think numbe between 1 and 100");

let leftnun = 0;
let reightnum = 100;

while ((reightNumber - leftNumber) > 0) {

    let mid = ((leftnun + reightnum) / 2);

    let ch = prompt("Is" + mid + "your number? \n(YES or NO)")

    if (ch==="yes") {
        console.log("Your number is : " + mid);
        break;
    } else {
        let ch2 = prompt("Is your number between " + leftNumber + " and " + reightNumber + " ?\n(yes or no)");
        if (ch2==="yes") {
            reightNumber = mid;
            //			leftNumber=0;
        } else {
            leftNumber = mid;  
        }
    }
}