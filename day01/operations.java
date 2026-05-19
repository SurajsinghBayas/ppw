package day01;

import java.util.*;
import java.lang.Math;

public class operations {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter the first number");
        int a = sc.nextInt();
        System.out.println("Enter the second number");
        int b = sc.nextInt();
        System.out.println("The sum is " + (a + b));
        System.out.println("The difference is " + (a - b));
        System.out.println("The product is " + (a * b));
        System.out.println("The quotient is " + (a / b));
        System.out.println("The remainder is " + (a % b));
        System.out.println("The average is " + ((a + b) / 2));
        System.out.println("The maximum is " + Math.max(a, b));
        System.out.println("The mininmum is " + Math.min(a, b));
        System.out.println("The powe is " + Math.pow(a, b));
        System.out.println("The square root of a is " + Math.sqrt(a));
        System.out.println("The square root of b is " + Math.sqrt(b));
        System.out.println("The absolute value of a is " + Math.abs(a));
    }
}
