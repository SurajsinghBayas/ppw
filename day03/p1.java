package day03;

public class p1 {
    public static void main(String args[]) {
        System.out.println("1st pattern ");
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j);
            }
            System.out.println();
        }
        System.out.println();
        System.out.println("2nd pattern ");
        for (int i = 5; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j);
            }
            System.out.println();
        }
        System.out.println();
        System.out.println("3rd pattern ");
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        System.out.println();
        System.out.println("4th pattern ");
        for (int i = 5; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
        System.out.println();
        System.out.println("5th pattern ");
        for (char a = 'A'; a <= 'G'; a++) {
            for (char b = 'A'; b <= a; b++) {
                System.out.print(b);
            }
            System.out.println();
        }

        System.out.println();
        System.out.println("6th pattern ");
        for (char a = 'G'; a >= 'A'; a--) {
            for (char b = 'A'; b <= a; b++) {
                System.out.print(b);
            }
            System.out.println();
        }

        // Space Patterns
        System.out.println();
        System.out.println("Space patterns");
        System.out.println("7th pattern ");
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j < (5 - i) || j > (5 + i); j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= i; k++) {
                System.out.print("* ");
            }
            System.out.println("");
        }
        System.out.println();
        System.out.println("8th pattern ");
        for (int i = 1; i <= 5; i++) {
            for (int j = 1; j < (5 - i) || j > (5 + i); j++) {
                System.out.print(" ");
            }
            for (int k = 1; k <= i; k++) {
                System.out.print(k + " ");
            }
            System.out.println("");
        }
        System.out.println();
        System.out.println("9th pattern ");
        for (int i = 0; i < 5; i++) {
            if (i % 2 == 0) {

            }
        }

    }

}
