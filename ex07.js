// tableau
let tableau = [10, 20, 30, 40, 50];

// si le tableau est vide
if (tableau.length === 0) {
    console.log("Le tableau est vide");
} else {
    // somme des nombres
    let somme = 0;
    for (let i = 0; i < tableau.length; i++) {
        somme += tableau[i];
    }

    let moyenne = somme / tableau.length;

    console.log("La moyenne est:", moyenne);
}
