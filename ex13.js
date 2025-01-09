function calculer(nombre1, nombre2, operation) {
    switch (operation) {
        case "+":
            return nombre1 + nombre2;
        case "-":
            return nombre1 - nombre2;
        case "*":
            return nombre1 * nombre2;
        case "/":
            if (nombre2 === 0) {
                return "Erreur: Division par zéro";
            }
            return nombre1 / nombre2;
        default:
            return "Opération non valide";
    }
}

// ici des utilisations
console.log("Résultat:", calculer(10, 5, "+"));
console.log("Résultat:", calculer(10, 0, "/"));
