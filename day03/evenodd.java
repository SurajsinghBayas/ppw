package day03;

public class evenodd {
    public static void main(String args[]) {
        int i = 1;
        while (i <= 100) {
            if (i % 2 == 0) {
                System.out.println("Even : " + i);
            }
            // question 5
            else {
                System.out.println("Odd : " + i);
            }
            i++;
        }
    }
}
