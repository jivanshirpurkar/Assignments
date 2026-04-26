//Loop Statement: Loop the statement or execute the statement multiple time.

//Before Loop statement
let name: string = "Jeevan";
/*console.log("name");
console.log("name");
console.log("name");
console.log("name");
console.log("name");
console.log("name");
console.log("name");
console.log("name");
console.log("name");*/

//Loop statement mainly two categorized
//for loop=>When we know the total number of iteration to be executed before itself.
//while loop=> When we don't the total number of iteration to be executed before.

//1.for loop 
//syntax=> for(condition-to-start;condition-to-end;increment/decrement){
//statment to be executed
//}

//for example i want to print a name in 10 time using a for loop. 
for (let i: number = 1; i <= 10; i++) {
    console.log(`${i} ${name}`);

}

//while loop=> When we don't the total number of iteration to be executed before.
//syntax:
//while(condition-to-begin){
// statement ti be executed
//}

// let j: number = 1;
// let isPageLoaded: boolean = false;
// while (j > 0) {
//     if (isPageLoaded || j > 5) {
//         break; //break the loop
//     }
//     console.log("Refresh The Page");
//     j++;
// }

// special cases of loops

// 1. for...of loop ==> For-of loop will be used to iterate over a predefined list like array.
// 2. for...in loop ==> For-in loop will be used to iterate over the properties of an object.
// 3. do...while loop ==> Do-while loop will be used to execute the statements at least once, even when the condition is false.

// 1. for...of loop
// Array => Array represents a list of values.

let fruits: string[] = ["Banana", "Mango", "Apple", "Orange"];

// normal for loop
for (let i: number = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// for...of loop ==> Each and every value of the given list
for (let fruit of fruits) {
    console.log(fruit);
}


// 2. for...in loop ==> For-in loop will be used to iterate over the properties of an object.

interface personinfo {
    name: string,
    age: number,
    visastatus: boolean,
    address: {
        city: string,
        state: string,
        zip: number
    }
}

let person: personinfo = {
    name: "Jagjivan",
    age: 40,
    visastatus: true,
    address: {
        city: "Nagpur",
        state: "MS",
        zip: 440037
    }

}

//for ... in loop==> Each and every property of the given object
for (let key in person) {
    console.log(key);
    console.log(person[key as keyof personinfo]);
}

// 3. do...while loop ==> Do-while loop will be used to execute the statements at least once, even when the condition is false.
//syntax:
//do {
//      //statement ti be executed
//} while(condition-to-begin)
//

let x: number = 0;
do {
    console.log("Refresh the page")
    x++;
} while (x > 0);
