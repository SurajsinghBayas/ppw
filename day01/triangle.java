package day01;

import java.util.*;

public class triangle {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter angle 1 of Traingle ");
        float a1 = sc.nextFloat();
        System.out.println("Enter angle 2 of Traingle ");
        float a2 = sc.nextFloat();
        float a3 = 180 - (a1 + a2);
        System.out.println("The third angle of Traingle is " + a3);
    }
}
