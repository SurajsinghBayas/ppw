package day04;
import java.util.Scanner;
public class avg{
public static void main(String args []){
    Scanner sc = new Scanner(System.in);
    System.out.println("enter the size of array");  
    int n = sc.nextInt();
    arrayAverage ob = new arrayAverage();
    ob.inputarray(n, sc);
    double a =ob.findavg(n);
    System.out.println("Average of elements of array is :"+a);

}

}

class arrayAverage{
    int a[];
    
    void inputarray(int x, Scanner sc){
        System.out.println("Enter the elements of the array");
        a = new int[x];
        for(int i=0; i<x;i++){
            a[i] = sc.nextInt();
        }
    }
    double findavg(int x){
        int sum=0;
        double avg;
        for (int i=0; i<x; i++){
            sum = sum + a[i];
        }
        avg = (double) sum / x;
        return avg;
    }
}