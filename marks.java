import java.util.*;

public class marks {
    public static void main(String args[]) {
        Scanner sc = new Scanner(System.in);
        System.out.println("Enter marks in 1st subject");
        int m1 = sc.nextInt();
        System.out.println("Enter marks in 2nd subject");
        int m2 = sc.nextInt();
        System.out.println("Enter marks in 3rd subject");
        int m3 = sc.nextInt();
        System.out.println("Enter marks in 3rd subject");
        int m4 = sc.nextInt();
        System.out.println("Enter marks in 3rd subject");
        int m5 = sc.nextInt();
        int total_marks = 500;
        System.out.println("Total marks: " + total_marks);

        int obtained_marks = m1 + m2 + m3 + m4 + m5;

        System.out.println("Obtained marks: " + obtained_marks);

        float percentage = (obtained_marks / 500.0f) * 100;
        System.out.println("Percentage: " + percentage + "%");
        System.out.println("Total marks: " + total_marks);
        System.out.println("Obtained marks: " + obtained_marks);
        System.out.println("Percentage: " + percentage + "%");
    }
}
