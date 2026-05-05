//Asynchronous function with promise :

//normal function to generate random number

function normalFunction(): number {
    return Math.random();

}
//call the normal function
console.log(normalFunction());

//async function to generate random number with promise (always i want the number > 0.5)
async function asyncFunction(): Promise<string> {
    return new Promise((resolve, reject) => {
        const random = Math.random();

        if (random > 0.5) {
            resolve(`Random Number ${random} is generated and its greater than 0.5`)
        } else {
            reject(`Random Number ${random} is generated but its less than 0.5`)

        }

    })
}



//async function to generate random number with promise & timeout (always i want the number > 0.5)
async function asyncFunctionWithTimeout(): Promise<string> {
    return new Promise((resolve, reject) => {


        setTimeout(() => {
             const random = Math.random();
            if (random > 0.5) {
                resolve(`Random Number ${random} is generated and its greater than 0.5`)
            } else {
                reject(`Random Number ${random} is generated but its less than 0.5`)
            }

            } , 10000)


    })
}

//Calling the asynchronous functions.
let value = await  asyncFunctionWithTimeout();
console.log(value);