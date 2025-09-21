import { useParams } from "react-router";
import { useWeather } from "./WeatherHandlers";
import { TbArrowBackUp } from "react-icons/tb";

export default function DisplayAstro() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const { city } = useParams<{ city: string }>();
  const weather = useWeather(city ?? "San Diego", API_KEY);

  return (
    <div>
      {weather.status === "empty" && <p>Enter a city to see the weather.</p>}
      {weather.status === "loading" && <p>Loading...</p>}
      {weather.status === "error" && <p>Error fetching weather</p>}
      {weather.status === "apiError" && <p>{weather.error.message}</p>}

      {weather.status === "success" && (
        <div>
          <h2>
            {weather.data.location.name}, {weather.data.location.region},{" "}
            {weather.data.location.country}
          </h2>
          <a
            href="/weatherapp"
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              <TbArrowBackUp size={40} />
              <span style={{ fontSize: "18px" }}>Back</span>
            </div>
          </a>

          <p>
            🌅 Sunrise: {weather.data.forecast.forecastday[0].astro.sunrise}
          </p>
          <p>🌇 Sunset: {weather.data.forecast.forecastday[0].astro.sunset}</p>
          <p>
            🌙 Moonrise: {weather.data.forecast.forecastday[0].astro.moonrise}
          </p>
          <p>
            🌑 Moonset: {weather.data.forecast.forecastday[0].astro.moonset}
          </p>
        </div>
      )}
    </div>
  );
}
