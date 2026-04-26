// Assignment: Bank statement
// Positive → Credit
// Negative → Debit

const transactions: number[] = [50000, -2000, 3000, -15000, -200, -300, 4000, -3000];

let creditTxn = 0;
let debitTxn = 0;

let totalCredited = 0;
let totalDebited = 0;

let suspiciousTxn = 0;

// Loop through each transaction
for (const amount of transactions) {

    if (amount > 0) {
        // Credit
        creditTxn++;
        totalCredited += amount;

    } else {
        // Debit
        debitTxn++;
        totalDebited -= amount; // convert to positive
    }

    // Suspicious check
    if (amount < -10000) {
        console.log(`Suspicious transaction with Amount: ${amount}`);
        suspiciousTxn++;
    }
}

// Final balance
const finalBalance: number = totalCredited - totalDebited;


// Print summary
console.log("----- Transaction Summary -----");
console.log("Total Credit Transactions:", creditTxn);
console.log("Total Debit Transactions:", debitTxn);
console.log("Total Credit Amount:", totalCredited);
console.log("Total Debit Amount:", totalDebited);

console.log("Final Balance:", finalBalance);

console.log("Total Suspicious Transactions:", suspiciousTxn);

export {};