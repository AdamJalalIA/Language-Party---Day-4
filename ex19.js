fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut: ${response.status}`);
        }
        return response.json();
    })
    .then(users => {
        users.forEach(user => {
            console.log(`Nom: ${user.name}, Email: ${user.email}`);
        });
    })
    .catch(error => console.error("Erreur attrapée:", error.message));
