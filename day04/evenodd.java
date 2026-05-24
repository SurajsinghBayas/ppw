package day04;
import java.util.*;
class evenodd{
    public static void main(String args[]){
    Scanner sc = new Scanner(System.in);
    int n;
    System.out.println("Enter the Size of array:");
    n=sc.nextInt();
    arrayevenodd ar = new arrayevenodd();
    ar.inputarray(n, sc);
    int ceven = ar.counteven(n);
    int codd = ar.countodd(n);
    System.out.println("no. of odd integers in array :" + codd);
    System.out.println("no. of even integers in array :" + ceven);
    }
}

class arrayevenodd{
    int a [];
    void inputarray(int y, Scanner sc){
        a = new int[y];
        for (int i=0; i<y;i++){
            a[i]=sc.nextInt();

        }
        

    }
    int counteven(int y){
        int ceven = 0;
        for(int i=0; i<y;i++){
            if(a[i]%2==0){
                ceven++;
            }
        }
        return ceven;
    }
    int countodd(int y){
        int codd=0;
        for(int i=0; i<y;i++){
            if(a[i]%2!=0){
                codd++;
            }
        }
        return codd;

    }

}