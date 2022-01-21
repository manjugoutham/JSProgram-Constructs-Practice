const prompt = require('prompt-sync')();
let digits = prompt("Enter the digits [1,10,100,1000....] : ");
digits = parseInt(digits);

if (digits == 1) {
    console.log("The digit is : Unit");
}
else if (digits == 10) {
    console.log("The digit is : Ten");
} 
else if (digits == 100) {
    console.log("The digit is : Hundred");
} 
else if (digits == 1000) {
    console.log("The digit is : Thousand");
} 
else if (digits == 10000) {
    console.log("The digit is : Ten Thousand");
} 
else {
    console.log("Invalid Digit");
}