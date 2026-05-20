package day03;

import java.util.*;

public class armstrong {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a no.");
        int n = sc.nextInt();
        int temp = n;
        int count = 0;
        
        // Count digits
        while (temp > 0) {
            count++;
            temp = temp / 10;
        }
        
        temp = n;
        int sum = 0;
        while (temp > 0) {
            int d = temp % 10;
            sum += Math.pow(d, count);
            temp = temp / 10;
        }
        
        if (sum == n) {
            System.out.println("Armstrong no.");
        } else {
            System.out.println("Not an Armstrong no.");
        }
    }
}
