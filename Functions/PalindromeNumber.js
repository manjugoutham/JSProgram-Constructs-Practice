function Palindromenumber(number) {

    const prompt = require("prompt-sync")();
    let original = number;
    let reverse = "";
    let len = original.length;

    for (let i = len - 1; i >= 0; i--) {
        reverse = reverse + original.charAt(i);
    }
    if (original === reverse) {
        console.log("The given Number is a palindrome");
    }
    else {
        console.log("The given Number is not a palindrome");
    }
}

Palindromenumber("272");