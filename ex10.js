let tableau = [];
for (let i = 0; i < 50; i++) {
    tableau.push(Math.floor(Math.random() * 100) + 1);
}

// moyenne des nombres
let somme = tableau.reduce((acc, val) => acc + val, 0);
let moyenne = somme / tableau.length;

// nombre plus grand et plus petit
let max = tableau[0];
let min = tableau[0];
let nombrePairs = 0;

// ça parcourt le tableau pour les statistiques
for (let i = 0; i < tableau.length; i++) {
    if (tableau[i] > max) max = tableau[i];
    if (tableau[i] < min) min = tableau[i];
    if (tableau[i] % 2 === 0) nombrePairs++;
}

console.log("Tableau généré:", tableau);
console.log("Moyenne des nombres:", moyenne);
console.log("Nombre le plus grand:", max);
console.log("Nombre le plus petit:", min);
console.log("Nombre de fois qu’un nombre pair apparaît:", nombrePairs);
