//print the number in diamond shape

function printDiamond(n: number): void {

    for (let i = 1; i <= 2 * n - 1; i++) {

        // decide number count (increase then decrease)
        let currentRow = i <= n ? i : 2 * n - i;

        let row: string[] = [];

        // spaces
        for (let s = 1; s <= n - currentRow; s++) {
            row.push("  ");
        }

        // numbers
        for (let j = 1; j <= currentRow; j++) {
            row.push(j.toString() + " ");
        }

        console.log(row.join(""));
    }
}

// call
printDiamond(5)