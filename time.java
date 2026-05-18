public class time {
    public static void main(String args[]) {
        int hours = 2;
        int minutes = 30;
        int seconds = 45;
        int total_seconds = (hours * 3600) + (minutes * 60) + seconds;
        System.out.println("Total time in seconds: " + total_seconds);

        // seconds to hours, minutes, seconds
        int total_seconds2 = 9045;
        int hr = total_seconds2 / 3600;
        int rem_seconds = total_seconds2 % 3600;
        int min = rem_seconds / 60;
        int sec = rem_seconds % 60;
        System.out.println("Time in hours: " + hr + " hours, " + min
                + " minutes, " + sec + " seconds");

    }
}
