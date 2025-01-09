const latitude = 48.8566;
const longitude = 2.3522;

fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`)
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erreur HTTP ! statut: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(`Température actuelle à Paris: ${data.current_weather.temperature}°C`);
        console.log(`Conditions: ${data.current_weather.weathercode}`);
    })
    .catch(error => console.error("Erreur attrapée:", error.message));

