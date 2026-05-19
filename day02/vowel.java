package day02;

import java.util.*;

public class vowel {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enetr a Charcter : ");
        char s = sc.next().charAt(0);
        if (s == 'a' || s == 'e' || s == 'i' || s == 'o' || s == 'u' || s == 'A' || s == 'E' || s == 'I' || s == 'O'
                || s == 'U') {
            System.out.println("Vowel");
        } else {
            System.out.println("Consonant");
        }
    }
}
