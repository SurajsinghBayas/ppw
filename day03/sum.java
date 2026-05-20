package day03;

import java.util.*;

public class sum {
    public static void main(String args[]) {
        int i = 1;
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number");
        int n = sc.nextInt();
        int sum = 0;
        while (i <= n) {
            sum = sum + i;
            i++;

        }
        System.out.println("Sum of first " + n + " Natural Numbers is: " + sum);

    }
}
