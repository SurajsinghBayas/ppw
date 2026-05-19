package day02;

import java.util.*;

public class money {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter amount in ruppes");
        int paisa = sc.nextInt();
        if (paisa <= 0) {
            System.out.println("Enter Valid amount");
        }

        int passo = paisa / 500;
        paisa = paisa - (500 * passo);
        System.out.println("500 notes :" + passo);
        int two = paisa / 200;
        paisa = paisa - (200 * two);
        System.out.println("200 notes :" + two);
        int soo = paisa / 100;
        paisa = paisa - (100 * soo);
        System.out.println("100 notes :" + soo);
        int fifty = paisa / 50;
        paisa = paisa - (50 * fifty);
        System.out.println("50 notes :" + fifty);
        int twenty = paisa / 20;
        paisa = paisa - (20 * twenty);
        System.out.println("20 notes :" + twenty);

        int daas = paisa / 10;
        paisa = paisa - (10 * daas);
        System.out.println("10 notes :" + daas);

System.out.println("remaing  :" + paisa );
    }
}