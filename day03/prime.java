package day03;

import java.util.*;

public class prime {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a no.");
        int n = sc.nextInt();
        int count = 0;
        int d;
        for (int i = 2; i < n; i++) {
            if (n % i == 0) {
                count++;

            }

        }
        if (count > 0) {
            System.out.println("Not a prime no.");
        } else {
            System.out.println("Prime no.");
        }
    }
}
