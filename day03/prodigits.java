package day03;

import java.util.*;

public class prodigits {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a no.");
        int n = sc.nextInt();
        int prod = 1;
        int d;
        while (n > 0) {
            d = n % 10;
            prod = prod * d;
            n = n / 10;

        }
        System.out.println("product of digits =" + prod);

    }
}
