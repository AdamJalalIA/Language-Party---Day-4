// tableau
let tableau = [23, 45, 12, 78, 56, 89, 34, 67, 90, 11];

// j'nitialise le min et max
let min = tableau[0];
let max = tableau[0];

// ça parcourt le tableau pour trouver le min et le max
for (let i = 1; i < tableau.length; i++) {
    if (tableau[i] < min) {
        min = tableau[i];
    }
    if (tableau[i] > max) {
        max = tableau[i];
    }
}

console.log("Le minimum est:", min);
console.log("Le maximum est:", max);
