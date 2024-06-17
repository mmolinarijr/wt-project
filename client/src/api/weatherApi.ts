export async function getWeather(city: string, options = {}) {
    const baseUrl = import.meta.env.VITE_WEATHER_API_URL;
    const url = `${baseUrl}?city=${city}`;
    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response.json();
}
