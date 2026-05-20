package day03;

import java.util.*;

public class sumdigits {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a no.");
        int n = sc.nextInt();
        int sum = 0;
        int d;
        while (n > 0) {
            d = n % 10;
            sum += d;
            n = n / 10;

        }
        System.out.println("Sum of digits =" + sum);

    }
}
