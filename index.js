const form = document.getElementById("form");
const resultBox = document.getElementById("resultBox");

const apiKey = "your_API_key_here";

form.addEventListener("submit", async function (event) {
    event.preventDefault();

    const latitude = document.getElementById("latitude").value;
    const longitude = document.getElementById("longitude").value;

    if (!latitude || !longitude) {
        alert("Please enter Latitude and Longitude");
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Failed to fetch data. Check API key or network.");
        }

        const data = await response.json();

        console.log(data); // 🔍 for debugging

        resultBox.style.display = "block";

        document.getElementById("aqi").textContent = data.list[0].main.aqi;
        document.getElementById("co").textContent = data.list[0].components.co;
        document.getElementById("no2").textContent = data.list[0].components.no2;
        document.getElementById("o3").textContent = data.list[0].components.o3;
        document.getElementById("pm25").textContent = data.list[0].components.pm2_5;
        document.getElementById("pm10").textContent = data.list[0].components.pm10;
        document.getElementById("so2").textContent = data.list[0].components.so2;

    } catch (error) {
        console.log(error);
        alert(error.message);
    }
});