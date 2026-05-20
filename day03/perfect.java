package day03;

import java.util.*;

public class perfect {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a no.");
        int n = sc.nextInt();
        int sum = 0;

        int i = 1;
        while (i < n) {
            if (n % i == 0) {
                sum = sum + i;

            }
            i++;
        }
        System.out.println("Sum of factors =" + sum);
        if (sum == n) {
            System.out.println("Perfect no.");
        } else {
            System.out.println("Not a perfect no.");
        }
    }
}
