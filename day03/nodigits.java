package day03;

import java.util.*;

public class nodigits {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a no.");
        int n = sc.nextInt();
        int count = 0;
        int d;
        while (n > 0) {
            d = n % 10;
            count++;
            n = n / 10;

        }
        System.out.println("Number of digits =" + count);

    }
}
