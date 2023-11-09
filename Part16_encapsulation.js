// wrapping data and function into one single unit
class student
{
/////////////////////////////////////////////////
    constructor()
    {
        let name, marks;    // we wrapping up this data with methods

    }
/////////////////////////////////////////////
// we are getting and setting the data using get and set methods

    getName()
    {
        return this.name;
    }
    setName(name)
    {
    this.name=name;
    }

    getMarks()
    {
        return this.marks;
    }
    setMarks(marks)
    {
     this.marks=marks;
    }
}
////////////////////////////////////////////////////////

// create object
let stu=new student();

// set data
stu.setName("John");
stu.setMarks("A");


// call the methods
console.log(stu.getName());
console.log(stu.getMarks());

// it will print John A