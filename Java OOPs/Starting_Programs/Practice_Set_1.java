package Starting_Programs;
class Employee2
{
    String name;
    int salary;
    public int getSalary()
    {
        return salary;
    }
    public String getName()
    {
        return name;
    }
    public void getDetails()
    {
        System.out.print("My name is " + name);
        System.out.println(" and my salary is " + salary);
    }
    public void setName(String n)
    {
        this.name = n;
    }
}
class CellPhone
{
    public void ring()
    {
        System.out.println("Ringing");
    }
    public void vibrate()
    {
        System.out.println("Vibrating");
    }
    public void call()
    {
        System.out.println("Calling");
    }
}
public class Practice_Set_1
{
    public static void main(String[] args)
    {
        //Problem 1
        Employee2 Nishant = new Employee2();
        Nishant.setName("Nishant");
        Nishant.salary = 500000;
        System.out.println(Nishant.getName());
        System.out.println(Nishant.getSalary());

        //Problem 2
        CellPhone rog = new CellPhone();
        rog.ring();
        rog.vibrate();
        rog.call();
    }
}
