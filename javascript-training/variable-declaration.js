//Variable Declaration

/*
========================================
📌 JAVASCRIPT VARIABLE DECLARATION NOTES
========================================

👉 Syntax:
Declaration Variable = Data;

Example:
let empName = "Bharath";

👉 A variable is a name of a memory location where we store data.

========================================
📌 TYPES OF VARIABLE DECLARATION
========================================

// 1. var  (old, avoid in modern JS)
// 2. let  (used when value can change)
// 3. const (used when value should NOT change)

Example:
var a = 10;
let b = 20;
const c = 30;

========================================
📌 VARIABLE NAMING RULES
========================================

// 1. Must not be a reserved keyword
// let const = "Bharath"; ❌

// 2. Must not be literals (true, false, null, undefined)
// let true = "Bharath"; ❌

// 3. Must not start with a number
// let 1empName = "Bharath"; ❌

// 4. Can only use _ and $ as special characters
let emp_Name = "Bharath"; ✅

// 5. Must not contain spaces
// let emp name = "Bharath"; ❌

// 6. Variable name should be unique in same scope
// let empName = "Bharath";
// let empName = "Sarath"; ❌

// ✅ Good practice
let employeeName = "Bharath";

========================================
📌 NAMING CONVENTIONS
========================================

// camelCase → variables/functions
let employeeSalary = 50000;

// UPPER_CASE → constants
const PI_VALUE = 3.14;

// PascalCase → class names
class EmployeeData {}

========================================
📌 INITIALIZATION
========================================

// Initialization = assigning value at declaration

var a;        // allowed (no initial value)
let b;        // allowed
const c = 10; // mandatory to initialize

========================================
📌 REASSIGNMENT
========================================

// Changing value later

var a = 10;
a = 20; // ✅ allowed

let b = 20;
b = 30; // ✅ allowed

const c = 30;
// c = 40; ❌ NOT allowed

========================================
📌 RE-DECLARATION
========================================

// var allows re-declaration
var x = "Bharath";
var x = "Sarath"; // ✅ allowed

// let does NOT allow re-declaration
// let y = "Bharath";
// let y = "Sarath"; ❌

// const does NOT allow re-declaration
// const z = "Hayath";
// const z = "Another"; ❌

========================================
📌 SCOPE
========================================

// Scope = where variable can be accessed

// let & const → BLOCK SCOPED
// var → FUNCTION SCOPED (not block scoped)

{
    let x = 100;
    const y = 200;
    var z = 300;

    console.log(x); // ✅
    console.log(y); // ✅
    console.log(z); // ✅
}

// console.log(x); ❌ (block scope)
// console.log(y); ❌ (block scope)
console.log(z); // ✅ (var is not block-scoped)

========================================
📌 BEST PRACTICES
========================================

✔ Use let and const (avoid var)  
✔ Use meaningful variable names  
✔ Prefer const whenever possible  
✔ Follow camelCase naming  
✔ Avoid re-declaration  

========================================
*/

var a;
let b;
const c=10;

a=5;
b=100;

console.log(a);
console.log(b);
console.log(c);