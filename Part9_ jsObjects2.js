let employee=
{
    empname:"scott",
    emid:2323,
    job:"Engineer",
    basicSal:100000,
    bonus: function()
          {
             return ((this.basicSal * 10)/100);
          }
};

console.log(employee["empname"]);
console.log(employee.bonus());
