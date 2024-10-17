package Starting_Programs;
abstract public class base1
{
    public base1()
    {
        System.out.println("Constructor of base");
    }
    public void helo()
    {
        System.out.println("Helo");
    }
    abstract public void greet();
}
class derived1 extends base1
{
    @Override
    public void greet()
    {
        System.out.println("Good Morning");
    }
}
abstract class derived2 extends base1
{
    public void hi()
    {
        System.out.println("hi");
    }
}
