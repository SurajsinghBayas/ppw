package day03;

import java.util.*;

public class duck {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a no.");
        String n = sc.next();
        for (int i = 1; i < n.length(); i++) {
            if (n.charAt(i) == 0) {
                System.out.println("Duck no.");
                return;
            }
        }
        System.out.println("Not a Duck no.");

        // using do-while
        System.out.println("Enter a no.");
        String x = sc.next();

    }

}
