# Javascript Basic to Expert
Javascript revisit from basics to expert repository under guidance of Chai aur Code.

# JavaScript Basics

## 1. Variables
### 1.1 `let`: 
Works under block scope.
### 1.2 `const`: 
Also works under block scope and we can't change the value of the data stored in `const`.
### 1.3 `var`: 
Doesn't have any scope rule, i.e., can be accessed from anywhere.

## 2. Datatypes
### 2.1 Number: 
Range: `-2^53` to `2^53`.
### 2.2 BigInt: 
No range, depends upon memory length.
### 2.3 Boolean: 
`true` or `false`.
### 2.4 Null: 
A [standalone value] which is an intentional representation of an empty value.
### 2.5 Undefined: 
Variable is declared but not initialized.
### 2.6 String: 
Group of letters, numbers, symbols.
### 2.7 Symbol: 
Used for unique components.

## 3. 'use strict'
ECMAScript standard JavaScript engines ne milkar banaya, taaki features like classes, arrow functions, etc., standardized hoon. `"use strict"` ek achhi practice hai, lekin modern JS engines me zaroori nahi hai.

## 4. Conversion
### JavaScript Data Type Conversion Table
In JavaScript, data types can be converted explicitly or implicitly between different types. Here's a table showing the common conversions between basic data types in JavaScript.

| From / To       | **String**                    | **Number**                   | **Boolean**                  | **Object**                        | **Undefined**                  | **Null**                      |
|-----------------|-------------------------------|------------------------------|------------------------------|-----------------------------------|--------------------------------|-------------------------------|
| **String**      | -                             | `"123" → 123`                | `"" → false`, `"abc" → true` | `"abc" → new String("abc")`       | `"abc" → NaN`                  | `"abc" → null`                |
| **Number**      | `123 → "123"`                 | -                            | `0 → false`, `1 → true`      | `123 → new Number(123)`           | `NaN → false`                  | `0 → false`                   |
| **Boolean**     | `true → "true"`               | `true → 1`, `false → 0`      | -                            | `true → new Boolean(true)`        | `false → 0`                    | `false → 0`                   |
| **Object**      | `new String("abc") → "abc"`   | `new Number(123) → 123`      | `new Boolean(true) → true`   | -                                 | Throws error                   | Throws error                  |
| **Undefined**   | `undefined → "undefined"`     | `undefined → NaN`            | `undefined → false`          | `undefined → undefined`           | -                              | `undefined`                   |
| **Null**        | `null → "null"`               | `null → 0`                   | `null → false`               | `null → null`                     | `null → 0`                     | -                             |

### Implicit Conversion (Type Coercion):
JavaScript performs type coercion automatically in some cases:

- **String + Number**: Concatenates (e.g., `"5" + 1 = "51"`)
- **Number + Boolean**: Converts Boolean to Number (e.g., `true + 1 = 2`)
- **String + Boolean**: Concatenates (e.g., `"true" + true = "truetrue"`)
- **Equality (`==`)**: Performs type coercion before comparison (e.g., `5 == "5"` is `true`)

### Explicit Conversion Functions:
- **String()**: Converts to a string.
- **Number()**: Converts to a number.
- **Boolean()**: Converts to a boolean.
- **parseInt()**, **parseFloat()**: Parse strings into integers or floating-point numbers.

## 5. Memories:
There are two types of memory:
1. **Stack Memory (Primitive)**: We get a copy of the variable data.
2. **Heap Memory (Non-Primitive)**: We get a reference to the original variable data.

## 6. String
### 6.1 Types of String Declaration:
  - `let name = "Satvik"`
  - `let name2 = new String("Satvik")`
### 6.2 String Concatenation: 
  - Traditional Method: `console.log("Hello" + name)`
  - String Interpolation: `console.log(\`Hello ${name}\`)`
### 6.3 String size: 
  - `strName.length`
### 6.4 Index to character: 
  - `strName.charAt(index)`
### 6.5 Position of element:
  - From start: `indexOf('a')`
  - From end: `lastIndexOf('b')`
### 6.6 Substring: 
  - `strName.substring(startIndex, endIndex)`
### 6.7 Slice: 
  - `strName.slice(startIndex, endIndex)` (can include negative index)
### 6.8 Trim: 
  - `strName.trim()` (removes extra spaces and line terminators `\n`)
### 6.9 Replace: 
  - `strName.replace('selectText', 'replaceText')`
### 6.10 Includes: 
  - `strName.includes('satvik')` (checks if 'satvik' is in the string)
### 6.11 Split: 
  - `strName.split(' ')` splits the string into an array of substrings based on the delimiter.

## 7. Date
Date is an object in JavaScript.

### Date Methods:
- `new Date()` - `2024-09-19T16:06:08.647Z` (Not human-readable)
- `new Date().toString()` - Human-readable format.
- `new Date().getDate()` - Returns the date.
- `new Date().getDay()` - Returns the day.
- `new Date().getFullYear()` - Returns the year.
- `new Date().toDateString()` - `Wed Oct 09 2024`.
- `new Date().toLocaleDateString()` - `19/9/2024`.
- `new Date().toLocaleString('default', { weekday: 'short', timeZone: 'Asia/Kolkata' })`.
- `Date.now()` - Returns milliseconds since January 1, 1970.
- `customDateVariable.getTime()` - Returns the time in milliseconds of that date.

## 8. Array
### 8.1 Types of Array Declaration:
  - `arr = [1, 2, 3, 4]`
  - `arr = new Array(0, 1, 2, "Satvik", true)`
### 8.2 Push and Pop:
  - `push(element)` - Adds element to the right.
  - `pop()` - Removes element from the right.
### 8.3 Unshift and Shift:
  - `unshift(9)` - Adds 9 to the beginning of the array (inefficient for large arrays).
  - `shift()` - Removes the first element of the array.
