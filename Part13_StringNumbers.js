let s ="Welcome";


/// chartAt()
console.log(s.charAt(2));  //l




// concat()
console.log(s.concat(" to JavaScript programming")); //Welcome to JavaScript programming

console.log(s.concat(" to JavaScript programming").concat(" !!!"));  //Welcome to JavaScript programming !!!




// replace()
s="Welcome to javascript";
console.log(s.replace("javascript","java"));  //Welcome to java



//substring()
s="welcome";
// wel
console.log(s.substring(0,3));  //wel
console.log(s.substring(0,7)); //welcome
console.log(s.substring(3,7)); //come



// tolowerCase() & toUpperCase()
s="WELcome";
console.log(s.toLocaleLowerCase()); //welcome
console.log(s.toUpperCase());    //WELCOME




// split()
s="welcome to javascript";
let arr=s.split(' ');
console.log(arr[0]); //welcome
console.log(arr[1]); //to
console.log(arr[2]);  //javascript




//trim()
s="    welcome  ";
console.log(s);
console.log(s.trim());  //welcome






//////////////numbers/////////////////

//  let x=100;
// let x=new Number(100);

let x=102; // Integer value
let y=102.7 //decimal
let z=10e2;  // exponential value
console.log(x,y,z);




// isInteger()
x=10;
y=1.9;
z="x";

console.log(Number.isInteger(x));  //true
console.log(Number.isInteger(y));  //false
console.log(Number.isInteger(z));  //false



// parseIn()  converts a string into number
s="232323";
console.log(typeof(s));  //string
console.log(typeof(Number.parseInt(s)));   //number



// parseFloat()
s="45.893";
console.log(typeof(s));  //string
console.log(typeof(Number.parseFloat(s))); //number




// toString()
let n=1234;
console.log(typeof(n));//number
console.log(typeof(Number.toString(n)));  //string
