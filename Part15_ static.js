class Test
{

//create variables
    static a=10;     // Static variable
    b=20;            // Non-static variable
//create methods
    static m1()
    {
        console.log("This is m1 static method ...");
    }

    m2()
    {
        console.log("this is m2 Non-static method....");
    }


}
// 1. static  (we can directly access static variables and methods using class name)

//access variables
console.log(Test.a);  // Will print:10


Test.a=1000;    //can be accessed and modified using the class name
console.log(Test.a); //Now it will print: 1000

console.log(Test.b);   //Will print:undefined///////////////bed

//access methods
Test.m1();  //Will print: This is m1 static method ...
Test.m2();  //Will print: TypeError: Test.m2 is not a function////////////bed



// 2. access non-static method and variable using object
let t=new Test();
console.log(t.b);  //Will print: 20
t.m2();  // Will print: this is m2 Non-static method....
