package day04;
import java.util.*;
 
public class sort{
    public static void main(String args[]){
Scanner sc = new Scanner(System.in);
System.out.println("Enter size of array");
int n= sc.nextInt();
arraysort ob =new arraysort();
ob.arrayinput(n, sc);
ob.sort();
    }
    }

    class arraysort{
        int a[];
        void arrayinput(int x,Scanner sc){
            a = new int[x];
            for (int i=0;i<x;i++){
                a[i]=sc.nextInt();
            }
        }
        void sort(){
            for (int i=0;i<a.length-1;i++){
                for (int j=i+1;j<a.length;j++){
                    if(a[i]>a[j]){
                        int temp=a[i];
                        a[i]=a[j];
                        a[j]=temp;
                    }
                }
            }
            for(int k=0;k<a.length;k++){
                System.out.println(a[k]);
            }
        }
    }