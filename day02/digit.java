package day02;

public class digit {
    public static void main(String[] args) {
        int num = 102;
        // last and first digit without using any loop
        int first = num % 10;
        System.out.println("first = " + first);
        int last = num;
        while (last >= 10) {
            last = last / 10;
        }
        System.out.println("last = " + last);
        System.out.println("sum = " + (first + last));
    }
}
