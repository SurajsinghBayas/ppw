package day03;

import java.util.*;

public class strong {

    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a no.");
        int n = sc.nextInt();
        int i = n;
        int fact = 1;
        while (i >= 1) {
            fact = fact * i;
            i--;
        }

    }
}
