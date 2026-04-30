//Array: is a collection of multiple values.

import { reverse } from "dns";

//1.Storing the values within the array.
console.log("Storing the values within the array");
let fruits:string[]=["apple","banana","orange","mango"];
let prices:number[]=[300,80,200,250];
let fruitprice:(string | number)[]=["apple",300,"banana",80,"orange",200,"mango",220];

//2.Access the value from the array.
//Print the mango from fruits and the price of mango from prices, and banana from fruits and prices. 
console.log(fruits[3]);
console.log(prices[3]);
console.log(fruitprice[2]);

//3.Adding additional values to the existing array at the end 
console.log("Adding additional values to the existing array at the end ");
fruits.push("grapes");
console.log(fruits);


//4.Deleting additional values to the existing array at the end 
console.log("Adding additional values to the existing array at the end ");
fruits.pop();
console.log(fruits);

//5. Adding additional values to the existing array at the beginning
console.log("Adding additional values to the existing array at the beginning");
fruits.unshift("Cherry");
console.log(fruits);

//6. Deleting additional values to the existing array at the beginning
console.log("Adding additional values to the existing array at the beginning");
fruits.shift();
console.log(fruits);

//7. Adding additional values to the existing array at the specific index
console.log("Adding additional values to the existing array at the specific index");
fruits.splice(2,0,"watermelon");
console.log(fruits);

//8. Create new array by concatenating two or more arrays.
console.log("Create new array by concatenating two or more arrays");
let citrusFruits : string[]=fruits.slice(1,3);// Syntax=> (start index, end Index+1)
console.log(citrusFruits);

//9. Create new array by concatenating two or more arrays.
console.log("Create new array by concatenating two or more arrays");
let veggies:string[]=["carrot", "patato","tomato"];
let fruitAndVeggies:string[]=fruits.concat(veggies);
console.log(fruitAndVeggies);

//10.Find the index of a specific value within the array.
console.log("Find the index of a specific value within the array");
console.log(fruitAndVeggies.indexOf("apple"));
console.log(fruitAndVeggies.indexOf("papaya"));//return -1 if the value is not found within the array.

//11/Iterate all the value from the array.
console.log("Iterate all the values from the array");
for(let fruit of fruits){
    console.log(fruits);
}

//12.Reverse the values within the array.
console.log("Reverse the values within the array");
let vegetables:string[]=["carrot","potato","tomato"];
console.log(vegetables);
vegetables.reverse
console.log(vegetables);

//13. Sort the values within the array.
console.log("Sort the values within the array");
let numbers :number[]=[300,80,200,250];
console.log(numbers);
numbers.sort((a, b) => a - b);//sort in ascending order
console.log(numbers);
numbers.sort((a, b) => b - a);//sort in descending order
console.log(numbers);




