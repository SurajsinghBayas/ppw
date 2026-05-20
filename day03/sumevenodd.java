package day03;

import java.util.*;

public class sumevenodd {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a no.");
        int n = sc.nextInt();
        int i = 1;
        int sumeven = 0;
        int sumodd = 0;
        while (i <= n) {
            if (i % 2 == 0) {
                sumeven = sumeven + i;
            } else {
                sumodd = sumodd + i;

            }
            i++;

        }

        System.out.println("Sum of even no.s up to " + n + " is =" + sumeven);
        System.out.println("Sum of odd no.s up to " + n + " is =" + sumodd);
    }
}
