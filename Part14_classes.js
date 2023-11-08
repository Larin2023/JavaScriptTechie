class student
{

    // CREATE A METHOD

    // setDetails() {
    //     this.sid=101;
    //     this.sname="John"
    //     this.grade="A";
    // }

    // or

    // setDetails(sid, sname, grade) {        // also we can pass data as argument to the method: (sid, sname, grade)
//        this.sid=sid;
//        this.sname=sname;
//        this.grade=grade;
    // }



   //CONSTRUCTOR

    constructor(sid, sname, grade) {
        this.sid=sid;
        this.sname=sname;
        this.grade=grade;

    }
    // THIS IS A METHOD TO DISPLAY ON CONSOLE
    display()
    {
        console.log(this.sid,this.sname,this.grade);
    }
}


// CREATE AN OBJECT
//let stu = new Student();
// stu.setDetails();
//stu.display();                //this will print: 101 John A

//or

//let stu=new student();
//stu.setDetails(101,"John","C");
//stu.display();




// with constructor we don't need object name like this: stu1.setDetails!!!!!!!!!!!!!:

//let stu1=new student(102,"Joah","C");
//stu1.display();

//or

//we can create any number of objects for one class:

let stu1=new student(102,"Joy","A");
stu1.display();

let stu2=new student(103,"David","B");
stu2.display();

let stu3=new student(104,"Anna","C");
stu3.display();