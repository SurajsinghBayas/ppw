package day02;

import java.util.*;

public class reverse {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        int digit;
        int rev = 0;
        while (num > 0) {
            digit = num % 10;
            rev = (rev * 10) + digit;
            num = num / 10;
        }
        System.out.println(rev);
        sc.close();
    }
}
