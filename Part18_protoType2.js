class Employee
{
    constructor(eid,ename)
    {
        this.eid=eid;
        this.ename=ename;

    }
}

employee.prototype.sal=5000;


employee.prototype.display=function()
                {
                    console.log(this.eid,this.ename,this.sal);
                }

emp1obj=new employee(101,"Josh");
//console.log(emp1obj.eid,emp1obj.ename,emp1obj.sal);  //101 Josh 5000
emp1obj.display();
emp2obj=new employee(102,"John");
//console.log(emp2obj.eid,emp2obj.ename,emp2obj.sal);  //102 John 5000
emp2obj.display();  //102 John 5000
