//jumping statement

//break==>break the loop and come out of the loop.
//continue==>skip the current iteration and move to the next iteration.

for (let i: number=1; i<=10; i++){
    if(i===5){
        //break; //stop the execution and come out of the loop. o/p-1,2,3,4
        continue;// stop the current iteration and move to the next iteration. o/p-1,2,3,4,5,6,7,8,9,10
    }
    console.log(i);
}