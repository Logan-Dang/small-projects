import type { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  const city = event.queryStringParameters?.city;

  if (!city) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "City parameter is required" }),
    };
  }

  const API_KEY = process.env.WEATHER_API_KEY;
  if (!API_KEY) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Missing WEATHER_API_KEY environment variable" }),
    };
  }

  try {
    
    const response = await fetch(
      `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${encodeURIComponent(
        city
      )}&days=1`
    );

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ error: `Error fetching weather data: ${response.statusText}` }),
      };
    }

    const data = await response.json();
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Internal Server Error" }),
    };
  }
};
