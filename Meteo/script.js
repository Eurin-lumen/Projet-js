const apiKey = '3EiU8HF620G0MaxnZS2kz1vsLq1loNxo';

function getWeather() {
    const cityInput = document.getElementById('city');
    const weatherInfo = document.getElementById('weather-info');

    const city = cityInput.value.trim();

    if (city === '') {
        alert('Veuillez entrer une ville.');
        return;
    }

    // Utilisez votre clé secrète dans l'URL de la requête
    fetch(`https://api.tomorrow.io/v4/timelines?location=${city}&fields=temperature_2m,weathercode&apikey=${apiKey}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data.error) {
                throw new Error(`Erreur de données: ${data.error.message}`);
            }

            // Accédez aux données météorologiques
            const weatherData = {
                city: city,
                temperature: `${data.data.timelines[0].intervals[0].values.temperature_2m}°C`,
                description: data.data.timelines[0].intervals[0].values.weathercode,
            };

            displayWeather(weatherData, weatherInfo);
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert(`Une erreur s'est produite lors de la récupération des données météo: ${error.message}`);
        });
}

function displayWeather(weatherData, element) {
    element.innerHTML = `
        <h2>Météo à ${weatherData.city}</h2>
        <p>Température: ${weatherData.temperature}</p>
        <p>Description: ${weatherData.description}</p>
    `;
}
