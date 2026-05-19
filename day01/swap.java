package day01;

public class swap {
    public static void main(String args[]) {
        int a = 10;
        int b = 20;
        int temp;

        System.out.println("Before swapping: a = " + a + ", b = " + b);
        a=a+b;
        b=a-b;
        a=a-b;
        System.out.println("After swapping: a = " + a + ", b = " + b);

    }
}
