// js arrays are used to store multiple values in a single variable

// create array
 let cars=["tesla","toyota","volvo"];
// or
// let cars = new Array("tesla","toyota","volvo");
console.log(cars);



//accessing elements // volvo
console.log(cars[2]);



//change the value
cars[0]="honda";
console.log(cars);



// variable og different types
let myarray=[100, "welcome", 10.15, true];
console.log(myarray);



// objects in array
let person1={
            name:"John",
            age:30
            };

let person2={
                name:"David",
                age:40
            };

let objArray=[person1,person2];
console.log(objArray);
console.log(objArray[0]);




// looping element form array

//create an array
let fruits=["mango","lemon","apple","banana"];
console.log(fruits.length);   //will print "4"

for(let i=0;  i<=fruits.length-1;  i++)
{
    console.log(fruits[i]);
}
console.log("++++++++++++++++++++=");





//for of loop
for(element of fruits)
{
console.log(element);
}

console.log("+++++++type of++++++++ ");




// Recognize an Array - typeof
console.log(typeof fruits);

console.log(Array.isArray(fruits));  // will print "true" because "array is an object in javaScript
