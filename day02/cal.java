package day02;

import java.util.*;

public class cal {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter value of x");
        int x = sc.nextInt();
        System.out.println("Enter value of y");
        int y = sc.nextInt();
        System.out.println("Enter the operater (+,-,*,/,%)");
        char op = sc.next().charAt(0);
        switch (op) {
            case '+':
                System.out.println("Sum = " + (x + y));
                break;
            case '-':
                System.out.println("Difference = " + (x - y));
                break;
            case '*':
                System.out.println("Product = " + (x * y));
                break;
            case '/':
                System.out.println("Division = " + (x / y));
                break;
            case '%':
                System.out.println("Remainder = " + (x % y));
                break;
            default:
                System.out.println("Invalid operator");
        }
    }
}
