// 1.single inheritance  a->b
// 2.Multi level inheritance a->b->c
// 3. hierarchy inheritance c,b,d ->A
// 4. multi level inheritance c->A,c->b (not allowed in js)

class A
{
a=100;
display()
{
    console.log(this.a);
}
}

class B extends A
{
    b=200;
    show()
    {
        console.log(this.b);
    }
}
bobj=new B();
bobj.display();
bobj.show();