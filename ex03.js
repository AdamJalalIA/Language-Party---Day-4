let chaineDeNombres = "10,20,30,40";

// en un tableau de nombres
let tableau = chaineDeNombres.split(",").map(Number);

let nombreTotal = tableau.length;
let sommeTotale = tableau.reduce((acc, val) => acc + val, 0);
let moyenne = sommeTotale / nombreTotal;
let superieursAMoyenne = tableau.filter((val) => val > moyenne).length;

console.log("Nombre total d’éléments:", nombreTotal);
console.log("Somme des nombres:", sommeTotale);
console.log("Moyenne des nombres:", moyenne);
console.log("Nombre d’éléments supérieurs à la moyenne:", superieursAMoyenne);
