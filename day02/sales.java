package day02;

import java.util.*;

public class sales {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your sales amount");
        int amount = sc.nextInt();
        if (amount > 10000) {
            System.out.println("your bonus is : " + amount * 0.1);

        } else if (amount > 5000) {
            System.out.println("your bonus is : " + amount * 0.05);
        } else {
            System.out.println("Your bonus is :" + amount * 0.02);
        }
        sc.close();

    }
}
