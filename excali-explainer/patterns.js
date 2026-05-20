// Patterns Database & Loop Simulator Engine
const PATTERNS = [
    {
        id: "square",
        name: "1. Square Star Pattern",
        javaCode: `for (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= n; j++) {\n        System.out.print("* ");\n    }\n    System.out.println();\n}`,
        formula: "Rows: N, Columns: N. No spaces loop, print '*' everywhere.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "This is the baseline pattern. Every other pattern is just a subset of this grid, achieved by restricting the inner loop using conditions.",
        explanation: "To print a square of size N, we need a grid of N rows and N columns. The outer loop controls rows (i), and the inner loop controls columns (j). At every cell, we print a star without any conditions.",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let grid = Array(n).fill(null).map(() => Array(n).fill(" "));

            steps.push({ i: 0, j: 0, activeLine: 0, grid: cloneGrid(grid), output, details: "Initialize outer loop: i = 1" });

            for (let i = 1; i <= n; i++) {
                steps.push({ i, j: 0, activeLine: 0, grid: cloneGrid(grid), output, details: `Row ${i}: Check i <= n (True). Enter outer loop.` });
                steps.push({ i, j: 0, activeLine: 1, grid: cloneGrid(grid), output, details: `Row ${i}: Initialize inner loop: j = 1` });

                for (let j = 1; j <= n; j++) {
                    grid[i - 1][j - 1] = "*";
                    output += "* ";
                    steps.push({
                        i, j,
                        activeLine: 2,
                        grid: cloneGrid(grid),
                        activeCell: [i - 1, j - 1],
                        output,
                        details: `Row ${i}, Col ${j}: Print star '*'.`
                    });
                }
                output += "\n";
                steps.push({ i, j: n + 1, activeLine: 4, grid: cloneGrid(grid), output, details: `Row ${i} complete: Print newline.` });
            }
            steps.push({ i: n + 1, j: 0, activeLine: 0, grid: cloneGrid(grid), output, details: "Outer loop condition i <= n is now False. Terminate." });
            return steps;
        }
    },
    {
        id: "hollow_square",
        name: "2. Hollow Square Star Pattern",
        javaCode: `for (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= n; j++) {\n        if (i == 1 || i == n || j == 1 || j == n) {\n            System.out.print("* ");\n        } else {\n            System.out.print("  ");\n        }\n    }\n    System.out.println();\n}`,
        formula: "Stars on boundaries (i == 1 || i == N || j == 1 || j == N), spaces elsewhere.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "Use logical OR (||) to merge boundary conditions. Inside the grid, any cell that doesn't lie on the first/last row or first/last column gets printed as empty spaces.",
        explanation: "A hollow square prints stars only on the outline. The boundaries correspond to the first row (i=1), last row (i=N), first column (j=1), and last column (j=N). All internal cells are printed as spaces.",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let grid = Array(n).fill(null).map(() => Array(n).fill(" "));

            steps.push({ i: 0, j: 0, activeLine: 0, grid: cloneGrid(grid), output, details: "Initialize outer loop: i = 1" });

            for (let i = 1; i <= n; i++) {
                steps.push({ i, j: 0, activeLine: 0, grid: cloneGrid(grid), output, details: `Row ${i}: Enter outer loop.` });

                for (let j = 1; j <= n; j++) {
                    const isBorder = (i === 1 || i === n || j === 1 || j === n);
                    if (isBorder) {
                        grid[i - 1][j - 1] = "*";
                        output += "* ";
                        steps.push({
                            i, j,
                            activeLine: 3,
                            grid: cloneGrid(grid),
                            activeCell: [i - 1, j - 1],
                            output,
                            details: `Row ${i}, Col ${j}: On border (i=${i}, j=${j}). Print '*'.`
                        });
                    } else {
                        grid[i - 1][j - 1] = "."; // Dot to represent space in grid
                        output += "  ";
                        steps.push({
                            i, j,
                            activeLine: 5,
                            grid: cloneGrid(grid),
                            activeCell: [i - 1, j - 1],
                            output,
                            details: `Row ${i}, Col ${j}: Inner cell. Print space.`
                        });
                    }
                }
                output += "\n";
                steps.push({ i, j: n + 1, activeLine: 8, grid: cloneGrid(grid), output, details: `Row ${i} complete: Print newline.` });
            }
            return steps;
        }
    },
    {
        id: "right_triangle",
        name: "3. Right Triangle Star Pattern",
        javaCode: `for (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print("* ");\n    }\n    System.out.println();\n}`,
        formula: "Columns per row: j <= i. Stars printed match the current row number.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "Make the inner loop condition depend on the outer loop variable (j <= i). This creates the growing triangular form dynamically.",
        explanation: "In a right triangle, the number of stars in a row equals the row's index. Row 1 has 1 star, Row 2 has 2 stars, etc. Hence, the inner loop limits its iterations to the current row count (j <= i).",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let grid = Array(n).fill(null).map(() => Array(n).fill(" "));

            for (let i = 1; i <= n; i++) {
                steps.push({ i, j: 0, activeLine: 0, grid: cloneGrid(grid), output, details: `Row ${i}: Initialize inner loop to run up to ${i} columns.` });
                for (let j = 1; j <= i; j++) {
                    grid[i - 1][j - 1] = "*";
                    output += "* ";
                    steps.push({
                        i, j,
                        activeLine: 2,
                        grid: cloneGrid(grid),
                        activeCell: [i - 1, j - 1],
                        output,
                        details: `Row ${i}, Col ${j}: Print star (j <= i).`
                    });
                }
                output += "\n";
                steps.push({ i, j: i + 1, activeLine: 4, grid: cloneGrid(grid), output, details: `Row ${i} complete: Print newline.` });
            }
            return steps;
        }
    },
    {
        id: "left_triangle",
        name: "4. Left Triangle Star Pattern",
        javaCode: `for (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= n - i; j++) {\n        System.out.print("  ");\n    }\n    for (int j = 1; j <= i; j++) {\n        System.out.print("* ");\n    }\n    System.out.println();\n}`,
        formula: "Spaces = N - i, Stars = i. Align stars to the right.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "Think of this as printing two separate shapes per row: a inverted right triangle of spaces, followed by a right triangle of stars.",
        explanation: "To align the right-angled triangle to the right, we prepend empty spaces. For row i, we print N-i double spaces first, then print i stars.",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let grid = Array(n).fill(null).map(() => Array(n).fill(" "));

            for (let i = 1; i <= n; i++) {
                steps.push({ i, j: 0, activeLine: 0, grid: cloneGrid(grid), output, details: `Row ${i}: Space loop (N - i = ${n - i} spaces), Star loop (${i} stars).` });

                // Spaces
                for (let j = 1; j <= n - i; j++) {
                    grid[i - 1][j - 1] = ".";
                    output += "  ";
                    steps.push({
                        i, j,
                        activeLine: 2,
                        grid: cloneGrid(grid),
                        activeCell: [i - 1, j - 1],
                        output,
                        details: `Row ${i}, Col ${j}: Print leading space (space loop).`
                    });
                }

                // Stars
                for (let j = 1; j <= i; j++) {
                    let colIdx = (n - i) + j - 1;
                    grid[i - 1][colIdx] = "*";
                    output += "* ";
                    steps.push({
                        i, j,
                        activeLine: 5,
                        grid: cloneGrid(grid),
                        activeCell: [i - 1, colIdx],
                        output,
                        details: `Row ${i}, Col ${colIdx + 1}: Print star (star loop).`
                    });
                }
                output += "\n";
                steps.push({ i, j: n + 1, activeLine: 7, grid: cloneGrid(grid), output, details: "Print newline." });
            }
            return steps;
        }
    },
    {
        id: "downward_triangle",
        name: "5. Downward Triangle Star Pattern",
        javaCode: `for (int i = n; i >= 1; i--) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print("* ");\n    }\n    System.out.println();\n}`,
        formula: "Rows run from N down to 1. Column limit decreases dynamically (j <= i).",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "By decrementing the outer loop (i--), we automatically decrease the star limit for the inner loop in each successive row.",
        explanation: "This is an inverted right triangle. The first row has N stars, the second has N-1, down to 1 star. We decrement the outer loop counter from N down to 1, and the inner loop prints up to i stars.",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let grid = Array(n).fill(null).map(() => Array(n).fill(" "));

            for (let i = n; i >= 1; i--) {
                let rowIdx = n - i;
                steps.push({ i: rowIdx + 1, j: 0, activeLine: 0, grid: cloneGrid(grid), output, details: `Row ${rowIdx + 1}: Set outer counter i = ${i}. Inner loop runs 1 to ${i}.` });

                for (let j = 1; j <= i; j++) {
                    grid[rowIdx][j - 1] = "*";
                    output += "* ";
                    steps.push({
                        i: rowIdx + 1, j,
                        activeLine: 2,
                        grid: cloneGrid(grid),
                        activeCell: [rowIdx, j - 1],
                        output,
                        details: `Row ${rowIdx + 1}, Col ${j}: Print star.`
                    });
                }
                output += "\n";
                steps.push({ i: rowIdx + 1, j: i + 1, activeLine: 4, grid: cloneGrid(grid), output, details: "Print newline." });
            }
            return steps;
        }
    },
    {
        id: "inverted_right_aligned",
        name: "6. Inverted Right-Aligned Triangle",
        javaCode: `for (int i = 1; i <= n; i++) {\n    for (int j = 1; j < i; j++) {\n        System.out.print("  ");\n    }\n    for (int j = i; j <= n; j++) {\n        System.out.print("* ");\n    }\n    System.out.println();\n}`,
        formula: "Spaces = i - 1, Stars = N - i + 1.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "The inner loop variable for stars starts from the row index i (j = i; j <= N), which naturally yields N - i + 1 elements.",
        explanation: "To invert the triangle and align it right, we print increasing spaces and decreasing stars. Row 1: 0 spaces, N stars. Row 2: 1 space, N-1 stars. We write two loops: spaces up to i-1, stars from i up to N.",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let grid = Array(n).fill(null).map(() => Array(n).fill(" "));

            for (let i = 1; i <= n; i++) {
                steps.push({ i, j: 0, activeLine: 0, grid: cloneGrid(grid), output, details: `Row ${i}: Spaces = ${i - 1}, Stars = ${n - i + 1}.` });

                // Spaces
                for (let j = 1; j < i; j++) {
                    grid[i - 1][j - 1] = ".";
                    output += "  ";
                    steps.push({
                        i, j,
                        activeLine: 2,
                        grid: cloneGrid(grid),
                        activeCell: [i - 1, j - 1],
                        output,
                        details: `Row ${i}, Col ${j}: Print leading space (j < i).`
                    });
                }

                // Stars
                for (let j = i; j <= n; j++) {
                    grid[i - 1][j - 1] = "*";
                    output += "* ";
                    steps.push({
                        i, j,
                        activeLine: 5,
                        grid: cloneGrid(grid),
                        activeCell: [i - 1, j - 1],
                        output,
                        details: `Row ${i}, Col ${j}: Print star (j >= i).`
                    });
                }
                output += "\n";
                steps.push({ i, j: n + 1, activeLine: 7, grid: cloneGrid(grid), output, details: "Print newline." });
            }
            return steps;
        }
    },
    {
        id: "pyramid",
        name: "7. Pyramid Star Pattern",
        javaCode: `for (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= n - i; j++) {\n        System.out.print("  ");\n    }\n    for (int j = 1; j <= 2 * i - 1; j++) {\n        System.out.print("* ");\n    }\n    System.out.println();\n}`,
        formula: "Spaces = N - i, Stars = 2*i - 1.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "The mathematical formula for odd sequence elements is 2*i - 1. This generates 1, 3, 5, 7 stars for successive rows.",
        explanation: "A centered pyramid has spaces on the left. In row i, we print N-i spaces, followed by 2*i - 1 stars. This forms a symmetric, balanced pyramid.",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let width = 2 * n - 1;
            let grid = Array(n).fill(null).map(() => Array(width).fill(" "));

            for (let i = 1; i <= n; i++) {
                steps.push({ i, j: 0, activeLine: 0, grid: cloneGrid(grid), output, details: `Row ${i}: Spaces = ${n - i}, Stars = ${2 * i - 1}.` });

                // Spaces
                for (let j = 1; j <= n - i; j++) {
                    grid[i - 1][j - 1] = ".";
                    output += "  ";
                    steps.push({
                        i, j,
                        activeLine: 2,
                        grid: cloneGrid(grid),
                        activeCell: [i - 1, j - 1],
                        output,
                        details: `Row ${i}, Col ${j}: Print space.`
                    });
                }

                // Stars
                for (let j = 1; j <= 2 * i - 1; j++) {
                    let colIdx = (n - i) + j - 1;
                    grid[i - 1][colIdx] = "*";
                    output += "* ";
                    steps.push({
                        i, j,
                        activeLine: 5,
                        grid: cloneGrid(grid),
                        activeCell: [i - 1, colIdx],
                        output,
                        details: `Row ${i}, Col ${colIdx + 1}: Print star.`
                    });
                }
                output += "\n";
                steps.push({ i, j: width + 1, activeLine: 7, grid: cloneGrid(grid), output, details: "Print newline." });
            }
            return steps;
        }
    },
    {
        id: "inverted_pyramid",
        name: "8. Inverted Pyramid Star Pattern",
        javaCode: `for (int i = n; i >= 1; i--) {\n    for (int j = 1; j <= n - i; j++) {\n        System.out.print("  ");\n    }\n    for (int j = 1; j <= 2 * i - 1; j++) {\n        System.out.print("* ");\n    }\n    System.out.println();\n}`,
        formula: "Outer loop: n down to 1. Spaces = N - i, Stars = 2*i - 1.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "By counting the outer loop backwards from N to 1, we can reuse the same formulas (Spaces = N - i, Stars = 2*i - 1) as the standard pyramid.",
        explanation: "An inverted pyramid prints wide at the top and narrows to a point. We start the outer loop at i = N and decrement down to 1. The space count increases (N-i) and star count decreases (2*i - 1).",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let width = 2 * n - 1;
            let grid = Array(n).fill(null).map(() => Array(width).fill(" "));

            for (let i = n; i >= 1; i--) {
                let rIdx = n - i;
                steps.push({ i: rIdx + 1, j: 0, activeLine: 0, grid: cloneGrid(grid), output, details: `Row ${rIdx + 1} (i=${i}): Spaces = ${n - i}, Stars = ${2 * i - 1}.` });

                // Spaces
                for (let j = 1; j <= n - i; j++) {
                    grid[rIdx][j - 1] = ".";
                    output += "  ";
                    steps.push({
                        i: rIdx + 1, j,
                        activeLine: 2,
                        grid: cloneGrid(grid),
                        activeCell: [rIdx, j - 1],
                        output,
                        details: `Row ${rIdx + 1}, Col ${j}: Print space.`
                    });
                }

                // Stars
                for (let j = 1; j <= 2 * i - 1; j++) {
                    let colIdx = (n - i) + j - 1;
                    grid[rIdx][colIdx] = "*";
                    output += "* ";
                    steps.push({
                        i: rIdx + 1, j,
                        activeLine: 5,
                        grid: cloneGrid(grid),
                        activeCell: [rIdx, colIdx],
                        output,
                        details: `Row ${rIdx + 1}, Col ${colIdx + 1}: Print star.`
                    });
                }
                output += "\n";
                steps.push({ i: rIdx + 1, j: width + 1, activeLine: 7, grid: cloneGrid(grid), output, details: "Print newline." });
            }
            return steps;
        }
    },
    {
        id: "diamond",
        name: "9. Diamond Star Pattern",
        javaCode: `// Top half\nfor (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= n - i; j++) System.out.print("  ");\n    for (int j = 1; j <= 2 * i - 1; j++) System.out.print("* ");\n    System.out.println();\n}\n// Bottom half\nfor (int i = n - 1; i >= 1; i--) {\n    for (int j = 1; j <= n - i; j++) System.out.print("  ");\n    for (int j = 1; j <= 2 * i - 1; j++) System.out.print("* ");\n    System.out.println();\n}`,
        formula: "Top half: 1 to N. Bottom half: N-1 down to 1. Pyramid + Inverted Pyramid.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "To avoid duplicate rows in the center, make the bottom half outer loop start at N - 1 instead of N.",
        explanation: "A diamond combines an upright pyramid and an inverted pyramid. The upper loop runs from 1 to N. The lower loop runs from N-1 down to 1 to complete the shape symmetric.",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let rows = 2 * n - 1;
            let width = 2 * n - 1;
            let grid = Array(rows).fill(null).map(() => Array(width).fill(" "));

            // Upper
            for (let i = 1; i <= n; i++) {
                steps.push({ i, j: 0, activeLine: 1, grid: cloneGrid(grid), output, details: `Top half, Row ${i}: Spaces = ${n - i}, Stars = ${2 * i - 1}.` });
                for (let j = 1; j <= n - i; j++) {
                    grid[i - 1][j - 1] = ".";
                    output += "  ";
                    steps.push({ i, j, activeLine: 2, grid: cloneGrid(grid), activeCell: [i - 1, j - 1], output, details: "Print space." });
                }
                for (let j = 1; j <= 2 * i - 1; j++) {
                    let colIdx = (n - i) + j - 1;
                    grid[i - 1][colIdx] = "*";
                    output += "* ";
                    steps.push({ i, j, activeLine: 3, grid: cloneGrid(grid), activeCell: [i - 1, colIdx], output, details: "Print star." });
                }
                output += "\n";
            }

            // Lower
            for (let i = n - 1; i >= 1; i--) {
                let rIdx = 2 * n - 1 - i;
                steps.push({ i: rIdx + 1, j: 0, activeLine: 7, grid: cloneGrid(grid), output, details: `Bottom half, Row ${rIdx + 1} (i=${i}): Spaces = ${n - i}, Stars = ${2 * i - 1}.` });
                for (let j = 1; j <= n - i; j++) {
                    grid[rIdx][j - 1] = ".";
                    output += "  ";
                    steps.push({ i: rIdx + 1, j, activeLine: 8, grid: cloneGrid(grid), activeCell: [rIdx, j - 1], output, details: "Print space." });
                }
                for (let j = 1; j <= 2 * i - 1; j++) {
                    let colIdx = (n - i) + j - 1;
                    grid[rIdx][colIdx] = "*";
                    output += "* ";
                    steps.push({ i: rIdx + 1, j, activeLine: 9, grid: cloneGrid(grid), activeCell: [rIdx, colIdx], output, details: "Print star." });
                }
                output += "\n";
            }
            return steps;
        }
    },
    {
        id: "hollow_diamond",
        name: "10. Hollow Diamond Star Pattern",
        javaCode: `// Top half\nfor (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= n - i; j++) System.out.print("  ");\n    for (int j = 1; j <= 2 * i - 1; j++) {\n        if (j == 1 || j == 2 * i - 1) System.out.print("* ");\n        else System.out.print("  ");\n    }\n    System.out.println();\n}\n// Bottom half\nfor (int i = n - 1; i >= 1; i--) {\n    for (int j = 1; j <= n - i; j++) System.out.print("  ");\n    for (int j = 1; j <= 2 * i - 1; j++) {\n        if (j == 1 || j == 2 * i - 1) System.out.print("* ");\n        else System.out.print("  ");\n    }\n    System.out.println();\n}`,
        formula: "Same loops as Diamond, but star condition: j == 1 || j == 2*i - 1 inside the star loop.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "A hollow diamond restricts printing. Stars are only placed at the first (j == 1) and last (j == 2*i - 1) position of the character block.",
        explanation: "Like the Diamond pattern, but in the star printing block, we insert an `if` condition. We only print a star if it is the boundary of that row's star block (j == 1 or j == 2*i-1); all else is printed as space.",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let rows = 2 * n - 1;
            let width = 2 * n - 1;
            let grid = Array(rows).fill(null).map(() => Array(width).fill(" "));

            // Upper
            for (let i = 1; i <= n; i++) {
                steps.push({ i, j: 0, activeLine: 1, grid: cloneGrid(grid), output, details: `Top half, Row ${i}: Border check inside star loop.` });
                for (let j = 1; j <= n - i; j++) {
                    grid[i - 1][j - 1] = ".";
                    output += "  ";
                }
                for (let j = 1; j <= 2 * i - 1; j++) {
                    let colIdx = (n - i) + j - 1;
                    if (j === 1 || j === 2 * i - 1) {
                        grid[i - 1][colIdx] = "*";
                        output += "* ";
                        steps.push({ i, j, activeLine: 4, grid: cloneGrid(grid), activeCell: [i - 1, colIdx], output, details: "Print border star." });
                    } else {
                        grid[i - 1][colIdx] = ".";
                        output += "  ";
                        steps.push({ i, j, activeLine: 5, grid: cloneGrid(grid), activeCell: [i - 1, colIdx], output, details: "Print inner space." });
                    }
                }
                output += "\n";
            }

            // Lower
            for (let i = n - 1; i >= 1; i--) {
                let rIdx = 2 * n - 1 - i;
                steps.push({ i: rIdx + 1, j: 0, activeLine: 10, grid: cloneGrid(grid), output, details: `Bottom half, Row ${rIdx + 1}: Border check inside star loop.` });
                for (let j = 1; j <= n - i; j++) {
                    grid[rIdx][j - 1] = ".";
                    output += "  ";
                }
                for (let j = 1; j <= 2 * i - 1; j++) {
                    let colIdx = (n - i) + j - 1;
                    if (j === 1 || j === 2 * i - 1) {
                        grid[rIdx][colIdx] = "*";
                        output += "* ";
                        steps.push({ i: rIdx + 1, j, activeLine: 12, grid: cloneGrid(grid), activeCell: [rIdx, colIdx], output, details: "Print border star." });
                    } else {
                        grid[rIdx][colIdx] = ".";
                        output += "  ";
                        steps.push({ i: rIdx + 1, j, activeLine: 13, grid: cloneGrid(grid), activeCell: [rIdx, colIdx], output, details: "Print inner space." });
                    }
                }
                output += "\n";
            }
            return steps;
        }
    },
    {
        id: "half_diamond",
        name: "11. Half Diamond Star Pattern",
        javaCode: `for (int i = 1; i <= 2 * n - 1; i++) {\n    int cols = i <= n ? i : 2 * n - i;\n    for (int j = 1; j <= cols; j++) {\n        System.out.print("* ");\n    }\n    System.out.println();\n}`,
        formula: "Rows: 2*N - 1. If i <= N, cols = i, else cols = 2*N - i.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "By computing the target column limit (`cols`) dynamically using a ternary operator, we can compress the logic into a single outer loop.",
        explanation: "A half diamond grows outwards on the left side, reaching N stars before shrinking back. We loop 2*N-1 times. For row i, we check if we are in the upper half; if so, we print i stars. Otherwise, we print 2*N-i stars.",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let rows = 2 * n - 1;
            let grid = Array(rows).fill(null).map(() => Array(n).fill(" "));

            for (let i = 1; i <= rows; i++) {
                let cols = i <= n ? i : 2 * n - i;
                steps.push({ i, j: 0, activeLine: 1, grid: cloneGrid(grid), output, details: `Row ${i}: Target columns = ${cols} (i <= n ? i : 2*n - i).` });

                for (let j = 1; j <= cols; j++) {
                    grid[i - 1][j - 1] = "*";
                    output += "* ";
                    steps.push({
                        i, j,
                        activeLine: 3,
                        grid: cloneGrid(grid),
                        activeCell: [i - 1, j - 1],
                        output,
                        details: `Row ${i}, Col ${j}: Print star.`
                    });
                }
                output += "\n";
                steps.push({ i, j: cols + 1, activeLine: 5, grid: cloneGrid(grid), output, details: "Print newline." });
            }
            return steps;
        }
    },
    {
        id: "hourglass",
        name: "12. Hourglass Star Pattern",
        javaCode: `// Top half\nfor (int i = n; i >= 1; i--) {\n    for (int j = 1; j <= n - i; j++) System.out.print("  ");\n    for (int j = 1; j <= 2 * i - 1; j++) System.out.print("* ");\n    System.out.println();\n}\n// Bottom half\nfor (int i = 2; i <= n; i++) {\n    for (int j = 1; j <= n - i; j++) System.out.print("  ");\n    for (int j = 1; j <= 2 * i - 1; j++) System.out.print("* ");\n    System.out.println();\n}`,
        formula: "Top: N down to 1. Bottom: 2 up to N. Spaces = N - i, Stars = 2*i - 1.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "An hourglass is an inverted pyramid stacked on top of an upright pyramid. Note that the bottom half starts at i=2 to avoid repeating the single star center.",
        explanation: "The hourglass consists of two parts. The upper half is an inverted pyramid (from i = N down to 1). The lower half is a pyramid that starts from i = 2 up to N (to skip repeating the single center star).",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let rows = 2 * n - 1;
            let width = 2 * n - 1;
            let grid = Array(rows).fill(null).map(() => Array(width).fill(" "));

            // Upper
            for (let i = n; i >= 1; i--) {
                let rIdx = n - i;
                steps.push({ i: rIdx + 1, j: 0, activeLine: 1, grid: cloneGrid(grid), output, details: `Upper Hourglass, Row ${rIdx + 1} (i=${i}): Spaces = ${n - i}, Stars = ${2 * i - 1}` });
                for (let j = 1; j <= n - i; j++) {
                    grid[rIdx][j - 1] = ".";
                    output += "  ";
                }
                for (let j = 1; j <= 2 * i - 1; j++) {
                    let colIdx = (n - i) + j - 1;
                    grid[rIdx][colIdx] = "*";
                    output += "* ";
                    steps.push({ i: rIdx + 1, j, activeLine: 3, grid: cloneGrid(grid), activeCell: [rIdx, colIdx], output, details: "Print star." });
                }
                output += "\n";
            }
            // Lower
            for (let i = 2; i <= n; i++) {
                let rIdx = n + i - 2;
                steps.push({ i: rIdx + 1, j: 0, activeLine: 7, grid: cloneGrid(grid), output, details: `Lower Hourglass, Row ${rIdx + 1} (i=${i}): Spaces = ${n - i}, Stars = ${2 * i - 1}` });
                for (let j = 1; j <= n - i; j++) {
                    grid[rIdx][j - 1] = ".";
                    output += "  ";
                }
                for (let j = 1; j <= 2 * i - 1; j++) {
                    let colIdx = (n - i) + j - 1;
                    grid[rIdx][colIdx] = "*";
                    output += "* ";
                    steps.push({ i: rIdx + 1, j, activeLine: 9, grid: cloneGrid(grid), activeCell: [rIdx, colIdx], output, details: "Print star." });
                }
                output += "\n";
            }
            return steps;
        }
    },
    {
        id: "hollow_hourglass",
        name: "13. Hollow Hourglass Star Pattern",
        javaCode: `// Top half\nfor (int i = n; i >= 1; i--) {\n    for (int j = 1; j <= n - i; j++) System.out.print("  ");\n    for (int j = 1; j <= 2 * i - 1; j++) {\n        if (i == n || j == 1 || j == 2 * i - 1) System.out.print("* ");\n        else System.out.print("  ");\n    }\n    System.out.println();\n}\n// Bottom half\nfor (int i = 2; i <= n; i++) {\n    for (int j = 1; j <= n - i; j++) System.out.print("  ");\n    for (int j = 1; j <= 2 * i - 1; j++) {\n        if (i == n || j == 1 || j == 2 * i - 1) System.out.print("* ");\n        else System.out.print("  ");\n    }\n    System.out.println();\n}`,
        formula: "Outline of Hourglass. Check i == N || j == 1 || j == 2*i - 1 inside loops.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "Ensure the top and bottom edge rows (i == N) are printed completely with stars to close off the hourglass structure.",
        explanation: "A hollow hourglass prints stars only on the top line, bottom line, and diagonals that cross in the center. Inside the loops, we check if we are on the first row of either loop block (i == N) or on the border of the star sequence (j == 1 or j == 2*i-1).",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let rows = 2 * n - 1;
            let width = 2 * n - 1;
            let grid = Array(rows).fill(null).map(() => Array(width).fill(" "));

            // Upper
            for (let i = n; i >= 1; i--) {
                let rIdx = n - i;
                steps.push({ i: rIdx + 1, j: 0, activeLine: 1, grid: cloneGrid(grid), output, details: `Upper Hourglass, Row ${rIdx + 1} (i=${i}).` });
                for (let j = 1; j <= n - i; j++) {
                    grid[rIdx][j - 1] = ".";
                    output += "  ";
                }
                for (let j = 1; j <= 2 * i - 1; j++) {
                    let colIdx = (n - i) + j - 1;
                    if (i === n || j === 1 || j === 2 * i - 1) {
                        grid[rIdx][colIdx] = "*";
                        output += "* ";
                        steps.push({ i: rIdx + 1, j, activeLine: 4, grid: cloneGrid(grid), activeCell: [rIdx, colIdx], output, details: "Print border star." });
                    } else {
                        grid[rIdx][colIdx] = ".";
                        output += "  ";
                        steps.push({ i: rIdx + 1, j, activeLine: 5, grid: cloneGrid(grid), activeCell: [rIdx, colIdx], output, details: "Print hollow space." });
                    }
                }
                output += "\n";
            }
            // Lower
            for (let i = 2; i <= n; i++) {
                let rIdx = n + i - 2;
                steps.push({ i: rIdx + 1, j: 0, activeLine: 9, grid: cloneGrid(grid), output, details: `Lower Hourglass, Row ${rIdx + 1} (i=${i}).` });
                for (let j = 1; j <= n - i; j++) {
                    grid[rIdx][j - 1] = ".";
                    output += "  ";
                }
                for (let j = 1; j <= 2 * i - 1; j++) {
                    let colIdx = (n - i) + j - 1;
                    if (i === n || j === 1 || j === 2 * i - 1) {
                        grid[rIdx][colIdx] = "*";
                        output += "* ";
                        steps.push({ i: rIdx + 1, j, activeLine: 12, grid: cloneGrid(grid), activeCell: [rIdx, colIdx], output, details: "Print border star." });
                    } else {
                        grid[rIdx][colIdx] = ".";
                        output += "  ";
                        steps.push({ i: rIdx + 1, j, activeLine: 13, grid: cloneGrid(grid), activeCell: [rIdx, colIdx], output, details: "Print hollow space." });
                    }
                }
                output += "\n";
            }
            return steps;
        }
    },
    {
        id: "right_pascal",
        name: "14. Right Pascal's Triangle",
        javaCode: `for (int i = 1; i <= 2 * n - 1; i++) {\n    int cols = i <= n ? i : 2 * n - i;\n    for (int j = 1; j <= cols; j++) {\n        System.out.print("* ");\n    }\n    System.out.println();\n}`,
        formula: "Same as Half Diamond Star Pattern. Used extensively in loop teaching.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "Think of this as a right-angled triangle that grows to width N, then mirrors and decays back down to 1.",
        explanation: "Right Pascal's Triangle is identical in shape to the Half Diamond. We use a single outer loop running from 1 to 2N-1. The column limit is calculated on each row based on whether it is in the top or bottom half.",
        generateSteps: function (n) {
            // Re-uses half-diamond logic for clean DRY structure
            let steps = [];
            let output = "";
            let rows = 2 * n - 1;
            let grid = Array(rows).fill(null).map(() => Array(n).fill(" "));

            for (let i = 1; i <= rows; i++) {
                let cols = i <= n ? i : 2 * n - i;
                steps.push({ i, j: 0, activeLine: 1, grid: cloneGrid(grid), output, details: `Row ${i}: Output columns = ${cols}.` });
                for (let j = 1; j <= cols; j++) {
                    grid[i - 1][j - 1] = "*";
                    output += "* ";
                    steps.push({ i, j, activeLine: 3, grid: cloneGrid(grid), activeCell: [i - 1, j - 1], output, details: "Print star." });
                }
                output += "\n";
            }
            return steps;
        }
    },
    {
        id: "left_pascal",
        name: "15. Left Pascal's Triangle",
        javaCode: `for (int i = 1; i <= 2 * n - 1; i++) {\n    int spaces = i <= n ? n - i : i - n;\n    int stars = i <= n ? i : 2 * n - i;\n    for (int j = 1; j <= spaces; j++) System.out.print("  ");\n    for (int j = 1; j <= stars; j++) System.out.print("* ");\n    System.out.println();\n}`,
        formula: "If i <= N: Spaces = N - i, Stars = i. Else: Spaces = i - N, Stars = 2*N - i.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "By computing both spaces and stars in advance using ternary operators, the printing sequence runs perfectly in a single unified flow.",
        explanation: "This is a right-aligned Pascal's triangle. We pre-compute the count of spaces and stars for each row. The first half grows spaces down and stars up; the second half does the reverse.",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let rows = 2 * n - 1;
            let grid = Array(rows).fill(null).map(() => Array(n).fill(" "));

            for (let i = 1; i <= rows; i++) {
                let spaces = i <= n ? n - i : i - n;
                let stars = i <= n ? i : 2 * n - i;
                steps.push({ i, j: 0, activeLine: 1, grid: cloneGrid(grid), output, details: `Row ${i}: Spaces = ${spaces}, Stars = ${stars}.` });

                // Spaces
                for (let j = 1; j <= spaces; j++) {
                    grid[i - 1][j - 1] = ".";
                    output += "  ";
                    steps.push({ i, j, activeLine: 4, grid: cloneGrid(grid), activeCell: [i - 1, j - 1], output, details: "Print space." });
                }

                // Stars
                for (let j = 1; j <= stars; j++) {
                    let colIdx = spaces + j - 1;
                    grid[i - 1][colIdx] = "*";
                    output += "* ";
                    steps.push({ i, j, activeLine: 5, grid: cloneGrid(grid), activeCell: [i - 1, colIdx], output, details: "Print star." });
                }
                output += "\n";
            }
            return steps;
        }
    },
    {
        id: "butterfly",
        name: "16. Butterfly Star Pattern",
        javaCode: `// Upper half\nfor (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= i; j++) System.out.print("* ");\n    for (int j = 1; j <= 2 * (n - i); j++) System.out.print("  ");\n    for (int j = 1; j <= i; j++) System.out.print("* ");\n    System.out.println();\n}\n// Lower half\nfor (int i = n; i >= 1; i--) {\n    for (int j = 1; j <= i; j++) System.out.print("* ");\n    for (int j = 1; j <= 2 * (n - i); j++) System.out.print("  ");\n    for (int j = 1; j <= i; j++) System.out.print("* ");\n    System.out.println();\n}`,
        formula: "Top and bottom symmetric. Each row prints: i stars, 2*(N-i) spaces, and i stars.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "On the middle row (i == N), space loop runs 2*(N-N) = 0 times. Stars are printed end-to-end on both sides.",
        explanation: "A butterfly shape is symmetric. Top half: Row i gets i stars on the left, 2*(N-i) spaces in the middle, and i stars on the right. Bottom half is the exact same structure but runs backwards from i = N down to 1.",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let rows = 2 * n;
            let width = 2 * n;
            let grid = Array(rows).fill(null).map(() => Array(width).fill(" "));

            // Upper
            for (let i = 1; i <= n; i++) {
                steps.push({ i, j: 0, activeLine: 2, grid: cloneGrid(grid), output, details: `Upper Butterfly, Row ${i}: ${i} stars, ${2 * (n - i)} spaces, ${i} stars.` });

                // Left stars
                for (let j = 1; j <= i; j++) {
                    grid[i - 1][j - 1] = "*";
                    output += "* ";
                }
                // Spaces
                for (let j = 1; j <= 2 * (n - i); j++) {
                    grid[i - 1][i + j - 1] = ".";
                    output += "  ";
                }
                // Right stars
                for (let j = 1; j <= i; j++) {
                    let colIdx = i + 2 * (n - i) + j - 1;
                    grid[i - 1][colIdx] = "*";
                    output += "* ";
                    steps.push({ i, j, activeLine: 4, grid: cloneGrid(grid), activeCell: [i - 1, colIdx], output, details: "Print butterfly star." });
                }
                output += "\n";
            }

            // Lower
            for (let i = n; i >= 1; i--) {
                let rIdx = 2 * n - i;
                steps.push({ i: rIdx + 1, j: 0, activeLine: 8, grid: cloneGrid(grid), output, details: `Lower Butterfly, Row ${rIdx + 1} (i=${i}): ${i} stars, ${2 * (n - i)} spaces, ${i} stars.` });

                // Left stars
                for (let j = 1; j <= i; j++) {
                    grid[rIdx][j - 1] = "*";
                    output += "* ";
                }
                // Spaces
                for (let j = 1; j <= 2 * (n - i); j++) {
                    grid[rIdx][i + j - 1] = ".";
                    output += "  ";
                }
                // Right stars
                for (let j = 1; j <= i; j++) {
                    let colIdx = i + 2 * (n - i) + j - 1;
                    grid[rIdx][colIdx] = "*";
                    output += "* ";
                    steps.push({ i: rIdx + 1, j, activeLine: 10, grid: cloneGrid(grid), activeCell: [rIdx, colIdx], output, details: "Print butterfly star." });
                }
                output += "\n";
            }
            return steps;
        }
    },
    {
        id: "hollow_butterfly",
        name: "17. Hollow Butterfly Star Pattern",
        javaCode: `// Upper half\nfor (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= i; j++) {\n        if (j == 1 || j == i) System.out.print("* ");\n        else System.out.print("  ");\n    }\n    for (int j = 1; j <= 2 * (n - i); j++) System.out.print("  ");\n    for (int j = 1; j <= i; j++) {\n        if (j == 1 || j == i) System.out.print("* ");\n        else System.out.print("  ");\n    }\n    System.out.println();\n}\n// Lower half (similar logic)`,
        formula: "Same as Butterfly, but with boundary constraints (j == 1 || j == i) inside star printing blocks.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "Introduce border checks inside the inner star loops to keep the wings hollow while preserving the shape outlines.",
        explanation: "We implement the same wings structure of the butterfly, but within the left-star and right-star blocks, we insert a check. A star is printed only at the edges of each wing segment (j == 1 or j == i).",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let rows = 2 * n;
            let width = 2 * n;
            let grid = Array(rows).fill(null).map(() => Array(width).fill(" "));

            // Upper
            for (let i = 1; i <= n; i++) {
                steps.push({ i, j: 0, activeLine: 2, grid: cloneGrid(grid), output, details: `Upper Hollow Butterfly, Row ${i}: Wing border checks.` });

                // Left
                for (let j = 1; j <= i; j++) {
                    if (j === 1 || j === i) {
                        grid[i - 1][j - 1] = "*";
                        output += "* ";
                    } else {
                        grid[i - 1][j - 1] = ".";
                        output += "  ";
                    }
                }
                // Spaces
                for (let j = 1; j <= 2 * (n - i); j++) {
                    grid[i - 1][i + j - 1] = ".";
                    output += "  ";
                }
                // Right
                for (let j = 1; j <= i; j++) {
                    let colIdx = i + 2 * (n - i) + j - 1;
                    if (j === 1 || j === i) {
                        grid[i - 1][colIdx] = "*";
                        output += "* ";
                    } else {
                        grid[i - 1][colIdx] = ".";
                        output += "  ";
                    }
                    steps.push({ i, j, activeLine: 8, grid: cloneGrid(grid), activeCell: [i - 1, colIdx], output, details: "Print border star." });
                }
                output += "\n";
            }
            // Lower (simplified for animation steps size)
            for (let i = n; i >= 1; i--) {
                let rIdx = 2 * n - i;
                steps.push({ i: rIdx + 1, j: 0, activeLine: 13, grid: cloneGrid(grid), output, details: `Lower Hollow Butterfly, Row ${rIdx + 1} (i=${i}).` });
                for (let j = 1; j <= i; j++) {
                    if (j === 1 || j === i) grid[rIdx][j - 1] = "*";
                    else grid[rIdx][j - 1] = ".";
                    output += (j === 1 || j === i) ? "* " : "  ";
                }
                for (let j = 1; j <= 2 * (n - i); j++) {
                    grid[rIdx][i + j - 1] = ".";
                    output += "  ";
                }
                for (let j = 1; j <= i; j++) {
                    let colIdx = i + 2 * (n - i) + j - 1;
                    if (j === 1 || j === i) grid[rIdx][colIdx] = "*";
                    else grid[rIdx][colIdx] = ".";
                    output += (j === 1 || j === i) ? "* " : "  ";
                    steps.push({ i: rIdx + 1, j, activeLine: 13, grid: cloneGrid(grid), activeCell: [rIdx, colIdx], output, details: "Print wing outline." });
                }
                output += "\n";
            }
            return steps;
        }
    },
    {
        id: "rhombus",
        name: "18. Rhombus Star Pattern",
        javaCode: `for (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= n - i; j++) {\n        System.out.print(" ");\n    }\n    for (int j = 1; j <= n; j++) {\n        System.out.print("* ");\n    }\n    System.out.println();\n}`,
        formula: "Spaces = N - i, Stars = N. Standard square shifted to the right.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "A Rhombus is essentially a square offset by a decreasing number of spaces in each row.",
        explanation: "To print a rhombus, we shift each row of a square. For row i, we print N-i leading spaces, and then we print a constant N stars.",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let width = 2 * n - 1;
            let grid = Array(n).fill(null).map(() => Array(width).fill(" "));

            for (let i = 1; i <= n; i++) {
                steps.push({ i, j: 0, activeLine: 1, grid: cloneGrid(grid), output, details: `Row ${i}: Spaces = ${n - i}, Stars = ${n}.` });

                // Spaces
                for (let j = 1; j <= n - i; j++) {
                    grid[i - 1][j - 1] = ".";
                    output += " ";
                    steps.push({ i, j, activeLine: 2, grid: cloneGrid(grid), activeCell: [i - 1, j - 1], output, details: "Print leading space." });
                }

                // Stars
                for (let j = 1; j <= n; j++) {
                    let colIdx = (n - i) + j - 1;
                    grid[i - 1][colIdx] = "*";
                    output += "* ";
                    steps.push({ i, j, activeLine: 5, grid: cloneGrid(grid), activeCell: [i - 1, colIdx], output, details: "Print star." });
                }
                output += "\n";
            }
            return steps;
        }
    },
    {
        id: "hollow_rhombus",
        name: "19. Hollow Rhombus Star Pattern",
        javaCode: `for (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= n - i; j++) System.out.print(" ");\n    for (int j = 1; j <= n; j++) {\n        if (i == 1 || i == n || j == 1 || j == n) System.out.print("* ");\n        else System.out.print("  ");\n    }\n    System.out.println();\n}`,
        formula: "Spaces = N - i. Stars only printed on the boundaries (i==1 || i==N || j==1 || j==N).",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "Combine the space offset logic of the Rhombus with the border constraints of the Hollow Square.",
        explanation: "Like the Rhombus, we print N-i leading spaces. But instead of printing N stars in each row, we only print stars on the border of the N-star segment (first row, last row, first star of segment, last star of segment).",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let width = 2 * n - 1;
            let grid = Array(n).fill(null).map(() => Array(width).fill(" "));

            for (let i = 1; i <= n; i++) {
                steps.push({ i, j: 0, activeLine: 1, grid: cloneGrid(grid), output, details: `Row ${i}: Hollow border check.` });
                for (let j = 1; j <= n - i; j++) {
                    grid[i - 1][j - 1] = ".";
                    output += " ";
                }
                for (let j = 1; j <= n; j++) {
                    let colIdx = (n - i) + j - 1;
                    if (i === 1 || i === n || j === 1 || j === n) {
                        grid[i - 1][colIdx] = "*";
                        output += "* ";
                        steps.push({ i, j, activeLine: 4, grid: cloneGrid(grid), activeCell: [i - 1, colIdx], output, details: "Print border star." });
                    } else {
                        grid[i - 1][colIdx] = ".";
                        output += "  ";
                        steps.push({ i, j, activeLine: 5, grid: cloneGrid(grid), activeCell: [i - 1, colIdx], output, details: "Print inner space." });
                    }
                }
                output += "\n";
            }
            return steps;
        }
    },
    {
        id: "cross_x",
        name: "20. Cross / X Star Pattern",
        javaCode: `for (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= n; j++) {\n        if (i == j || i + j == n + 1) {\n            System.out.print("* ");\n        } else {\n            System.out.print("  ");\n        }\n    }\n    System.out.println();\n}`,
        formula: "Stars on main diagonal (i == j) and anti-diagonal (i + j == N + 1).",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "Make sure to use an odd value for N so the cross intersects cleanly at a single central pixel.",
        explanation: "To print an 'X' shape, we evaluate cells on a square grid. We print stars on the main diagonal where the row and column index match (i == j) and on the secondary diagonal where their sum matches N + 1 (i + j == N + 1).",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let grid = Array(n).fill(null).map(() => Array(n).fill(" "));

            for (let i = 1; i <= n; i++) {
                steps.push({ i, j: 0, activeLine: 1, grid: cloneGrid(grid), output, details: `Row ${i}: Diagonal checks (i==j || i+j==n+1).` });
                for (let j = 1; j <= n; j++) {
                    if (i === j || i + j === n + 1) {
                        grid[i - 1][j - 1] = "*";
                        output += "* ";
                        steps.push({ i, j, activeLine: 3, grid: cloneGrid(grid), activeCell: [i - 1, j - 1], output, details: "On diagonal! Print star." });
                    } else {
                        grid[i - 1][j - 1] = ".";
                        output += "  ";
                        steps.push({ i, j, activeLine: 5, grid: cloneGrid(grid), activeCell: [i - 1, j - 1], output, details: "Not on diagonal. Print space." });
                    }
                }
                output += "\n";
            }
            return steps;
        }
    },
    {
        id: "plus_sign",
        name: "21. Plus / Cross Star Pattern",
        javaCode: `for (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= n; j++) {\n        if (i == (n + 1) / 2 || j == (n + 1) / 2) {\n            System.out.print("* ");\n        } else {\n            System.out.print("  ");\n        }\n    }\n    System.out.println();\n}`,
        formula: "Stars on middle row (i == (N+1)/2) and middle column (j == (N+1)/2).",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "This pattern requires N to be odd. When N is even, there is no exact center row or column, resulting in an off-center plus.",
        explanation: "A '+' sign consists of one vertical and one horizontal line intersecting at the center. The center row index is (N+1)/2, and the center column index is (N+1)/2. We print stars on these lines, and spaces elsewhere.",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let grid = Array(n).fill(null).map(() => Array(n).fill(" "));
            let mid = Math.floor((n + 1) / 2);

            for (let i = 1; i <= n; i++) {
                steps.push({ i, j: 0, activeLine: 1, grid: cloneGrid(grid), output, details: `Row ${i}: Center checks (i == ${mid} || j == ${mid}).` });
                for (let j = 1; j <= n; j++) {
                    if (i === mid || j === mid) {
                        grid[i - 1][j - 1] = "*";
                        output += "* ";
                        steps.push({ i, j, activeLine: 3, grid: cloneGrid(grid), activeCell: [i - 1, j - 1], output, details: "On center line. Print star." });
                    } else {
                        grid[i - 1][j - 1] = ".";
                        output += "  ";
                        steps.push({ i, j, activeLine: 5, grid: cloneGrid(grid), activeCell: [i - 1, j - 1], output, details: "Not on center line. Print space." });
                    }
                }
                output += "\n";
            }
            return steps;
        }
    },
    {
        id: "floyd_triangle",
        name: "22. Floyd's Triangle",
        javaCode: `int num = 1;\nfor (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(num + " ");\n        num++;\n    }\n    System.out.println();\n}`,
        formula: "Columns: j <= i. Maintain a running counter variable that increments with every printed number.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "Use a global counter variable declared outside the loops. Keep it moving across row boundaries.",
        explanation: "Floyd's Triangle is a right-angled triangle filled with consecutive integers. The counter variable (num) is initialized to 1 and printed, then incremented inside the inner column loop (j <= i).",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let grid = Array(n).fill(null).map(() => Array(n).fill(" "));
            let num = 1;

            steps.push({ i: 0, j: 0, activeLine: 0, grid: cloneGrid(grid), output, details: "Initialize counter: num = 1" });

            for (let i = 1; i <= n; i++) {
                steps.push({ i, j: 0, activeLine: 1, grid: cloneGrid(grid), output, details: `Row ${i}: Loop runs up to ${i} items.` });
                for (let j = 1; j <= i; j++) {
                    grid[i - 1][j - 1] = num.toString();
                    output += num + " ";
                    steps.push({ i, j, activeLine: 3, grid: cloneGrid(grid), activeCell: [i - 1, j - 1], output, details: `Print counter: ${num}.` });
                    num++;
                    steps.push({ i, j, activeLine: 4, grid: cloneGrid(grid), activeCell: [i - 1, j - 1], output, details: `Increment counter to ${num}.` });
                }
                output += "\n";
            }
            return steps;
        }
    },
    {
        id: "pascals_triangle",
        name: "23. Pascal's Triangle",
        javaCode: `for (int i = 0; i < n; i++) {\n    for (int j = 0; j < n - i - 1; j++) System.out.print(" ");\n    int val = 1;\n    for (int j = 0; j <= i; j++) {\n        System.out.print(val + " ");\n        val = val * (i - j) / (j + 1);\n    }\n    System.out.println();\n}`,
        formula: "Spaces = N - i - 1. Cells contain binomial coefficients calculated as: val = val * (i - j) / (j + 1).",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "You can calculate coefficients in O(1) time without factorials using the iterative formula: val = val * (i - j) / (j + 1).",
        explanation: "Pascal's Triangle is a triangular array of binomial coefficients. The values in each row represent combinations (n choose k). We print leading spaces (N-i-1) to center it, and calculate each value in the row based on the preceding value.",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let width = 2 * n - 1;
            let grid = Array(n).fill(null).map(() => Array(width).fill(" "));

            for (let i = 0; i < n; i++) {
                steps.push({ i: i + 1, j: 0, activeLine: 0, grid: cloneGrid(grid), output, details: `Row ${i + 1}: Calculate Pascal terms.` });

                // Spaces
                for (let j = 0; j < n - i - 1; j++) {
                    grid[i][j] = ".";
                    output += " ";
                }

                // Coefficients
                let val = 1;
                steps.push({ i: i + 1, j: 1, activeLine: 2, grid: cloneGrid(grid), output, details: `Initialize row coefficient: val = 1` });

                for (let j = 0; j <= i; j++) {
                    let colIdx = (n - i - 1) + j * 2;
                    if (colIdx < width) grid[i][colIdx] = val.toString();
                    output += val + " ";
                    steps.push({ i: i + 1, j: j + 1, activeLine: 4, grid: cloneGrid(grid), activeCell: [i, colIdx], output, details: `Print term: val = ${val}` });

                    val = Math.floor(val * (i - j) / (j + 1));
                    steps.push({ i: i + 1, j: j + 1, activeLine: 5, grid: cloneGrid(grid), activeCell: [i, colIdx], output, details: `Calculate next term: val = ${val}` });
                }
                output += "\n";
            }
            return steps;
        }
    },
    {
        id: "num_increasing_triangle",
        name: "24. Number Increasing Triangle",
        javaCode: `for (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= i; j++) {\n        System.out.print(j + " ");\n    }\n    System.out.println();\n}`,
        formula: "Columns: j <= i. At cell (i, j), print current column index j.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "By printing the inner loop counter (j) directly, we automatically get numbers increasing from 1 to i in each row.",
        explanation: "A right-angled triangle where each row is filled with numbers starting from 1 up to the row's index. The inner loop index j ranges from 1 to i and is printed directly.",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let grid = Array(n).fill(null).map(() => Array(n).fill(" "));

            for (let i = 1; i <= n; i++) {
                steps.push({ i, j: 0, activeLine: 1, grid: cloneGrid(grid), output, details: `Row ${i}: Inner loop runs up to ${i}.` });
                for (let j = 1; j <= i; j++) {
                    grid[i - 1][j - 1] = j.toString();
                    output += j + " ";
                    steps.push({ i, j, activeLine: 2, grid: cloneGrid(grid), activeCell: [i - 1, j - 1], output, details: `Print column counter j = ${j}.` });
                }
                output += "\n";
            }
            return steps;
        }
    },
    {
        id: "num_increasing_pyramid",
        name: "25. Number Increasing Pyramid",
        javaCode: `for (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= n - i; j++) {\n        System.out.print("  ");\n    }\n    for (int j = 1; j <= i; j++) {\n        System.out.print(j + " ");\n    }\n    System.out.println();\n}`,
        formula: "Spaces = N - i, Numbers = i. Align numbers on the right.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "Combine the space offset of the Left Triangle with the value printing of the Number Increasing Triangle.",
        explanation: "To print numbers that increase and are aligned to the right, we insert N-i double spaces before printing the numbers 1 through i.",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let grid = Array(n).fill(null).map(() => Array(n).fill(" "));

            for (let i = 1; i <= n; i++) {
                steps.push({ i, j: 0, activeLine: 1, grid: cloneGrid(grid), output, details: `Row ${i}: spaces = ${n - i}, digits = ${i}.` });

                // Spaces
                for (let j = 1; j <= n - i; j++) {
                    grid[i - 1][j - 1] = ".";
                    output += "  ";
                }

                // Numbers
                for (let j = 1; j <= i; j++) {
                    let colIdx = (n - i) + j - 1;
                    grid[i - 1][colIdx] = j.toString();
                    output += j + " ";
                    steps.push({ i, j, activeLine: 5, grid: cloneGrid(grid), activeCell: [i - 1, colIdx], output, details: `Print number j = ${j}` });
                }
                output += "\n";
            }
            return steps;
        }
    },
    {
        id: "binary_triangle",
        name: "26. Binary Triangle",
        javaCode: `for (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= i; j++) {\n        if ((i + j) % 2 == 0) {\n            System.out.print("1 ");\n        } else {\n            System.out.print("0 ");\n        }\n    }\n    System.out.println();\n}`,
        formula: "Columns: j <= i. If (i + j) % 2 == 0 print 1, else print 0.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "Check the parity of the index sum (i + j). Even sums represent 1 and odd sums represent 0, forming a checkerboard pattern.",
        explanation: "A triangular grid containing alternating binary digits (0 and 1). At each position, we compute the sum of the row index i and column index j. If the sum is even, we print '1'; otherwise, we print '0'.",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let grid = Array(n).fill(null).map(() => Array(n).fill(" "));

            for (let i = 1; i <= n; i++) {
                steps.push({ i, j: 0, activeLine: 1, grid: cloneGrid(grid), output, details: `Row ${i}: Even index sums print 1, odd print 0.` });
                for (let j = 1; j <= i; j++) {
                    let term = (i + j) % 2 === 0 ? "1" : "0";
                    grid[i - 1][j - 1] = term;
                    output += term + " ";
                    if ((i + j) % 2 === 0) {
                        steps.push({ i, j, activeLine: 4, grid: cloneGrid(grid), activeCell: [i - 1, j - 1], output, details: `(i+j)=(${i}+${j})=${i + j} (Even). Print '1'.` });
                    } else {
                        steps.push({ i, j, activeLine: 6, grid: cloneGrid(grid), activeCell: [i - 1, j - 1], output, details: `(i+j)=(${i}+${j})=${i + j} (Odd). Print '0'.` });
                    }
                }
                output += "\n";
            }
            return steps;
        }
    },
    {
        id: "alpha_triangle",
        name: "27. Letter / Alphabet Right Triangle",
        javaCode: `for (int i = 1; i <= n; i++) {\n    char ch = 'A';\n    for (int j = 1; j <= i; j++) {\n        System.out.print(ch + " ");\n        ch++;\n    }\n    System.out.println();\n}`,
        formula: "Columns: j <= i. Reset ch = 'A' on each row and increment it in the inner loop.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "Reinitialize the character `ch = 'A'` inside the outer loop. This ensures that every row starts with 'A'.",
        explanation: "This displays increasing letters starting from 'A' in each row. We initialize `ch = 'A'` at the start of each row. The inner loop prints `ch`, and increments it (`ch++`) after each print.",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let grid = Array(n).fill(null).map(() => Array(n).fill(" "));

            for (let i = 1; i <= n; i++) {
                let chCode = 65; // ASCII 'A'
                steps.push({ i, j: 0, activeLine: 1, grid: cloneGrid(grid), output, details: `Row ${i}: Reinitialize ch = 'A'` });
                for (let j = 1; j <= i; j++) {
                    let charStr = String.fromCharCode(chCode);
                    grid[i - 1][j - 1] = charStr;
                    output += charStr + " ";
                    steps.push({ i, j, activeLine: 3, grid: cloneGrid(grid), activeCell: [i - 1, j - 1], output, details: `Print alphabet: ${charStr}` });
                    chCode++;
                    steps.push({ i, j, activeLine: 4, grid: cloneGrid(grid), activeCell: [i - 1, j - 1], output, details: `Increment char to ${String.fromCharCode(chCode)}` });
                }
                output += "\n";
            }
            return steps;
        }
    },
    {
        id: "alpha_pyramid",
        name: "28. Alphabet Pyramid",
        javaCode: `for (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= n - i; j++) System.out.print("  ");\n    char ch = 'A';\n    for (int j = 1; j <= 2 * i - 1; j++) {\n        System.out.print(ch + " ");\n        ch++;\n    }\n    System.out.println();\n}`,
        formula: "Spaces = N - i, Alphabets = 2*i - 1. ch resets to 'A' on each row.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "Use standard pyramid offsets, then print characters starting at 'A' in the star printing block.",
        explanation: "A centered pyramid of alphabets. Row i gets N-i spaces, followed by 2*i - 1 letters beginning with 'A' on each row and counting up.",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let width = 2 * n - 1;
            let grid = Array(n).fill(null).map(() => Array(width).fill(" "));

            for (let i = 1; i <= n; i++) {
                steps.push({ i, j: 0, activeLine: 1, grid: cloneGrid(grid), output, details: `Row ${i}: Spaces = ${n - i}, Alphabets = ${2 * i - 1}.` });

                // Spaces
                for (let j = 1; j <= n - i; j++) {
                    grid[i - 1][j - 1] = ".";
                    output += "  ";
                }

                // Alphabets
                let chCode = 65;
                for (let j = 1; j <= 2 * i - 1; j++) {
                    let colIdx = (n - i) + j - 1;
                    let charStr = String.fromCharCode(chCode);
                    grid[i - 1][colIdx] = charStr;
                    output += charStr + " ";
                    steps.push({ i, j, activeLine: 5, grid: cloneGrid(grid), activeCell: [i - 1, colIdx], output, details: `Print alphabet: ${charStr}` });
                    chCode++;
                }
                output += "\n";
            }
            return steps;
        }
    },
    {
        id: "num_palindrome_pyramid",
        name: "29. Number Pyramid Palindrome",
        javaCode: `for (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= n - i; j++) System.out.print("  ");\n    for (int j = 1; j <= i; j++) System.out.print(j + " ");\n    for (int j = i - 1; j >= 1; j--) System.out.print(j + " ");\n    System.out.println();\n}`,
        formula: "Spaces = N - i. Increasing numbers up to i (1..i), then decreasing numbers back to 1 (i-1..1).",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "Use two separate inner loops in sequence after the space block: one counting up, and one counting down.",
        explanation: "This pyramid prints a number palindrome. For row i, we print N-i leading spaces, count up from 1 to i, then count down from i-1 down to 1.",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let width = 2 * n - 1;
            let grid = Array(n).fill(null).map(() => Array(width).fill(" "));

            for (let i = 1; i <= n; i++) {
                steps.push({ i, j: 0, activeLine: 1, grid: cloneGrid(grid), output, details: `Row ${i}: Spaces = ${n - i}. Up to ${i}, down from ${i - 1}.` });

                // Spaces
                for (let j = 1; j <= n - i; j++) {
                    grid[i - 1][j - 1] = ".";
                    output += "  ";
                }

                // Up
                for (let j = 1; j <= i; j++) {
                    let colIdx = (n - i) + j - 1;
                    grid[i - 1][colIdx] = j.toString();
                    output += j + " ";
                    steps.push({ i, j, activeLine: 2, grid: cloneGrid(grid), activeCell: [i - 1, colIdx], output, details: `Ascending number: ${j}` });
                }

                // Down
                for (let j = i - 1; j >= 1; j--) {
                    let colIdx = (n - i) + i + (i - 1 - j);
                    grid[i - 1][colIdx] = j.toString();
                    output += j + " ";
                    steps.push({ i, j, activeLine: 3, grid: cloneGrid(grid), activeCell: [i - 1, colIdx], output, details: `Descending number: ${j}` });
                }
                output += "\n";
            }
            return steps;
        }
    },
    {
        id: "hollow_pyramid",
        name: "30. Hollow Pyramid Star Pattern",
        javaCode: `for (int i = 1; i <= n; i++) {\n    for (int j = 1; j <= n - i; j++) {\n        System.out.print("  ");\n    }\n    for (int j = 1; j <= 2 * i - 1; j++) {\n        if (i == n || j == 1 || j == 2 * i - 1) {\n            System.out.print("* ");\n        } else {\n            System.out.print("  ");\n        }\n    }\n    System.out.println();\n}`,
        formula: "Spaces = N - i. Stars only on boundaries of pyramid: i == N || j == 1 || j == 2*i - 1.",
        complexity: "Time: O(N²), Space: O(1)",
        proTip: "Hollow checking requires checking boundaries across the outer loop limits (first/last indices of active columns) and locking the bottom row completely.",
        explanation: "Like the standard pyramid, we print N-i leading spaces. For the stars block, we filter elements. We print stars on the outer boundary of the pyramid (j == 1 and j == 2*i-1) and print the entire bottom row (i == N) full of stars.",
        generateSteps: function (n) {
            let steps = [];
            let output = "";
            let width = 2 * n - 1;
            let grid = Array(n).fill(null).map(() => Array(width).fill(" "));

            for (let i = 1; i <= n; i++) {
                steps.push({ i, j: 0, activeLine: 1, grid: cloneGrid(grid), output, details: `Row ${i}: Border constraint check inside star loop.` });

                // Spaces
                for (let j = 1; j <= n - i; j++) {
                    grid[i - 1][j - 1] = ".";
                    output += "  ";
                }

                // Hollow Stars
                for (let j = 1; j <= 2 * i - 1; j++) {
                    let colIdx = (n - i) + j - 1;
                    if (i === n || j === 1 || j === 2 * i - 1) {
                        grid[i - 1][colIdx] = "*";
                        output += "* ";
                        steps.push({ i, j, activeLine: 6, grid: cloneGrid(grid), activeCell: [i - 1, colIdx], output, details: "Print border star." });
                    } else {
                        grid[i - 1][colIdx] = ".";
                        output += "  ";
                        steps.push({ i, j, activeLine: 8, grid: cloneGrid(grid), activeCell: [i - 1, colIdx], output, details: "Print hollow space." });
                    }
                }
                output += "\n";
            }
            return steps;
        }
    }
];

// Helper to copy 2D arrays by value
function cloneGrid(grid) {
    return grid.map(row => [...row]);
}

// Global UI state
let currentPatternId = "square";
let currentN = 5;
let activeSteps = [];
let stepIndex = 0;
let isPlaying = false;
let playInterval = null;
let playSpeedMs = 800;

// Initialize elements
const patternListContainer = document.getElementById("pattern-list-container");
const mobileSelect = document.getElementById("mobile-pattern-select");
const nSlider = document.getElementById("grid-n-slider");
const nVal = document.getElementById("n-val");
const speedSlider = document.getElementById("speed-slider");
const speedVal = document.getElementById("speed-val");
const canvasGridBox = document.getElementById("canvas-grid-box");
const codeBoxContent = document.getElementById("code-box-content");
const terminalOut = document.getElementById("terminal-out");
const explainContent = document.getElementById("pattern-explain-content");

const btnPlay = document.getElementById("btn-play");
const btnPrev = document.getElementById("btn-prev");
const btnNext = document.getElementById("btn-next");
const btnReset = document.getElementById("btn-reset");

// Setup patterns in layout
function initApp() {
    PATTERNS.forEach(p => {
        // Desktop List
        const div = document.createElement("div");
        div.className = `pattern-list-item sketchy-border ${p.id === currentPatternId ? "active" : ""}`;
        div.textContent = p.name;
        div.addEventListener("click", () => selectPattern(p.id));
        patternListContainer.appendChild(div);

        // Mobile Select Dropdown
        const opt = document.createElement("option");
        opt.value = p.id;
        opt.textContent = p.name;
        mobileSelect.appendChild(opt);
    });

    mobileSelect.addEventListener("change", (e) => selectPattern(e.target.value));

    // Slider inputs
    nSlider.addEventListener("input", (e) => {
        currentN = parseInt(e.target.value);
        nVal.textContent = currentN;
        reloadPattern();
    });

    speedSlider.addEventListener("input", (e) => {
        const val = parseInt(e.target.value);
        if (val === 1) { playSpeedMs = 1500; speedVal.textContent = "0.5x"; }
        else if (val === 2) { playSpeedMs = 800; speedVal.textContent = "1x"; }
        else if (val === 3) { playSpeedMs = 400; speedVal.textContent = "2x"; }
        else if (val === 4) { playSpeedMs = 150; speedVal.textContent = "4x"; }

        if (isPlaying) {
            pauseSimulation();
            playSimulation();
        }
    });

    // Control buttons
    btnPlay.addEventListener("click", () => {
        if (isPlaying) {
            pauseSimulation();
        } else {
            playSimulation();
        }
    });

    btnPrev.addEventListener("click", () => {
        pauseSimulation();
        stepBackward();
    });

    btnNext.addEventListener("click", () => {
        pauseSimulation();
        stepForward();
    });

    btnReset.addEventListener("click", () => {
        pauseSimulation();
        resetSimulation();
    });

    // Load initial pattern
    selectPattern("square");
}

function selectPattern(id) {
    currentPatternId = id;
    mobileSelect.value = id;

    // Update active class on list items
    const listItems = patternListContainer.children;
    for (let item of listItems) {
        if (item.textContent.includes(PATTERNS.find(p => p.id === id).name)) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    }

    reloadPattern();
}

function reloadPattern() {
    pauseSimulation();
    const pattern = PATTERNS.find(p => p.id === currentPatternId);
    activeSteps = pattern.generateSteps(currentN);

    // Inject Explanation Layout
    explainContent.innerHTML = `
        <div class="explain-details">
            <p><b>Approach:</b> ${pattern.explanation}</p>
            <p style="margin-top:10px;"><b>Loop Formula:</b> <span style="font-family:monospace; color:#e67e22; font-weight:bold;">${pattern.formula}</span></p>
            <p style="margin-top:5px;"><b>Complexity analysis:</b> <span style="color:#27ae60; font-weight:bold;">${pattern.complexity}</span></p>
            <p style="margin-top:10px; background:#fbfbfb; padding:10px; border-left:4px solid #f39c12; font-style:italic;"><b>Pro-tip:</b> ${pattern.proTip}</p>
            
            <h4 style="margin-top:20px; border-bottom:1px dashed #ccc; padding-bottom:5px;">Dry-Run Execution Map (N = ${currentN})</h4>
            <table class="dryrun-table">
                <thead>
                    <tr>
                        <th>Row (i)</th>
                        <th>Printed columns (j loop)</th>
                        <th>Final row output</th>
                    </tr>
                </thead>
                <tbody id="dryrun-body">
                    <!-- Dynamic dry-run row data -->
                </tbody>
            </table>
        </div>
    `;

    // Populate dryrun table
    const dryRunBody = document.getElementById("dryrun-body");
    let rowsMap = {};
    activeSteps.forEach(step => {
        if (step.i > 0) {
            if (!rowsMap[step.i]) {
                rowsMap[step.i] = { cols: [] };
            }
            if (step.j > 0) {
                rowsMap[step.i].cols.push(step.j);
            }
        }
    });

    // Run a quick helper loop to print clean row outputs in table
    const cellEngine = PATTERNS.find(p => p.id === currentPatternId);
    const finalSteps = cellEngine.generateSteps(currentN);
    const lastStep = finalSteps[finalSteps.length - 1]; // Absolute final step has complete output
    const lines = lastStep.output.split("\n");
    if (lines.length > 0 && lines[lines.length - 1] === "") {
        lines.pop();
    }

    lines.forEach((lineText, index) => {
        const rowNum = index + 1;
        const rowData = rowsMap[rowNum];
        let colsText = "Runs conditions";
        if (rowData && rowData.cols.length > 0) {
            colsText = `Runs column index: 1 to ${Math.max(...rowData.cols)}`;
        }

        const tr = document.createElement("tr");
        tr.innerHTML = `
            <td><b>Row ${rowNum}</b></td>
            <td><code>${colsText}</code></td>
            <td style="font-family:monospace; font-weight:bold; letter-spacing:1px; color:#e74c3c; text-align:left; padding-left:25px; white-space:pre;">${lineText}</td>
        `;
        dryRunBody.appendChild(tr);
    });

    resetSimulation();
}

function resetSimulation() {
    stepIndex = 0;
    renderStep();
}

function stepForward() {
    if (stepIndex < activeSteps.length - 1) {
        stepIndex++;
        renderStep();
    } else {
        pauseSimulation();
    }
}

function stepBackward() {
    if (stepIndex > 0) {
        stepIndex--;
        renderStep();
    }
}

function playSimulation() {
    isPlaying = true;
    btnPlay.textContent = "⏸ Pause";
    btnPlay.style.background = "#e74c3c";
    playInterval = setInterval(() => {
        stepForward();
    }, playSpeedMs);
}

function pauseSimulation() {
    isPlaying = false;
    btnPlay.textContent = "▶ Play";
    btnPlay.style.background = "#e67e22";
    if (playInterval) {
        clearInterval(playInterval);
        playInterval = null;
    }
}

function renderStep() {
    const step = activeSteps[stepIndex];
    if (!step) return;

    // 1. Render visual grid representation
    renderGridVisualizer(step.grid, step.activeCell);

    // 2. Render code output with highlighting
    renderCode(step.activeLine);

    // 3. Render terminal output
    terminalOut.textContent = step.output;
    terminalOut.scrollTop = terminalOut.scrollHeight;

    // 4. Update control buttons states
    btnPrev.disabled = (stepIndex === 0);
    btnNext.disabled = (stepIndex === activeSteps.length - 1);
}

function renderGridVisualizer(grid, activeCell) {
    canvasGridBox.innerHTML = "";
    const table = document.createElement("table");
    table.className = "pattern-display-table";

    for (let r = 0; r < grid.length; r++) {
        const tr = document.createElement("tr");
        for (let c = 0; c < grid[r].length; c++) {
            const td = document.createElement("td");

            // Grid cell values
            const cellVal = grid[r][c];
            if (cellVal === "*") {
                td.textContent = "★";
                td.classList.add("printed-star");
            } else if (cellVal === ".") {
                td.innerHTML = "&middot;";
                td.classList.add("printed-space");
            } else if (cellVal !== " ") {
                td.textContent = cellVal;
                td.classList.add("printed-star");
            } else {
                td.textContent = "";
            }

            // Highlighting active cursor coordinates
            if (activeCell && activeCell[0] === r && activeCell[1] === c) {
                td.classList.add("active-cell");
            }

            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    canvasGridBox.appendChild(table);

    // Append descriptive comment box at bottom of canvas
    const comment = document.createElement("div");
    comment.style.marginTop = "15px";
    comment.style.fontFamily = "'Kalam', cursive";
    comment.style.fontSize = "1.25rem";
    comment.style.color = "#34495e";
    comment.style.textAlign = "center";
    comment.innerHTML = `🏁 <b>Execution steps:</b> ${stepIndex + 1} / ${activeSteps.length}<br>📢 <i>${activeSteps[stepIndex].details}</i>`;
    canvasGridBox.appendChild(comment);
}

function renderCode(activeLineIdx) {
    const pattern = PATTERNS.find(p => p.id === currentPatternId);
    const lines = pattern.javaCode.split("\n");
    codeBoxContent.innerHTML = "";

    lines.forEach((line, idx) => {
        const span = document.createElement("span");
        span.className = `code-line ${idx === activeLineIdx ? "active-line" : ""}`;

        // Escape brackets & format tags
        let safeLine = line
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        // Quick syntax highlights
        safeLine = safeLine
            .replace(/\b(for|if|else|int|char|boolean)\b/g, "<span style='color:#f92672; font-weight:bold;'>$1</span>")
            .replace(/\b(System\.out\.print(ln|f)?)\b/g, "<span style='color:#66d9ef;'>$1</span>")
            .replace(/(".+?")/g, "<span style='color:#e6db74;'>$1</span>")
            .replace(/(\/\/.*)/g, "<span style='color:#75715e; font-style:italic;'>$1</span>");

        span.innerHTML = safeLine;
        codeBoxContent.appendChild(span);
    });
}

// Window Onload triggers initializing
window.addEventListener("DOMContentLoaded", initApp);
