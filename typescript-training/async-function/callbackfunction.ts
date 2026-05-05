//Function to get the sum of unlimited numbers based on the input from 1 to given number
function sumOfNumbers(input: number): number {
    let sum = 0;
    for (let i = 1; i <= input; i++) {
        sum += i;
    }
    return sum;

}

//Callback function to display the result
console.log("Start up the program. Please wait..");
console.log("step 1 Executed");
console.log("step 2 Executed");
console.log("step 3 Executed");
setTimeout(() => {
    console.log(sumOfNumbers(100000000));

},3000);
console.log("step 5 Executed");
console.log("step 6 Executed");
console.log("Program execution completed");

//wait for 3 sec
//then call the function 
