// Behavior: The code block executes once before the condition is checked, and then it continues to run as long as the condition is true.
// Use Case:
//  Guaranteed Single Execution: Use the do-while loop when you need the loop body to run at least once, regardless of the condition.
//  Example: Running a menu system where you want the options displayed at least once before a condition check.

do{
    console.log("it will print for once!");
}while(false)