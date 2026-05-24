package day02;

import java.util.*;

public class bonus {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your experience");
        int exp = sc.nextInt();
        System.out.println("Enter your salary");
        int salary = sc.nextInt();
        if (exp > 5)
            System.out.println("Bonus = " + salary * 0.05);
        else
            System.out.println("No bonus");
    }
}
