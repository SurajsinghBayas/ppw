package day02;

import java.util.*;

public class palindrome {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("enter a number");
        int num = sc.nextInt();
        int temp = num;
        int d;
        int rev = 0;
        while (num > 0) {
            d = num % 10;
            rev = (rev * 10) + d;
            d = d / 10;

        }
        if (rev == temp) {
            System.out.println("palindrome");
        } else {
            System.out.println("not palindrome");
        }
    }
}
