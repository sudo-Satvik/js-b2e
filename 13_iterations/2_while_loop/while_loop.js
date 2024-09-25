// When we don't know about the number of iterations, we use while loop

// Behavior: The condition is checked before each iteration. If the condition is false at the start, the loop will never run.

// Use Case:

// Indeterminate Iterations: Use the while loop when the number of iterations is not known beforehand and depends on some condition being met.
// Example: Waiting for user input, processing files until EOF.

let i = 1
while (i < 5) {
    console.log(`Value is ${i}`);
    i++;
}

