package day02;

import java.util.*;

public class min {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter three number :");
        int a = sc.nextInt();
        int b = sc.nextInt();
        int c = sc.nextInt();

        if (a < b && a < c) {
            System.out.println("min =" + a);
        }
        if (b < a && b < c) {
            System.out.println("min =" + b);
        } else {
            System.out.println("min =" + c);
        }
    }

}
