let etudiants = [
    { nom: "Adam", age: 20, note: 18 },
    { nom: "Wassim", age: 22, note: 15 },
    { nom: "Kilian", age: 19, note: 12 },
    { nom: "Rayan", age: 21, note: 16 }
];

// meilleur étudiant
let meilleurEtudiant = etudiants.reduce((meilleur, etudiant) => (etudiant.note > meilleur.note ? etudiant : meilleur));
console.log("Meilleur étudiant:", meilleurEtudiant.nom);

// étudiants >= 15
let bonsEtudiants = etudiants.filter(etudiant => etudiant.note >= 15).map(etudiant => etudiant.nom);
console.log("Étudiants avec une note >= 15:", bonsEtudiants);

// moyenne notes
let moyenne = etudiants.reduce((somme, etudiant) => somme + etudiant.note, 0) / etudiants.length;
console.log("Moyenne des notes:", moyenne);
