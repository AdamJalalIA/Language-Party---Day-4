// nouveau post
const nouveauPost = {
    title: "Mon premier post",
    body: "Ceci est le contenu de mon post.",
    userId: 1,
};

fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify(nouveauPost),
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP lors de la création ! statut: ${response.status}`);
        }
        return response.json();
    })
    .then(post => {
        console.log("Post créé:", post);
        // 10 premiers posts
        return fetch("https://jsonplaceholder.typicode.com/posts?_limit=10");
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP lors de la récupération ! statut: ${response.status}`);
        }
        return response.json();
    })
    .then(posts => {
        console.log("Les 10 premiers posts:");
        posts.forEach(p => console.log(`- ${p.title}`));
    })
    .catch(error => console.error("Erreur attrapée:", error.message));
