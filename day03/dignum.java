package day03;

import java.util.*;

public class dignum {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter a no.");
        int n = sc.nextInt();
        int temp = n;
        int first = n % 10;
        System.out.println("first digit = " + first);
        int d;

        int count = 0;
        while (n > 0) {
            d = n % 10;
            count++;
            n = n / 10;
        }
        /*
         * 1. START
         * 2. Read n-digit number N
         * 3. last = N % 10
         * 4. first = N / 100
         * 5. sum = first + last
         * 6. Print sum
         * 7. END
         */
        int last = temp / (int) Math.pow(10, count - 1);
        System.out.println("Last Digit = " + last);
        System.out.println("number of digits = " + count);

        // Swap 1st and last digit
        int middle = (temp % (int) Math.pow(10, count - 1)) / 10 * 10;
        System.out.println("swapped number = "
                + (last * (int) Math.pow(10, count - 1) + (temp % (int) Math.pow(10, count - 1)) / 10 * 10 + first));
        // GIVE EXAMPLE 345
        // last = 345 % 10 = 5
        // first = 345 / (int) Math.pow(10, 3 - 1) = 345 / 100 = 3
        // middle = (345 % (int) Math.pow(10, 3 - 1)) / 10 * 10 = (345 % 100) / 10 * 10
        // = 45 / 10 * 10 = 4 * 10 = 40
        // swapped number = 5 * (int) Math.pow(10, 3 - 1) + 40 + 3 = 5 * 100 + 40 + 3 =
        // 500 + 40 + 3 = 543
        // swapped number = 543

    }
}
