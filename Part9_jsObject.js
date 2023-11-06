 // Create Object
 let person=
 {
    firstName:"John",
    lastName:"Jordan",
    age:45,
    weight:167

 }



//Access object property
  console.log(person["firstName"]);
  console.log(person.lastName);       // we can do with this too
  console.log(person["age"]);



// add new property the existing object
person["height"]=5.5;       //or you can use  person.height=5.5;
console.log(person.height);



// update property
person.weight=167;
console.log(person["weight"]);




//remove the property from the object
delete person.age;
console.log(person.age);




// for in loop
for(let x in person)            // for "person" object
{
// console.log(x);              // prints only property name
// console.log(person[x]);      // print only property value
console.log(x+" "+person[x]);   // prints only property name + value
}