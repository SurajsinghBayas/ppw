package day04;
import java.util.*;
public class reverse{
public static void main (String args[]){
Scanner sc = new Scanner (System.in);
System.out.println("Enter the size of array");
int n = sc.nextInt();
ArrayReverse ar= new ArrayReverse();
ar.inputArray(n,sc);
ar.ArrayReverse(n);
}

}
class ArrayReverse{
    int a[];
    void inputArray(int x, Scanner sc)
    {
        a= new int[x];
        for (int i=0; i<x;i++){
            a[i]=sc.nextInt();
        }

    }
    void ArrayReverse(int x ){
        for (int i = x-1; i>=0;i--){
            System.out.println(a[i]);
        }

    }
}