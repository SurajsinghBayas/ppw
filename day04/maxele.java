package day04;

import java.util.*;

public class maxele {

    static Scanner sc = new Scanner(System.in);

    public static void main(String args[]) {
        int n = 5;
        int a[] = new int[n];
        int max;
        int min;
        inputArray(n, a);
        max = max(a, n);
        min = min(a, n);
        System.out.println("Maximum element in array is: " + max);
        System.out.println("Minimum element in array is: " + min);

    }


    public static void inputArray(int n, int a[]) {
        System.out.println("Enter the elements of the array");
        for (int i = 0; i < n; i++) {
            a[i] = sc.nextInt();
        }
    }
    
    public static int max(int a[], int n) {
        int max = a[0];
        for (int i = 1; i < n; i++) {
            if (a[i] > max) {
                max = a[i];
            }
        }
        return max;
    }

    public static int min(int a[], int n) {
        int min = a[0];
        for (int i = 1; i < n; i++) {
            if (a[i] < min) {
                min = a[i];
            }
        }
        return min;
    }

}