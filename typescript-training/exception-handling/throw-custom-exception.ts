let age:number = 18;

if(age < 18){
    throw new Error("You are not eligible to vote");
}else{
    console.log("Eligible to vote");
}
console.log("Execution Completed");