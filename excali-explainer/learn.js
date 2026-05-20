const curriculum = [
    {
        id: "sec-1",
        q: "1. Basic Syntax & Hello World",
        desc: "Classes, Methods, and Structure",
        concept: "Every line of code that can actually run in Java needs to be inside a Class. To make the program executable, you need the legendary `public static void main` method.",
        pro: "The main method must be `static` so the Java Virtual Machine (JVM) can invoke it without instantiating the class. The JVM converts Bytecode into native machine code.",
        code: `// 1. Every Java file requires a class matching the filename
public class Main {
    
    // 2. The entry point of EVERY Java application
    // public: Accessible from anywhere
    // static: Can be called without creating an object
    // void: Returns no value
    // String[] args: Command-line arguments
    public static void main(String[] args) {
        
        // 3. Printing to the console
        System.out.println("Hello, World!"); // Prints with a newline
        System.out.print("No newline here. "); // Prints without newline
        System.out.printf("Formatted %s!", "String"); // C-style formatting
    }
}`,
        visualHtml: `
            <div class="visual-box" style="border-color: #e74c3c;"><b>File: Main.java</b><br><span style="font-size:1rem;">public class Main {...}</span></div>
            <div class="visual-arrow">➔ compiles to ➔</div>
            <div class="visual-box" style="border-color: #f1c40f;"><b>Bytecode: Main.class</b></div>
            <div class="visual-arrow">➔ executes on ➔</div>
            <div class="visual-box" style="border-color: #2ecc71;"><b>JVM</b></div>
        `
    },
    {
        id: "sec-2",
        q: "2. Data Types & Memory",
        desc: "Primitives vs References",
        concept: "Primitives (int, float, boolean) hold simple values directly. References (String, Objects) hold memory addresses pointing to complex data.",
        pro: "Primitives live in the Thread Stack (extremely fast). Objects live in the Heap Memory (managed by the Garbage Collector).",
        code: `// --- 1. Primitive Types (Fast, stored in Stack) ---
byte b = 127;           // 1 byte (-128 to 127)
short s = 32000;        // 2 bytes
int i = 2147483647;     // 4 bytes (Standard integer)
long l = 9223372036854775807L; // 8 bytes (Append 'L')

float f = 3.14f;        // 4 bytes (Append 'f')
double d = 3.14159265;  // 8 bytes (Standard decimal)

char c = 'A';           // 2 bytes (Unicode character)
boolean bool = true;    // 1 bit (true or false)

// --- 2. Reference Types (Objects, stored in Heap) ---
String text = "Hello";  // String literal (String Pool)
int[] numbers = {1, 2}; // Arrays are Objects in Java!
Object obj = new Object(); // Generic Object`,
        visualHtml: `
            <div class="visual-box" style="border-color: #3498db; width: 40%;"><h3>The Stack</h3><hr style="border:1px dashed #3498db;"><p>int age = <b>25</b>;</p><p>String name = <b>[Ref 0x1A]</b>;</p></div>
            <div class="visual-arrow">🔗 points to ➔</div>
            <div class="visual-box" style="border-color: #9b59b6; width: 40%;"><h3>The Heap</h3><hr style="border:1px dashed #9b59b6;"><p>[0x1A] -> <b>"Java"</b></p></div>
        `
    },
    {
        id: "sec-3",
        q: "3. Operators",
        desc: "Math, Logic, and Bitwise",
        concept: "Operators manipulate variables. Arithmetic (+, -), Relational (==, >), Logical (&&, ||), and Bitwise (&, |, ^).",
        pro: "Bitwise operators operate directly on the binary representation of numbers and are exponentially faster than standard arithmetic.",
        code: `int a = 10, b = 5;

// Arithmetic
int sum = a + b; // 15
int mod = a % b; // 0 (Remainder of division)

// Relational (Returns boolean)
boolean isEqual = (a == b); // false
boolean isNotEq = (a != b); // true

// Logical (Short-circuiting)
boolean and = (a > 5 && b < 10); // true (Both must be true)
boolean or = (a > 20 || b < 10); // true (One must be true)
boolean not = !(a == 10); // false

// Ternary (Short if-else)
String result = (a > b) ? "A is bigger" : "B is bigger";

// Bitwise (Advanced binary ops)
int bitAnd = a & b; // 0 (1010 AND 0101 = 0000)`,
        visualHtml: `
            <div class="visual-box" style="border-color: #e67e22;"><b>Arithmetic</b><br>+ - * / %</div>
            <div class="visual-box" style="border-color: #3498db;"><b>Relational</b><br>== != > < >= <=</div>
            <div class="visual-box" style="border-color: #2ecc71;"><b>Logical</b><br>&& || !</div>
            <div class="visual-box" style="border-color: #9b59b6;"><b>Bitwise</b><br>& | ^ ~ << >></div>
        `
    },
    {
        id: "sec-4",
        q: "4. Control Flow",
        desc: "If/Else and Switch Statements",
        concept: "Conditionals fork the path of execution based on boolean logic.",
        pro: "A `switch` compiles to a `tableswitch` in bytecode, giving O(1) jump time, making it faster than long if-else ladders.",
        code: `int score = 85;

// If - Else If - Else Ladder
if (score >= 90) {
    System.out.println("Grade: A");
} else if (score >= 80) {
    System.out.println("Grade: B");
} else {
    System.out.println("Grade: C");
}

// Traditional Switch Statement
int day = 2;
switch (day) {
    case 1: 
        System.out.println("Monday"); 
        break; // Crucial! Prevents "fall-through"
    case 2: 
        System.out.println("Tuesday"); 
        break;
    default: 
        System.out.println("Weekend");
}

// Enhanced Switch (Java 14+) - Returns a value directly!
String type = switch(day) {
    case 1, 2, 3, 4, 5 -> "Weekday";
    case 6, 7 -> "Weekend";
    default -> "Invalid";
};`,
        visualHtml: `
            <div style="display:flex; flex-direction:column; align-items:center;">
                <div class="visual-box" style="border-color: #f1c40f;">Check Condition</div>
                <div style="display:flex; gap: 2rem; margin-top:1rem;">
                    <div style="text-align:center;"><b style="color:#2ecc71">True</b><br>⬇<br><div class="visual-box" style="border-color:#2ecc71">Path A</div></div>
                    <div style="text-align:center;"><b style="color:#e74c3c">False</b><br>⬇<br><div class="visual-box" style="border-color:#e74c3c">Path B</div></div>
                </div>
            </div>
        `
    },
    {
        id: "sec-5",
        q: "5. Loops & Iteration",
        desc: "For, While, Do-While",
        concept: "Loops repeat a block of code. `for` is best when you know exact iterations. `while` is best for condition-based looping.",
        pro: "The `do-while` loop is guaranteed to execute at least ONE time, because the condition is checked at the bottom of the loop.",
        code: `// 1. For Loop (Used when iterations are known)
for (int i = 0; i < 5; i++) {
    if (i == 2) continue; // Skips to next iteration
    if (i == 4) break;    // Exits loop entirely
    System.out.println(i);
}

// 2. Enhanced For Loop (For-Each) - Great for arrays/collections
int[] nums = {10, 20, 30};
for (int n : nums) {
    System.out.println(n);
}

// 3. While Loop (Used when iterations are unknown)
int count = 0;
while (count < 3) {
    System.out.println("Count: " + count);
    count++;
}

// 4. Do-While Loop (Guaranteed to execute at least ONCE)
do {
    System.out.println("I run once even if condition is false!");
} while (false);`,
        visualHtml: `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 1rem;">
                <div class="visual-box" style="border-radius: 50%;">Start Loop</div>
                <div class="visual-arrow">⬇</div>
                <div class="visual-box" style="border-color: #e67e22;">Condition met?</div>
                <div style="display: flex; gap: 3rem; margin-top: 1rem;">
                    <div style="text-align: center;"><b style="color: #2ecc71;">YES</b><br>➔<br><div class="visual-box">Run Body</div></div>
                    <div style="text-align: center;"><b style="color: #e74c3c;">NO</b><br>➔<br><div class="visual-box">Exit</div></div>
                </div>
            </div>
        `
    },
    {
        id: "sec-6",
        q: "6. Methods & Scope",
        desc: "Parameters, Return Types, Pass-by-Value",
        concept: "Methods group code into reusable blocks. They can take inputs (parameters) and give back an output (return).",
        pro: "Java is STRICTLY Pass-by-Value. Even for objects, it passes the *value of the reference*, meaning you can mutate an object inside a method, but you can't reassign the original pointer.",
        code: `// public: Access Modifier
// static: Belongs to class (no object needed)
// int: Return Type (must return an integer)
// a, b: Parameters
public static int add(int a, int b) {
    return a + b;
}

// Method Overloading: Same name, different parameters!
public static double add(double a, double b) {
    return a + b;
}

// VarArgs (Variable Arguments) - Can pass any number of ints
public static int sumAll(int... numbers) {
    int sum = 0;
    for (int n : numbers) {
        sum += n;
    }
    return sum;
}`,
        visualHtml: `
            <div class="visual-box" style="border-color: #3498db;"><b>Input</b><br>(Arguments)</div>
            <div class="visual-arrow">➔</div>
            <div class="visual-box" style="border-color: #e67e22; border-radius: 50%;"><b>Method</b><br>(Black Box)</div>
            <div class="visual-arrow">➔</div>
            <div class="visual-box" style="border-color: #2ecc71;"><b>Output</b><br>(Return Value)</div>
        `
    },
    {
        id: "sec-7",
        q: "7. Object Oriented (OOP)",
        desc: "Classes and Objects",
        concept: "A Class is a blueprint. An Object is the actual instance created from that blueprint. Objects have state (variables) and behavior (methods).",
        pro: "Memory isn't allocated for a class. The `new` keyword dynamically allocates heap memory and calls the Constructor method.",
        code: `// 1. The Blueprint (Class)
class Car {
    // State (Fields/Properties)
    String color;
    int speed;

    // Constructor (Called when 'new' is used)
    public Car(String color, int speed) {
        this.color = color; // 'this' refers to current object
        this.speed = speed;
    }

    // Behavior (Methods)
    public void drive() { 
        System.out.println("The " + color + " car goes VROOM!"); 
    }
}

// 2. Creating the Instance (Object)
public class Main {
    public static void main(String[] args) {
        Car myCar = new Car("Red", 120); // 'new' allocates memory
        myCar.drive(); // Outputs: The Red car goes VROOM!
    }
}`,
        visualHtml: `
            <div class="visual-box" style="border-color: #34495e;"><h3>Class Blueprint</h3></div>
            <div class="visual-arrow">🍪 new ➔</div>
            <div style="display: flex; flex-direction: column; gap: 1rem;">
                <div class="visual-box" style="border-color: #d35400;">Object Instance 1</div>
                <div class="visual-box" style="border-color: #d35400;">Object Instance 2</div>
            </div>
        `
    },
    {
        id: "sec-8",
        q: "8. The 4 Pillars of OOP",
        desc: "Encapsulation, Inheritance, Poly, Abstraction",
        concept: "Encapsulation (Hiding data), Inheritance (Sharing code), Polymorphism (Many forms), Abstraction (Hiding complexity).",
        pro: "Java avoids the 'Diamond Problem' of multiple inheritance by strictly limiting classes to extend only ONE parent.",
        code: `class Animal { void sound() {} }
class Dog extends Animal { 
    @Override void sound() { System.out.println("Bark"); } 
}`,
        visualHtml: `
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem; width: 100%;">
                <div class="visual-box" style="border-color: #e74c3c;">🔒 <b>Encapsulation</b></div>
                <div class="visual-box" style="border-color: #3498db;">🧬 <b>Inheritance</b></div>
                <div class="visual-box" style="border-color: #2ecc71;">🎭 <b>Polymorphism</b></div>
                <div class="visual-box" style="border-color: #9b59b6;">☁️ <b>Abstraction</b></div>
            </div>
        `
    },
    {
        id: "sec-9",
        q: "9. Access Modifiers",
        desc: "Public, Private, Protected, Default",
        concept: "Modifiers set visibility rules. `private` means only the class can see it. `public` means the whole world can.",
        pro: "Always default to `private` for variables. Only expose what is necessary via Getter/Setter methods. This protects data integrity.",
        code: `public class Bank {
    private double balance; // Hidden!
    public double getBalance() { return balance; } // Safe access
}`,
        visualHtml: `
            <div class="visual-box" style="border-color: #2ecc71;">🟢 <b>Public</b><br>Everywhere</div>
            <div class="visual-box" style="border-color: #f1c40f;">🟡 <b>Protected</b><br>Package & Subclasses</div>
            <div class="visual-box" style="border-color: #e67e22;">🟠 <b>Default</b><br>Package only</div>
            <div class="visual-box" style="border-color: #e74c3c;">🔴 <b>Private</b><br>Class only</div>
        `
    },
    {
        id: "sec-10",
        q: "10. Interfaces & Abstracts",
        desc: "Defining Contracts",
        concept: "An Interface is a contract that says 'Any class that uses me MUST have these specific methods'.",
        pro: "Java 8+ allows `default` methods inside Interfaces, which provides actual implementation and breaks the old 'pure abstraction' rule.",
        code: `interface Playable {
    void play(); // Abstract by default
}
class Game implements Playable {
    public void play() { System.out.println("Playing"); }
}`,
        visualHtml: `
            <div class="visual-box" style="border-color: #8e44ad; border-style: dashed;"><b>Interface (Contract)</b><br>play()</div>
            <div class="visual-arrow">➔ forces ➔</div>
            <div class="visual-box" style="border-color: #2980b9;"><b>Class A</b><br>Implements play()</div>
            <div class="visual-box" style="border-color: #16a085;"><b>Class B</b><br>Implements play()</div>
        `
    },
    {
        id: "sec-11",
        q: "11. Exceptions",
        desc: "Try, Catch, and Finally",
        concept: "When something goes wrong, Java throws an Exception. Try-Catch blocks catch the error so the program doesn't crash.",
        pro: "Never use Try-Catch for normal control flow. Generating the stack trace for an exception pauses the thread and is highly expensive.",
        code: `try {
    int x = 10 / 0;
} catch (Exception e) {
    System.out.println("Error!");
} finally {
    System.out.println("Cleanup");
}`,
        visualHtml: `
            <div class="visual-box" style="border-color: #27ae60;"><b>TRY</b></div>
            <div class="visual-arrow">⚡ Error! ➔</div>
            <div class="visual-box" style="border-color: #e74c3c;"><b>CATCH</b></div>
            <div class="visual-arrow">➔</div>
            <div class="visual-box" style="border-color: #f39c12;"><b>FINALLY</b></div>
        `
    },
    {
        id: "sec-12",
        q: "12. Arrays & Matrices",
        desc: "Fixed Size Data Storage",
        concept: "Arrays hold multiple values of the same type sequentially in memory. Matrices are arrays of arrays (2D).",
        pro: "Because Arrays represent a single contiguous block of heap memory, iterating over them leverages CPU cache lines incredibly efficiently compared to Linked Lists.",
        code: `int[] numbers = {1, 2, 3, 4};
int[][] matrix = { {1,2}, {3,4} };`,
        visualHtml: `
            <div class="visual-box" style="border-color: #2980b9;">
                <b>1D Array Memory</b><br>
                <div style="display:flex; border:1px solid #ccc; margin-top:10px;"><div style="padding:10px; border-right:1px solid #ccc;">1</div><div style="padding:10px; border-right:1px solid #ccc;">2</div><div style="padding:10px;">3</div></div>
            </div>
        `
    },
    {
        id: "sec-13",
        q: "13. Collections Framework",
        desc: "Lists, Sets, Maps",
        concept: "The Collections API provides dynamic data structures. Lists are ordered. Sets are unique. Maps are Key-Value pairs.",
        pro: "HashMap uses a hashing algorithm to retrieve data in O(1) constant time, making it incredibly fast for lookups.",
        code: `List<String> list = new ArrayList<>();
Set<Integer> unique = new HashSet<>();
Map<String, String> dict = new HashMap<>();`,
        visualHtml: `
            <div style="display:flex; gap:1rem; width:100%;">
                <div class="visual-box" style="border-color: #3498db; flex: 1;"><h3>List</h3><p>[A, B, A]</p></div>
                <div class="visual-box" style="border-color: #e74c3c; flex: 1;"><h3>Set</h3><p>{A, B}</p></div>
                <div class="visual-box" style="border-color: #9b59b6; flex: 1;"><h3>Map</h3><p>{ID ➔ "Bob"}</p></div>
            </div>
        `
    },
    {
        id: "sec-14",
        q: "14. Generics",
        desc: "Type Safety (<T>)",
        concept: "Generics allow you to write a class or method that can work with ANY data type while maintaining strict compile-time type safety.",
        pro: "Due to 'Type Erasure', Java actually deletes generic types at compile time for backward compatibility. At runtime, a List<String> is just a raw List of Objects.",
        code: `class Box<T> {
    T item;
    void set(T item) { this.item = item; }
}
Box<String> box = new Box<>();`,
        visualHtml: `
            <div class="visual-box" style="border-color: #e67e22;"><b>List&lt;?&gt;</b> (Unsafe)</div>
            <div class="visual-arrow">Generics ➔</div>
            <div class="visual-box" style="border-color: #2ecc71;"><b>List&lt;String&gt;</b> (Safe)</div>
        `
    },
    {
        id: "sec-15",
        q: "15. File I/O",
        desc: "Reading and Writing Streams",
        concept: "Input/Output operations treat data as a continuous 'Stream' of bytes flowing in (reading a file) or out (writing).",
        pro: "Always wrap basic FileReaders in a BufferedReader. Hitting the hard drive for every single byte is incredibly slow. Buffers read huge chunks into RAM at once.",
        code: `try (BufferedReader br = new BufferedReader(new FileReader("file.txt"))) {
    String line = br.readLine();
}`,
        visualHtml: `
            <div class="visual-box" style="border-color: #34495e;"><b>Hard Drive</b></div>
            <div class="visual-arrow">➔ Buffer ➔</div>
            <div class="visual-box" style="border-color: #e74c3c;"><b>RAM</b></div>
            <div class="visual-arrow">➔ Stream ➔</div>
            <div class="visual-box" style="border-color: #27ae60;"><b>Your Program</b></div>
        `
    },
    {
        id: "sec-16",
        q: "16. Multithreading",
        desc: "Threads and Synchronization",
        concept: "Multithreading allows multiple parts of your program to run concurrently (at the exact same time) on different CPU cores.",
        pro: "If two threads try to modify the same variable simultaneously, it causes a Race Condition. You must use the `synchronized` keyword to lock the memory.",
        code: `Thread t1 = new Thread(() -> {
    System.out.println("Running parallel");
});
t1.start();`,
        visualHtml: `
            <div class="visual-box" style="border-color: #2c3e50;"><b>Main Thread</b><hr>Running App</div>
            <div style="display:flex; flex-direction:column;">
                <div class="visual-arrow" style="transform: rotate(-30deg);">➔</div>
                <div class="visual-arrow" style="transform: rotate(30deg);">➔</div>
            </div>
            <div style="display:flex; flex-direction:column; gap:1rem;">
                <div class="visual-box" style="border-color: #3498db;"><b>Worker Thread 1</b></div>
                <div class="visual-box" style="border-color: #e74c3c;"><b>Worker Thread 2</b></div>
            </div>
        `
    },
    {
        id: "sec-17",
        q: "17. Java 8+ Features",
        desc: "Lambdas and Streams API",
        concept: "Lambdas are short, anonymous functions. The Streams API allows you to process Collections using functional operations like map() and filter().",
        pro: "Streams abstract away loops. They can also be parallelized instantly (`list.parallelStream()`), giving you massive performance boosts on multi-core CPUs for free.",
        code: `List<Integer> list = Arrays.asList(1,2,3,4);
list.stream()
    .filter(n -> n % 2 == 0)
    .forEach(System.out::println);`,
        visualHtml: `
            <div class="visual-box" style="border-color: #f1c40f;"><b>Collection</b></div>
            <div class="visual-arrow">➔ stream() ➔</div>
            <div class="visual-box" style="border-color: #e67e22;"><b>.filter()</b></div>
            <div class="visual-arrow">➔</div>
            <div class="visual-box" style="border-color: #e74c3c;"><b>.map()</b></div>
            <div class="visual-arrow">➔</div>
            <div class="visual-box" style="border-color: #2ecc71;"><b>.collect()</b></div>
        `
    },
    {
        id: "sec-18",
        q: "18. Event Handling",
        desc: "Listening for User Actions (AWT/Swing)",
        concept: "When a user clicks a button, the system fires an 'Event'. Your code 'listens' for this and executes a callback method.",
        pro: "If you do heavy math or network calls inside an Event Listener, the entire UI thread freezes! Always pass heavy tasks to a background thread.",
        code: `JButton btn = new JButton("Click Me");
btn.addActionListener(e -> {
    System.out.println("Clicked!");
});`,
        visualHtml: `
            <div class="visual-box" style="border-color: #2980b9;">🔘 <b>Button</b></div>
            <div class="visual-arrow">📢 Event ➔</div>
            <div class="visual-box" style="border-color: #8e44ad;"><b>Dispatcher</b></div>
            <div class="visual-arrow">➔</div>
            <div class="visual-box" style="border-color: #27ae60;"><b>ActionListener</b></div>
        `
    },
    {
        id: "sec-19",
        q: "19. Packages & Imports",
        desc: "Organizing your Codebase",
        concept: "Packages act like folders to group related classes together and prevent name conflicts. You use `import` to use classes from other packages.",
        pro: "Java's `java.lang` package (which contains String, System, Math) is automatically imported into every class by the compiler. You never need to import it manually.",
        code: `package com.mycompany.app;

import java.util.Scanner;

public class Main {
    Scanner sc = new Scanner(System.in);
}`,
        visualHtml: `
            <div class="visual-box" style="border-color: #9b59b6;">📦 <b>Package</b> (Folder)</div>
            <div class="visual-arrow">➔ contains ➔</div>
            <div style="display:flex; gap:1rem;">
                <div class="visual-box" style="border-color: #3498db;">Class A</div>
                <div class="visual-box" style="border-color: #e74c3c;">Class B</div>
            </div>
        `
    },
    {
        id: "sec-20",
        q: "20. String Manipulation",
        desc: "String vs StringBuilder",
        concept: "Strings in Java are Immutable (they cannot be changed once created). Modifying a String actually creates a brand new String in memory.",
        pro: "If you need to manipulate text heavily (like inside a loop), always use `StringBuilder`. It alters the same memory block instead of flooding the Heap with abandoned String objects.",
        code: `String slow = "Hello";
slow += " World"; // Creates new object

StringBuilder fast = new StringBuilder("Hello");
fast.append(" World"); // Modifies existing object`,
        visualHtml: `
            <div style="display:flex; flex-direction:column; gap:1rem;">
                <div style="display:flex; align-items:center; gap:1rem;">
                    <div class="visual-box" style="border-color: #e74c3c;"><b>String</b> "A"</div>
                    <div class="visual-arrow">+ "B" ➔</div>
                    <div class="visual-box" style="border-color: #e74c3c; opacity:0.5;"><s>"A"</s> (Garbage)</div>
                    <div class="visual-box" style="border-color: #e74c3c;"><b>New String</b> "AB"</div>
                </div>
                <div style="display:flex; align-items:center; gap:1rem;">
                    <div class="visual-box" style="border-color: #2ecc71;"><b>StringBuilder</b> "A"</div>
                    <div class="visual-arrow">.append("B") ➔</div>
                    <div class="visual-box" style="border-color: #2ecc71;"><b>Same Object</b> "AB"</div>
                </div>
            </div>
        `
    },
    {
        id: "sec-21",
        q: "21. Wrapper Classes",
        desc: "Autoboxing & Unboxing",
        concept: "Collections like ArrayList cannot store primitive types (like \`int\`). Wrapper classes (like \`Integer\`) wrap a primitive inside an Object so it can be stored in Collections.",
        pro: "Java does 'Autoboxing' automatically behind the scenes (converting \`int\` to \`Integer\`). However, this carries a memory and performance overhead in massive loops.",
        code: `int primitive = 5;
Integer wrapped = primitive; // Autoboxing
int unboxed = wrapped; // Unboxing

List<Integer> list = new ArrayList<>(); // Only Wrappers allowed!`,
        visualHtml: `
            <div class="visual-box" style="border-color: #3498db; border-radius:50%;"><b>5</b> (Primitive int)</div>
            <div class="visual-arrow">Autoboxing ➔</div>
            <div class="visual-box" style="border-color: #f1c40f;">
                <b>Integer Object</b><br>
                <div style="border:1px dashed #333; padding:5px; margin-top:5px; border-radius:50%;">5</div>
            </div>
        `
    },
    {
        id: "sec-22",
        q: "22. Enums",
        desc: "Strongly Typed Constants",
        concept: "An Enum is a special class that represents a group of unchangeable constants (like days of the week or compass directions).",
        pro: "Enums in Java are actually full-blown classes! This means they can have their own fields, constructors, and methods, making them wildly more powerful than Enums in C++.",
        code: `enum Level { LOW, MEDIUM, HIGH }

Level myVar = Level.MEDIUM;
if(myVar == Level.MEDIUM) {
    System.out.println("It's medium!");
}`,
        visualHtml: `
            <div class="visual-box" style="border-color: #9b59b6;">
                <b>Enum: Level</b><br>
                <div style="display:flex; gap:10px; margin-top:10px;">
                    <div style="background:#2ecc71; padding:5px; color:white;">LOW (0)</div>
                    <div style="background:#f1c40f; padding:5px; color:black;">MEDIUM (1)</div>
                    <div style="background:#e74c3c; padding:5px; color:white;">HIGH (2)</div>
                </div>
            </div>
        `
    },
    {
        id: "sec-23",
        q: "23. Annotations",
        desc: "Code Metadata (@)",
        concept: "Annotations provide data about a program that is not part of the program itself. They can be read by the compiler or at runtime.",
        pro: "Frameworks like Spring Boot rely almost entirely on Annotations (e.g. \`@RestController\`) to inject dependencies and configure routes dynamically via Reflection.",
        code: `@Override
public String toString() {
    return "This overrides the parent method";
}

@Deprecated
public void oldMethod() { } // Compiler warns if used`,
        visualHtml: `
            <div class="visual-box" style="border-color: #8e44ad; border-style:dashed;"><b>@Override</b> (Metadata)</div>
            <div class="visual-arrow">⬇ attaches to</div>
            <div class="visual-box" style="border-color: #3498db;"><b>Method</b><br>toString()</div>
        `
    },
    {
        id: "sec-24",
        q: "24. The Reflection API",
        desc: "Inspecting Code at Runtime",
        concept: "Reflection allows Java code to look at its own structure (Classes, Methods, Variables) while the program is running, and even modify private variables!",
        pro: "Reflection is extremely powerful but very slow and dangerous (it bypasses Encapsulation). It is mostly used by IDEs, Debuggers, and heavy Frameworks.",
        code: `Class<?> objClass = myObject.getClass();
System.out.println("Class Name: " + objClass.getName());

Method[] methods = objClass.getDeclaredMethods();
for(Method m : methods) {
    System.out.println(m.getName());
}`,
        visualHtml: `
            <div class="visual-box" style="border-color: #e67e22;"><b>Running Program</b></div>
            <div class="visual-arrow">🔍 looks at ➔</div>
            <div class="visual-box" style="border-color: #34495e;">
                <b>Its Own Mirror</b><br>
                <span style="font-size:1rem;">Class Info, Methods, Fields</span>
            </div>
        `
    },
    {
        id: "sec-25",
        q: "25. Garbage Collection",
        desc: "Automatic Memory Management",
        concept: "In languages like C, you must manually free memory. In Java, the Garbage Collector (GC) runs in the background, hunting down objects that have no references pointing to them and destroying them to free RAM.",
        pro: "The Heap is divided into Generations: 'Eden Space' (new objects), 'Survivor Space', and 'Tenured Space'. The GC runs 'Minor GCs' on Eden extremely fast, only freezing the app during 'Major GCs'.",
        code: `Car obj = new Car(); 
obj = null; // Original Car is now unreachable
// The Garbage Collector will eventually delete it.
System.gc(); // Suggests a GC run (JVM may ignore)`,
        visualHtml: `
            <div style="display:flex; align-items:center; gap:1rem;">
                <div class="visual-box" style="border-color: #2ecc71;"><b>Active Object</b><br>[Ref exists]</div>
                <div class="visual-box" style="border-color: #e74c3c;"><b>Orphan Object</b><br>[obj = null]</div>
                <div class="visual-arrow">➔ 🗑️ GC ➔</div>
                <div class="visual-box" style="border-color: #333; opacity:0.3;"><b>Destroyed</b><br>(RAM Freed)</div>
            </div>
        `
    },
    {
        id: "sec-26",
        q: "26. Networking",
        desc: "Sockets & Client/Server",
        concept: "Java allows computers to talk to each other over a network. A Server opens a port and waits. A Client connects to that IP and Port via a Socket.",
        pro: "Modern applications rarely use raw Sockets, preferring HTTP/REST via Spring Boot or gRPC. Raw sockets require manual threading to handle multiple clients simultaneously.",
        code: `// Server Side
ServerSocket server = new ServerSocket(8080);
Socket connection = server.accept(); // Waits for client

// Client Side
Socket client = new Socket("127.0.0.1", 8080);`,
        visualHtml: `
            <div class="visual-box" style="border-color: #3498db;"><b>Client (Socket)</b></div>
            <div class="visual-arrow">➔ TCP/IP ➔</div>
            <div class="visual-box" style="border-color: #e67e22;"><b>Port 8080</b></div>
            <div class="visual-arrow">➔</div>
            <div class="visual-box" style="border-color: #2ecc71;"><b>Server Socket</b></div>
        `
    },
    {
        id: "sec-27",
        q: "27. JDBC (Database Connectivity)",
        desc: "Connecting Java to SQL DBs",
        concept: "Java Database Connectivity (JDBC) is the API used to connect Java apps to databases (MySQL, Postgres, Oracle), execute SQL queries, and retrieve Results.",
        pro: "Always use \`PreparedStatement\` instead of regular \`Statement\` when injecting user variables into SQL. It pre-compiles the query and completely prevents SQL Injection attacks.",
        code: `Connection conn = DriverManager.getConnection(url, user, pass);
PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE id = ?");
stmt.setInt(1, 42);

ResultSet rs = stmt.executeQuery();
while (rs.next()) {
    System.out.println(rs.getString("username"));
}`,
        visualHtml: `
            <div class="visual-box" style="border-color: #e74c3c;"><b>Java App</b><br>(JDBC Driver)</div>
            <div class="visual-arrow">➔ SQL Query ➔</div>
            <div class="visual-box" style="border-color: #f39c12; border-radius:50%;"><b>Database</b><br>(MySQL/Postgres)</div>
            <div class="visual-arrow">➔ ResultSet ➔</div>
            <div class="visual-box" style="border-color: #2ecc71;"><b>Java App</b><br>(Data Object)</div>
        `
    },
    {
        id: "sec-28",
        q: "28. The Optional Class",
        desc: "Preventing NullPointerExceptions",
        concept: "`Optional` is a container object used to contain not-null objects. It is a much safer way to represent a value that might be absent without returning `null`.",
        pro: "Never use `Optional` as a field in a class or as a method parameter. It was designed specifically to be used ONLY as a return type for methods that might not find a result.",
        code: `Optional<String> name = Optional.ofNullable(getName());

// Safe execution without Null checks!
name.ifPresent(n -> System.out.println(n.toUpperCase()));

// Fallback value
String safeName = name.orElse("Unknown");`,
        visualHtml: `
            <div class="visual-box" style="border-color: #34495e;"><b>Optional Container</b><br><div style="border:1px dashed #7f8c8d; padding:10px; margin-top:5px;">Value (or Empty)</div></div>
            <div class="visual-arrow">.orElse() ➔</div>
            <div class="visual-box" style="border-color: #2ecc71;"><b>Safe Execution</b><br>(No Crashes)</div>
        `
    },
    {
        id: "sec-29",
        q: "29. Records (Java 14+)",
        desc: "Immutable Data Carriers",
        concept: "Records are a special kind of class designed purely to hold data. They automatically generate getters, constructors, `equals()`, `hashCode()`, and `toString()` for you!",
        pro: "Records are inherently immutable (their fields are `final`). This makes them completely thread-safe and perfect for Data Transfer Objects (DTOs) in web APIs.",
        code: `// This one line replaces 50 lines of boilerplate!
public record User(int id, String name) {}

User u = new User(1, "Alice");
System.out.println(u.name()); // Automatically generated getter`,
        visualHtml: `
            <div style="display:flex; gap:1rem; align-items:center;">
                <div class="visual-box" style="border-color: #e74c3c;"><b>Old Way</b><br><span style="font-size:0.8rem;">Fields<br>Constructors<br>Getters/Setters<br>toString()</span></div>
                <div class="visual-arrow">➔ Record ➔</div>
                <div class="visual-box" style="border-color: #3498db;"><b>Record</b><br><span style="font-size:1rem;">record Data(x, y) {}</span></div>
            </div>
        `
    },
    {
        id: "sec-30",
        q: "30. Modern Date & Time API",
        desc: "java.time package",
        concept: "The old `java.util.Date` is notoriously broken and mutable. Java 8 introduced a completely new, immutable, and thread-safe API for handling dates and times.",
        pro: "Always use `Instant` for machine timestamps (like saving to a database) and `ZonedDateTime` when displaying dates to users in specific time zones.",
        code: `LocalDate today = LocalDate.now();
LocalDate future = today.plusDays(5);

ZonedDateTime tokyoTime = ZonedDateTime.now(ZoneId.of("Asia/Tokyo"));`,
        visualHtml: `
            <div style="display:flex; gap:1rem; align-items:center;">
                <div class="visual-box" style="border-color: #9b59b6;"><b>LocalDate</b><br>2023-10-05</div>
                <div class="visual-box" style="border-color: #e67e22;"><b>LocalTime</b><br>14:30:00</div>
                <div class="visual-box" style="border-color: #2ecc71;"><b>ZonedDateTime</b><br>2023-10-05T14:30+09:00</div>
            </div>
        `
    },
    {
        id: "sec-31",
        q: "31. Advanced Concurrency",
        desc: "Executors & Futures",
        concept: "Manually creating `new Thread()` is expensive and hard to manage. The Executor framework uses 'Thread Pools' to reuse threads for asynchronous tasks.",
        pro: "`CompletableFuture` is the modern way to write non-blocking async code in Java. It allows you to chain async operations exactly like Promises in JavaScript.",
        code: `ExecutorService pool = Executors.newFixedThreadPool(10);
pool.submit(() -> {
    System.out.println("Running in background");
});

CompletableFuture.supplyAsync(() -> "Data")
                 .thenAccept(System.out::println);`,
        visualHtml: `
            <div class="visual-box" style="border-color: #2c3e50;"><b>Task Queue</b><br>[T1, T2, T3]</div>
            <div class="visual-arrow">➔</div>
            <div class="visual-box" style="border-color: #f1c40f;"><b>Thread Pool</b><br><span style="font-size:0.8rem;">[Thread A] [Thread B]</span></div>
            <div class="visual-arrow">➔</div>
            <div class="visual-box" style="border-color: #3498db;"><b>Execution</b></div>
        `
    },
    {
        id: "sec-32",
        q: "32. Build Tools",
        desc: "Maven & Gradle",
        concept: "Build tools manage your project's dependencies (external libraries like Spring or Jackson) so you don't have to manually download `.jar` files and link them.",
        pro: "Maven uses a strict XML format (`pom.xml`) which is highly standardized. Gradle uses a Groovy/Kotlin DSL which is faster and highly customizable, favored by Android devs.",
        code: `<!-- Maven pom.xml example -->
<dependency>
    <groupId>com.google.code.gson</groupId>
    <artifactId>gson</artifactId>
    <version>2.10.1</version>
</dependency>`,
        visualHtml: `
            <div class="visual-box" style="border-color: #e67e22;"><b>pom.xml</b><br>(Dependencies)</div>
            <div class="visual-arrow">➔ Maven ➔</div>
            <div class="visual-box" style="border-color: #3498db;"><b>Maven Central</b><br>(Internet Repo)</div>
            <div class="visual-arrow">➔</div>
            <div class="visual-box" style="border-color: #2ecc71;"><b>Local Project</b></div>
        `
    },
    {
        id: "sec-33",
        q: "33. Unit Testing",
        desc: "JUnit & Mockito",
        concept: "Automated testing ensures your code doesn't break when you change it. JUnit runs the tests, and Mockito creates fake versions of external classes (like databases) for isolated testing.",
        pro: "Always follow the AAA pattern in testing: Arrange (setup data), Act (call the method), Assert (verify the result).",
        code: `@Test
public void testAddition() {
    Calculator calc = new Calculator();
    int result = calc.add(2, 2);
    assertEquals(4, result); // Assertion
}`,
        visualHtml: `
            <div class="visual-box" style="border-color: #34495e;"><b>Code</b><br>add(a, b)</div>
            <div class="visual-arrow">➔ Tester ➔</div>
            <div class="visual-box" style="border-color: #27ae60;"><b>JUnit Assertion</b><br>Is result == 4?</div>
            <div class="visual-arrow">➔</div>
            <div class="visual-box" style="border-color: #2ecc71; background:#eafaf1;"><b>✅ PASS</b></div>
        `
    },
    {
        id: "sec-34",
        q: "34. Design Patterns",
        desc: "Singleton, Factory, Observer",
        concept: "Design patterns are standard architectural solutions to common software problems. They aren't code, they are blueprints for how to structure classes.",
        pro: "The Singleton ensures a class only has ONE instance (like a Database Connection). The Factory pattern delegates object creation to a dedicated class.",
        code: `// Singleton Pattern Example
public class Database {
    private static Database instance;
    private Database() {} // Private Constructor!
    
    public static Database getInstance() {
        if(instance == null) instance = new Database();
        return instance;
    }
}`,
        visualHtml: `
            <div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:1rem;">
                <div class="visual-box" style="border-color: #e74c3c;"><b>Singleton</b><br>1 Instance Only</div>
                <div class="visual-box" style="border-color: #3498db;"><b>Factory</b><br>Object Generator</div>
                <div class="visual-box" style="border-color: #f1c40f;"><b>Observer</b><br>Event Hub</div>
            </div>
        `
    },
    {
        id: "sec-35",
        q: "35. Spring Boot",
        desc: "The Enterprise Web Framework",
        concept: "Spring Boot is the industry standard for building Java web applications and REST APIs. It relies heavily on Annotations and Dependency Injection.",
        pro: "Spring's 'Inversion of Control' means you don't use the `new` keyword to create service objects. Spring automatically creates and injects them for you!",
        code: `@RestController
public class HelloController {
    
    @GetMapping("/api/hello")
    public String sayHello() {
        return "Hello from Spring Boot!";
    }
}`,
        visualHtml: `
            <div class="visual-box" style="border-color: #3498db;"><b>Client / Browser</b></div>
            <div class="visual-arrow">➔ HTTP GET ➔</div>
            <div class="visual-box" style="border-color: #2ecc71;"><b>@RestController</b><br>(Spring Boot)</div>
            <div class="visual-arrow">➔ Returns ➔</div>
            <div class="visual-box" style="border-color: #9b59b6;"><b>JSON Data</b></div>
        `
    },
    {
        id: "sec-36",
        q: "36. Understanding Complexity",
        desc: "Mastering Time and Space (Big O)",
        concept: "Complexity measures how the running time or memory usage of an algorithm grows as the input size (N) increases. It is expressed using Big O notation, which represents the worst-case scenario.",
        pro: "Always identify the dominant term and ignore constants. For example, O(3N² + 5N + 12) simplifies to O(N²). Space complexity measures the extra memory used, excluding the input storage.",
        code: `public class ComplexityTracer {
    // 1. Constant Time: O(1) - Number of operations does not depend on N
    public int getFirstElement(int[] arr) {
        return arr[0]; // Exactly 1 operation
    }

    // 2. Logarithmic Time: O(log N) - Problem size is halved at each step
    public int binarySearch(int[] arr, int target) {
        int low = 0, high = arr.length - 1;
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (arr[mid] == target) return mid;
            else if (arr[mid] < target) low = mid + 1;
            else high = mid - 1;
        }
        return -1;
    }

    // 3. Linear Time: O(N) - Loop runs proportionally to N
    public int findMax(int[] arr) {
        int max = arr[0];
        for (int val : arr) { // Runs N times
            if (val > max) max = val;
        }
        return max;
    }

    // 4. Quadratic Time: O(N²) - Nested loops both running up to N
    public void printAllPairs(int[] arr) {
        for (int i = 0; i < arr.length; i++) { // Outer loop: N times
            for (int j = 0; j < arr.length; j++) { // Inner loop: N times
                System.out.println(arr[i] + ", " + arr[j]); // N * N total runs
            }
        }
    }
}`,
        visualHtml: `
            <style>
                .sim-btn {
                    font-family: 'Kalam', cursive;
                    border: 2px solid #222;
                    border-radius: 4px;
                    color: white;
                    cursor: pointer;
                    transition: transform 0.1s, background-color 0.2s;
                    box-shadow: 2px 2px 0 #222;
                }
                .sim-btn:hover {
                    transform: translateY(-2px);
                    box-shadow: 3px 3px 0 #222;
                }
                .sim-btn:active {
                    transform: translateY(1px);
                    box-shadow: 1px 1px 0 #222;
                }
                @media (max-width: 768px) {
                    #comp-details-grid {
                        grid-template-columns: 1fr !important;
                        gap: 1.5rem;
                    }
                }
            </style>
            <div class="complexity-playground" style="width: 100%; display: flex; flex-direction: column; gap: 1.5rem; text-align: left; font-family: 'Kalam', cursive;">
                <div style="background: rgba(230, 126, 34, 0.05); padding: 15px; border-radius: 8px; border: 2px dashed #e67e22;">
                    <h4 style="margin: 0 0 10px 0; color: #d35400; font-size: 1.4rem;">🎯 Interactive Scalability Sandbox</h4>
                    <p style="margin: 0 0 15px 0; font-size: 1.15rem;">Select an algorithm class below and slide the input size <b>N</b> to see how the operations and speed comparison scales!</p>
                    
                    <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 15px;" id="comp-tabs">
                        <button class="sim-btn" onclick="selectCompTab('O1', this)" style="background: #e67e22; border-color: #222; font-size: 1rem; padding: 6px 12px; margin-bottom:5px;">O(1) Constant</button>
                        <button class="sim-btn" onclick="selectCompTab('OlogN', this)" style="background: #34495e; border-color: #222; font-size: 1rem; padding: 6px 12px; margin-bottom:5px;">O(log N) Logarithmic</button>
                        <button class="sim-btn" onclick="selectCompTab('ON', this)" style="background: #34495e; border-color: #222; font-size: 1rem; padding: 6px 12px; margin-bottom:5px;">O(N) Linear</button>
                        <button class="sim-btn" onclick="selectCompTab('ON2', this)" style="background: #34495e; border-color: #222; font-size: 1rem; padding: 6px 12px; margin-bottom:5px;">O(N²) Quadratic</button>
                    </div>

                    <div style="display: flex; align-items: center; gap: 15px; background: #fff; padding: 10px; border: 2px solid #222; border-radius: 5px; margin-bottom: 15px;">
                        <label for="comp-n-slider" style="font-weight: bold; font-size: 1.2rem; min-width: 140px;">Input Size N: <span id="comp-n-val" style="color: #e74c3c;">100</span></label>
                        <input type="range" id="comp-n-slider" min="10" max="1000" step="10" value="100" style="flex-grow: 1; cursor: pointer;">
                    </div>
                </div>

                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1.5rem;" id="comp-details-grid">
                    <!-- Left: Code and Math -->
                    <div class="sketchy-border" style="background: #fff; padding: 15px; display: flex; flex-direction: column; justify-content: space-between;">
                        <div>
                            <h4 id="comp-title" style="margin: 0 0 10px 0; color: #2980b9; font-size: 1.3rem;">Constant Complexity O(1)</h4>
                            <div id="comp-math-desc" style="font-size: 1.15rem; color: #555; margin-bottom: 10px; line-height: 1.4;">
                                No matter if N is 10 or 1,000,000, this program takes exactly the same number of operations to finish.
                            </div>
                        </div>
                        <div style="background: #fdfcf9; border-left: 4px solid #2980b9; padding: 10px; font-family: monospace; font-size: 0.95rem; white-space: pre; overflow-x: auto;" id="comp-code-preview">int val = arr[0]; // 1 step</div>
                    </div>

                    <!-- Right: Visual Scaling Meter -->
                    <div class="sketchy-border" style="background: #fff; padding: 15px; display: flex; flex-direction: column; justify-content: space-between;">
                        <h4 style="margin: 0 0 10px 0; color: #2ecc71; font-size: 1.3rem;">📊 Live Step Counter</h4>
                        <div style="flex-grow: 1; display: flex; flex-direction: column; justify-content: center; gap: 10px;">
                            <div style="font-size: 1.2rem;">
                                Expected Operations: <span id="comp-ops-count" style="font-weight: bold; color: #e74c3c;">1</span>
                            </div>
                            <div style="height: 25px; width: 100%; background: #eee; border: 2px solid #222; border-radius: 4px; overflow: hidden; position: relative;">
                                <div id="comp-ops-bar" style="height: 100%; width: 0.1%; background: #2ecc71; transition: width 0.3s ease;"></div>
                            </div>
                            <div style="font-size: 1.05rem; color: #555;" id="comp-ops-explain">
                                A single math computation. Execution time is virtually instant (e.g., &lt; 0.01ms).
                            </div>
                        </div>
                    </div>
                </div>

                <div class="sketchy-border" style="background: #fcfcfc; padding: 15px; border-color: #27ae60;">
                    <h4 style="margin: 0 0 10px 0; color: #27ae60; font-size: 1.3rem;">💡 Quick Rules of Thumb to Determine Complexity</h4>
                    <ul style="margin: 0; padding-left: 20px; font-size: 1.15rem; line-height: 1.5; color: #34495e;">
                        <li><b>Single Loop (1 to N)</b>: O(N) Time complexity.</li>
                        <li><b>Nested Loops (each to N)</b>: Multiply outer and inner, so O(N * N) = O(N²) Time complexity.</li>
                        <li><b>Input divided/multiplied by 2</b> (e.g. binary search, dividing N): O(log N) Time complexity.</li>
                        <li><b>Recursive doubling</b> (e.g. Fibonacci, generating subsets): O(2^N) Time complexity.</li>
                        <li><b>Space Complexity</b>: Only count the *extra* memory allocated. If you create an array of size N, space is O(N). If you only declare regular variables, space is O(1).</li>
                    </ul>
                </div>
            </div>
        `
    }
];

const tocList = document.getElementById('toc-list');
const contentContainer = document.getElementById('content-sections');

curriculum.forEach(item => {
    // 1. Create TOC Entry
    const li = document.createElement('li');
    li.innerHTML = `<a href="#${item.id}">${item.q}</a>`;
    tocList.appendChild(li);

    // 2. Create Section Content
    const section = document.createElement('section');
    section.id = item.id;
    section.className = 'learn-section sketchy-border';
    
    section.innerHTML = `
        <h2 class="hatched-red-small" style="display:inline-block; padding: 0.5rem 1rem; font-size: 2rem;">${item.q}</h2>
        <h3 style="color: #666; margin-top: 0; margin-bottom: 2rem; font-size: 1.5rem;">${item.desc}</h3>
        
        <div class="explanation-grid">
            <div class="explanation-section">
                <h3>💡 The Core Concept</h3>
                <p>${item.concept}</p>
            </div>
            <div class="explanation-section">
                <h3>🧠 Pro Insights</h3>
                <p>${item.pro}</p>
            </div>
        </div>

        <div class="visual-section" style="margin-top: 3rem;">
            <h3 style="font-size: 1.6rem; color: #2980b9; border-bottom: 2px dashed #2980b9; display: inline-block;">🎨 Syntax/Concept Visualization</h3>
            <div class="custom-visual sketchy-border">
                ${item.visualHtml}
            </div>
        </div>
        
        <div class="explanation-section file-tag">
            <h3>💻 Syntax/Code Example</h3>
            <div class="code-container">
                <button class="copy-btn" onclick="copyCode(this)">📋 Copy</button>
                <pre class="code-path sketchy-border" style="display: block; overflow-x: auto; white-space: pre-wrap; font-size: 1.1rem; padding: 1.5rem; width: 100%; box-sizing: border-box;">${item.code}</pre>
            </div>
        </div>
    `;
    
    contentContainer.appendChild(section);
});

// --- Complexity Simulator Logic ---
window.selectedComp = 'O1';
window.compN = 100;

window.selectCompTab = function(type, btn) {
    window.selectedComp = type;
    
    // De-highlight all buttons in the comp-tabs container
    const buttons = document.querySelectorAll('#comp-tabs button');
    buttons.forEach(b => {
        b.style.background = '#34495e';
    });
    btn.style.background = '#e67e22';
    
    window.updateComplexitySim();
};

window.updateComplexitySim = function() {
    const titleEl = document.getElementById('comp-title');
    const mathDescEl = document.getElementById('comp-math-desc');
    const codePreviewEl = document.getElementById('comp-code-preview');
    const opsCountEl = document.getElementById('comp-ops-count');
    const opsBarEl = document.getElementById('comp-ops-bar');
    const opsExplainEl = document.getElementById('comp-ops-explain');
    
    if (!titleEl) return; // Guard for pages/views where the elements are not loaded yet
    
    let title = "";
    let mathDesc = "";
    let codePreview = "";
    let opsCount = 0;
    let barWidth = 0;
    let opsExplain = "";
    
    const N = window.compN;
    
    switch (window.selectedComp) {
        case 'O1':
            title = "Constant Complexity O(1)";
            mathDesc = "No matter if N is 10 or 1,000,000, this program takes exactly the same number of operations (1 step) to finish. The execution time does not scale with size.";
            codePreview = "int val = arr[0]; // Exactly 1 operation";
            opsCount = 1;
            barWidth = 0.5;
            opsExplain = "A single array read. Execution time is virtually instant (< 0.01ms).";
            break;
            
        case 'OlogN':
            title = "Logarithmic Complexity O(log N)";
            mathDesc = "The input size is halved at each step. Doubling the input size N only increases the execution count by 1 step! Log N is exceptionally fast and scales amazingly well.";
            codePreview = `int low = 0, high = n - 1;
while (low <= high) {
    int mid = low + (high - low) / 2;
    if (arr[mid] == target) return mid;
    else if (arr[mid] < target) low = mid + 1;
    else high = mid - 1; // Halves the search space
}`;
            opsCount = Math.ceil(Math.log2(N));
            barWidth = (Math.log2(N) / Math.log2(1000)) * 10;
            opsExplain = `For N = ${N}, halving the inputs recursively takes only ${opsCount} iterations. (< 0.1ms).`;
            break;
            
        case 'ON':
            title = "Linear Complexity O(N)";
            mathDesc = "The number of operations scales 1:1, directly proportional to the size of N. If N is 10, it runs 10 times. If N is 1000, it runs 1000 times.";
            codePreview = `for (int i = 0; i < n; i++) {
    sum += arr[i]; // Runs exactly N times
}`;
            opsCount = N;
            barWidth = (N / 1000) * 40;
            opsExplain = `Standard single-loop iteration. Runs exactly ${N} times. (~ 0.2ms).`;
            break;
            
        case 'ON2':
            title = "Quadratic Complexity O(N²)";
            mathDesc = "For every element, we loop through all elements again (nested loops). If N doubles, the work increases by 4 times! Extremely heavy on system resources for large N.";
            codePreview = `for (int i = 0; i < n; i++) {
    for (int j = 0; j < n; j++) {
        System.out.println(i + "," + j); // Runs N * N times
    }
}`;
            opsCount = N * N;
            barWidth = ((N * N) / 1000000) * 100;
            opsExplain = `Nested loops running N * N times. For N = ${N}, this requires a massive ${opsCount.toLocaleString()} operations! (~ 5ms to 20ms).`;
            break;
    }
    
    titleEl.textContent = title;
    mathDescEl.textContent = mathDesc;
    codePreviewEl.textContent = codePreview;
    opsCountEl.textContent = opsCount.toLocaleString();
    opsBarEl.style.width = barWidth + "%";
    opsExplainEl.textContent = opsExplain;
};

window.initComplexitySimulator = function() {
    const slider = document.getElementById('comp-n-slider');
    if (!slider) return;
    
    slider.addEventListener('input', (e) => {
        window.compN = parseInt(e.target.value);
        document.getElementById('comp-n-val').textContent = window.compN;
        window.updateComplexitySim();
    });
    
    window.updateComplexitySim();
};

// Initialize complexity dashboard elements
setTimeout(() => {
    if (window.initComplexitySimulator) {
        window.initComplexitySimulator();
    }
}, 200);

// --- NEW FEATURES LOGIC ---

// 1. Copy Code Button Logic
window.copyCode = function(btn) {
    const codeBlock = btn.nextElementSibling;
    const code = codeBlock.innerText;
    
    navigator.clipboard.writeText(code).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = "✅ Copied!";
        btn.style.background = "#2ecc71";
        btn.style.borderColor = "#2ecc71";
        btn.style.color = "white";
        
        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = "";
            btn.style.borderColor = "";
            btn.style.color = "";
        }, 2000);
    });
};

// 2. Progress Bar & Scroll Spy
const canvas = document.getElementById('learn-canvas');
const progressBar = document.getElementById('progress-bar');
let confettiFired = false;

canvas.addEventListener('scroll', () => {
    // Progress Bar
    const scrollTop = canvas.scrollTop;
    const scrollHeight = canvas.scrollHeight - canvas.clientHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = progress + '%';
    
    // Confetti logic
    if (progress >= 99 && !confettiFired) {
        confettiFired = true;
        confetti({
            particleCount: 150,
            spread: 80,
            origin: { y: 0.6 },
            colors: ['#e74c3c', '#3498db', '#f1c40f', '#2ecc71']
        });
    }
    
    // Scroll Spy (Active TOC)
    const sections = document.querySelectorAll('.learn-section');
    const navLinks = document.querySelectorAll('#toc-list a');
    
    let currentId = "";
    sections.forEach(section => {
        // -200 offset so it activates when section is comfortably in view
        if (canvas.scrollTop >= section.offsetTop - 200) {
            currentId = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active-toc');
        if (link.getAttribute('href') === '#' + currentId) {
            link.classList.add('active-toc');
            
            // Auto-scroll TOC sidebar to keep active item in view
            const tocSidebar = document.querySelector('.toc-sidebar');
            const activeLinkOffset = link.offsetTop;
            if (activeLinkOffset > tocSidebar.scrollTop + tocSidebar.clientHeight - 50 || activeLinkOffset < tocSidebar.scrollTop) {
                tocSidebar.scrollTo({ top: activeLinkOffset - 100, behavior: 'smooth' });
            }
        }
    });
});

// Trigger scroll event once on load to set initial state
setTimeout(() => canvas.dispatchEvent(new Event('scroll')), 100);

// 3. Blackboard (Dark Mode) Toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    document.documentElement.classList.toggle('dark-mode');
    if(document.documentElement.classList.contains('dark-mode')) {
        themeBtn.innerHTML = "☀️ Whiteboard Mode";
        themeBtn.style.background = "#f1c40f";
        themeBtn.style.color = "black";
    } else {
        themeBtn.innerHTML = "🌙 Blackboard Mode";
        themeBtn.style.background = "#2c3e50";
        themeBtn.style.color = "white";
    }
});
