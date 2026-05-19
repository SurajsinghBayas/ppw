package day01;

import java.util.Scanner;

public class simple {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter Principal amount: ");
        double principal = scanner.nextDouble();

        System.out.print("Enter Annual Rate of Interest (%): ");
        double rate = scanner.nextDouble();

        System.out.print("Enter Time (in years): ");
        double time = scanner.nextDouble();

        double simpleInterest = (principal * rate * time) / 100;

        System.out.println("\n--- Calculation Results ---");
        System.out.println("Principal: " + principal);
        System.out.println("Interest Rate: " + rate + "%");
        System.out.println("Time: " + time + " years");
        System.out.println("Simple Interest: " + simpleInterest);
        System.out.println("Total Amount: " + (principal + simpleInterest));

        // Close the scanner
        scanner.close();
    }
}
