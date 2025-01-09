let phrase = "Bonjour à tous, je m'appelle Adam et je suis à l'IA Institut ?";

// nombre de mots en divisant la phrase par les espaces
let mots = phrase.split(" ").filter((mot) => mot !== "").length;

console.log("Le nombre de mots est:", mots);
