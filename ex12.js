let personne = {
    nom: "Alice",
    age: 30,
    adresse: {
        rue: "123 Rue de l'IA Institut",
        ville: "Paris",
        codePostal: "75000"
    },
    hobbies: ["Lecture", "Natation", "Voyages"]
};

console.log("Informations sur la personne:", personne);

// nouveau passe-temps
personne.hobbies.push("Cuisine");

// age modifié
personne.age = 31;

// ça supprime la propriété codePostal
delete personne.adresse.codePostal;

console.log("Personne mise à jour :", personne);
