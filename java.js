// String Manipulation Functions:
function reverseString(str) {
    return str.split("").reverse().join("");
    //this code converts the string to and array , uses t
    //uses the array reversal method to join it all together back to a string
  }
  function countCharacters(str) {
    // Use the built-in length property of strings
    return str.length;
  }
  
  function capitalizeWords(str) {
    // Convert the string to lowercase for easier manipulation
    str = str.toLowerCase();
  
    const words = str.split(" ");
  
    return words
      .map((word) => {
        return word[0].toUpperCase() + word.substring(1);
      })
      .join(" ");
  
    // Replace matching characters with their uppercase counterparts using a callback function
  }
  
  // Example usage
  const sentence = "this is a sentence with words";
  const capitalizedSentence = capitalizeWords(sentence);
  console.log(capitalizedSentence);
  
  const str = "Hello world!";
  const charCount = countCharacters(str);
  console.log(charCount);
  
  const reversedStr = reverseString(str);
  console.log(reversedStr);
  
  // Array Functions:
  function findMinMax(arr) {
    // Handle empty array case
    if (arr.length === 0) {
      return { min: null, max: null };
    }
  
    // Initialize min and max with the first element
    let min = arr[0];
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return { min, max };
  }
  
  function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  }
  
  function filterArray(arr, callback) {
    // Create a new empty array to store filtered elements
    const filtered = [];
  
    // Loop through the original array
    for (let i = 0; i < arr.length; i++) {
      // Call the callback function with the current element and its index (optional)
      if (callback(arr[i], i)) {
        // If the callback returns true, push the element to the filtered array
        filtered.push(arr[i]);
      }
    }
  
    // Return the new filtered array
    return filtered;
  }
  
  // Example usage: Filter even numbers
  function isEven(number) {
    return number % 2 === 0;
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 5, 10, 2, 8, 1];
  const evenNumbers = filterArray(numbers, isEven);
  console.log(evenNumbers); // Output: [2, 4, 6]
  
  // Example usage: Filter strings longer than 5 characters
  function longerThanFive(str) {
    return str.length > 5;
  }
  
  const words = ["apple", "banana", "mango", "grapefruit"];
  const longWords = filterArray(words, longerThanFive);
  console.log(longWords);
  
  const totalSum = sumArray(numbers);
  console.log(totalSum);
  
  // Example usage
  
  const { min, max } = findMinMax(numbers);
  console.log(Minimum: ${min}, Maximum: ${max});
  
  // Mathematical Functions:
  function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }
  
  function isPrime(num) {
    // Handle edge cases (negative numbers, 0, 1)
    if (num <= 1) return false;
  
    // Loop through potential divisors (up to the square root of num)
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // Divisible by a number, not prime
    }
  
    // If no divisors found, the number is prime
    return true;
  }
  
  function fibonacci(n) {
    if (n <= 1) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  
  // Example usage
  const terms = 10;
  const sequence = [];
  for (let i = 0; i < terms; i++) {
    sequence.push(fibonacci(i));
  }
  console.log(sequence);
  
  // Example usage
  const number = 11;
  const isItPrime = isPrime(number);
  console.log(${number} is ${isItPrime ? "" : "not "}prime);
  // Example usage
  
  const result = factorial(number);
  console.log(The factorial of ${number} is:, result);