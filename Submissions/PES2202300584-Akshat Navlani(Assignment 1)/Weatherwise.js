const apiKey = '6b326a335ade64bf9c7831629bc3804e';

document.getElementById('getWeather').addEventListener('click', () => {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name.');
        return;
        
        
    }

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const weatherInfo = document.getElementById('weatherInfo');
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
