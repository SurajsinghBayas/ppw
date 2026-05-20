mermaid.initialize({
    startOnLoad: false,
    theme: 'base',
    themeVariables: {
        fontFamily: 'Kalam, cursive',
        primaryColor: '#fcfcfc',
        primaryTextColor: '#222',
        primaryBorderColor: '#e67e22',
        lineColor: '#2980b9',
        secondaryColor: '#f1c40f',
        tertiaryColor: '#e74c3c'
    },
    flowchart: {
        curve: 'basis'
    }
});

const day1Problems = [
    { 
        q: "Q1", file: "day01/print.java", desc: "Display message 'This is first java program'",
        concept: "The core concept is utilizing standard output streams to send text data to the console. It's the 'Hello World' of Java.",
        pro: "System.out is a PrintStream object. println() adds a newline byte. Because it syncs with the OS console, heavy standard I/O in production is actually a massive performance bottleneck.",
        pseudo: `1. START
2. Create public class and main method
3. Use System.out.println() to print message
4. END`,
        flow: "flowchart LR\n A([Start]) --> B[/System.out.println/] --> C([End])"
    },
    { 
        q: "Q2", file: "day01/data.java", desc: "Input basic data types and print outputs",
        concept: "Variables act as containers with strict sizes (types) defining what kind of data they hold (numbers, text, true/false).",
        pro: "Primitives sit directly on the Stack Memory. The Scanner class translates raw byte streams (System.in) into parsed primitive types. Beware of `Scanner.nextLine()` skipping after `nextInt()` due to trailing newlines.",
        pseudo: `1. START
2. Import java.util.Scanner
3. Initialize variables for int, float, boolean, char
4. Prompt user and read inputs using Scanner methods
5. Print inputs to verify
6. END`,
        flow: "flowchart TD\n A[/Input via Scanner/] --> B{Identify Type}\n B --> C[int / float / char / bool]\n C --> D[/Print Values/]"
    },
    { 
        q: "Q3", file: "day01/operations.java", desc: "Enter two numbers and perform arithmetic operations",
        concept: "Applying standard mathematical operators to numerical data, just like a pocket calculator.",
        pro: "Integer division (e.g. 5 / 2) truncates decimals instantly (results in 2). Floating point math suffers from IEEE-754 precision issues.",
        pseudo: `1. START
2. Read num1 and num2
3. sum = num1 + num2
4. diff = num1 - num2
5. prod = num1 * num2
6. Print sum, diff, prod
7. END`,
        flow: "flowchart LR\n A[/Num A, Num B/] --> B[+ , - , * , / , %]\n B --> C[/Output Results/]"
    },
    { 
        q: "Q4", file: "day01/triangle.java", desc: "Find the third angle of a triangle given two angles",
        concept: "Using geometric principles in code: The internal sum of angles in a flat triangle is always 180 degrees.",
        pro: "Validating input is key in real systems. What if a user enters negative angles or angles that sum > 180? Defensive programming requires checking these constraints.",
        pseudo: `1. START
2. Read angle1, angle2
3. sum = angle1 + angle2
4. angle3 = 180 - sum
5. Print angle3
6. END`,
        flow: "flowchart TD\n A[/Angle A, Angle B/] --> B[Sum = A + B]\n B --> C[Third = 180 - Sum]\n C --> D[/Print Third Angle/]"
    },
    { 
        q: "Q5", file: "day01/marks.java", desc: "Calculate total marks and percentage of five subjects",
        concept: "Aggregating values (summing) and finding proportions relative to a maximum possible score.",
        pro: "Type casting is crucial. If you divide an integer total by an integer max, Java does Integer Division (yielding 0). You must explicitly cast to `(double)` or `(float)` before dividing.",
        pseudo: `1. START
2. Read 5 marks (m1 to m5)
3. total = m1+m2+m3+m4+m5
4. percentage = (total / 500.0) * 100
5. Print total and percentage
6. END`,
        flow: "flowchart TD\n A[/Input 5 Marks/] --> B[Total = Sum of all 5]\n B --> C[Percent = Total / 500 * 100]\n C --> D[/Print Total & Percent/]"
    },
    { 
        q: "Q6", file: "day01/simple.java", desc: "Calculate the simple interest",
        concept: "Implementing a strict mathematical formula: (Principal * Rate * Time) / 100.",
        pro: "For real-world financial applications, NEVER use float or double. Floating point representation cannot accurately store decimal fractions. Always use `java.math.BigDecimal`.",
        pseudo: `1. START
2. Read Principal (P), Rate (R), Time (T)
3. interest = (P * R * T) / 100
4. Print interest
5. END`,
        flow: "flowchart LR\n A[/P, R, T/] --> B[Multiply P*R*T]\n B --> C[Divide by 100]\n C --> D[/Interest/]"
    },
    { 
        q: "Q7/Q8", file: "day01/swap.java", desc: "Swap two numbers with & without third variable",
        concept: "Swapping values. Usually requires a temporary 'bucket', but can be done mathematically by merging and extracting.",
        pro: "Math swaps (A=A+B; B=A-B; A=A-B) can trigger Integer Overflow! The safest, elite way to swap without temp variables is using Bitwise XOR (`A^=B; B^=A; A^=B`).",
        pseudo: `1. START
2. Read A, B
3. A = A + B
4. B = A - B
5. A = A - B
6. Print swapped A and B
7. END`,
        flow: "flowchart TD\n A[/A=5, B=10/] --> B[A = A + B (15)]\n B --> C[B = A - B (5)]\n C --> D[A = A - B (10)]\n D --> E[/A=10, B=5/]"
    },
    { 
        q: "Q9", file: "day01/ascii.java", desc: "Print the ASCII value of a given character",
        concept: "Computers store letters as numbers based on a standard table. Typecasting to an integer reveals this underlying number.",
        pro: "Java actually uses UTF-16, not just ASCII. A 'char' in Java is strictly a 16-bit unsigned integer ranging from 0 to 65535.",
        pseudo: `1. START
2. Read character ch
3. Convert to integer: int ascii = (int) ch
4. Print ascii
5. END`,
        flow: "flowchart LR\n A[/Char 'A'/] --> B{Typecast (int)}\n B --> C[/Integer 65/]"
    },
    { 
        q: "Q10", file: "day01/time.java", desc: "Convert seconds to hours, minutes and seconds",
        concept: "Breaking down a large unit into smaller hierarchical units using division and modulo (remainder) arithmetic.",
        pro: "Time math is notoriously error-prone due to leap seconds and timezones. Modern Java code utilizes `java.time.Duration.ofSeconds(val)` for clean standard conversions.",
        pseudo: `1. START
2. Read totalSeconds
3. hours = totalSeconds / 3600
4. remaining = totalSeconds % 3600
5. minutes = remaining / 60
6. seconds = remaining % 60
7. Print hours, minutes, seconds
8. END`,
        flow: "flowchart TD\n A[/Total Secs/] --> B[Hours = Secs / 3600]\n B --> C[Rem = Secs % 3600]\n C --> D[Mins = Rem / 60]\n D --> E[Secs = Rem % 60]\n E --> F[/Output HH:MM:SS/]"
    },
    { 
        q: "Q11", file: "day01/neon.java", desc: "Check whether a number is neon or not",
        concept: "A number whose sum of digits of its square equals the number itself (e.g., 9 -> 81 -> 8+1 = 9).",
        pro: "Algorithm time complexity is bounded by O(log(N^2)) since you iterate over the digits of the square. A neat while loop using `sum += sq % 10; sq /= 10;` is the optimal approach.",
        pseudo: `1. START
2. Read N
3. sq = N * N, sum = 0
4. WHILE sq > 0 DO:
     sum = sum + (sq % 10)
     sq = sq / 10
5. IF sum == N, print 'Neon'
6. ELSE print 'Not Neon'
7. END`,
        flow: "flowchart TD\n A[/Input N/] --> B[Sq = N * N]\n B --> C[Sum = 0]\n C --> D{Sq > 0?}\n D -- Yes --> E[Sum += Sq % 10]\n E --> F[Sq /= 10]\n F --> D\n D -- No --> G{Sum == N?}\n G -- Yes --> H[/Neon!/]\n G -- No --> I[/Not Neon/]"
    },
    { 
        q: "Q12", file: "day01/casealpha.java", desc: "Toggle character case using ASCII values",
        concept: "Uppercase and lowercase letters are separated by exactly 32 in the ASCII table. We add or subtract 32 to flip them.",
        pro: "A brilliant Bitwise hack: XORing any alphabet character with the space character (' ') toggles its case instantly! `char toggled = (char)(original ^ ' ');`",
        pseudo: `1. START
2. Read char ch
3. IF ch >= 'a' AND ch <= 'z':
     ch = ch - 32  // Convert to Upper
   ELSE IF ch >= 'A' AND ch <= 'Z':
     ch = ch + 32  // Convert to Lower
4. Print ch
5. END`,
        flow: "flowchart TD\n A[/Input Char/] --> B{Is Lowercase?}\n B -- Yes --> C[Subtract 32]\n B -- No --> D[Add 32]\n C --> E[/Toggled Char/]\n D --> E"
    },
    { 
        q: "Q13", file: "day01/evenodd.java", desc: "Check whether a number is even or odd",
        concept: "If a number divides cleanly by 2 (remainder is 0), it is Even. Otherwise, it is Odd.",
        pro: "Modulo division is slightly expensive at the CPU level. The fastest execution uses Bitwise AND: `(num & 1) == 0` checks the least significant bit directly!",
        pseudo: `1. START
2. Read N
3. IF N % 2 == 0:
     Print 'Even'
   ELSE:
     Print 'Odd'
4. END`,
        flow: "flowchart TD\n A[/Input Num/] --> B{Num % 2 == 0?}\n B -- True --> C[/Even/]\n B -- False --> D[/Odd/]"
    },
    { 
        q: "Q14", file: "day01/trivalid.java", desc: "Check whether a triangle is valid or not",
        concept: "Triangle Inequality Theorem: The sum of any two side lengths must be strictly greater than the third side length.",
        pro: "This is a foundational concept not just in high school geometry, but in advanced graph algorithms (like A* pathfinding) and collision detection engines.",
        pseudo: `1. START
2. Read sides A, B, C
3. IF (A+B>C) AND (A+C>B) AND (B+C>A):
     Print 'Valid'
   ELSE:
     Print 'Invalid'
4. END`,
        flow: "flowchart TD\n A[/Sides A, B, C/] --> B{A+B>C AND A+C>B AND B+C>A}\n B -- True --> C[/Valid/]\n B -- False --> D[/Invalid/]"
    },
    { 
        q: "Q15", file: "day01/tritypes.java", desc: "Check if triangle is equilateral, isosceles, or scalene",
        concept: "Using sequential logic blocks (if-else if-else) to classify an object based on the equality of its parts.",
        pro: "Order of evaluation matters! Check Equilateral first (A==B && B==C). Then Isosceles (A==B || B==C || A==C). By structuring properly, you avoid redundant checks.",
        pseudo: `1. START
2. Read A, B, C
3. IF A==B AND B==C:
     Print 'Equilateral'
   ELSE IF A==B OR B==C OR A==C:
     Print 'Isosceles'
   ELSE:
     Print 'Scalene'
4. END`,
        flow: "flowchart TD\n A[/Sides A,B,C/] --> B{A==B AND B==C?}\n B -- Yes --> C[/Equilateral/]\n B -- No --> D{A==B OR B==C OR A==C?}\n D -- Yes --> E[/Isosceles/]\n D -- No --> F[/Scalene/]"
    },
    { 
        q: "Q16", file: "day01/num.java", desc: "Check if number is positive, negative or zero",
        concept: "Comparing a number relative to the origin (zero) on a number line.",
        pro: "At the hardware level, numbers are stored in Two's Complement binary. A negative number simply has its most significant bit (Sign Bit) set to 1.",
        pseudo: `1. START
2. Read N
3. IF N > 0: Print 'Positive'
4. ELSE IF N < 0: Print 'Negative'
5. ELSE: Print 'Zero'
6. END`,
        flow: "flowchart TD\n A[/Input N/] --> B{N > 0?}\n B -- Yes --> C[/Positive/]\n B -- No --> D{N < 0?}\n D -- Yes --> E[/Negative/]\n D -- No --> F[/Zero/]"
    },
    { 
        q: "Q17", file: "day01/divisible.java", desc: "Check if number is divisible by 5 and 11",
        concept: "Checking multiple modulo conditions simultaneously using the Logical AND (`&&`) operator.",
        pro: "Since 5 and 11 are co-prime, the mathematically superior and faster check is just evaluating their Least Common Multiple (LCM): `num % 55 == 0`.",
        pseudo: `1. START
2. Read N
3. IF N % 5 == 0 AND N % 11 == 0:
     Print 'Divisible'
   ELSE:
     Print 'Not Divisible'
4. END`,
        flow: "flowchart TD\n A[/Input N/] --> B{N % 5 == 0 AND N % 11 == 0}\n B -- Yes --> C[/Divisible/]\n B -- No --> D[/Not Divisible/]"
    },
    { 
        q: "Q18", file: "day01/GrossSalary.java", desc: "Calculate Gross Salary based on Basic Salary slabs",
        concept: "Using tiered if-else ladders to apply different logic percentages based on range limits (like tax brackets).",
        pro: "Massive if-else ladders are considered anti-patterns (violates Open-Closed Principle). Real systems use Rules Engines or the Strategy Design Pattern instead.",
        pseudo: `1. START
2. Read Basic Salary
3. IF Basic <= 10000: HRA=20%, DA=80%
4. ELSE IF Basic <= 20000: HRA=25%, DA=90%
5. ELSE: HRA=30%, DA=95%
6. Gross = Basic + (Basic * HRA) + (Basic * DA)
7. Print Gross
8. END`,
        flow: "flowchart TD\n A[/Basic Salary/] --> B{Salary <= 10000?}\n B -- Yes --> C[HRA=20%, DA=80%]\n B -- No --> D{Salary <= 20000?}\n D -- Yes --> E[HRA=25%, DA=90%]\n D -- No --> F[HRA=30%, DA=95%]\n C --> G[Gross = Basic + HRA + DA]\n E --> G\n F --> G\n G --> H[/Output Gross/]"
    }
];

const day2Problems = [
    { 
        q: "Q1", file: "day02/reverse.java", desc: "Reverse a number without using a loop",
        concept: "Mathematically dissecting a number by extracting the last digit (modulo 10), and truncating (divide by 10) sequentially.",
        pro: "Without loops, this code is completely hardcoded to a specific number of digits (O(1) time). For true dynamic flexibility without iterative loops, Recursion is the mathematically pure solution.",
        pseudo: `1. START
2. Read 3-digit number N
3. d1 = N % 10
4. d2 = (N / 10) % 10
5. d3 = (N / 100) % 10
6. reversed = (d1 * 100) + (d2 * 10) + d3
7. Print reversed
8. END`,
        flow: "flowchart LR\n A[/Num 123/] --> B[D1: 123%10 = 3]\n B --> C[D2: (123/10)%10 = 2]\n C --> D[D3: (123/100)%10 = 1]\n D --> E[/Output: 321/]"
    },
    { 
        q: "Q2/Q3", file: "day02/digit.java", desc: "Find first and last digit, and sum them without a loop",
        concept: "Last digit is always `num % 10`. If we know it's a 3 digit number, the first digit is `num / 100`.",
        pro: "To dynamically find the first digit of ANY length number without loops: `first = num / (int)Math.pow(10, (int)Math.log10(num));`.",
        pseudo: `1. START
2. Read 3-digit number N
3. last = N % 10
4. first = N / 100
5. sum = first + last
6. Print sum
7. END`,
        flow: "flowchart TD\n A[/Input N (e.g. 102)/] --> B[Last = N % 10]\n A --> C[First = N / 100]\n B --> D[Sum = First + Last]\n C --> D\n D --> E[/Output Sum/]"
    },
    { 
        q: "Q5", file: "day02/palindrome.java", desc: "Check if a number is palindrome or not",
        concept: "A palindrome reads the same forwards and backwards. We reverse the number using math and compare it to the original.",
        pro: "Reversing a very large integer can cause an Integer Overflow Exception. Converting it to a String and using a Two-Pointer approach (checking chars from outside-in) is significantly safer.",
        pseudo: `1. START
2. Read N, temp = N, rev = 0
3. WHILE temp > 0 DO:
     rev = (rev * 10) + (temp % 10)
     temp = temp / 10
4. IF rev == N: Print 'Palindrome'
5. ELSE: Print 'Not Palindrome'
6. END`,
        flow: "flowchart TD\n A[/Input N/] --> B[Temp = N]\n B --> C[Reverse N using loop]\n C --> D{Temp == Reversed?}\n D -- Yes --> E[/Palindrome/]\n D -- No --> F[/Not Palindrome/]"
    },
    { 
        q: "Q6", file: "day02/alpha.java", desc: "Check if character is alphabetic or not",
        concept: "We check if the character falls within the ASCII boundaries of 'a' to 'z' OR 'A' to 'Z'.",
        pro: "Manual range checking fails for international characters (like é, ü, ñ). Pro developers utilize native wrappers like `Character.isLetter(ch)` which supports full Unicode.",
        pseudo: `1. START
2. Read char ch
3. IF (ch >= 'A' AND ch <= 'Z') OR (ch >= 'a' AND ch <= 'z'):
     Print 'Alphabet'
   ELSE:
     Print 'Not Alphabet'
4. END`,
        flow: "flowchart TD\n A[/Input Char/] --> B{In range a-z OR A-Z?}\n B -- Yes --> C[/Alphabetic/]\n B -- No --> D[/Not Alphabetic/]"
    },
    { 
        q: "Q7", file: "day02/pro.java", desc: "Check profit or loss given CP and SP",
        concept: "Comparing Cost Price and Selling Price to determine positive or negative cash flow.",
        pro: "When mapping this to enterprise databases, never store currency as Floats. Store them as Integers (representing pennies/cents) to ensure exact accounting precision.",
        pseudo: `1. START
2. Read CP and SP
3. IF SP > CP: Print 'Profit: ' + (SP - CP)
4. ELSE IF CP > SP: Print 'Loss: ' + (CP - SP)
5. ELSE: Print 'No Profit No Loss'
6. END`,
        flow: "flowchart TD\n A[/CP and SP/] --> B{SP > CP?}\n B -- Yes --> C[Profit = SP - CP]\n B -- No --> D{CP > SP?}\n D -- Yes --> E[Loss = CP - SP]\n D -- No --> F[No Profit No Loss]\n C --> G[/Output/]\n E --> G\n F --> G"
    },
    { 
        q: "Q8", file: "day02/vowel.java", desc: "Check if alphabet is vowel or consonant",
        concept: "Validating against a specific set of target values (A, E, I, O, U) using logical OR.",
        pro: "A massive if-condition with 10 OR statements is ugly. A cleaner approach is using `\"aeiouAEIOU\".indexOf(ch) != -1`, or utilizing a Switch statement with fall-through logic.",
        pseudo: `1. START
2. Read char ch
3. IF ch == 'a' OR ch == 'e' OR ch == 'i' OR ch == 'o' OR ch == 'u':
     Print 'Vowel'
   ELSE:
     Print 'Consonant'
4. END`,
        flow: "flowchart TD\n A[/Input Char/] --> B{Is 'a','e','i','o','u'?}\n B -- Yes --> C[/Vowel/]\n B -- No --> D[/Consonant/]"
    },
    { 
        q: "Q9", file: "day02/max.java", desc: "Find maximum between three numbers",
        concept: "Logical combinations. Check if A is bigger than both B and C. Then check if B is bigger. If neither, it must be C.",
        pro: "Nested Math functions compile cleaner, express intent better, and utilize JVM intrinsics: `int max = Math.max(a, Math.max(b, c));`",
        pseudo: `1. START
2. Read A, B, C
3. IF A > B AND A > C: max = A
4. ELSE IF B > A AND B > C: max = B
5. ELSE: max = C
6. Print max
7. END`,
        flow: "flowchart TD\n A[/A, B, C/] --> B{A>B AND A>C?}\n B -- Yes --> C[/Max is A/]\n B -- No --> D{B>A AND B>C?}\n D -- Yes --> E[/Max is B/]\n D -- No --> F[/Max is C/]"
    },
    { 
        q: "Q10", file: "day02/min.java", desc: "Find minimum between three numbers",
        concept: "The exact inverse of finding the maximum. We use less-than (<) to identify the smallest value.",
        pro: "As with max, `Math.min(a, Math.min(b, c))` is the way to go for cleaner and faster code.",
        pseudo: `1. START
2. Read A, B, C
3. IF A < B AND A < C: min = A
4. ELSE IF B < A AND B < C: min = B
5. ELSE: min = C
6. Print min
7. END`,
        flow: "flowchart TD\n A[/A, B, C/] --> B{A<B AND A<C?}\n B -- Yes --> C[/Min is A/]\n B -- No --> D{B<A AND B<C?}\n D -- Yes --> E[/Min is B/]\n D -- No --> F[/Min is C/]"
    },
    { 
        q: "Q11", file: "day02/grade.java", desc: "Print a grade using ternary operators",
        concept: "The Ternary operator `? :` acts as a one-line if-else. They can be chained for multiple cascaded conditions.",
        pro: "Chained ternaries are notorious for ruining code readability. While bytecode is identical to standard if-else, strict enterprise style-guides usually ban nested ternaries completely.",
        pseudo: `1. START
2. Read marks
3. grade = (marks >= 90) ? 'A' : (marks >= 80) ? 'B' : 'C'
4. Print grade
5. END`,
        flow: "flowchart TD\n A[/Marks/] --> B{Marks >= 90 ?}\n B -- True --> C[/Grade A/]\n B -- False --> D{Marks >= 80 ?}\n D -- True --> E[/Grade B/]\n D -- False --> F[/Grade C, D, or F/]"
    },
    { 
        q: "Q12", file: "day02/money.java", desc: "Find total number of notes in a given amount",
        concept: "A Greedy Algorithm: Divide the amount by the largest denomination first to get quantity, then pass the remainder down to the next.",
        pro: "Don't copy-paste logic! Use an array `int[] notes = {500, 100, 50, 20...}` and loop through it to keep the codebase DRY (Don't Repeat Yourself).",
        pseudo: `1. START
2. Read Amount
3. notes500 = Amount / 500, Amount = Amount % 500
4. notes100 = Amount / 100, Amount = Amount % 100
5. notes50 = Amount / 50, Amount = Amount % 50
6. notes20 = Amount / 20, Amount = Amount % 20
7. notes10 = Amount / 10, Amount = Amount % 10
8. Print all notes counts
9. END`,
        flow: "flowchart TD\n A[/Amount/] --> B[Qty = Amount / 500]\n B --> C[Amount = Amount % 500]\n C --> D[Qty = Amount / 100]\n D --> E[Amount = Amount % 100]\n E -.-> F[/Continue.../]"
    },
    { 
        q: "Q13", file: "day02/bonus.java", desc: "Check employee bonus eligibility",
        concept: "Applying a simple gate check. If experience is above a threshold, calculate and apply a mathematical multiplier.",
        pro: "Business rules change constantly. Hardcoding '5' and '0.05' creates magic numbers. These should always be extracted to `static final` constants.",
        pseudo: `1. START
2. Read Salary, Experience
3. IF Experience > 5:
     Bonus = Salary * 0.05
     Print Bonus
   ELSE:
     Print 'No Bonus'
4. END`,
        flow: "flowchart TD\n A[/Salary, Exp/] --> B{Exp > 5?}\n B -- Yes --> C[Bonus = Salary * 0.05]\n C --> D[/Print Bonus/]\n B -- No --> E[/Print No Bonus/]"
    },
    { 
        q: "Q14", file: "day02/sales.java", desc: "Calculate commission based on sales amount slabs",
        concept: "We use an if-else ladder to check where the sales amount falls, and multiply by the appropriate commission percentage.",
        pro: "This is a classic Boundary Value Analysis scenario in QA testing. Off-by-one errors are extremely common. Ensuring boundaries are inclusive (`>= 5000`) vs exclusive (`> 5000`) is critical.",
        pseudo: `1. START
2. Read Sales
3. IF Sales < 5000: commission = 2%
4. ELSE IF Sales <= 10000: commission = 5%
5. ELSE: commission = 10%
6. Print Sales * commission
7. END`,
        flow: "flowchart TD\n A[/Sales/] --> B{Sales < 5000?}\n B -- Yes --> C[Comm = 2%]\n B -- No --> D{Sales <= 10000?}\n D -- Yes --> E[Comm = 5%]\n D -- No --> F[Comm = 10%]\n C --> G[/Print Comm/]\n E --> G\n F --> G"
    },
    { 
        q: "Q15", file: "day02/cal.java", desc: "Simulate a simple calculator using switch case",
        concept: "A Switch statement acts as a precise router, directing the flow based on a single variable's exact match (like an operator symbol).",
        pro: "Java compiler translates switches to `tableswitch` bytecode, which operates in O(1) jump time, making it faster than O(n) if-else ladders. Java 14+ enhanced switches eliminate `break` entirely.",
        pseudo: `1. START
2. Read num1, num2, operator
3. SWITCH (operator):
     CASE '+': Print num1 + num2
     CASE '-': Print num1 - num2
     ... 
4. END`,
        flow: "flowchart TD\n A[/N1, Op, N2/] --> B{Switch Operator}\n B -- '+' --> C[N1 + N2]\n B -- '-' --> D[N1 - N2]\n B -- '*' --> E[N1 * N2]\n B -- '/' --> F[N1 / N2]\n C --> G[/Result/]\n D --> G\n E --> G\n F --> G"
    },
    { 
        q: "Q16", file: "day02/remark.java", desc: "Display grade remark using switch",
        concept: "Instead of writing many if-else checks to map 'A' to 'Excellent', a switch maps the letter to a word cleanly and explicitly.",
        pro: "Switching on Characters or Integers is the absolute fastest way to branch logic in Java due to jump tables. Never use if-else for mapping 1:1 constants.",
        pseudo: `1. START
2. Read Grade
3. SWITCH (Grade):
     CASE 'A': Print 'Excellent'
     CASE 'B': Print 'Good'
     ...
4. END`,
        flow: "flowchart LR\n A[/Grade/] --> B{Switch}\n B -- 'A' --> C[/Excellent/]\n B -- 'B' --> D[/Good/]\n B -- 'F' --> E[/Fail/]"
    },
    { 
        q: "Q17", file: "day02/day.java", desc: "Print day type (Weekday/Weekend) using switch",
        concept: "Grouping cases together in a Switch block using 'Fall-Through' behavior by intentionally omitting the `break` keyword.",
        pro: "Modern Java 14+ introduces Switch Expressions allowing comma-separated cases: `case 1,2,3,4,5 -> print(\"Weekday\");`, drastically reducing boilerplate.",
        pseudo: `1. START
2. Read day number (1-7)
3. SWITCH (day):
     CASE 1 to 5: Print 'Weekday'
     CASE 6 to 7: Print 'Weekend'
4. END`,
        flow: "flowchart TD\n A[/Input 1-7/] --> B{Switch}\n B -- 1,2,3,4,5 --> C[Fall Through]\n C --> D[/Print Weekday/]\n B -- 6,7 --> E[/Print Weekend/]"
    },
    { 
        q: "Q19", file: "day02/digitname.java", desc: "Convert number (1-5) to word equivalent using switch",
        concept: "Mapping numerical inputs to string outputs directly using case matches.",
        pro: "Using a Switch for this is actually inefficient boilerplate! A senior dev creates an array: `String[] words = {\"One\", \"Two\", \"Three\"};` and retrieves it via `words[n-1]`. Zero logic needed.",
        pseudo: `1. START
2. Read N
3. SWITCH (N):
     CASE 1: Print 'One'
     CASE 2: Print 'Two'
     CASE 3: Print 'Three'
     CASE 4: Print 'Four'
     CASE 5: Print 'Five'
     DEFAULT: Print 'Invalid'
4. END`,
        flow: "flowchart LR\n A[/Input N/] --> B{Switch (N)}\n B -- 1 --> C[/One/]\n B -- 2 --> D[/Two/]\n B -- default --> E[/Invalid/]"
    }
];

const day3Problems = [
    { 
        q: "Q1", file: "day03/natural.java", desc: "Print all natural numbers from 1 to n using while loop",
        concept: "Standard iteration with a counter using a pre-conditional loop (while loop).",
        pro: "While loops verify conditions before executing the body. Ensure that the loop counter is incremented properly inside the block to avoid an infinite loop state.",
        pseudo: `1. START
2. Read N
3. Set i = 1
4. WHILE i <= N DO:
     Print i
     i = i + 1
5. END`,
        flow: "flowchart TD\n A([Start]) --> B[/Input N/]\n B --> C[i = 1]\n C --> D{i <= N?}\n D -- Yes --> E[/Print i/]\n E --> F[i++]\n F --> D\n D -- No --> G([End])"
    },
    { 
        q: "Q2", file: "day03/natural.java", desc: "Print all natural numbers in reverse (n to 1) using while loop",
        concept: "Decremental iteration starting from a maximum boundary down to a minimum boundary.",
        pro: "Ensure the loop control variable is decremented using `i--` and that the boundary check uses `>= 1` so the loop terminates correctly.",
        pseudo: `1. START
2. Read N
3. Set i = N
4. WHILE i >= 1 DO:
     Print i
     i = i - 1
5. END`,
        flow: "flowchart TD\n A([Start]) --> B[/Input N/]\n B --> C[i = N]\n C --> D{i >= 1?}\n D -- Yes --> E[/Print i/]\n E --> F[i--]\n F --> D\n D -- No --> G([End])"
    },
    { 
        q: "Q3", file: "day03/alphabets.java", desc: "Print all alphabets from a to z using while loop",
        concept: "Character arithmetic using under-the-hood Unicode integer values in Java.",
        pro: "In Java, `char` is an unsigned 16-bit numeric type. We can use characters directly in loop logic (e.g., `char a = 'A'; a++` incrementing internally as ASCII/Unicode integers).",
        pseudo: `1. START
2. Set ch = 'a'
3. WHILE ch <= 'z' DO:
     Print ch
     ch = ch + 1
4. END`,
        flow: "flowchart TD\n A([Start]) --> B[ch = 'a']\n B --> C{ch <= 'z'?}\n C -- Yes --> D[/Print ch/]\n D --> E[ch++]\n E --> C\n C -- No --> F([End])"
    },
    { 
        q: "Q4", file: "day03/evenodd.java", desc: "Print all even numbers between 1 to 100 using while loop",
        concept: "Range-bound filtering of numbers divisible by 2.",
        pro: "Instead of testing every number with `i % 2 == 0` (which adds a branch instruction), you can optimize performance by starting at 2 and incrementing by 2 (`i += 2`).",
        pseudo: `1. START
2. Set i = 1
3. WHILE i <= 100 DO:
     IF i % 2 == 0 THEN:
       Print i
     i = i + 1
4. END`,
        flow: "flowchart TD\n A([Start]) --> B[i = 1]\n B --> C{i <= 100?}\n C -- Yes --> D{i % 2 == 0?}\n D -- Yes --> E[/Print i/]\n D -- No --> F[i++]\n E --> F\n F --> C\n C -- No --> G([End])"
    },
    { 
        q: "Q5", file: "day03/evenodd.java", desc: "Print all odd numbers between 1 to 100",
        concept: "Filtering numbers that are not divisible by 2.",
        pro: "Modulo on negative numbers in Java can return negative remainders. Always check `i % 2 != 0` instead of `== 1` for a general-purpose check.",
        pseudo: `1. START
2. Set i = 1
3. WHILE i <= 100 DO:
     IF i % 2 != 0 THEN:
       Print i
     i = i + 1
4. END`,
        flow: "flowchart TD\n A([Start]) --> B[i = 1]\n B --> C{i <= 100?}\n C -- Yes --> D{i % 2 != 0?}\n D -- Yes --> E[/Print i/]\n D -- No --> F[i++]\n E --> F\n F --> C\n C -- No --> G([End])"
    },
    { 
        q: "Q6", file: "day03/sum.java", desc: "Find the sum of all natural numbers between 1 to n",
        concept: "Accumulating values across a range into a running sum variable.",
        pro: "For very large inputs, integer sums can easily exceed `Integer.MAX_VALUE` (2,147,483,647). Consider using a `long` for the sum or the direct formula `n * (n + 1) / 2` for O(1) complexity.",
        pseudo: `1. START
2. Read N, Set sum = 0, i = 1
3. WHILE i <= N DO:
     sum = sum + i
     i = i + 1
4. Print sum
5. END`,
        flow: "flowchart TD\n A([Start]) --> B[/Input N/]\n B --> C[sum = 0, i = 1]\n C --> D{i <= N?}\n D -- Yes --> E[sum += i]\n E --> F[i++]\n F --> D\n D -- No --> G[/Print sum/] --> H([End])"
    },
    { 
        q: "Q7", file: "day03/sumevenodd.java", desc: "Find the sum of all even numbers between 1 to n",
        concept: "Conditional arithmetic aggregation focusing on multiples of 2.",
        pro: "Branching inside a tight loop can cause CPU branch mispredictions. A branchless or step-optimized version `i += 2` is faster in production scenarios.",
        pseudo: `1. START
2. Read N, Set sum = 0, i = 1
3. WHILE i <= N DO:
     IF i % 2 == 0 THEN:
       sum = sum + i
     i = i + 1
4. Print sum
5. END`,
        flow: "flowchart TD\n A([Start]) --> B[/Input N/]\n B --> C[sumeven = 0, i = 1]\n C --> D{i <= N?}\n D -- Yes --> E{i % 2 == 0?}\n E -- Yes --> F[sumeven += i]\n E -- No --> G[i++]\n F --> G\n G --> D\n D -- No --> H[/Print sumeven/] --> I([End])"
    },
    { 
        q: "Q8", file: "day03/sumevenodd.java", desc: "Find the sum of all odd numbers between 1 to n",
        concept: "Conditional accumulation targeting values with remainder 1 when divided by 2.",
        pro: "A neat mathematical theorem: the sum of the first N odd numbers is always exactly $N^2$. This lets us bypass loops entirely if starting from 1.",
        pseudo: `1. START
2. Read N, Set sum = 0, i = 1
3. WHILE i <= N DO:
     IF i % 2 != 0 THEN:
       sum = sum + i
     i = i + 1
4. Print sum
5. END`,
        flow: "flowchart TD\n A([Start]) --> B[/Input N/]\n B --> C[sumodd = 0, i = 1]\n C --> D{i <= N?}\n D -- Yes --> E{i % 2 != 0?}\n E -- Yes --> F[sumodd += i]\n E -- No --> G[i++]\n F --> G\n G --> D\n D -- No --> H[/Print sumodd/] --> I([End])"
    },
    { 
        q: "Q9", file: "day03/table.java", desc: "Print a multiplication table of any number",
        concept: "Computing the multiples of a base number using loop counters.",
        pro: "Using `System.out.printf()` format strings makes the printing output clean and readable without creating redundant, ephemeral String objects.",
        pseudo: `1. START
2. Read N
3. Set i = 1
4. WHILE i <= 10 DO:
     Print N + " x " + i + " = " + (N * i)
     i = i + 1
5. END`,
        flow: "flowchart TD\n A([Start]) --> B[/Input N/]\n B --> C[i = 1]\n C --> D{i <= 10?}\n D -- Yes --> E[/Print N * i/]\n E --> F[i++]\n F --> D\n D -- No --> G([End])"
    },
    { 
        q: "Q10", file: "day03/nodigits.java", desc: "Count the number of digits in a number",
        concept: "Base-10 logarithmic decomposition of an integer using integer division.",
        pro: "Integer division by 10 discards the least significant digit, executing in O(log10(N)) time. Alternatively, we can use `(int)Math.log10(n) + 1` for an O(1) approach (handle 0 explicitly).",
        pseudo: `1. START
2. Read N, Set count = 0
3. WHILE N > 0 DO:
     count = count + 1
     N = N / 10
4. Print count
5. END`,
        flow: "flowchart TD\n A([Start]) --> B[/Input N/]\n B --> C[count = 0]\n C --> D{N > 0?}\n D -- Yes --> E[count++]\n E --> F[N = N / 10]\n F --> D\n D -- No --> G[/Print count/] --> H([End])"
    },
    { 
        q: "Q11", file: "day03/sumdigits.java", desc: "Calculate the sum of digits of a number",
        concept: "Extracting individual digits using mathematical modulo and summing them.",
        pro: "Extracting a digit via `num % 10` is highly efficient. For negative numbers, make sure to take `Math.abs(num)` beforehand to prevent adding negative values.",
        pseudo: `1. START
2. Read N, Set sum = 0
3. WHILE N > 0 DO:
     d = N % 10
     sum = sum + d
     N = N / 10
4. Print sum
5. END`,
        flow: "flowchart TD\n A([Start]) --> B[/Input N/]\n B --> C[sum = 0]\n C --> D{N > 0?}\n D -- Yes --> E[d = N % 10]\n E --> F[sum += d]\n F --> G[N /= 10]\n G --> D\n D -- No --> H[/Print sum/] --> I([End])"
    },
    { 
        q: "Q12", file: "day03/prodigits.java", desc: "Calculate the product of digits of a number",
        concept: "Multiplying extracted digits of a base-10 number sequentially.",
        pro: "If any digit is 0, the entire product is immediately 0. We can optimize by breaking out of the loop early if `prod == 0`.",
        pseudo: `1. START
2. Read N, Set prod = 1
3. WHILE N > 0 DO:
     d = N % 10
     prod = prod * d
     N = N / 10
4. Print prod
5. END`,
        flow: "flowchart TD\n A([Start]) --> B[/Input N/]\n B --> C[prod = 1]\n C --> D{N > 0?}\n D -- Yes --> E[d = N % 10]\n E --> F[prod *= d]\n F --> G[N /= 10]\n G --> D\n D -- No --> H[/Print prod/] --> I([End])"
    },
    { 
        q: "Q13", file: "day03/palindrome.java", desc: "Enter a number and print its reverse",
        concept: "Reconstructing an integer backwards by multiplying the accumulator by 10 and adding the last digit.",
        pro: "Beware of integer overflow! Reversing `2147483647` (Max Int) will overflow `Integer.MAX_VALUE`. Use a `long` for the reversed holder to prevent overflow bugs.",
        pseudo: `1. START
2. Read N, Set rev = 0
3. WHILE N > 0 DO:
     d = N % 10
     rev = (rev * 10) + d
     N = N / 10
4. Print rev
5. END`,
        flow: "flowchart TD\n A([Start]) --> B[/Input N/]\n B --> C[rev = 0]\n C --> D{N > 0?}\n D -- Yes --> E[d = N % 10]\n E --> F[rev = rev * 10 + d]\n F --> G[N /= 10]\n G --> D\n D -- No --> H[/Print rev/] --> I([End])"
    },
    { 
        q: "Q14", file: "day03/palindrome.java", desc: "Check whether a number is palindrome or not",
        concept: "Comparing the mathematically reversed number with the original number.",
        pro: "Always store the original number in a temporary variable because the digits extraction process reduces the original number to 0.",
        pseudo: `1. START
2. Read N, Set temp = N, rev = 0
3. WHILE N > 0 DO:
     d = N % 10
     rev = (rev * 10) + d
     N = N / 10
4. IF rev == temp THEN:
     Print "palindrome"
   ELSE:
     Print "not palindrome"
5. END`,
        flow: "flowchart TD\n A([Start]) --> B[/Input N/]\n B --> C[temp = N, rev = 0]\n C --> D{N > 0?}\n D -- Yes --> E[d = N % 10]\n E --> F[rev = rev * 10 + d]\n F --> G[N /= 10]\n G --> D\n D -- No --> H{rev == temp?}\n H -- Yes --> I[/Palindrome/]\n H -- No --> J[/Not Palindrome/]"
    },
    { 
        q: "Q15", file: "day03/ascii.java", desc: "Print all ASCII characters with their values",
        concept: "Mapping integer numeric codes from 0 to 255 to their character glyphs.",
        pro: "Values 0-31 are control characters (like CR, LF, ESC). Printing them directly might disrupt console formatting or output nothing visually.",
        pseudo: `1. START
2. Set i = 0
3. WHILE i <= 255 DO:
     Print i + " = " + (char)i
     i = i + 1
4. END`,
        flow: "flowchart TD\n A([Start]) --> B[i = 0]\n B --> C{i <= 255?}\n C -- Yes --> D[/Print i & (char)i/]\n D --> E[i++]\n E --> C\n C -- No --> F([End])"
    },
    { 
        q: "Q16", file: "day03/pow.java", desc: "Find power of a number",
        concept: "Iteratively multiplying a base number by itself exponent times, or using Math.pow.",
        pro: "Iterating takes O(exponent) time. For production code with massive exponents, use Binary Exponentiation (Exponentiation by Squaring) to achieve O(log(exponent)) time complexity.",
        pseudo: `1. START
2. Read base, power
3. Set result = 1, i = 1
4. WHILE i <= power DO:
     result = result * base
     i = i + 1
5. Print result
6. END`,
        flow: "flowchart TD\n A([Start]) --> B[/Input base, power/]\n B --> C[result = 1, i = 1]\n C --> D{i <= power?}\n D -- Yes --> E[result *= base]\n E --> F[i++]\n F --> D\n D -- No --> G[/Print result/] --> H([End])"
    },
    { 
        q: "Q17", file: "day03/factor.java", desc: "Find all factors of a number",
        concept: "Checking numbers up to n to identify which integers divide n without a remainder.",
        pro: "Instead of searching all numbers up to N (O(N) complexity), we can loop up to $\\sqrt{N}$ since factors occur in pairs (e.g. if `i` divides `N`, then `N/i` is also a factor). This cuts computation to O($\\sqrt{N}$).",
        pseudo: `1. START
2. Read N
3. Set i = 1
4. WHILE i <= N DO:
     IF N % i == 0 THEN:
       Print i
     i = i + 1
5. END`,
        flow: "flowchart TD\n A([Start]) --> B[/Input N/]\n B --> C[i = 1]\n C --> D{i <= N?}\n D -- Yes --> E{N % i == 0?}\n E -- Yes --> F[/Print i/]\n E -- No --> G[i++]\n F --> G\n G --> D\n D -- No --> H([End])"
    },
    { 
        q: "Q18", file: "day03/dignum.java", desc: "Find the first and last digit of a number",
        concept: "Extracting boundary digits of an integer mathematically.",
        pro: "Last digit is always `N % 10`. To get the first digit, we can use division `/= 10` until the value is less than 10. Note that in the user's file `dignum.java`, the labels are swapped: first is printed as last, and last as first!",
        pseudo: `1. START
2. Read N
3. last = N % 10
4. WHILE N >= 10 DO:
     N = N / 10
5. first = N
6. Print first, last
7. END`,
        flow: "flowchart TD\n A([Start]) --> B[/Input N/]\n B --> C[last = N % 10]\n C --> D{N >= 10?}\n D -- Yes --> E[N = N / 10]\n E --> D\n D -- No --> F[first = N]\n F --> G[/Print first, last/] --> H([End])"
    },
    { 
        q: "Q19", file: "day03/dignum.java", desc: "Find the sum of the first and last digit of a number",
        concept: "Isolating boundary digits and adding them together.",
        pro: "For single-digit numbers, the first and last digits are the exact same value. The sum will be double the digit itself.",
        pseudo: `1. START
2. Read N
3. last = N % 10
4. WHILE N >= 10 DO:
     N = N / 10
5. first = N
6. sum = first + last
7. Print sum
8. END`,
        flow: "flowchart LR\n A[/Input N/] --> B[last = N % 10] & C[Divide to find first]\n B & C --> D[sum = first + last]\n D --> E[/Print sum/]"
    },
    { 
        q: "Q20", file: "day03/dignum.java", desc: "Swap first and last digits of a number",
        concept: "Extracting the head and tail of an integer, then recombining them with the middle digits.",
        pro: "Formula: `last * 10^(digits-1) + middle_digits + first`. The middle digits are extracted via modular arithmetic: `(temp % 10^(digits-1)) / 10 * 10`.",
        pseudo: `1. START
2. Read N, Find digits count
3. last = N % 10
4. first = N / 10^(digits-1)
5. middle = (N % 10^(digits-1)) / 10 * 10
6. swapped = last * 10^(digits-1) + middle + first
7. Print swapped
8. END`,
        flow: "flowchart TD\n A[/Input N (e.g. 345)/] --> B[last = 5, first = 3, count = 3]\n B --> C[middle = (345 % 100) / 10 * 10 = 40]\n C --> D[swapped = 5 * 100 + 40 + 3 = 543]\n D --> E[/Print swapped/]"
    },
    { 
        q: "Q21", file: "day03/prime.java", desc: "Check Number Is Prime Number or Not",
        concept: "Testing divisibility of a number from 2 to n-1.",
        pro: "To optimize, only loop from 2 to $\\sqrt{N}$. If no factor is found in that range, the number is guaranteed to be prime. Numbers <= 1 are not prime.",
        pseudo: `1. START
2. Read N, Set count = 0
3. FOR i = 2 TO N-1 DO:
     IF N % i == 0 THEN:
       count = count + 1
4. IF count == 0 AND N > 1 THEN:
     Print "Prime"
   ELSE:
     Print "Not Prime"
5. END`,
        flow: "flowchart TD\n A([Start]) --> B[/Input N/]\n B --> C[count = 0, i = 2]\n C --> D{i < N?}\n D -- Yes --> E{N % i == 0?}\n E -- Yes --> F[count++]\n E -- No --> G[i++]\n F --> G\n G --> D\n D -- No --> H{count > 0?}\n H -- Yes --> I[/Not Prime/]\n H -- No --> J[/Prime/]"
    },
    { 
        q: "Q22", file: "day03/perfect.java", desc: "Check Number Is Perfect Number or Not",
        concept: "Checking if a positive integer is equal to the sum of its proper divisors.",
        pro: "Perfect numbers are very rare (6, 28, 496, 8128). An optimized divisor search runs in O($\\sqrt{N}$) by adding both `i` and `N/i` to the sum at the same time.",
        pseudo: `1. START
2. Read N, Set sum = 0, i = 1
3. WHILE i < N DO:
     IF N % i == 0 THEN:
       sum = sum + i
     i = i + 1
4. IF sum == N THEN:
     Print "Perfect"
   ELSE:
     Print "Not Perfect"
5. END`,
        flow: "flowchart TD\n A([Start]) --> B[/Input N/]\n B --> C[sum = 0, i = 1]\n C --> D{i < N?}\n D -- Yes --> E{N % i == 0?}\n E -- Yes --> F[sum += i]\n E -- No --> G[i++]\n F --> G\n G --> D\n D -- No --> H{sum == N?}\n H -- Yes --> I[/Perfect/]\n H -- No --> J[/Not Perfect/]"
    },
    { 
        q: "Q23", file: "day03/duck.java", desc: "Check Number Is Duck Number or Not",
        concept: "Identifying if a number contains a zero digit that is not a leading zero.",
        pro: "In the user's `duck.java`, the check is `n.charAt(i) == 0`. This is a bug because it compares to the ASCII null character instead of the character `'0'`. Correct code compares to `'0'`.",
        pseudo: `1. START
2. Read N as String
3. Set i = 1, isDuck = false
4. WHILE i < length(N) DO:
     IF charAt(N, i) == '0' THEN:
       isDuck = true
       BREAK
     i = i + 1
5. IF isDuck == true THEN Print "Duck" ELSE Print "Not Duck"
6. END`,
        flow: "flowchart TD\n A([Start]) --> B[/Read N as String/]\n B --> C[i = 1]\n C --> D{i < length?}\n D -- Yes --> E{N.charAt(i) == '0'?}\n E -- Yes --> F[/Duck Number/]\n E -- No --> G[i++]\n G --> D\n D -- No --> H[/Not Duck/]"
    },
    { 
        q: "Q24", file: "day03/strong.java", desc: "Check Number Is Strong Number or Not",
        concept: "Summing factorials of individual digits and checking if the sum equals the original number.",
        pro: "In `strong.java`, the file only calculates the factorial of the entire input. A true strong check requires mapping each digit to its factorial (precomputing 0! to 9! in an array makes it extremely fast).",
        pseudo: `1. START
2. Read N, Set temp = N, sum = 0
3. WHILE temp > 0 DO:
     d = temp % 10
     sum = sum + factorial(d)
     temp = temp / 10
4. IF sum == N THEN Print "Strong" ELSE Print "Not Strong"
5. END`,
        flow: "flowchart TD\n A([Start]) --> B[/Input N/]\n B --> C[temp = N, sum = 0]\n C --> D{temp > 0?}\n D -- Yes --> E[d = temp % 10]\n E --> F[sum += factorial of d]\n F --> G[temp /= 10]\n G --> D\n D -- No --> H{sum == N?}\n H -- Yes --> I[/Strong/]\n H -- No --> J[/Not Strong/]"
    },
    { 
        q: "Q25", file: "day03/armstrong.java", desc: "Check Number Is Armstrong Number or Not",
        concept: "Summing the digits raised to the power of the total number of digits, then comparing with the original value.",
        pro: "First count the digits (say `count`). Then raise each digit to the power of `count`. Be careful with floating-point inaccuracies when casting `Math.pow()` to `int`.",
        pseudo: `1. START
2. Read N, count = digitsCount(N), temp = N, sum = 0
3. WHILE temp > 0 DO:
     d = temp % 10
     sum = sum + Math.pow(d, count)
     temp = temp / 10
4. IF sum == N THEN Print "Armstrong" ELSE Print "Not Armstrong"
5. END`,
        flow: "flowchart TD\n A([Start]) --> B[/Input N/]\n B --> C[count = digit count, temp = N, sum = 0]\n C --> D{temp > 0?}\n D -- Yes --> E[d = temp % 10]\n E --> F[sum += d ^ count]\n F --> G[temp /= 10]\n G --> D\n D -- No --> H{sum == N?}\n H -- Yes --> I[/Armstrong/]\n H -- No --> J[/Not Armstrong/]"
    }
];

const day3Patterns = [
    { 
        q: "Pattern 1", file: "day03/p1.java", desc: "1 to i Increasing Number Triangle",
        concept: "Inner loop bounds depend on outer loop variable `i`.",
        pro: "Outer loop tracks row `i` from 1 to 5. Inner loop tracks column `j` from 1 to `i`, printing column values sequentially.",
        pseudo: `1. START
2. FOR i = 1 TO 5 DO:
     FOR j = 1 TO i DO:
       Print j
     Print Newline
3. END`,
        flow: "flowchart TD\n A([Start]) --> B[i = 1]\n B --> C{i <= 5?}\n C -- Yes --> D[j = 1]\n D --> E{j <= i?}\n E -- Yes --> F[/Print j/]\n F --> G[j++]\n G --> E\n E -- No --> H[/Print Newline/]\n H --> I[i++]\n I --> C\n C -- No --> J([End])"
    },
    { 
        q: "Pattern 2", file: "day03/p1.java", desc: "1 to i Decreasing Number Triangle",
        concept: "Running the outer loop counter backwards to shrink the column boundaries.",
        pro: "Outer loop goes from 5 down to 1 (`i--`). Inner loop goes from 1 to `i`. This shrinks the width of each row sequentially.",
        pseudo: `1. START
2. FOR i = 5 DOWNTO 1 DO:
       FOR j = 1 TO i DO:
         Print j
       Print Newline
3. END`,
        flow: "flowchart TD\n A([Start]) --> B[i = 5]\n B --> C{i >= 1?}\n C -- Yes --> D[j = 1]\n D --> E{j <= i?}\n E -- Yes --> F[/Print j/]\n F --> G[j++]\n G --> E\n E -- No --> H[/Print Newline/]\n H --> I[i--]\n I --> C\n C -- No --> J([End])"
    },
    { 
        q: "Pattern 3", file: "day03/p1.java", desc: "Increasing Star Triangle",
        concept: "Triangular layout displaying standard literal symbols.",
        pro: "Prints a constant string value `'* '` instead of numerical loop counters inside the triangular loop bounds.",
        pseudo: `1. START
2. FOR i = 1 TO 5 DO:
     FOR j = 1 TO i DO:
       Print "* "
     Print Newline
3. END`,
        flow: "flowchart TD\n A([Start]) --> B[i = 1]\n B --> C{i <= 5?}\n C -- Yes --> D[j = 1]\n D --> E{j <= i?}\n E -- Yes --> F[/Print '* '/]\n F --> G[j++]\n G --> E\n E -- No --> H[/Print Newline/]\n H --> I[i++]\n I --> C\n C -- No --> J([End])"
    },
    { 
        q: "Pattern 4", file: "day03/p1.java", desc: "Decreasing Star Triangle",
        concept: "Decreasing row boundaries printing symbolic literals.",
        pro: "Renders an inverted star triangle using outer counter decrement `i--` and symbol printing.",
        pseudo: `1. START
2. FOR i = 5 DOWNTO 1 DO:
     FOR j = 1 TO i DO:
       Print "* "
     Print Newline
3. END`,
        flow: "flowchart TD\n A([Start]) --> B[i = 5]\n B --> C{i >= 1?}\n C -- Yes --> D[j = 1]\n D --> E{j <= i?}\n E -- Yes --> F[/Print '* '/]\n F --> G[j++]\n G --> E\n E -- No --> H[/Print Newline/]\n H --> I[i--]\n I --> C\n C -- No --> J([End])"
    },
    { 
        q: "Pattern 5", file: "day03/p1.java", desc: "Increasing Character Triangle (A to G)",
        concept: "Character loop progression using char bounds.",
        pro: "Outer loop character ranges from 'A' to 'G', while inner loop prints characters from 'A' up to the current outer row char `a`.",
        pseudo: `1. START
2. FOR a = 'A' TO 'G' DO:
     FOR b = 'A' TO a DO:
       Print b
     Print Newline
3. END`,
        flow: "flowchart TD\n A([Start]) --> B[a = 'A']\n B --> C{a <= 'G'?}\n C -- Yes --> D[b = 'A']\n D --> E{b <= a?}\n E -- Yes --> F[/Print b/]\n F --> G[b++]\n G --> E\n E -- No --> H[/Print Newline/]\n H --> I[a++]\n I --> C\n C -- No --> J([End])"
    },
    { 
        q: "Pattern 6", file: "day03/p1.java", desc: "Decreasing Character Triangle (G down to A)",
        concept: "Decreasing character outer boundary loops with alphabetical print rows.",
        pro: "Outer loop is decremented from 'G' to 'A' using `a--` to shrink column ranges.",
        pseudo: `1. START
2. FOR a = 'G' DOWNTO 'A' DO:
     FOR b = 'A' TO a DO:
       Print b
     Print Newline
3. END`,
        flow: "flowchart TD\n A([Start]) --> B[a = 'G']\n B --> C{a >= 'A'?}\n C -- Yes --> D[b = 'A']\n D --> E{b <= a?}\n E -- Yes --> F[/Print b/]\n F --> G[b++]\n G --> E\n E -- No --> H[/Print Newline/]\n H --> I[a--]\n I --> C\n C -- No --> J([End])"
    },
    { 
        q: "Pattern 7", file: "day03/p1.java", desc: "Centered Star Pyramid with Spaces",
        concept: "Multiple nested loop operations dividing column print between empty spacing and star characters.",
        pro: "The space loop prints `5-i` spaces. The star loop prints `i` stars with trailing spaces, creating a perfectly balanced pyramid.",
        pseudo: `1. START
2. FOR i = 1 TO 5 DO:
     FOR j = 1 TO (5 - i) DO:
       Print " "
     FOR k = 1 TO i DO:
       Print "* "
     Print Newline
3. END`,
        flow: "flowchart TD\n A([Start]) --> B[i = 1]\n B --> C{i <= 5?}\n C -- Yes --> D[j = 1]\n D --> E{j < 5-i?}\n E -- Yes --> F[/Print ' '/]\n F --> G[j++]\n G --> E\n E -- No --> H[k = 1]\n H --> I{k <= i?}\n I -- Yes --> J[/Print '* '/]\n J --> K[k++]\n K --> I\n I -- No --> L[/Print Newline/]\n L --> M[i++]\n M --> C\n C -- No --> N([End])"
    },
    { 
        q: "Pattern 8", file: "day03/p1.java", desc: "Centered Number Pyramid with Spaces",
        concept: "Applying centered empty space loops followed by number iterations.",
        pro: "Generates a centered pyramid containing column indices rather than literal symbols. Combines spacing with numeric loops.",
        pseudo: `1. START
2. FOR i = 1 TO 5 DO:
     FOR j = 1 TO (5 - i) DO:
       Print " "
     FOR k = 1 TO i DO:
       Print k + " "
     Print Newline
3. END`,
        flow: "flowchart TD\n A([Start]) --> B[i = 1]\n B --> C{i <= 5?}\n C -- Yes --> D[j = 1]\n D --> E{j < 5-i?}\n E -- Yes --> F[/Print ' '/]\n F --> G[j++]\n G --> E\n E -- No --> H[k = 1]\n H --> I{k <= i?}\n I -- Yes --> J[/Print k + ' '/]\n J --> L[k++]\n L --> I\n I -- No --> M[/Print Newline/]\n M --> N[i++]\n N --> C\n C -- No --> O([End])"
    }
];

function createCard(item) {
    const card = document.createElement('div');
    const rot = (Math.random() - 0.5) * 5;
    card.className = 'card sketchy-border';
    card.style.transform = `rotate(${rot}deg)`;
    
    card.innerHTML = `
        <div class="card-qnum">${item.q}</div>
        <div class="card-desc">${item.desc}</div>
        <div class="card-file">📄 ${item.file}</div>
    `;
    
    card.addEventListener('click', () => openModal(item));
    item.domElement = card; // Store reference for search filtering
    return card;
}

const day1Grid = document.getElementById('day1-grid');
const day2Grid = document.getElementById('day2-grid');
const day3Grid = document.getElementById('day3-grid');
const day3PatternsGrid = document.getElementById('day3-patterns-grid');

day1Problems.forEach(p => day1Grid.appendChild(createCard(p)));
day2Problems.forEach(p => day2Grid.appendChild(createCard(p)));
day3Problems.forEach(p => day3Grid.appendChild(createCard(p)));
day3Patterns.forEach(p => day3PatternsGrid.appendChild(createCard(p)));

const allProblems = [...day1Problems, ...day2Problems, ...day3Problems, ...day3Patterns];
let currentProblemIndex = -1;

// Live Search Functionality
document.getElementById('search-bar').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    allProblems.forEach(item => {
        const textToSearch = `${item.q} ${item.desc} ${item.concept} ${item.pro} ${item.file}`.toLowerCase();
        
        if (query === "") {
            item.domElement.classList.remove('hidden', 'highlight');
        } else if (textToSearch.includes(query)) {
            item.domElement.classList.remove('hidden');
            item.domElement.classList.add('highlight');
        } else {
            item.domElement.classList.add('hidden');
            item.domElement.classList.remove('highlight');
        }
    });
});

const modal = document.getElementById('modal-overlay');

async function openModal(item) {
    currentProblemIndex = allProblems.indexOf(item);
    
    document.getElementById('modal-title').innerText = item.q + ": " + item.desc;
    document.getElementById('modal-concept').innerText = item.concept;
    document.getElementById('modal-pro').innerText = item.pro;
    document.getElementById('modal-pseudo').innerText = item.pseudo || "1. START\n2. Logic analysis in progress...\n3. END";
    
    const fileLink = document.getElementById('modal-file');
    fileLink.innerText = "View on GitHub: " + item.file;
    fileLink.href = "https://github.com/SurajsinghBayas/ppw/blob/main/" + item.file;
    
    // Inject Mermaid Flowchart
    const flowchartContainer = document.getElementById('modal-flowchart');
    flowchartContainer.innerHTML = '<i>Loading diagram...</i>'; 
    
    if (item.flow) {
        try {
            const uniqueId = 'mermaid-svg-' + Date.now();
            const { svg } = await mermaid.render(uniqueId, item.flow);
            flowchartContainer.innerHTML = svg;
        } catch (e) {
            console.error("Mermaid rendering error", e);
            flowchartContainer.innerHTML = "<p style='color:red;'>Visual coming soon...</p>";
        }
    } else {
        flowchartContainer.innerHTML = "<p>Flowchart coming soon...</p>";
    }
    
    modal.style.display = 'flex';
    document.body.classList.add('modal-open');
}

function closeModal() {
    modal.style.display = 'none';
    document.body.classList.remove('modal-open');
}

document.getElementById('close-modal').addEventListener('click', closeModal);

window.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
});

// Keyboard Navigation for Modals
document.addEventListener('keydown', (e) => {
    if (modal.style.display === 'flex') {
        if (e.key === 'Escape') {
            closeModal();
        } else if (e.key === 'ArrowRight' && currentProblemIndex < allProblems.length - 1) {
            openModal(allProblems[currentProblemIndex + 1]);
        } else if (e.key === 'ArrowLeft' && currentProblemIndex > 0) {
            openModal(allProblems[currentProblemIndex - 1]);
        }
    }
});
