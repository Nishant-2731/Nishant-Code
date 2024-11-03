package Starting_Programs;
import java.util.Scanner;
class Cylinder
{
    private int height;
    private int radius;
    public Cylinder(int height, int radius)
    {
        this.height = height;
        this.radius = radius;
    }
    public int getHeight()
    {
        return height;
    }
    public int getRadius()
    {
        return radius;
    }
    private double area, volume;
    void SurfaceArea()
    {
        area = (2 * Math.PI * this.radius * this.height) + (2 * Math.PI * this.radius * this.radius);
        System.out.println("Surface Area of Cylinder is " + area);
    }
    void Volume()
    {
        volume = (Math.PI * this.radius * this.radius * this.height);
        System.out.println("Volume of Cylinder is " + volume);
    }
}
class Rectangle
{
    private final int length;
    private final int breadth;
    private int area, perimeter;
    public Rectangle()
    {
        this.length = 4;
        this.breadth = 5;
    }
    public Rectangle(int length, int breadth)
    {
        this.length = length;
        this.breadth = breadth;
    }
    public int getLength()
    {
        return length;
    }
    public int getBreadth()
    {
        return breadth;
    }
    void Area()
    {
        area = length * breadth;
        System.out.println("Area of the Rectangle is "+area);
    }
    void Perimeter()
    {
        perimeter = 2 * (length + breadth);
        System.out.println("Perimeter of the Rectangle is "+perimeter);
    }
}
class Sphere
{
    private int radius;
    private double area, volume;
    public Sphere(int radius)
    {
        this.radius = radius;
    }
    public int getRadius()
    {
        return radius;
    }
    void SurfaceArea()
    {
        area = 4 * Math.PI * radius * radius;
        System.out.println("Surface Area of the Sphere is "+area);
    }
    void Volume ()
    {
        volume = (4/3) * Math.PI * radius * radius * radius;
        System.out.println("Volume of the Sphere is "+ volume);
    }
}
public class Practice_Set_2
{
    public static void main(String[] args)
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Choose Shape :-");
        System.out.println("1 : Cylinder");
        System.out.println("2 : Rectangle");
        System.out.println("3 : Sphere");
        System.out.print("Choice : ");
        int c = sc.nextInt();
        while(true)
        {
            if(c == 1 || c == 2 || c == 3)
            {
                break;
            }
            System.out.print("Enter valid choice : ");
            c = sc.nextInt();
        }
        if(c == 1)
        {
            int x,y;
            System.out.println("Enter the dimensions of the Cylinder :-");
            System.out.print("Height : ");
            x = sc.nextInt();
            System.out.print("Radius : ");
            y = sc.nextInt();
            Cylinder C = new Cylinder(x,y);
            System.out.println("Height of the Cylinder is "+C.getHeight());
            System.out.println("Radius of the Cylinder is "+C.getRadius());
            C.SurfaceArea();
            C.Volume();
        }
        else if(c == 2)
        {
            int x, y;
            System.out.println("Enter the dimensions of the Rectangle :-");
            System.out.print("Length : ");
            x = sc.nextInt();
            System.out.print("Breadth : ");
            y = sc.nextInt();
            Rectangle R = new Rectangle(x, y);
            System.out.println("Length of the Rectangle is " + R.getLength());
            System.out.println("Breadth of the Rectangle is " + R.getBreadth());
            R.Area();
            R.Perimeter();
        }
        else
        {
            int x;
            System.out.println("Enter the dimension of the Sphere :-");
            System.out.print("Radius : ");
            x = sc.nextInt();
            Sphere S = new Sphere(x);
            System.out.println("Radius of the Sphere is " + S.getRadius());
            S.SurfaceArea();
            S.Volume();
        }
    }
}