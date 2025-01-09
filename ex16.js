let votes = ["Naruto", "One Piece", "Hunter X Hunter", "Bleach", "Naruto", "Naruto", "One Piece"];

// votes pour chaque manga
let resultat = votes.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

// résultats des votes
console.log("Résultats des votes:", resultat);

// gagnant
let gagnant = Object.keys(resultat).reduce((a, b) => (resultat[a] > resultat[b] ? a : b));
console.log("Meilleur Manga:", gagnant);
