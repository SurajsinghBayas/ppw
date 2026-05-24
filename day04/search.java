package day04;
import java.util.*;
class search{
    public static void main(String args[]){
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int key = sc.nextInt();
        searcharray ob = new searcharray();
        ob.inputarray(n, sc);
        boolean found = ob.search(key);
        if(found){
            System.out.println("Element found");
        }
        else{
            System.out.println("Element not found");
        }
    }
    }
    class searcharray{
        int arr[];
            void inputarray(int x, Scanner sc){
            arr=new int[x];
            for(int i=0; i<x;i++){
                arr[i]=sc.nextInt();
            }

        }
        boolean search(int key){
            for(int i=0; i<arr.length; i++){
                if(arr[i]==key){
                    return true;
                }
            }
            return false;      
        }
    }