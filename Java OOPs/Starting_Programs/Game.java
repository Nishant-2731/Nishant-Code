import java.util.Random;
import java.util.Scanner;
class Random_Guess
{
    int random, guess, noOfGuesses = 0, c = 0;
    Random_Guess() 
    {
        Random rd = new Random();
        random = rd.nextInt(101);
    }
    void takeUserInput() 
    {
        Scanner sc = new Scanner(System.in);
        System.out.print("Guess : ");
        guess = sc.nextInt();
    }
    public int getNoOfGuesses()
    {
        return noOfGuesses;
    }
    public void setNoOfGuesses(int noOfGuesses)
    {
        this.noOfGuesses = noOfGuesses;
    }
    void isCorrectNumber() 
    {
        c++;
        if (random == guess) 
        {
            System.out.println("Your Guess is Correct");
            c = 1;
        } 
        else if (random > guess) 
        {
            System.out.println("Your guess is lesser than expected number");
        } 
        else 
        {
            System.out.println("Your guess is greater than expected number");
        }
    }
    void Start()
    {
        Random_Guess gs = new Random_Guess();
        while (true)
        {
            gs.setNoOfGuesses(++noOfGuesses);
            gs.takeUserInput();
            gs.isCorrectNumber();
            if (gs.random == gs.guess)
            {
                break;
            }
        }
        System.out.println("Number of guesses is "+gs.getNoOfGuesses());
    }
}

class RPS 
{
    void Start() 
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter 0 for Rock");
        System.out.println("Enter 1 for Paper");
        System.out.println("Enter 2 for Scissor");
        System.out.println("Enter your choice : ");
        int a = sc.nextInt();
        Random random = new Random();
        int b = random.nextInt(3);
        if (a == b) {
            System.out.println("Draw");
        } else if (a == 0 && b == 2 || a == 1 && b == 0 || a == 2 && b == 1) {
            System.out.println("You Win");
        } else {
            System.out.println("You Lose");
        }
        if (a == 0) {
            System.out.println("Your Choice : Rock");
        } else if (a == 1) {
            System.out.println("Your choice : Paper");
        } else {
            System.out.println("Your choice : Scissor");
        }
        if (b == 0) {
            System.out.println("Computer Choice : Rock");
        } else if (b == 1) {
            System.out.println("Computer choice : Paper");
        } else {
            System.out.println("Computer choice : Scissor");
        }
    }
}

public class Game 
{
    public static void main(String[] var0)
    {
        Scanner sc = new Scanner(System.in);
        System.out.println("Choose Game:-");
        System.out.println("1 : Random Guess");
        System.out.println("2 : Rock Paper Scissors");
        System.out.print("Choice : ");
        int x = sc.nextInt();
        while (x != 1 && x != 2)
        {
            System.out.print("Enter a valid choice : ");
            x = sc.nextInt();
        }

        if (x == 1) 
        {
            Random_Guess Game1 = new Random_Guess();
            Game1.Start();
        } 
        else if (x == 2)
        {
            RPS Game2 = new RPS();
            Game2.Start();
        }

    }
}

