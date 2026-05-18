import java.util.*;

public class data {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your name");
        String name = sc.nextLine();
        System.out.println("Enter your age");
        int age = sc.nextInt();
        System.out.println("Enter your marks");
        float marks = sc.nextFloat();
        System.out.println("did you pass the exam? (true/false)");
        boolean pass = sc.nextBoolean();
        // Displaying the input values
        System.out.println("Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Marks: " + marks);
        System.out.println("Passed: " + pass);
        System.out.println("Hello " + name);
    }
}
