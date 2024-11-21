// Fetch weather data using OpenWeatherMap API
async function fetchWeather() {
    const city = document.getElementById('city').value.trim();
    const apiKey = '3e2bdf0bfa3c84af9d9d2d71ef2e828c'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  
    // Clear previous data
    const weatherContainer = document.getElementById('weatherData');
    weatherContainer.innerHTML = '';
  
    try {
      // Fetch the data
      const response = await fetch(apiUrl);
  
      // Handle errors
      if (!response.ok) {
        throw new Error('City not found or API request failed.');
      }
  
      const data = await response.json();
  
      // Extract and display weather information
      const temperature = ((data.main.temp - 273.15) * 9/5 + 32).toFixed(2); // Convert Kelvin to Celsius
      
      const description = data.weather[0].description;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;
  
      weatherContainer.innerHTML = `
        <h3>Weather in ${data.name}</h3>
        <p><strong>Temperature:</strong> ${temperature} °F</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
        <p><strong>Wind Speed:</strong> ${windSpeed} m/s</p>
      `;
    } catch (error) {
      // Handle and display errors
      weatherContainer.innerHTML = `
        <p style="color: red;">${error.message}</p>
      `;
    }
  }
  