package day02;

import java.util.*;

public class pro {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter Cost Price");
        int cp = sc.nextInt();
        System.out.println("Enter Selling Price");
        int sp = sc.nextInt();
        if (sp > cp) {
            System.out.println("profit =" + (sp - cp));
        } else {
            System.out.println("loss =" + (cp - sp));
        }

    }
}
