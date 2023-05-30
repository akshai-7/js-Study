//strings

const myVar = "Akshaikumar";
console.log(myVar);
//string method
console.log(myVar.length);

console.log(myVar.charAt(6));

console.log(myVar.indexOf('ai'));

console.log(myVar.lastIndexOf('u'));

console.log(myVar.slice(3, 5));

console.log(myVar.toUpperCase());

console.log(myVar.toLowerCase());

console.log(myVar.includes('r'));

console.log(myVar.split('a'));

//numbers
const myVariable = "24.23456";
const myNum = 29;
const myFloat = 29.09;(

console.log(parseFloat(myVariable).toFixed(2)));

console.log(Number.isNaN(23));
console.log(Number.isNaN('akshai'));
console.log(isNaN('23'));
console.log(isNaN('akshai'));


//math properties
console.log(Math.PI);
console.log(Math.trunc(Math.PI));
console.log(Math.round(232.83));
console.log(Math.ceil(23.133));
console.log(Math.floor(23.933));

console.log(Math.pow(2,3));
console.log(Math.min(2,3,9,1,0));
console.log(Math.max(2,3,9,1,0));
console.log(Math.random());/*0 to 1*/ 
console.log(Math.random()*10);
console.log(Math.floor(Math.random() * 10) + 1);

//ex
// console.log("Akshai".charAt(Math.floor(Math.random() * 6)));

const myNAme = "Akshai";
console.log(myNAme.charAt(Math.floor(Math.random() * myNAme.length)));


//if statements
let testmark = 41;
let grade;
if (testmark >= 90) {
    grade = 'A';
}
else if (testmark >= 80) {
    grade = 'B';
}
else if (testmark >= 70) {
    grade = 'c';
}
else if (testmark >= 60) {
    grade = 'D';
} 
else if (testmark >= 50) {
    grade = 'E';
}    
else {
    grade = 'F';
}
console.log(grade);


//switch statements
switch (15) {
    case 5:
        console.log(5);
        break;
    case 6:
        console.log(6);
        break;
    default:
    console.log("NO Match");
}

//ternary operator
// condition ?  if true : if false;
let sub = 10;
let response = sub >= 10 ? "Welcome" : "Kindly Subscribe";
console.log(response);

let testscore = 80;
let grades = testscore >= 90 ? "A" : testscore >= 80 ? "B" : 'C';
console.log(grades);

//user input 
// let myIn = confirm("Hello World");
// console.log(myIn);

let myInput = prompt("Name");
if (myInput) {
    console.log(myInput ?? "You didn't Enter Your Name");
} else {
    console.log("Please Enter Your Name");
}
console.log(myInput.trim().length);