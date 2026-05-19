package day01;

import java.util.Scanner;

public class neon {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a number to check if it is a neon number: ");
        int n = sc.nextInt();
        int sum = 0;
        int dig = 0;
        int sq = n * n;
        int temp = sq;
        while (sq > 0) {
            dig = sq % 10;
            sum = sum + dig;
            sq = sq / 10;

        }
        System.out.println(sum);

        System.out.println(temp);
        if (sum == n) {
            System.out.println("the no. is neon");
        } else {
            System.out.println("the no. is not neon");
        }

    }
}
