package day02;

import java.util.*;

public class grade {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter your marks");
        int marks = sc.nextInt();
        System.out.println((marks >= 90) ? "grade A"
                : (marks >= 80) ? "grade B"
                        : (marks >= 70) ? "grade c"
                                : (marks >= 60) ? "grade d" : "grade f");
    }
}
