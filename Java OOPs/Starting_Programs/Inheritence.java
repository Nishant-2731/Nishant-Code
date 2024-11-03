
import jdk.jshell.Snippet;

import java.util.Scanner;
class Base
{
    private int x;
    public int getX()
    {
        return x;
    }
    public void setX(int x)
    {
        this.x = x;
    }
}
class Derived extends Base
{
    int y;
    public int getY()
    {
        return y;
    }
}
public class Inheritence
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter value of X : ");
        int x = sc.nextInt();
        Derived d = new Derived();
        d.setX(x);
        System.out.println("x : "+ d.getX());
    }
}
