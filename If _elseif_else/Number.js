const prompt = require('prompt-sync')();
let number = prompt('Enter the Number: ');
number = parseInt(number);
console.log(number);

if(number == 1){
    console.log("Number is = one");
}
else if(number == 2){
    console.log("Number is = two");
}
else if(number == 3){
    console.log("Number is = three");
}
else if(number == 4){
    console.log("Number is = four");
}
else if(number == 5){
    console.log("Number is = five");
}
else if(number == 6){
    console.log("Number is = six");
}
else if(number == 7){
    console.log("Number is = seven");
}
else if(number == 8){
    console.log("Number is = eight");
}
else{
    console.log("Number is = nine");
}