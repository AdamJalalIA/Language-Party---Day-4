# Language Party

# Day 04

### JavaScript Exercises

---

**Exercise 0: Display a Message**

- Create a variable `text` and assign it the value `"Hello World from JavaScript!"`.
- Display the variable `text`.

---

### **Exercise 1: Calculate the Sum of Two Numbers**

- Create two variables `a` and `b`, initialize them with numbers of your choice.
- Create a variable `sum` to store the sum of `a` and `b`.
- Display the result in the console.

---

### **Exercise 2: Check if a Number is Even or Odd**

- Create a variable `number` and assign it a value.
- Use an `if` statement to check if the number is even or odd.
- Display `"The number is even"` or `"The number is odd"` in the console.

---

### **Exercise 3: Analyze a Dynamic Array**

- Use a predefined series of numbers, e.g., `10, 20, 30, 40`.
- Write a program to:
    - Convert this series into an array.
    - Display in the console:
        - The total number of elements.
        - The sum of all numbers.
        - The average of the numbers.
        - The number of elements greater than the average.

---

### **Exercise 4: Display a Multiplication Table**

- Use a predefined number, e.g., `5`.
- Use a `for` loop to display the multiplication table of this number (e.g., `1 x 5 = 5`, `2 x 5 = 10`, up to `10 x 5 = 50`).

---

### **Exercise 5: Replace Words in a String**

- Use a predefined sentence, e.g., `"Hello everyone!"`.
- Write a program to:
    - Replace a specific word with another word (both predefined).
    - Display the updated sentence in the console.

---

### **Exercise 6: Find Minimum and Maximum in an Array**

- Create an array with at least 10 different numbers.
- Write a program to find and display the minimum and maximum values in the array.
- Do not use built-in functions like `Math.min()` or `Math.max()`.

---

### **Exercise 7: Calculate the Average of an Array**

- Create an array with several numbers.
- Write a program to calculate and display the average of the numbers in the array.
- If the array is empty, display `"The array is empty"`.

---

### **Exercise 8: Word Counter**

- Create a string containing a sentence.
- Write a program to count and display the number of words in the sentence.
- A word is defined as a sequence of characters separated by a space.

---

### **Exercise 9: Sort an Array in Ascending Order**

- Create an array with several numbers in random order.
- Implement an algorithm to sort the array in ascending order (e.g., bubble sort or selection sort).
- Display the sorted array.

---

### **Exercise 10: Generate an Array of Random Numbers with Statistics**

- Write a program to generate an array containing 50 random numbers between 1 and 100.
- Calculate and display:
    - The average of the numbers.
    - The largest number.
    - The smallest number.
    - The count of even numbers.
- Display the results in the console.

---

### **Exercise 11: Simple JSON Exploration**

- Create a `book` object with the following properties:
    - `title`: "The Little Prince"
    - `author`: "Antoine de Saint-Exupéry"
    - `year`: 1943
    - `available`: `true`
- Write a program to:
    - Display all the properties and their values in the console.
    - Update the `available` property to `false`.
    - Add a new property `language` with the value `"French"`.
    - Display the updated object in the console.

---

### **Exercise 12: Object Manipulation (JSON)**

- Create a `person` object with the following properties:
    - `name`: "Alice"
    - `age`: 30
    - `address`: an object with `street`, `city`, and `postalCode`.
    - `hobbies`: an array of hobbies (e.g., `["Reading", "Swimming", "Traveling"]`).
- Write a program to:
    - Display all property values of the object.
    - Add a new hobby to the list of hobbies.
    - Update the person's age.
    - Remove the `postalCode` property from the address.

---

### **Exercise 13: Calculator with Functions**

- Write a function `calculate` that takes three arguments:
    - A first number.
    - A second number.
    - An operation (`"+", "-", "*", "/"`).
- The function should return the result of the operation.
- Display the result in the console.
- Handle cases where division by zero is requested by displaying an error message.

---

### **Exercise 14: Search in an Array of Objects**

- Create an array `students` containing several objects, each representing a student with the properties:
    - `name`: student's name.
    - `age`: student's age.
    - `grade`: final grade (out of 20).
- Write a program to:
    - Find the student with the best grade.
    - Display the names of students with a grade of 15 or higher.
    - Calculate the class average grade.

---

### **Exercise 15: Shopping Cart Management**

- Create an array `cart` containing objects representing items, with the properties:
    - `name`: item's name.
    - `price`: unit price.
    - `quantity`: number of items purchased.
- Write a program to:
    - Calculate and display the total price of all items in the cart.
    - Add a new item to the cart.
    - Remove a specific item from the cart (by its name).

---

### **Exercise 16: Voting System**

- Create an array of simulated votes, e.g., `["Apple", "Banana", "Orange", "Apple", "Grape", "Banana", "Banana"]`.
- Write a program to:
    1. Count the number of votes for each option.
    2. Display the vote results in the console as an object.
    3. Find the winning option (the one with the most votes).

---

### **Exercise 17: Fetch a Random Joke**

- Use the [Official Joke API](https://official-joke-api.appspot.com/random_joke) to fetch a random joke.
- Write a program to:
    - Make a GET request to the API.
    - Display the joke in the console in the format:
      `Setup: [question] Punchline: [answer]`.

---

### **Exercise 18: Fetch City Weather**

- Use the [Open-Meteo API](https://open-meteo.com/) to fetch weather forecasts.
- Write a program to:
    - Use a predefined city, e.g., `Paris` or `New York`.
    - Make a request to the API to fetch the current or forecasted temperature.
    - Display the temperature and weather conditions in the console.
- **Note:** You may need to convert the city name to latitude/longitude using a geocoding API like [Nominatim](https://nominatim.org/).

---

### **Exercise 19: User List**

- Use the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/users) to fetch a list of users.
- Write a program to:
    - Fetch user information via a GET request.
    - Display the name and email of each user in the console in the format:
      `Name: [name], Email: [email]`.

---

### **Exercise 20: Create and Fetch Posts**

- Use the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/posts) to interact with posts.
- Write a program to:
    1. Create a new post via a POST request.
    2. Display the content of the created post in the console.
    3. Fetch and display the first 10 posts via a GET request.
