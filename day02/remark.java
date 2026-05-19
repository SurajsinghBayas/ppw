package day02;

import java.util.*;

public class remark {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your your grade(A,B,C,D,F) : ");
        char c = sc.next().charAt(0);

        switch (c) {
            case 'A':
                System.out.println("Excellent");
                break;
            case 'B':
                System.out.println("Good");
                break;
            case 'C':
                System.out.println("Average");
                break;
            case 'D':
                System.out.println("POOR");
                break;
            case 'F':
                System.out.println("Fail");
                break;
            default:
                System.out.println("Invalid input");
        }
    }
}
