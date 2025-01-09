let livre = {
    titre: "Le Petit Prince",
    auteur: "Antoine de Saint-Exupéry",
    annee: 1943,
    disponible: true
};

// propriétés et leurs valeurs
console.log("Propriétés et valeurs:", livre);

// ici je modifie la propriété disponible
livre.disponible = false;

// propriété langue
livre.langue = "Français";

console.log("Objet mis à jour:", livre);
