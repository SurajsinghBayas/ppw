package day03;

import java.util.*;

public class natural {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        System.out.println("First " + n + " natural numbers are:");
        int i = 1;
        while (i <= n) {
            System.out.println(i);
            i++;
        }
        // Question 2
        System.out.println("Reverse Order :");
        int j = n;
        while (j >= 1) {
            System.out.println(j);
            j--;
        }
    }
}
