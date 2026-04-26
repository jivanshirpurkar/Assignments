// create an array to store student names
let studentNames: string[] = ["Suresh", "Mahesh", "Naresh"];

// create an array to store student marks
let studentNMarks: number[] = [75, 80, 82];

// store total marks
let totalmarks: number = 0;

// new array to store updated marks
let updatedMarks: number[] = [];

console.log("Total Updated Marks");

// loop through marks
// loop through marks
for (let i = 0; i < studentNMarks.length; i++) {

    const updatedValue = (studentNMarks[i] ?? 0) + 10;

    updatedMarks[i] = updatedValue;

    totalmarks += updatedValue; 

    console.log(`${studentNames[i]}: ${updatedValue}`);
}
// calculate average
const average: number = totalmarks / updatedMarks.length;

// print average
console.log(`Average Marks: ${average.toFixed(1)}`);