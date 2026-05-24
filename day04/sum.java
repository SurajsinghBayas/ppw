package day04;

import java.util.*;

public class sum{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int n=6;
        int a [] = new int[n];
        int sum =0;
        System.out.println("Enter elements of array :");
             for(int i=0; i<n;i++){
                a[i]=sc.nextInt();
             }

             for(int i=0; i<n;i++){
                sum+=a[i];
             }   
             System.out.println("Sum of elements of array is :"+sum);
    }
}