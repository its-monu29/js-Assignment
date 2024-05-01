// Example weather forecast
var isRaining = false;
var temperature = 25; // Example temperature in Celsius

if (!isRaining) {
    console.log("It's a good day for outdoor activities!");
} else {
    if (temperature > 30) {
        console.log("It's raining and hot. Stay indoors and keep cool!");
    } else if (temperature > 20) {
        console.log("It's raining but the temperature is pleasant. You may still enjoy outdoor activities with an umbrella.");
    } else {
        console.log("It's raining and a bit chilly. It's better to stay indoors.");
    }
}
