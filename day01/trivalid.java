package day01;

import java.util.*;

public class trivalid {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Enter angle 1");
        int a = sc.nextInt();

        System.out.println("Enter angle 2");
        int b = sc.nextInt();
        System.out.println("Enter angle 3");
        int c = sc.nextInt();

        if ((a + b + c) == 180) {
            System.out.println("Valid Triangele");

        } else {

            System.out.println("INvalid Triangele");
        }
    }
}