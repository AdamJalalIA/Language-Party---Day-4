let phrase = "Bonjour tout le monde !";

// mot à remplacer et son remplacement
let motARemplacer = "monde";
let motDeRemplacement = "JavaScript";

// remplace les occurrences du mot dans la phrase
let nouvellePhrase = phrase.replace(new RegExp(motARemplacer, "g"), motDeRemplacement);

console.log(nouvellePhrase);
