
// ========Palindrome Practice==========
var userInput= prompt("Enter any thing");
var userinputchanging = userInput.toLowerCase();
var arr = [""];
var flag = false;
var reverse = userInput.split('').reverse().join('');
if(userInput === reverse){
    flag= true;
}
if(flag){
    console.log(userInput + " is a palindorme");   
}
else{
    console.log(userInput + " is not a palindrome");
}

