package Starting_Programs;
class Employee
{
    int id;
    String name;
    public void print()
    {
        System.out.print("My name is "+name);
        System.out.println(" and my id is "+id);
    }
}

public class custom_class
{
    public static void main(String[] args)
    {
        System.out.println("Custom Class");
        Employee Nishant = new Employee();
        Employee Lallu = new Employee();
        Nishant.id = 1;
        Nishant.name = "Nishant";
        Lallu.id = 2;
        Lallu.name = "Lallu";
        Nishant.print();
        Lallu.print();
        // System.out.println(Nishant.id);
        // System.out.println(Nishant.name);
    }
}