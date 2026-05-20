package day03;

import java.util.*;

public class palindrome {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a no.");
        int n = sc.nextInt();
        int temp = n;
        int rev = 0;
        int d;
        while (n > 0) {
            d = n % 10;
            rev = (rev * 10) + d;
            n = n / 10;

        }
        System.out.println("reverse of " + temp + " is " + rev);
        if (rev == temp) {
            System.out.println("palindrome");
        } else {
            System.out.println("not palindrome");
        }

    }
}
