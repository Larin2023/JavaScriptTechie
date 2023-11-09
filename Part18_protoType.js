// prototype is an object that is associated with every function & Object by default

function student()
{
this.name="John";
this.gender="male";
}

student.prototype.age=31; //<---------------
stu1=new student();
// stu1.age=31; not accessible in stu2. need to create protoType
console.log(stu1.name,stu1.gender,stu1.age);  //John male 31
console.log(stu1.name);
console.log(stu1.gender);

stu2=new student();
console.log(stu2.name, stu2.gender,stu2.age);  //John male undefined
