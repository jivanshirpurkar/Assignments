/* =========================================================
   📘 JAVASCRIPT OPERATORS – QUICK REFERENCE NOTES
   ========================================================= */

/*
1. Arithmetic Operators
   Used to perform mathematical operations

   +  → Addition        (10 + 5 = 15)
   -  → Subtraction     (10 - 5 = 5)
   *  → Multiplication  (10 * 5 = 50)
   /  → Division        (10 / 5 = 2)
   %  → Modulus         (10 % 3 = 1) → remainder
*/

/*
2. Increment & Decrement Operators

   ++ → Increment (increase value by 1)
   -- → Decrement (decrease value by 1)

   Example:
   let a = 10;

   a++  → Post Increment (use first, then increase)
   ++a  → Pre Increment  (increase first, then use)

   console.log(a++); // 10
   console.log(a);   // 11

   console.log(++a); // 12
*/

/*
3. Assignment Operators

   =   → Assign value        (a = 10)
   +=  → Add & assign        (a += 5  → a = a + 5)
   -=  → Subtract & assign   (a -= 5)
   *=  → Multiply & assign   (a *= 2)
   /=  → Divide & assign     (a /= 2)
*/

/*
4. Comparison Operators

   ==   → Equal (value only)
   ===  → Strict Equal (value + type)
   !=   → Not equal
   >    → Greater than
   <    → Less than
   >=   → Greater or equal
   <=   → Less or equal

   Example:
   10 == "10"   → true
   10 === "10"  → false
*/

/*
5. Logical Operators

   && → AND (both conditions true)
   || → OR  (any one true)
   !  → NOT (reverse result)

   Example:
   true && false → false
   true || false → true
*/

/*
6. Ternary Operator (Short if-else)

   Syntax:
   condition ? true_value : false_value;

   Example:
   let age = 18;
   let result = (age >= 18) ? "Adult" : "Minor";
*/

/* =========================================================
   🔥 YOUR CODE EXAMPLE
   ========================================================= */

/*let a = 10;
let b = 20;*/

//console.log(a++); // Output: 10 (post increment)
//console.log(a);   // Output: 11

/* =========================================================
   🧠 IMPORTANT POINTS
   =========================================================

   - a++ → use first, then increase
   - ++a → increase first, then use
   - % → gives remainder
   - Always prefer === instead of ==
   - Use let / const instead of var (modern JS)

========================================================= */

let a=10;
let b=20;

console.log(a++);
console.log(a);

//a++ => post increment =>post execution of current line , increase the value by 1
console.log("post Inrement: " + (a++));

//++a => pre increment =>pre execution of current line , increase the value by 1
console.log("Next line of Post Increment "+(a));

//++b Pre-increment value by 1 before execution 
console.log("pre-increment:" + (++ b));
console.log("Next line of pre-increment: "+ (b));

//--a => post increment =>post execution of current line , decrease the value by 1

console.log("post Inrement: " + (a--));
console.log("Next line of Post Increment "+(a));

//Assignment operator => Special character used to assign value to variable.(=, +=, -=,*=,/=)

let c=  20;
console.log("initial value of c: " +c);
c+=10;
console.log("After using += :" +c);

c-=10;
console.log("After using -=: " +c);

c*=10;
console.log("After using *=: " +c);

c/=10;
console.log("After using /=: " +c);

//Comparision Operator Special char used to compare the value either true or fale. 
//==,===, !=, <, >, <=,>=, 
//== Represent loose euqlity.=> Loose equality means compare value only, but it is not comapare type of the data.
//=== Represent Strict equality.=> Strict equality compare both value as well data.

let x=10;
let y="10"; //When we used Single Quate, Double Quote, back tick, it will treated as a text.

console.log("Loose Equality with ==: " + (x==y));
console.log("Loose Equality with ===: " + (x===y));
console.log("Not Equal to !: " + (x!=y));
console.log("Greater than >: " + (x>y));
console.log("less than >: " + (x<y));
console.log("Greater than >=: " + (x>=y));
console.log("less than >=: " + (x<=y));

//4 Logical operator=> Special charater used to perfrom logical operations on boolean value (&&, ||,!)
//&& Represent logical (AND) all the condition must be true, otherwise it will return false. 
//|| Represent logical (OR) any condition must be true otherwise it will return false. 
//! Represent logical NOT, => It will return true of the operand is false,and it return if the operand is true.

let i=10;
let j=20;
console.log((i<j && i==j)); //True and false-> false
console.log((i<j || i==j)); //True or false-> True
console.log(!((i<j) && (i==j))); // not (true && false) => not(false) => true

//5. Ternary Operator (?)=> Used to perfrom special operation (?).
//let result =(condition) ? "valueIfTrue": "valueIfFalse"

let age=37;
let result = (age>=18) ? "Eligiable to vote" : "Not Eligiable to vote";
console.log(result);

 














