// overriding   recreate the same method(parent class) in child class

class Bank
{
    roi()
    {
        return 0;
    }
}

class AXIS extends Bank
{
    roi()
    {
        return 10.5;
    }
}

class SBI extends Bank
{
    roi()
    {
        return 12.5;
    }
}

sbi=new SBI();
console.log(sbi.roi()); //will print: 12.5
ax=new AXIS();
console.log(ax.roi());  // will print: 10.5