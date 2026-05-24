package ppw;

import java.util.Scanner;

/**
 * A comprehensive compilation of popular coding patterns:
 * 1. Star Patterns (Triangle, Pyramid, Diamond, Hourglass, Hollow Square)
 * 2. Number Patterns (Floyd's, Pascal's, Binary, Number Pyramids)
 * 3. Letter/Alphabet Patterns (Character Triangles, Pyramids, Rotations)
 */
public class Patterns {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        int n = 5; // Default size for patterns

        System.out.println("=================================================");
        System.out.println("   🌟 JAVA PATTERN GENERATOR (STAR, NO, CHAR) 🌟   ");
        System.out.println("=================================================");
        System.out.println("1. Star Patterns");
        System.out.println("2. Number Patterns");
        System.out.println("3. Letter Patterns");
        System.out.println("4. Print All Patterns (Demonstration Mode)");
        System.out.println("5. Exit");
        System.out.print("Choose a category (1-5): ");

        int choice = 3; // default choice to avoid blocking, but let's make it interactive or just demonstrative
        if (scanner.hasNextInt()) {
            choice = scanner.nextInt();
        } else {
            System.out.println("\nNo input detected. Running Demonstration Mode (Prints All Patterns)!\n");
            choice = 4;
        }

        switch (choice) {
            case 1:
                showStarMenu(scanner, n);
                break;
            case 2:
                showNumberMenu(scanner, n);
                break;
            case 3:
                showLetterMenu(scanner, n);
                break;
            case 4:
                runAllDemonstrations(n);
                break;
            default:
                System.out.println("Exiting. Keep coding!");
        }
        scanner.close();
    }

    private static void showStarMenu(Scanner scanner, int defaultN) {
        System.out.println("\n--- ⭐ Star Patterns ---");
        System.out.println("1. Right Triangle");
        System.out.println("2. Inverted Right Triangle");
        System.out.println("3. Full Pyramid");
        System.out.println("4. Inverted Full Pyramid");
        System.out.println("5. Diamond");
        System.out.println("6. Hollow Square");
        System.out.println("7. Hourglass");
        System.out.print("Select pattern (1-7): ");
        int choice = scanner.hasNextInt() ? scanner.nextInt() : 1;
        System.out.print("Enter size (N): ");
        int n = scanner.hasNextInt() ? scanner.nextInt() : defaultN;

        System.out.println("\nResult:");
        switch (choice) {
            case 1: rightTriangleStar(n); break;
            case 2: invertedRightTriangleStar(n); break;
            case 3: fullPyramidStar(n); break;
            case 4: invertedFullPyramidStar(n); break;
            case 5: diamondStar(n); break;
            case 6: hollowSquareStar(n); break;
            case 7: hourglassStar(n); break;
            default: System.out.println("Invalid selection.");
        }
    }

    private static void showNumberMenu(Scanner scanner, int defaultN) {
        System.out.println("\n--- 🔢 Number Patterns ---");
        System.out.println("1. Simple Number Triangle");
        System.out.println("2. Floyd's Triangle");
        System.out.println("3. Pascal's Triangle");
        System.out.println("4. Binary Triangle (0/1)");
        System.out.println("5. Number Pyramid (Palindrome)");
        System.out.print("Select pattern (1-5): ");
        int choice = scanner.hasNextInt() ? scanner.nextInt() : 1;
        System.out.print("Enter size (N): ");
        int n = scanner.hasNextInt() ? scanner.nextInt() : defaultN;

        System.out.println("\nResult:");
        switch (choice) {
            case 1: simpleNumberTriangle(n); break;
            case 2: floydsTriangle(n); break;
            case 3: pascalsTriangle(n); break;
            case 4: binaryTriangle(n); break;
            case 5: numberPyramidPalindrome(n); break;
            default: System.out.println("Invalid selection.");
        }
    }

    private static void showLetterMenu(Scanner scanner, int defaultN) {
        System.out.println("\n--- 🔠 Letter Patterns ---");
        System.out.println("1. Incrementing Letter Triangle (A, AB, ABC...)");
        System.out.println("2. Repeating Row Letter Triangle (A, BB, CCC...)");
        System.out.println("3. Letter Pyramid");
        System.out.println("4. Continuous Alphabet Triangle (A, BC, DEF...)");
        System.out.print("Select pattern (1-4): ");
        int choice = scanner.hasNextInt() ? scanner.nextInt() : 1;
        System.out.print("Enter size (N): ");
        int n = scanner.hasNextInt() ? scanner.nextInt() : defaultN;

        System.out.println("\nResult:");
        switch (choice) {
            case 1: incrementingLetterTriangle(n); break;
            case 2: repeatingRowLetterTriangle(n); break;
            case 3: letterPyramid(n); break;
            case 4: continuousAlphabetTriangle(n); break;
            default: System.out.println("Invalid selection.");
        }
    }

    private static void runAllDemonstrations(int n) {
        System.out.println("\n=================================================");
        System.out.println("       🌟 DEMONSTRATING ALL PATTERNS (N=" + n + ")       ");
        System.out.println("=================================================");

        System.out.println("\n[1] STAR PATTERNS\n");
        System.out.println("1.1 Right Triangle Star:");
        rightTriangleStar(n);

        System.out.println("\n1.2 Inverted Right Triangle Star:");
        invertedRightTriangleStar(n);

        System.out.println("\n1.3 Full Pyramid Star:");
        fullPyramidStar(n);

        System.out.println("\n1.4 Inverted Full Pyramid Star:");
        invertedFullPyramidStar(n);

        System.out.println("\n1.5 Diamond Star:");
        diamondStar(n);

        System.out.println("\n1.6 Hollow Square Star:");
        hollowSquareStar(n);

        System.out.println("\n1.7 Hourglass Star:");
        hourglassStar(n);

        System.out.println("\n=================================================");
        System.out.println("\n[2] NUMBER PATTERNS\n");

        System.out.println("2.1 Simple Number Triangle:");
        simpleNumberTriangle(n);

        System.out.println("\n2.2 Floyd's Triangle:");
        floydsTriangle(n);

        System.out.println("\n2.3 Pascal's Triangle:");
        pascalsTriangle(n);

        System.out.println("\n2.4 Binary (0-1) Triangle:");
        binaryTriangle(n);

        System.out.println("\n2.5 Number Pyramid (Palindrome):");
        numberPyramidPalindrome(n);

        System.out.println("\n=================================================");
        System.out.println("\n[3] LETTER PATTERNS\n");

        System.out.println("3.1 Incrementing Letter Triangle:");
        incrementingLetterTriangle(n);

        System.out.println("\n3.2 Repeating Row Letter Triangle:");
        repeatingRowLetterTriangle(n);

        System.out.println("\n3.3 Letter Pyramid:");
        letterPyramid(n);

        System.out.println("\n3.4 Continuous Alphabet Triangle:");
        continuousAlphabetTriangle(n);
        System.out.println("\n=================================================");
    }

    // ==========================================
    // STAR PATTERNS IMPLEMENTATIONS
    // ==========================================

    public static void rightTriangleStar(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    public static void invertedRightTriangleStar(int n) {
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= i; j++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    public static void fullPyramidStar(int n) {
        for (int i = 1; i <= n; i++) {
            // Spaces
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            // Stars
            for (int k = 1; k <= i; k++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    public static void invertedFullPyramidStar(int n) {
        for (int i = n; i >= 1; i--) {
            // Spaces
            for (int j = 1; j <= n - i; j++) {
                System.out.print(" ");
            }
            // Stars
            for (int k = 1; k <= i; k++) {
                System.out.print("* ");
            }
            System.out.println();
        }
    }

    public static void diamondStar(int n) {
        // Upper Half
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) System.out.print(" ");
            for (int k = 1; k <= i; k++) System.out.print("* ");
            System.out.println();
        }
        // Lower Half
        for (int i = n - 1; i >= 1; i--) {
            for (int j = 1; j <= n - i; j++) System.out.print(" ");
            for (int k = 1; k <= i; k++) System.out.print("* ");
            System.out.println();
        }
    }

    public static void hollowSquareStar(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= n; j++) {
                if (i == 1 || i == n || j == 1 || j == n) {
                    System.out.print("* ");
                } else {
                    System.out.print("  ");
                }
            }
            System.out.println();
        }
    }

    public static void hourglassStar(int n) {
        // Upper Half (including middle single star if N is odd/even, here we just invert)
        for (int i = n; i >= 1; i--) {
            for (int j = 1; j <= n - i; j++) System.out.print(" ");
            for (int k = 1; k <= i; k++) System.out.print("* ");
            System.out.println();
        }
        // Lower Half
        for (int i = 2; i <= n; i++) {
            for (int j = 1; j <= n - i; j++) System.out.print(" ");
            for (int k = 1; k <= i; k++) System.out.print("* ");
            System.out.println();
        }
    }

    // ==========================================
    // NUMBER PATTERNS IMPLEMENTATIONS
    // ==========================================

    public static void simpleNumberTriangle(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(j + " ");
            }
            System.out.println();
        }
    }

    public static void floydsTriangle(int n) {
        int count = 1;
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(count + " ");
                count++;
            }
            System.out.println();
        }
    }

    public static void pascalsTriangle(int n) {
        for (int i = 0; i < n; i++) {
            // Spaces for alignment
            for (int j = 0; j < n - i; j++) {
                System.out.print(" ");
            }
            int number = 1;
            for (int k = 0; k <= i; k++) {
                System.out.print(number + " ");
                number = number * (i - k) / (k + 1);
            }
            System.out.println();
        }
    }

    public static void binaryTriangle(int n) {
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                // If sum of coordinates is even, print 1, else 0 (or alternative start)
                if ((i + j) % 2 == 0) {
                    System.out.print("1 ");
                } else {
                    System.out.print("0 ");
                }
            }
            System.out.println();
        }
    }

    public static void numberPyramidPalindrome(int n) {
        for (int i = 1; i <= n; i++) {
            // Spaces
            for (int j = 1; j <= n - i; j++) {
                System.out.print("  ");
            }
            // Descending numbers
            for (int k = i; k >= 1; k--) {
                System.out.print(k + " ");
            }
            // Ascending numbers
            for (int l = 2; l <= i; l++) {
                System.out.print(l + " ");
            }
            System.out.println();
        }
    }

    // ==========================================
    // LETTER PATTERNS IMPLEMENTATIONS
    // ==========================================

    public static void incrementingLetterTriangle(int n) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print((char) ('A' + j) + " ");
            }
            System.out.println();
        }
    }

    public static void repeatingRowLetterTriangle(int n) {
        for (int i = 0; i < n; i++) {
            for (int j = 0; j <= i; j++) {
                System.out.print((char) ('A' + i) + " ");
            }
            System.out.println();
        }
    }

    public static void letterPyramid(int n) {
        for (int i = 0; i < n; i++) {
            // Spaces
            for (int j = 0; j < n - i - 1; j++) {
                System.out.print(" ");
            }
            // Letters ascending then descending
            char ch = 'A';
            int breakpoint = (2 * i + 1) / 2;
            for (int k = 0; k < 2 * i + 1; k++) {
                System.out.print(ch);
                if (k < breakpoint) {
                    ch++;
                } else {
                    ch--;
                }
            }
            System.out.println();
        }
    }

    public static void continuousAlphabetTriangle(int n) {
        char ch = 'A';
        for (int i = 1; i <= n; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.print(ch + " ");
                ch++;
                if (ch > 'Z') {
                    ch = 'A'; // Reset back to A if we run out of letters
                }
            }
            System.out.println();
        }
    }
}
