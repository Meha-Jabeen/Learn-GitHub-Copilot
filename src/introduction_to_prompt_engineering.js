// Best practices in prompt engineering
    // 1. Provide enough clarity
        // Example: Provide below comment which is both single-focused and specific
        // Write a JavaScript function to filter and return even numbers from a given list
        function filterEvenNumbers(numbers) {
            return numbers.filter(num => num % 2 === 0);
        }
        console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]

    // 2. Provide enough context with details
        // Example: Add some comments at the top of your code to give more details of what you want
        // Write a simple JavaScript function that returns a list of odd numbers from a list of numbers
        // Create a function that takes a list of numbers and returns only the odd values.
        function filterOddNumbers(numbers) {
            return numbers.filter(num => num % 2 !== 0);
        }
        // Create a sample list of numbers
        const sampleNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        // Create a list of odd numbers from the sample list
        const oddNumbers = filterOddNumbers(sampleNumbers);
        // Return the list of odd numbers
        console.log(oddNumbers); // Output: [1, 3, 5, 7, 9]

    //3. Provide examples in the comments to clarify your requirements & expectations
        // Example: Using the filterOddNumbers function with different inputs
        // Input: [20, 21, 22, 23, 24]
        // Output: [21, 23]
        console.log(filterOddNumbers([20, 21, 22, 23, 24]));
        // Input: [30, 31, 32, 33, 34]
        // Output: [31, 33]
        console.log(filterOddNumbers([30, 31, 32, 33, 34]));

// How Copilot learns from our prompts
    // 1. Zero-shot learning
        // Copilot is trained on a diverse range of internet text, allowing it to generate code and text based on the context provided in the prompt without needing specific examples.
        // This means you can ask it to perform tasks it hasn't explicitly seen before, and it will use its training to generate a reasonable response. 
        // I need a function to convert Celsius to Fahrenheit
        function convertCelsiusToFahrenheit(celsius) {
            return (celsius * 9/5) + 32;
        }
        console.log(convertCelsiusToFahrenheit(0)); // Output: 32
        console.log(convertCelsiusToFahrenheit(100)); // Output: 212

    // 2. One-shot learning
        // In this scenario, Copilot is given a specific example to learn from and generalize its understanding.
        // For instance, if you provide a function that converts kilometers to miles, it can learn the pattern and apply it to similar tasks.
        
        // This is a function to convert kilometers to miles
        function convertKilometersToMiles(kilometers) {
            return kilometers * 0.621371;
        }
        console.log(convertKilometersToMiles(1)); // Output: 0.621371
        console.log(convertKilometersToMiles(5)); // Output: 3.10686

        // Now I need a function to convert miles to kilometers
        function convertMilesToKilometers(miles) {
            return miles / 0.621371;
        }
        console.log(convertMilesToKilometers(1)); // Output: 1.60934
        console.log(convertMilesToKilometers(5)); // Output: 8.04672

    // 3. Few-shot learning
        // In this case, Copilot is given a few examples to learn from and can apply this knowledge to new, similar tasks.
        // For example, if you provide several functions for different temperature conversions, it can learn the pattern and create new conversion functions.
        // I need a function to convert Fahrenheit to Celsius
        function convertFahrenheitToCelsius(fahrenheit) {
            return (fahrenheit - 32) * 5/9;
        }
        console.log(convertFahrenheitToCelsius(32)); // Output: 0
        console.log(convertFahrenheitToCelsius(212)); // Output: 100

        // I need a function to convert Celsius to Kelvin
        function convertCelsiusToKelvin(celsius) {
            return celsius + 273.15;
        }
        console.log(convertCelsiusToKelvin(0)); // Output: 273.15
        console.log(convertCelsiusToKelvin(100)); // Output: 373.15

        // I need a function to convert Kelvin to Celsius
        function convertKelvinToCelsius(kelvin) {
            return kelvin - 273.15;
        }
        console.log(convertKelvinToCelsius(273.15)); // Output: 0
        console.log(convertKelvinToCelsius(373.15)); // Output: 100

        // Example-1 : Greeting message for morning
        // Input: 9 AM
        // Output: "Good Morning!"

        // Example-2 : Greeting message for afternoon
        // Input: 2 PM
        // Output: "Good Afternoon!"

        // Example-3 : Greeting message for evening
        // Input: 7 PM
        // Output: "Good Evening!"

        // Now generate a code that takes the current time as input using the datetime module and returns the appropriate greeting message
       function getGreetingMessage() {
           const currentTime = new Date();
           const hour = currentTime.getHours();
           console.log(hour); // Output will depend on the current time
           if (hour < 12) {
               console.log("The time is " + hour + " AM");
               return "Good Morning!";
           } else if (hour < 16) {
               console.log("The time is " + (hour - 12) + " PM");
               return "Good Afternoon!";
           } else if (hour < 21){
               console.log("The time is " + (hour - 12) + " PM");
               return "Good Evening!";
           }
           else{
               console.log("The time is " + (hour - 12) + " PM");
               return "Good Night!";
           }
       }
        // Call the function to get the greeting message
        console.log(getGreetingMessage()); // Output will depend on the current time

// Prompt types supported by GitHub Copilot Chat
    // 1. Direct Questions (Give the below prompts in Copilot chat window and see the output)

       //Example: How do I implement a quick sort algorithm in JavaScript?
         function quickSort(arr) {
              if (arr.length <= 1) return arr;
              const pivot = arr[arr.length - 1];
              const left = [];
              const right = [];
              for (let i = 0; i < arr.length - 1; i++) {
                if (arr[i] < pivot) {
                     left.push(arr[i]);
                } else {
                     right.push(arr[i]);
                }
              }
              return [...quickSort(left), pivot, ...quickSort(right)];
         }
            console.log(quickSort([3, 6, 8, 10, 1, 2, 1])); // Output: [1, 1, 2, 3, 6, 8, 10]
        
        // Example: Why is my React component not rendering?


    // 2. Code-Related Requests (Give the below prompts in Copilot chat window and see the output)

       //Example: Implement a function to calculate the factorial of a number in JavaScript.
        function factorial(n) {
            if (n < 0) return undefined; // Factorial is not defined for negative numbers
            if (n === 0 || n === 1) return 1; // Base case
            return n * factorial(n - 1); // Recursive case
        }
        console.log(factorial(5)); // Output: 120
        console.log(factorial(0)); // Output: 1
        console.log(factorial(-4)); // Output: undefined

        // Example: Fix this error in my code 
        // Example: Explain this code snippet

    // 3. Open Ended Queries (Give the below prompts in Copilot chat window and see the output)
        // Example: What are the benefits of using TypeScript?
        // Example: How can I improve the performance of my React application?
        // Example: What are the best practices for writing clean code?

    // 4. Contextual Prompts (Give the below prompts in Copilot chat window and see the output)
        // Example: Here's a part of my code, can you suggest improvements?
        // Example: I'm building a web application, can ypu help me with the authentication flow?
