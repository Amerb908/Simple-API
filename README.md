# Weather API Web App

This is a simple web application that allows users to get weather information for any city using the OpenWeatherMap API. The project demonstrates how to fetch data asynchronously from an API and display it on a web page. It also includes the use of web workers to offload the fetching process to a background thread, keeping the UI responsive.

## Features

- **Weather Data Lookup**: Enter a city name and get current weather information including temperature, humidity, description, and wind speed.
- **Async Fetch**: Uses `fetch()` to make API requests asynchronously.
- **Web Worker Integration**: Offloads the API request to a background thread using web workers to avoid blocking the main thread and improve UI performance.
- **Error Handling**: Proper error handling for failed API requests or incorrect city names.
  
## Technologies Used

- **HTML**: Structure and layout of the app.
- **CSS**: Styling for the user interface.
- **JavaScript**: Used for making asynchronous API requests and handling user input.
- **OpenWeatherMap API**: A free weather API that provides weather data.
- **Web Workers**: Used to handle API requests on a separate thread to avoid blocking the UI.

## Getting Started

### Prerequisites

Before you can run the app, you need an API key from OpenWeatherMap. You can get one by signing up at [OpenWeatherMap](https://openweathermap.org/).

1. Sign up for an account at [OpenWeatherMap](https://openweathermap.org/).
2. After signing in, go to the API section and generate an API key.
3. Replace the placeholder `your_api_key_here` in `app.js` with your actual API key.
