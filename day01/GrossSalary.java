package day01;

import java.util.Scanner;

class GrossSalary {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);

        float basic, hra, da, gross;

        System.out.print("Enter basic salary: ");
        basic = sc.nextFloat();

        if (basic <= 10000) {
            hra = basic * 0.20f;
            da = basic * 0.80f;
        } else if (basic <= 20000) {
            hra = basic * 0.25f;
            da = basic * 0.90f;
        } else {
            hra = basic * 0.30f;
            da = basic * 0.95f;
        }

        gross = basic + hra + da;

        System.out.println("Gross Salary = " + gross);
    }
}