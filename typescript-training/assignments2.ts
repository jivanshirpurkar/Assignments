function evaluateLoan(
    customerName: string,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number,
    creditScore: number
): void {

    // Display initial message 
    console.log("Loan Evaluate Result for: " + customerName);

    // Step 1: Check credit score
    if (creditScore > 750) {

        console.log("Loan Approved: Excellent credit score.");

    } else if (creditScore >= 650) {

        // Step 2: Check income
        if (income >= 50000) {

            // Step 3: Check employment status
            if (isEmployed) {

                // Step 4: Check debt-to-income ratio
                if (debtToIncomeRatio < 40.4) {
                    console.log("Loan Approved: Meets all criteria.");
                } else {
                    console.log("Loan Denied: Debt-to-Income ratio is too high.");
                }

            } else {
                console.log("Loan Denied: Customer is not employed");
            }

        } else {
            console.log("Loan Denied: Income is less than required.");
        }

    } else {
        console.log("Loan Denied: Credit score is too low.");
    }
}


// function call (parameter order fixed)
evaluateLoan(
    "Jivan",     // customerName
    50000,       // income
    true,        // isEmployed
    30.4,        // debtToIncomeRatio
    750          // creditScore
);


//2nd method using function. 

type LoanDecision = {
    status: "APPROVED" | "REJECTED";
    reason: string;
};

function evaluateLoanV2(
    creditScore: number,
    income: number,
    isEmployed: boolean,
    debtToIncomeRatio: number
): LoanDecision {

    if (creditScore < 650) {
        return { status: "REJECTED", reason: "Credit score is too low." };
    }

    if (creditScore > 750) {
        return { status: "APPROVED", reason: "Excellent credit score." };
    }

    if (income < 50000) {
        return { status: "REJECTED", reason: "Income is less than required." };
    }

    if (!isEmployed) {
        return { status: "REJECTED", reason: "Customer is not employed." };
    }

    if (debtToIncomeRatio >= 50) {
        return { status: "REJECTED", reason: "Debt-to-Income ratio is too high." };
    }

    return { status: "APPROVED", reason: "Meets all criteria." };
}

// Corrected function call (parameter order fixed)
evaluateLoan(
    "Jagjivan",     // customerName
    50000,       // income
    true,        // isEmployed
    50.4,        // debtToIncomeRatio
    750          // creditScore
);

