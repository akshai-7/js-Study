//strings

// const myVar = "Akshaikumar";
// console.log(myVar);
//string method
// console.log(myVar.length);

// console.log(myVar.charAt(6));

// console.log(myVar.indexOf('ai'));

// console.log(myVar.lastIndexOf('u'));

// console.log(myVar.slice(3, 5));

// console.log(myVar.toUpperCase());

// console.log(myVar.toLowerCase());

// console.log(myVar.includes('r'));

// console.log(myVar.split('a'));

//numbers
// const myVariable = "24.23456";
// const myNum = 29;
// const myFloat = 29.09;(

// console.log(parseFloat(myVariable).toFixed(2)));

// console.log(Number.isNaN(23));
// console.log(Number.isNaN('akshai'));
// console.log(isNaN('23'));
// console.log(isNaN('akshai'));


//math properties
// console.log(Math.PI);
// console.log(Math.trunc(Math.PI));
// console.log(Math.round(232.83));
// console.log(Math.ceil(23.133));
// console.log(Math.floor(23.933));

// console.log(Math.pow(2,3));
// console.log(Math.min(2,3,9,1,0));
// console.log(Math.max(2,3,9,1,0));
// console.log(Math.random());/*0 to 1*/ 
// console.log(Math.random()*10);
// console.log(Math.floor(Math.random() * 10) + 1);

//ex
// console.log("Akshai".charAt(Math.floor(Math.random() * 6)));

// const myNAme = "Akshai";
// console.log(myNAme.charAt(Math.floor(Math.random() * myNAme.length)));


//if statements
// let testmark = 41;
// let grade;
// if (testmark >= 90) {
//     grade = 'A';
// }
// else if (testmark >= 80) {
//     grade = 'B';
// }
// else if (testmark >= 70) {
//     grade = 'c';
// }
// else if (testmark >= 60) {
//     grade = 'D';
// } 
// else if (testmark >= 50) {
//     grade = 'E';
// }    
// else {
//     grade = 'F';
// }
// console.log(grade);


//switch statements
// switch (15) {
//     case 5:
//         console.log(5);
//         break;
//     case 6:
//         console.log(6);
//         break;
//     default:
//     console.log("NO Match");
// }

//ternary operator
// condition ?  if true : if false;
// let sub = 10;
// let response = sub >= 10 ? "Welcome" : "Kindly Subscribe";
// console.log(response);

// let testscore = 80;
// let grades = testscore >= 90 ? "A" : testscore >= 80 ? "B" : 'C';
// console.log(grades);



//user input 
// let myIn = confirm("Hello World"); 
// console.log(myIn);

// let myInput = prompt("Name");
// if (myInput) {
//     console.log(myInput ?? "You didn't Enter Your Name");
// } else {
//     console.log("Please Enter Your Name");
// }
// console.log(myInput.trim().length);

//loops
//while loop
// let i = 1;
// while (i <= 50) {
//     console.log(i);
//     i++;
// }

// do whilelooplet i = 1;
//  let i = 50;
//  do{
//     console.log(i);
//     i++;
// } while (i < 50)  

//for loop 
// for (i = 1; i <= 10; i++){
//         console.log(i);
// }



// functions
// email="akshai@gmail.com"
// console.log(email.slice(0, email.indexOf('@')));


// function getName(email) {
//     return(email.slice(0, email.indexOf('@')));
// }
// console.log(getName("akshai2537@gmail.com")); 
// console.log(getName("akshai@gmail.com"));
// console.log(getName("akshaikumar@gmail.com"));
// console.log(getName("akshai25@gmail.com"));


// function toProperCase(name) {
//     return name.charAt(0).toUpperCase()+ name.slice(1).toLowerCase();
// }
// console.log(toProperCase('akshaikumar'));


//scope  var let const
//global scope
// var x = 1;
// let y = 2;
// const z = 3;

// console.log(`global:${x}`);
// console.log(`global:${y}`);
// console.log(`global:${z}`);

//local scope
// function myFunc() {
// const z = 4;
//     if (true) {
//         var y = 5;
//         console.log(`block:${x}`);
//         console.log(`block:${y}`);
//         console.log(`block:${z}`);
//     }
  
//     console.log(`function:${x}`);
// console.log(`function:${y}`);
// console.log(`function:${z}`);
// }
// myFunc()



//arrays

// const myArray = [];

// myArray[0] = 1;
// myArray[1] = 2;
// myArray[2] = 3;
// console.log(myArray);
// myArray.push('4');
// console.log(myArray);
// myArray.pop();
// console.log(myArray);
// myArray.unshift('4');
// console.log(myArray);
// myArray.shift('4');
// console.log(myArray);
// myArray.splice(2, 0, 'akshai');
// console.log(myArray);
// const joinArray =myArray.join()
// console.log(joinArray);
// const newArray = joinArray.split(',');
// console.log(newArray);
// console.log(myArray.reverse());

// myArrayA = ["false", 46, 287]; console.log(myArrayA);
// const Array1 = myArray.concat(myArrayA);
// const Array2 = [...myArray,...myArrayA];
// const Array3 = [myArray,myArrayA];
// console.log(Array1);
// console.log(Array2);
// console.log(Array3);
// console.log(Array3[1][1], Array3[0][1]);


//objects
//key:value 

// const myobj = { name: "Akshai" };
// const myobj2 = {
//     content: {
//         no: 10000,
//         name: "Akshai"
//     },
//     value: function () {
//         // return "Hello World";
//         return `Hello ${this.content.name}`;
//     }
// };
// console.log(myobj.name);
// console.log(myobj2.value());

const vehicle = {
    door: 2,
    engin: function () {
        return "Vrooomm";
    }
}
console.log(vehicle.engin());

const car = Object.create(vehicle);
console.log(car.engin(), car.door);

const movie = {
    actor: "kavin",
    music: "Arr",
    director: "Lokesh"
}
console.log(Object.values(movie));
console.log(movie.hasOwnProperty('actor'));

// destructerobeject
function signs({music}) {
    return music
}
console.log(signs(movie));