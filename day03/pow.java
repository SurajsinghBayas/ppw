package day03;

import java.math.*;
import java.util.*;

public class pow {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number");
        int n = sc.nextInt();
        System.out.println("Enter power");
        int power = sc.nextInt();
        double result = Math.pow(n, power);
        System.out.println("Power of " + n + " is " + result);

        // without using Math.pow
        int result1 = 1;
        for (int i = 1; i <= power; i++) {
            result1 = result1 * n;
        }
        System.out.println("Power of " + n + " is " + result1);
    }
}