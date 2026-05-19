# Java Mastery Canvas ☕️🎨

> A beautiful, full-stack, interactive learning platform that makes mastering Java algorithms fun and highly visual. Built with a hand-drawn Excalidraw-inspired design aesthetic.

**Live Link:** [https://javamastery.vercel.app](https://javamastery.vercel.app)

---

## ✨ Features
* 🎨 **Excali-Style Visuals:** Sketchy borders, hand-drawn look, and whiteboard layout for maximum aesthetic appeal.
* 📖 **Table of Contents & Blackboard Mode:** Easily navigate concepts and toggle dark mode (blackboard style) for late-night reading.
* 🗺️ **Visual Flowcharts & Logic Map:** Automatically rendered Mermaid.js diagrams mapping the exact logical paths for every single problem.
* 📝 **Step-by-step Pseudo-Code:** Detailed English algorithmic steps for all assignments.
* 💡 **Pro-Developer Insights:** Enterprise-grade tips, memory performance notes, and industry gotchas written for every challenge.
* 👤 **Full-Stack Authentication:** Secure user sign-up, login, and password resetting powered by Node.js, JWT, and Neon Postgres.
* ⚙️ **Persistent Session Cache:** Choose "Remember this device" to stay logged in permanently (utilizing localStorage vs sessionStorage).
* 📱 **Optimized Mobile Layouts:** Extensively responsive styles so you can study code logic smoothly on handheld devices.

---

## 🛠️ Tech Stack
* **Frontend:** Vanilla HTML5, CSS3 (Flexible Layout Grid, Custom Media Queries), Javascript (ES6+), [Mermaid.js](https://mermaid.js.org/) for chart rendering, [Kalam Google Font](https://fonts.google.com/specimen/Kalam) for the whiteboard handwriting feel.
* **Backend API:** Node.js serverless functions (Vercel backend).
* **Database:** Neon Serverless PostgreSQL with SSL pooling.
* **Deployment:** Hosted on Vercel.

---

## 📂 Directory Structure
```text
├── api/                   # Vercel Serverless API Routes
│   ├── db.js              # Database connection pools (Neon)
│   ├── init.js            # Initial database schema setup scripts
│   ├── login.js           # Login & JWT generation API
│   ├── signup.js          # Password hashing (bcrypt) & Account registration
│   └── forgot.js          # Password reset API
├── day01/                 # Source code for Day 1 Java challenges
├── day02/                 # Source code for Day 2 Java challenges
└── excali-explainer/      # Core web application resources
    ├── index.html         # Landing hero page (Protected entrance)
    ├── login.html         # Auth login page
    ├── signup.html        # Auth registration page
    ├── forgot.html        # Forgot password reset page
    ├── problems.html      # User dashboard & problem cards
    ├── learn.html         # Main visual canvas (Learn Java Concepts)
    ├── style.css          # Sketch aesthetic stylesheet & mobile queries
    ├── script.js          # Core whiteboard modal, search & database objects
    ├── learn.js           # Interactive whiteboard logic & confetti triggers
    ├── terms.html         # User agreement document
    └── privacy.html       # Privacy policy document
```

---

## 📚 Assignments Covered

### 📅 Day 1: Java Basics & Sequential Logic
* **Q1.** Write a java program to display message "This is first java program". -> `day01/print.java`
* **Q2.** Write a java program to input all basic data types and print its output. -> `day01/data.java`
* **Q3.** Write a java program to enter two numbers and perform all arithmetic operations. -> `day01/operations.java`
* **Q4.** Write a java program to enter two angles of a triangle and find the third angle. -> `day01/triangle.java`
* **Q5.** Write a java program to enter marks of five subjects and calculate total marks and percentage. -> `day01/marks.java`
* **Q6.** Write a java program to calculate the simple interest. -> `day01/simple.java`
* **Q7 / Q8.** Write a java program to swap two numbers with/without using a third variable. -> `day01/swap.java`
* **Q9.** Write a Java program to print the ASCII value of a given character. -> `day01/ascii.java`
* **Q10.** Write a Java program to convert seconds to hours, minutes and seconds. -> `day01/time.java`
* **Q11.** Write a java program to check whether a number is neon or not. -> `day01/neon.java`
* **Q12.** Write a Java program that takes an alphabet character and toggles its case using ASCII values. -> `day01/casealpha.java`
* **Q13.** Write a Java program to check whether a number is even or odd. -> `day01/evenodd.java`
* **Q14.** Write a Java program to check whether a triangle is valid or not. -> `day01/trivalid.java`
* **Q15.** Write a Java program to check whether a triangle is equilateral, isosceles or scalene. -> `day01/tritypes.java`
* **Q16.** Write a Java program to check whether a number is positive, negative or zero. -> `day01/num.java`
* **Q17.** Write a Java program to check whether a number is divisible by 5 and 11 or not. -> `day01/divisible.java`
* **Q18.** Write a java program to input basic salary of an employee and calculate its Gross salary. -> `day01/GrossSalary.java`

### 📅 Day 2: Decision Trees & Conditional logic
* **Q1.** Write a Java program to reverse a number without using loop. -> `day02/reverse.java`
* **Q2 & Q3.** Write a program to find the first and last digit of a 3-digit number without using loops and sum them. -> `day02/digit.java`
* **Q5.** Write a java program to check whether a number is a palindrome or not. -> `day02/palindrome.java`
* **Q6.** Write a Java program to check whether character is alphabetic or not. -> `day02/alpha.java`
* **Q7.** Write a Java program to input cost price and selling price of a product and check profit or loss. -> `day02/pro.java`
* **Q8.** Write a java program to input any alphabet and check whether it is vowel or consonant. -> `day02/vowel.java`
* **Q9.** Write a java program to find the maximum between three numbers. -> `day02/max.java`
* **Q10.** Write a java program to find the minimum between three numbers. -> `day02/min.java`
* **Q11.** Print a grade using ternary operators. -> `day02/grade.java`
* **Q12.** Write a java program to find the total number of notes in a given amount. -> `day02/money.java`
* **Q13.** Check whether a given employee is eligible for bonus. -> `day02/bonus.java`
* **Q14.** Calculate commission based on sales amount. -> `day02/sales.java`
* **Q15.** Create a Java program to simulate a simple calculator using a switch case. -> `day02/cal.java`
* **Q16.** Write a program that takes a grade as input and displays the corresponding remark using switch. -> `day02/remark.java`
* **Q17.** Develop a Java program using switch to print the day type for an input day number (1-7). -> `day02/day.java`
* **Q18.** Write a program to input a character and check whether it is a vowel or consonant using a switch case. -> `day02/vowel.java` (using switch)
* **Q19.** Create a Java program using switch to convert a given number (1-5) to its word equivalent. -> `day02/digitname.java`

---

## 🚀 Local Setup & Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/SurajsinghBayas/ppw.git
   cd ppw
   ```

2. **Install API dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   Create a `.env` file or export your connection string on your serverless platform:
   ```env
   DATABASE_URL="your-postgresql-neon-connection-string"
   JWT_SECRET="your-super-secret-jwt-key"
   ```

4. **Initialize Database Tables:**
   Run the database migration init script:
   ```bash
   curl http://localhost:3000/api/init
   ```

---

## 👤 Credits

Developed with ☕️ by **[Suraj Bayas](https://github.com/SurajsinghBayas)**.

If this learning dashboard or assignments repository helped you, don't forget to **Star ⭐️ this project** on GitHub!
