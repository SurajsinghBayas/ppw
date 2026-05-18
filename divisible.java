import java.util.*;

public class divisible {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a no. to check divibility by ");
        int n = sc.nextInt();
        if (n % 5 == 0 && n % 11 == 0) {
            System.out.println("the entered no. is divisble by 5 & 11");

        } else {
            System.out.println("the entered no. is not divisble by 5 & 11");
        }

    }
}
