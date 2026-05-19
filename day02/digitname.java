package day02;

import java.util.*;

//(1,2,3,4,5) ---> (one , two , three , four , five)
public class digitname {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int num = sc.nextInt();
        switch (num) {
            case 1:
                System.out.println("one");
                break;
            case 2:
                System.out.println("two");
                break;
            case 3:
                System.out.println("three");
                break;
            case 4:
                System.out.println("four");
                break;
            case 5:
                System.out.println("five");
                break;
            default:
                System.out.println("Invalid input");
        }
    }
}
