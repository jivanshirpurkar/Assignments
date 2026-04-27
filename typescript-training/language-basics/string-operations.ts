//string=> string is nothing but a collections. In typescript , we can use single quotes (' '), double quotes (" ") or backticks to defines a strings.

// example of string declaration

let firstName: string = "Jeevan";
let lastName: string = "Hirpurkar";

// use backticks ` ` for template string
let fullName: string = `My name is ${firstName} ${lastName}`;
// print output
console.log(fullName);

//1.Storing string in a variable
console.log("1.Storing string in a variable");
let originalString: string = " Username: Admin|Password: admin123 ";
console.log(originalString); //output:Username:Admin|Password:admin123

//2.Method 2: calculate the total number of character available in the string=> string.length()
console.log("calcualte the total number of charater availble in the string")
let stringLength: number = originalString.length;
console.log(`Total number of charaters:${stringLength}`);

//3.Method to get the specific charater from the string at a specific index+> string.charAT(index)
console.log("3. Get the specific character from the string at a specific index");
let chatAtIndex5: string = originalString.charAt(5);
console.log(`character at indes 5:${chatAtIndex5}`);

//4.Method=> Reverse the string that should print each and every character of the string in reverse order.

let reverseString: string = "";
for (let i: number = stringLength - 1; i >= 0; i--) {
    reverseString = reverseString + originalString.charAt(i);
}
console.log(reverseString);

// 5. Removes leading and trailing spaces from the string => string.trim()
// It only removes:
// - spaces at the start
// - spaces at the end
console.log("4.Removing the unwanted space from the string");
console.log(`"${originalString}"`);
console.log(`"${originalString.trim()}"`);

//5. Remove all the spaces from the string.=>string.replace(/old-char/g,new-char)
console.log("5.Remove all the spaces from the string.");
console.log(`"${originalString}"`);
console.log(`"${originalString.replace(/ /g, " ")}`);

//6. Remove all the alphabet from the string.=>string.replace(/[reg-exp]/g,new-char)
console.log("6.Remove all the alphabet from the string.");
console.log(`"${originalString}"`);
console.log(`"${originalString.replace(/[a-zA-Z]/g, " ")}"`);

//7. Remove all the numbers from the string.=>string.replace(/[reg-exp]/g,new-char)
console.log("7.Remove all the numbers from the string.");
console.log(`"${originalString}"`);
console.log(`"${originalString.replace(/[0-9]/g, " ")}"`);

//8. Remove all the special charater from the string.=>string.replace(/[reg-exp]/g,new-char)
console.log("8.Remove all the special character from the string.");
console.log(`"${originalString}"`);
console.log(`"${originalString.replace(/[^a-zA-Z0-9]/g, " ")}"`);

//9.Convert the string into lowercase=>string.lowercase()
console.log("9.convert string into lowercase.");
console.log(`"${originalString}"`);
console.log(`"${originalString.toLowerCase()}`);

//10.Convert the string into uppercase=>string.uppercase()
console.log("10.convert string into uppercase.");
console.log(`"${originalString}"`);
console.log(`"${originalString.toUpperCase()}`);


//11.Method to extract specific part of the string by using a index=> string.substring(startIndex, endIndex+1)
console.log("11,Extract specific part of the string by using index")
let Username: string = originalString.substring(11, 18);
console.log(`Extracted username:${Username}`);
let Password: string = originalString.substring(29, 39);
console.log(`Extracted password:${Password}`);

//12. Method to extract the text from the dynamic string  => Split and extract particular parts. => string.split(delimiter)
console.log("12. Extract the text from the dynamic string");
let splitString: string[] = originalString.split(" ");
console.log(splitString); // Output: [ 'Username', ':', 'Admin', '|', 'Password', ':', 'admin123' ]
let extractedUsername: string | undefined = splitString[3];
let extractedPassword: string | undefined = splitString[7];
console.log(`Extracted username: ${extractedUsername}`);
console.log(`Extracted password: ${extractedPassword}`);


//13. Methods to compare two different strings 
console.log("13. Compare two different strings");
//== (loose equality) (i.e. it checks only the value of the string)
//=== (strict equality) (i.e. it checks both the value and the type of the string)
//includes() (i.e. it checks if a string contains a specified substring)
//startsWith() (i.e. it checks if a string starts with a specified substring)
//endsWith() (i.e. it checks if a string ends with a specified substring)

let string1: string = "100";
let string3: number | string = "100";
console.log(string1 == string3); // Output: true
console.log(string1 === string3); // Output: true
let string2: string = "Hello World";
console.log(string2.includes("World")); // Output: true
console.log(string2.startsWith("Hello")); // Output: true
console.log(string2.endsWith("World")); // Output: true

//14.Data conversions: Method to convert string to a number and viceversa=>string(other-datatypes)
console.log("14.Data conversion: Method to convert to a number and vice versa");
let stdCode:number=123;
let phone:number=456790;
let std:string=String(stdCode);
console.log(std+phone);

//15.converting string to other data types
let balance:string ="Account Balance is $19999.99";
balance=balance.replace(/[^0-9.]/g,"");
let bal:number=parseFloat(balance);
console.log(bal>10000);


// | Part      | Meaning                   |
// | --------- | ------------------------- |
// | `[^0-9.]` | match unwanted characters |
// | `g`       | remove all occurrences    |
// | `""`      | replace with nothing      |

