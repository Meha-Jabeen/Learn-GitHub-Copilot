//Github Features:
//1. Inline suggestions in GitHub Copilot
    // To accept the suggestion, you can press the Tab key or the >(right arrow) key or click on the suggestion.
    //To reject the suggestion, you can continue typing or press Esc.
    // Example - 1
    // Inline suggestions are provided by GitHub Copilot as you type, helping you complete your code more efficiently.
        var name1 = "Meha Jabeen";
        console.log(name1); // Output: Meha Jabeen  

// 2. Command pallette in GitHub Copilot
    // The command palette allows you to access various GitHub Copilot features quickly.
    // To open the command palette, you can use the shortcut Ctrl + Shift + P (Windows/Linux) or Cmd + Shift + P (Mac).
    // Enter Copilot in the command palette to see available commands related to GitHub Copilot.
    // You can then type commands like "GitHub Copilot: Enable" or "GitHub Copilot: Disable" to control its functionality.

// 3. Copilot chat in GitHub Copilot
    // Copilot chat allows you to interact with GitHub Copilot in a conversational manner.
    // You can ask questions, request code snippets, or seek explanations about your code.
    // To use Copilot chat, you can type your query in the chat interface, and Copilot will respond with relevant information or code suggestions.
    // This feature is particularly useful for getting help with coding problems or understanding complex code logic.
    // Example - 1 --> Open Copilot chat and ask a question like "How do I implement binary search in JavaScript?".
    // Copilot might respond with below code snippet:
    function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                return mid; // Target found, return its index
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        return -1; // Target not found
    }

    // Example usage:
    const numbers = [1, 3, 5, 7, 9, 11];
    const result = binarySearch(numbers, 7);
    console.log(result); // Output: 3

// 4. Inline Chat in GitHub Copilot
    // To open Inline Chat, place your cursor where you need assistance and use keyboard shortcut Ctrl+I(Windows or Linux) or Cmd+I(Mac)
    // Now ask questions or request changes specific to that code location
    // Additionally we can utilize slash commands for more efficient interaction with Copilot. 
    // Some common slash commands are: /explain, /suggest, /tests, /comment etc., 
    //Example - Place the cursor on below function, open Inline chat and then type the commands /explain or /tests and hit enter to get the assistance
    function calculateAverage(numbers) {
        if (numbers.length === 0) return 0;
        const sum = numbers.reduce((acc, curr) => acc + curr, 0);
        return sum / numbers.length;
    }

    // Example usage:
    const nums = [2, 4, 6, 8, 10];
    console.log(calculateAverage(nums)); // Output: 6

// 5. Comments to Code in GitHub Copilot
    // Copilot uses natural language processing to convert comments into code
    // Describe the functionality you want in a comment and then hit enter, then Copilot will generate code based on your description
    // Example - Add the below comment and hit enter to generate the code
    // Function to reverse a string
    function reverseString(str) {
        return str.split("").reverse().join("");
    }

    // Example usage:
    const input = "Hello, world!";
    const output = reverseString(input);
    console.log(output); // Output: !dlrow ,olleH

// 6. Multiple Suggestions in GitHub Copilot
    // GitHub Copilot can provide multiple suggestions for a given code snippet
    // To get multiple suggestions for a code snippet, you can use the keyboard shortcut Ctrl + Alt + \ (Windows/Linux) or Cmd + Alt + \ (Mac)
    // You can cycle through the suggestions using the keyboard shortcut Ctrl + ] (Windows/Linux) or Cmd + ] (Mac)
    // This feature is useful when you want to explore different implementation options or find the best solution for your problem
    // Example
    // Function to add two numbers 
    function add(a, b) {
        return a + b;
    }
    // Example usage:
    const sum = add(5, 10);
    console.log(sum); // Output: 15

// 7. Explanations in GitHub Copilot
    // GitHub Copilot can provide explanations for code snippets
    // To get an explanation, place your cursor on the code and use the keyboard shortcut Ctrl + E (Windows/Linux) or Cmd + E (Mac)
    // This feature is useful for understanding complex code or learning new programming concepts
    // Example - Place the cursor on the function name and use the shortcut Ctrl + E to get an explanation
    // Function to print fibonacci series
    function printFibonacciSeries(n) {
        let a = 0, b = 1;
        console.log(a);
        console.log(b);
        for (let i = 2; i < n; i++) {
            let c = a + b;
            console.log(c);
            a = b;
            b = c;
        }
    }

    // Example usage:
    printFibonacciSeries(5);

// 8. Automated test generation in GitHub Copilot
    // GitHub Copilot can help you generate tests for your code
    // To generate tests, you can use the keyboard shortcut Ctrl + T (Windows/Linux) or Cmd + T (Mac)
    // This feature is useful for ensuring your code is working as expected
    // Example - Place the cursor on the below function name and use the shortcut Ctrl + T to generate tests
    function add(a, b) {
        return a + b;
    }