let tableau = [34, 7, 23, 32, 5, 62];

// tri à bulles
for (let i = 0; i < tableau.length - 1; i++) {
    for (let j = 0; j < tableau.length - 1 - i; j++) {
        if (tableau[j] > tableau[j + 1]) {
            // pour échanger les éléments
            let temp = tableau[j];
            tableau[j] = tableau[j + 1];
            tableau[j + 1] = temp;
        }
    }
}

console.log("Tableau trié:", tableau);
