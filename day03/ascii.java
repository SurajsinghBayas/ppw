package day03;

public class ascii {
    public static void main(String[] args) {
        for (char i = 'a'; i <= 'z'; i++) {
            System.out.println("ASCII value of " + i + " = " + (int) i);
        }
        for (char i = 'A'; i <= 'Z'; i++) {
            System.out.println("ASCII value of " + i + " = " + (int) i);
        }
        // all asci charcters
        for (int i = 0; i <= 255; i++) {
            System.out.println("ASCII value of " + (char) i + " = " + i);
        }
    }
}
