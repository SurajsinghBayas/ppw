package day01;

import java.util.*;

public class casealpha {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a character to find its ascii value and toggle case: ");
        char c = sc.next().charAt(0);
        int val = (int) c;
        System.out.println("ascii value" + val);
        if (val >= 65 && val <= 90) {
            // upper to lower
            char lower = (char) (val + 32);
            System.out.println("lowercase of " + c + " is " + lower);
        } else if (val >= 97 && val <= 122) {
            // lower to upper
            char upper = (char) (val - 32);
            System.out.println("uppercase of " + c + " is " + upper);
        } else {
            System.out.println("not an alphabet");

        }
    }
}
