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
        flow: "flowchart LR\n A([Start]) --> B[/System.out.println/] --> C([End])"
    },
    { 
        q: "Q2", file: "day01/data.java", desc: "Input basic data types and print outputs",
        concept: "Variables act as containers with strict sizes (types) defining what kind of data they hold (numbers, text, true/false).",
        pro: "Primitives sit directly on the Stack Memory. The Scanner class translates raw byte streams (System.in) into parsed primitive types. Beware of `Scanner.nextLine()` skipping after `nextInt()` due to trailing newlines.",
        flow: "flowchart TD\n A[/Input via Scanner/] --> B{Identify Type}\n B --> C[int / float / char / bool]\n C --> D[/Print Values/]"
    },
    { 
        q: "Q3", file: "day01/operations.java", desc: "Enter two numbers and perform arithmetic operations",
        concept: "Applying standard mathematical operators to numerical data, just like a pocket calculator.",
        pro: "Integer division (e.g. 5 / 2) truncates decimals instantly (results in 2). Floating point math suffers from IEEE-754 precision issues.",
        flow: "flowchart LR\n A[/Num A, Num B/] --> B[+ , - , * , / , %]\n B --> C[/Output Results/]"
    },
    { 
        q: "Q4", file: "day01/triangle.java", desc: "Find the third angle of a triangle given two angles",
        concept: "Using geometric principles in code: The internal sum of angles in a flat triangle is always 180 degrees.",
        pro: "Validating input is key in real systems. What if a user enters negative angles or angles that sum > 180? Defensive programming requires checking these constraints.",
        flow: "flowchart TD\n A[/Angle A, Angle B/] --> B[Sum = A + B]\n B --> C[Third = 180 - Sum]\n C --> D[/Print Third Angle/]"
    },
    { 
        q: "Q5", file: "day01/marks.java", desc: "Calculate total marks and percentage of five subjects",
        concept: "Aggregating values (summing) and finding proportions relative to a maximum possible score.",
        pro: "Type casting is crucial. If you divide an integer total by an integer max, Java does Integer Division (yielding 0). You must explicitly cast to `(double)` or `(float)` before dividing.",
        flow: "flowchart TD\n A[/Input 5 Marks/] --> B[Total = Sum of all 5]\n B --> C[Percent = Total / 500 * 100]\n C --> D[/Print Total & Percent/]"
    },
    { 
        q: "Q6", file: "day01/simple.java", desc: "Calculate the simple interest",
        concept: "Implementing a strict mathematical formula: (Principal * Rate * Time) / 100.",
        pro: "For real-world financial applications, NEVER use float or double. Floating point representation cannot accurately store decimal fractions. Always use `java.math.BigDecimal`.",
        flow: "flowchart LR\n A[/P, R, T/] --> B[Multiply P*R*T]\n B --> C[Divide by 100]\n C --> D[/Interest/]"
    },
    { 
        q: "Q7/Q8", file: "day01/swap.java", desc: "Swap two numbers with & without third variable",
        concept: "Swapping values. Usually requires a temporary 'bucket', but can be done mathematically by merging and extracting.",
        pro: "Math swaps (A=A+B; B=A-B; A=A-B) can trigger Integer Overflow! The safest, elite way to swap without temp variables is using Bitwise XOR (`A^=B; B^=A; A^=B`).",
        flow: "flowchart TD\n A[/A=5, B=10/] --> B[A = A + B (15)]\n B --> C[B = A - B (5)]\n C --> D[A = A - B (10)]\n D --> E[/A=10, B=5/]"
    },
    { 
        q: "Q9", file: "day01/ascii.java", desc: "Print the ASCII value of a given character",
        concept: "Computers store letters as numbers based on a standard table. Typecasting to an integer reveals this underlying number.",
        pro: "Java actually uses UTF-16, not just ASCII. A 'char' in Java is strictly a 16-bit unsigned integer ranging from 0 to 65535.",
        flow: "flowchart LR\n A[/Char 'A'/] --> B{Typecast (int)}\n B --> C[/Integer 65/]"
    },
    { 
        q: "Q10", file: "day01/time.java", desc: "Convert seconds to hours, minutes and seconds",
        concept: "Breaking down a large unit into smaller hierarchical units using division and modulo (remainder) arithmetic.",
        pro: "Time math is notoriously error-prone due to leap seconds and timezones. Modern Java code utilizes `java.time.Duration.ofSeconds(val)` for clean standard conversions.",
        flow: "flowchart TD\n A[/Total Secs/] --> B[Hours = Secs / 3600]\n B --> C[Rem = Secs % 3600]\n C --> D[Mins = Rem / 60]\n D --> E[Secs = Rem % 60]\n E --> F[/Output HH:MM:SS/]"
    },
    { 
        q: "Q11", file: "day01/neon.java", desc: "Check whether a number is neon or not",
        concept: "A number whose sum of digits of its square equals the number itself (e.g., 9 -> 81 -> 8+1 = 9).",
        pro: "Algorithm time complexity is bounded by O(log(N^2)) since you iterate over the digits of the square. A neat while loop using `sum += sq % 10; sq /= 10;` is the optimal approach.",
        flow: "flowchart TD\n A[/Input N/] --> B[Sq = N * N]\n B --> C[Sum = 0]\n C --> D{Sq > 0?}\n D -- Yes --> E[Sum += Sq % 10]\n E --> F[Sq /= 10]\n F --> D\n D -- No --> G{Sum == N?}\n G -- Yes --> H[/Neon!/]\n G -- No --> I[/Not Neon/]"
    },
    { 
        q: "Q12", file: "day01/casealpha.java", desc: "Toggle character case using ASCII values",
        concept: "Uppercase and lowercase letters are separated by exactly 32 in the ASCII table. We add or subtract 32 to flip them.",
        pro: "A brilliant Bitwise hack: XORing any alphabet character with the space character (' ') toggles its case instantly! `char toggled = (char)(original ^ ' ');`",
        flow: "flowchart TD\n A[/Input Char/] --> B{Is Lowercase?}\n B -- Yes --> C[Subtract 32]\n B -- No --> D[Add 32]\n C --> E[/Toggled Char/]\n D --> E"
    },
    { 
        q: "Q13", file: "day01/evenodd.java", desc: "Check whether a number is even or odd",
        concept: "If a number divides cleanly by 2 (remainder is 0), it is Even. Otherwise, it is Odd.",
        pro: "Modulo division is slightly expensive at the CPU level. The fastest execution uses Bitwise AND: `(num & 1) == 0` checks the least significant bit directly!",
        flow: "flowchart TD\n A[/Input Num/] --> B{Num % 2 == 0?}\n B -- True --> C[/Even/]\n B -- False --> D[/Odd/]"
    },
    { 
        q: "Q14", file: "day01/trivalid.java", desc: "Check whether a triangle is valid or not",
        concept: "Triangle Inequality Theorem: The sum of any two side lengths must be strictly greater than the third side length.",
        pro: "This is a foundational concept not just in high school geometry, but in advanced graph algorithms (like A* pathfinding) and collision detection engines.",
        flow: "flowchart TD\n A[/Sides A, B, C/] --> B{A+B>C AND A+C>B AND B+C>A}\n B -- True --> C[/Valid/]\n B -- False --> D[/Invalid/]"
    },
    { 
        q: "Q15", file: "day01/tritypes.java", desc: "Check if triangle is equilateral, isosceles, or scalene",
        concept: "Using sequential logic blocks (if-else if-else) to classify an object based on the equality of its parts.",
        pro: "Order of evaluation matters! Check Equilateral first (A==B && B==C). Then Isosceles (A==B || B==C || A==C). By structuring properly, you avoid redundant checks.",
        flow: "flowchart TD\n A[/Sides A,B,C/] --> B{A==B AND B==C?}\n B -- Yes --> C[/Equilateral/]\n B -- No --> D{A==B OR B==C OR A==C?}\n D -- Yes --> E[/Isosceles/]\n D -- No --> F[/Scalene/]"
    },
    { 
        q: "Q16", file: "day01/num.java", desc: "Check if number is positive, negative or zero",
        concept: "Comparing a number relative to the origin (zero) on a number line.",
        pro: "At the hardware level, numbers are stored in Two's Complement binary. A negative number simply has its most significant bit (Sign Bit) set to 1.",
        flow: "flowchart TD\n A[/Input N/] --> B{N > 0?}\n B -- Yes --> C[/Positive/]\n B -- No --> D{N < 0?}\n D -- Yes --> E[/Negative/]\n D -- No --> F[/Zero/]"
    },
    { 
        q: "Q17", file: "day01/divisible.java", desc: "Check if number is divisible by 5 and 11",
        concept: "Checking multiple modulo conditions simultaneously using the Logical AND (`&&`) operator.",
        pro: "Since 5 and 11 are co-prime, the mathematically superior and faster check is just evaluating their Least Common Multiple (LCM): `num % 55 == 0`.",
        flow: "flowchart TD\n A[/Input N/] --> B{N % 5 == 0 AND N % 11 == 0}\n B -- Yes --> C[/Divisible/]\n B -- No --> D[/Not Divisible/]"
    },
    { 
        q: "Q18", file: "day01/GrossSalary.java", desc: "Calculate Gross Salary based on Basic Salary slabs",
        concept: "Using tiered if-else ladders to apply different logic percentages based on range limits (like tax brackets).",
        pro: "Massive if-else ladders are considered anti-patterns (violates Open-Closed Principle). Real systems use Rules Engines or the Strategy Design Pattern instead.",
        flow: "flowchart TD\n A[/Basic Salary/] --> B{Salary <= 10000?}\n B -- Yes --> C[HRA=20%, DA=80%]\n B -- No --> D{Salary <= 20000?}\n D -- Yes --> E[HRA=25%, DA=90%]\n D -- No --> F[HRA=30%, DA=95%]\n C --> G[Gross = Basic + HRA + DA]\n E --> G\n F --> G\n G --> H[/Output Gross/]"
    }
];

const day2Problems = [
    { 
        q: "Q1", file: "day02/reverse.java", desc: "Reverse a number without using a loop",
        concept: "Mathematically dissecting a number by extracting the last digit (modulo 10), and truncating (divide by 10) sequentially.",
        pro: "Without loops, this code is completely hardcoded to a specific number of digits (O(1) time). For true dynamic flexibility without iterative loops, Recursion is the mathematically pure solution.",
        flow: "flowchart LR\n A[/Num 123/] --> B[D1: 123%10 = 3]\n B --> C[D2: (123/10)%10 = 2]\n C --> D[D3: (123/100)%10 = 1]\n D --> E[/Output: 321/]"
    },
    { 
        q: "Q2/Q3", file: "day02/digit.java", desc: "Find first and last digit, and sum them without a loop",
        concept: "Last digit is always `num % 10`. If we know it's a 3 digit number, the first digit is `num / 100`.",
        pro: "To dynamically find the first digit of ANY length number without loops: `first = num / (int)Math.pow(10, (int)Math.log10(num));`.",
        flow: "flowchart TD\n A[/Input N (e.g. 102)/] --> B[Last = N % 10]\n A --> C[First = N / 100]\n B --> D[Sum = First + Last]\n C --> D\n D --> E[/Output Sum/]"
    },
    { 
        q: "Q5", file: "day02/palindrome.java", desc: "Check if a number is palindrome or not",
        concept: "A palindrome reads the same forwards and backwards. We reverse the number using math and compare it to the original.",
        pro: "Reversing a very large integer can cause an Integer Overflow Exception. Converting it to a String and using a Two-Pointer approach (checking chars from outside-in) is significantly safer.",
        flow: "flowchart TD\n A[/Input N/] --> B[Temp = N]\n B --> C[Reverse N using loop]\n C --> D{Temp == Reversed?}\n D -- Yes --> E[/Palindrome/]\n D -- No --> F[/Not Palindrome/]"
    },
    { 
        q: "Q6", file: "day02/alpha.java", desc: "Check if character is alphabetic or not",
        concept: "We check if the character falls within the ASCII boundaries of 'a' to 'z' OR 'A' to 'Z'.",
        pro: "Manual range checking fails for international characters (like é, ü, ñ). Pro developers utilize native wrappers like `Character.isLetter(ch)` which supports full Unicode.",
        flow: "flowchart TD\n A[/Input Char/] --> B{In range a-z OR A-Z?}\n B -- Yes --> C[/Alphabetic/]\n B -- No --> D[/Not Alphabetic/]"
    },
    { 
        q: "Q7", file: "day02/pro.java", desc: "Check profit or loss given CP and SP",
        concept: "Comparing Cost Price and Selling Price to determine positive or negative cash flow.",
        pro: "When mapping this to enterprise databases, never store currency as Floats. Store them as Integers (representing pennies/cents) to ensure exact accounting precision.",
        flow: "flowchart TD\n A[/CP and SP/] --> B{SP > CP?}\n B -- Yes --> C[Profit = SP - CP]\n B -- No --> D{CP > SP?}\n D -- Yes --> E[Loss = CP - SP]\n D -- No --> F[No Profit No Loss]\n C --> G[/Output/]\n E --> G\n F --> G"
    },
    { 
        q: "Q8", file: "day02/vowel.java", desc: "Check if alphabet is vowel or consonant",
        concept: "Validating against a specific set of target values (A, E, I, O, U) using logical OR.",
        pro: "A massive if-condition with 10 OR statements is ugly. A cleaner approach is using `\"aeiouAEIOU\".indexOf(ch) != -1`, or utilizing a Switch statement with fall-through logic.",
        flow: "flowchart TD\n A[/Input Char/] --> B{Is 'a','e','i','o','u'?}\n B -- Yes --> C[/Vowel/]\n B -- No --> D[/Consonant/]"
    },
    { 
        q: "Q9", file: "day02/max.java", desc: "Find maximum between three numbers",
        concept: "Logical combinations. Check if A is bigger than both B and C. Then check if B is bigger. If neither, it must be C.",
        pro: "Nested Math functions compile cleaner, express intent better, and utilize JVM intrinsics: `int max = Math.max(a, Math.max(b, c));`",
        flow: "flowchart TD\n A[/A, B, C/] --> B{A>B AND A>C?}\n B -- Yes --> C[/Max is A/]\n B -- No --> D{B>A AND B>C?}\n D -- Yes --> E[/Max is B/]\n D -- No --> F[/Max is C/]"
    },
    { 
        q: "Q10", file: "day02/min.java", desc: "Find minimum between three numbers",
        concept: "The exact inverse of finding the maximum. We use less-than (<) to identify the smallest value.",
        pro: "As with max, `Math.min(a, Math.min(b, c))` is the way to go for cleaner and faster code.",
        flow: "flowchart TD\n A[/A, B, C/] --> B{A<B AND A<C?}\n B -- Yes --> C[/Min is A/]\n B -- No --> D{B<A AND B<C?}\n D -- Yes --> E[/Min is B/]\n D -- No --> F[/Min is C/]"
    },
    { 
        q: "Q11", file: "day02/grade.java", desc: "Print a grade using ternary operators",
        concept: "The Ternary operator `? :` acts as a one-line if-else. They can be chained for multiple cascaded conditions.",
        pro: "Chained ternaries are notorious for ruining code readability. While bytecode is identical to standard if-else, strict enterprise style-guides usually ban nested ternaries completely.",
        flow: "flowchart TD\n A[/Marks/] --> B{Marks >= 90 ?}\n B -- True --> C[/Grade A/]\n B -- False --> D{Marks >= 80 ?}\n D -- True --> E[/Grade B/]\n D -- False --> F[/Grade C, D, or F/]"
    },
    { 
        q: "Q12", file: "day02/money.java", desc: "Find total number of notes in a given amount",
        concept: "A Greedy Algorithm: Divide the amount by the largest denomination first to get quantity, then pass the remainder down to the next.",
        pro: "Don't copy-paste logic! Use an array `int[] notes = {500, 100, 50, 20...}` and loop through it to keep the codebase DRY (Don't Repeat Yourself).",
        flow: "flowchart TD\n A[/Amount/] --> B[Qty = Amount / 500]\n B --> C[Amount = Amount % 500]\n C --> D[Qty = Amount / 100]\n D --> E[Amount = Amount % 100]\n E -.-> F[/Continue.../]"
    },
    { 
        q: "Q13", file: "day02/bonus.java", desc: "Check employee bonus eligibility",
        concept: "Applying a simple gate check. If experience is above a threshold, calculate and apply a mathematical multiplier.",
        pro: "Business rules change constantly. Hardcoding '5' and '0.05' creates magic numbers. These should always be extracted to `static final` constants.",
        flow: "flowchart TD\n A[/Salary, Exp/] --> B{Exp > 5?}\n B -- Yes --> C[Bonus = Salary * 0.05]\n C --> D[/Print Bonus/]\n B -- No --> E[/Print No Bonus/]"
    },
    { 
        q: "Q14", file: "day02/sales.java", desc: "Calculate commission based on sales amount slabs",
        concept: "We use an if-else ladder to check where the sales amount falls, and multiply by the appropriate commission percentage.",
        pro: "This is a classic Boundary Value Analysis scenario in QA testing. Off-by-one errors are extremely common. Ensuring boundaries are inclusive (`>= 5000`) vs exclusive (`> 5000`) is critical.",
        flow: "flowchart TD\n A[/Sales/] --> B{Sales < 5000?}\n B -- Yes --> C[Comm = 2%]\n B -- No --> D{Sales <= 10000?}\n D -- Yes --> E[Comm = 5%]\n D -- No --> F[Comm = 10%]\n C --> G[/Print Comm/]\n E --> G\n F --> G"
    },
    { 
        q: "Q15", file: "day02/cal.java", desc: "Simulate a simple calculator using switch case",
        concept: "A Switch statement acts as a precise router, directing the flow based on a single variable's exact match (like an operator symbol).",
        pro: "Java compiler translates switches to `tableswitch` bytecode, which operates in O(1) jump time, making it faster than O(n) if-else ladders. Java 14+ enhanced switches eliminate `break` entirely.",
        flow: "flowchart TD\n A[/N1, Op, N2/] --> B{Switch Operator}\n B -- '+' --> C[N1 + N2]\n B -- '-' --> D[N1 - N2]\n B -- '*' --> E[N1 * N2]\n B -- '/' --> F[N1 / N2]\n C --> G[/Result/]\n D --> G\n E --> G\n F --> G"
    },
    { 
        q: "Q16", file: "day02/remark.java", desc: "Display grade remark using switch",
        concept: "Instead of writing many if-else checks to map 'A' to 'Excellent', a switch maps the letter to a word cleanly and explicitly.",
        pro: "Switching on Characters or Integers is the absolute fastest way to branch logic in Java due to jump tables. Never use if-else for mapping 1:1 constants.",
        flow: "flowchart LR\n A[/Grade/] --> B{Switch}\n B -- 'A' --> C[/Excellent/]\n B -- 'B' --> D[/Good/]\n B -- 'F' --> E[/Fail/]"
    },
    { 
        q: "Q17", file: "day02/day.java", desc: "Print day type (Weekday/Weekend) using switch",
        concept: "Grouping cases together in a Switch block using 'Fall-Through' behavior by intentionally omitting the `break` keyword.",
        pro: "Modern Java 14+ introduces Switch Expressions allowing comma-separated cases: `case 1,2,3,4,5 -> print(\"Weekday\");`, drastically reducing boilerplate.",
        flow: "flowchart TD\n A[/Input 1-7/] --> B{Switch}\n B -- 1,2,3,4,5 --> C[Fall Through]\n C --> D[/Print Weekday/]\n B -- 6,7 --> E[/Print Weekend/]"
    },
    { 
        q: "Q19", file: "day02/digitname.java", desc: "Convert number (1-5) to word equivalent using switch",
        concept: "Mapping numerical inputs to string outputs directly using case matches.",
        pro: "Using a Switch for this is actually inefficient boilerplate! A senior dev creates an array: `String[] words = {\"One\", \"Two\", \"Three\"};` and retrieves it via `words[n-1]`. Zero logic needed.",
        flow: "flowchart LR\n A[/Input N/] --> B{Switch (N)}\n B -- 1 --> C[/One/]\n B -- 2 --> D[/Two/]\n B -- default --> E[/Invalid/]"
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

day1Problems.forEach(p => day1Grid.appendChild(createCard(p)));
day2Problems.forEach(p => day2Grid.appendChild(createCard(p)));

// Live Search Functionality
document.getElementById('search-bar').addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    
    [...day1Problems, ...day2Problems].forEach(item => {
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
    document.getElementById('modal-title').innerText = item.q + ": " + item.desc;
    document.getElementById('modal-concept').innerText = item.concept;
    document.getElementById('modal-pro').innerText = item.pro;
    
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
