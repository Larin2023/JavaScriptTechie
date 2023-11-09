// super used to access from the parent class

class Animal
{
    constructor(color)
    {
        this.color=color;
    }
    printColor()
    {
        console.log(this.color);
    }
}

// child class
 class Dog extends Animal
 {
    constructor(color, food)
    {
        // call parent class color
        super(color);
        this.food=food;
    }

    eating()
    {
        console.log("Eating "+this.food);
    }

    display()
    {
        this.printColor();// parent class method
        this.eating();
    }
 }

 // create object
 d=new Dog("Black","Bread");
 d.display();
 // will print: Black
 // Eating: Bread
