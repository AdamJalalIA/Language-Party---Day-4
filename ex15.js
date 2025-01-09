let panier = [
    { nom: "ps5", prix: 500, quantite: 3 },
    { nom: "pc gamer", prix: 2000, quantite: 2 },
    { nom: "tel", prix: 300, quantite: 4 }
];

// prix total
let total = panier.reduce((somme, article) => somme + article.prix * article.quantite, 0);
console.log("Prix total:", total);

// nouveau article au panier
panier.push({ nom: "nintendo switch", prix: 200, quantite: 5 });
console.log("Panier après ajout:", panier);

// article supprimé
let nomArticleASupprimer = "pc gamer";
panier = panier.filter(article => article.nom !== nomArticleASupprimer);
console.log("Panier après suppression :", panier);
