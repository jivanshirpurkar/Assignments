"use strict";
//Synta to store the data in TypeScript: Declaration variable : DataTypes = Data;
//Data types in TypeScript are divided into the different categories.
//1.Primitive data types.
//2.Non-Primitive data types.
/****************************************** */
/************primitive Data Types*********** */
/****************************************** */
//1.number=> number datatype represents the number with decimals , without decimals. stored without quotations.
let num1 = 10;
let num2 = 10.55;
console.log(num1);
console.log(num2);
//2. String ==> The data types that can help us to store text values, we can use single or double quotes or backticks
let str1 = "He told me 'Good Morning.'";
let str2 = `I replied back with "Good Morning."`;
console.log(str1);
console.log(typeof str1);
console.log(str2);
console.log(typeof str2);

//boolean data types=> The data type that can help us to store the result of a condition in the form of true or false
let x = 10;
let y = 20;
let result = x > y;
console.log(result);

//4.undefined=> Undefinded represent a variable that has been declared but not assigned any value.
let age;
console.log(age);
//5.null=>Null represent a variable that has been declared and intentionally assigned an empty value.
let salary = null;
console.log(salary);
//6.union=> Union represent more than one data types within the variable.
let empAddress = "Hyderabad";
console.log(empAddress);
empAddress = "Nagpur";
console.log(empAddress);
empAddress = 589570;
console.log(empAddress);
empAddress = "Flat No 604";
console.log(empAddress);
//7. any=> any represent any data type is allowed within the variable
let data = "Hello World";
console.log(data);
data = 100;
console.log(data);
data = true;
console.log(data);
data = 1.1;
console.log(data);
let person = {
    name: "Jagjivan",
    age: 55,
    visastatus: true,
    address: {
        city: "Nagpur",
        state: "Gujrat",
        zip: 440037
    }
};
//Array => Array represent a list of values.
let fruits = ["apple", "banana", "orange", "mango",];
let price = [300, 200, 500, 100];
let fruitAndPrice = ["apple", 300, "banana", 200, "orange", "50", "manage", "200"];
console.log(fruitAndPrice);
//let fruitAndPrice : (string |number) [] =["apple",300,"banana",200,"orange","50","manage","200"];
//let fruitAndPrice: (string | number)[] = ["apple", 300, "banana", 200, "orange", 50, "mango", 200];
//tuple=> tuple represent a list of values in specific order.
//tuples
//Array:-
//store employee name, employee phone number, and employee visa status within the array.
let empdetails = ["Jagjivan", true, 7517930336];
//tuples
//store employee name, employee phone number, and employee visa status within the array
//Example-1.
let empinfo = ["Jagjivan", 7517930336, true];
//let empinfo: [string, number, boolean ] = ["Jeevan", 25, true];
console.log(empinfo);
//Example-2
let user = [101, "Jeevan", "QA Lead"];
console.log(user);
function launchBrowserAndLogin(browser_name, url) {
    console.log(`Launch the ${browser_name} Browser`);
    console.log(`Enter the URL ${url}`);
    console.log("Enter the username as 'Bharath' and password as 'Bharath@123'");
    console.log("Click on the login button");
}
function logoutAndCloseBrowser() {
    console.log("Logout from the application");
    console.log("Close the browser");
}
function getAccountBalance() {
    console.log("Navigate to the account balance page");
    let accountBalance = 100000;
    return accountBalance;
}
//set=> A set represent a collection of unique value of any data types, is used to store the unique value 
let empids = new Set();
empids.add(112);
empids.add(112);
empids.add(113);
empids.add(114);
empids.add(115);
empids.add(116);
empids.add(117);
console.log(empids);
//Map=> A Map can store mutiple value in the from of key value pare, when it comes to map allow duplicate value , but dont allow key.
let empMap = new Map();
empMap.set("empId", 121);
empMap.set("empName", "Jagjivan");
empMap.set("empAge", 40);
empMap.set("empLuckyNumber", 40);
// duplicate key (will overwrite, not duplicate)
empMap.set("empId", 999);
console.log(empMap);
