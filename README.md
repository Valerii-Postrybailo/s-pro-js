# Basic JS tasks

1. Write a function that returns true if the given argument is a number.

2. Write a function that displays the message "Passed" on the screen if the argument passed is less than 10 and greater than 2.

3. Implement two functions: the first function should divide the argument "a" by the argument "b". If the argument "b" is zero, the function should throw an error. The second function should call the first and handle the error.

4. Write a function that takes an array of strings as input and returns the number of unique strings.

5. Write a function that takes an array of numbers as input and returns their average value. Implement the program in two ways: through loops and through array functions.

6. Write a function that takes an array of strings as input and returns the shortest string. Implement the program in two ways: through loops and through array functions.

7. Implement a program that simulates the work of a university. At a minimum, the following classes must be present: Student, Teacher, University. Implement their interaction.

8. Write a function that displays numbers from 1 to 100 on the screen. At the same time, instead of numbers that are multiples of 3, the program should display the word "Foo", and instead of numbers that are multiples of five, the word "Bar". If the number is a multiple of fifteen, the program should output the word 'FooBar'.

# Asynchronous JS

1. Write a function that returns a Promise that will be resolved after 1 second with the value "Hello, world!".

2. Write a function that accepts the number of milliseconds and returns a Promise that will become resolved after the given number of seconds.

3. Write a function that accepts an array of numbers and returns a Promise that will be resolved with the maximum number in the array. If the array is empty, the Promise must be resolved to null.

4. Write sample code that waits for 100 promises to be executed, each of which is executed one second later. If any promise has become rejected, output an error, otherwise output an array of fulfilled promises.

5. Write a function that returns a promise. After 10 milliseconds, the promise executor should start counting from 0 to 1000000000 using a loop, and then it becomes resolved. Call this function and measure the elapsed time using console.time and console.timeEnd. Call this function four times in parallel and measure the time taken. Call this function four times in a row and measure the time taken. Write in a comment whether the time spent between serial and parallel function calls has changed or not.

6. Write an asynchronous function withTimeout, which will accept the number of milliseconds and a promise, which we will call request. The function must return a new promise.

If the request is not settled after the given number of milliseconds, then withTimeout should return a rejected promise with the error “Promise timed out”.
If the request was rejected, then withTimeout should also return a rejected promise, with an error from request.
If the request became resolved with a certain value, the function will return a resolved promise with this value.

7. Edit the test function, prepare two new versions with different names: promise-based and async-await version. You can change how the function is called.

DO NOT CHANGE THIS FUNCTION.

- An example function that executes asynchronously.
- The function accepts one argument - error-first callback.\*/
```
function download(url, errorFirstCallback) {
// ...Performs some asynchronous operation, for example:
// setTimeout(() => errorFirstCallback(new Error("Async error message")), 10);
}

// YOU CAN CHANGE THE CODE BELOW 

function test(url, onSuccess, onError) {
download(url, (err, data) => {
if (err) return onError(err);

    download(data.nextUrl, (err, data) => {
      if (err) return onError(err);

      download(data.nextUrl, (err, data) => {
        if (err) return onError(err);

        onSuccess(data.content);
      });
    });

});
}

test(
    "https://example.com/",
    (content) => {
    console.log("Finished!", content);
    },
    (err) => {
    console.log("Got an error!");
    }
);
```
