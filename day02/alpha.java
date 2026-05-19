package day02;

import java.util.*;

public class alpha {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        // Range (cycle)
        int z = 10;
        System.out.println("value is =" + (z++));
        System.out.println("value is =" + (z++));
        byte x = 127;
        x++;
        System.out.println(x);
        x++;
        System.out.println(x);

        char c = sc.next().charAt(0);
        int val = (int) c;

        System.out.println(
                ((val >= 65 && val <= 90) || (val >= 97 && val <= 122))
                        ? "its a alphabet"
                        : "its not a alphabet");

        if ((val >= 65 && val <= 90) || (val >= 97 && val <= 122)) {
            System.out.println("its a alphabet");

        } else {
            System.out.println("its not  a alphabet");
        }

    }
}
