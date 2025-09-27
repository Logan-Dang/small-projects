import { useParams } from "react-router";
import { useWeather } from "./WeatherHandlers";
import { WiHumidity, WiThermometer } from "react-icons/wi";
import { TbArrowBackUp } from "react-icons/tb";
import WeatherLogo from "./WeatherLogo.tsx";

export default function WeatherWind() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const { city } = useParams<{ city: string }>();
  const weather = useWeather(city ?? "San Diego", API_KEY);

  const windDirectionMap: Record<string, string> = {
    N: "North",
    NNE: "North-Northeast",
    NE: "Northeast",
    ENE: "East-Northeast",
    E: "East",
    ESE: "East-Southeast",
    SE: "Southeast",
    SSE: "South-Southeast",
    S: "South",
    SSW: "South-Southwest",
    SW: "Southwest",
    WSW: "West-Southwest",
    W: "West",
    WNW: "West-Northwest",
    NW: "Northwest",
    NNW: "North-Northwest",
  };

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
          <p>Local Time Estimate: {weather.data.location.localtime}</p>
          <p>Last Updated: {weather.data.current.last_updated}</p>
          <p>
            Wind speed: {weather.data.current.wind_mph} mph /{" "}
            {weather.data.current.wind_kph} kph
          </p>
          <p>
            🌬 The wind is blowing from:{" "}
            {windDirectionMap[weather.data?.current.wind_dir] || "Unknown"}
          </p>
          <p>
            Gust speed: {weather.data?.current.gust_mph} mph /{" "}
            {weather.data?.current.gust_kph} kph
          </p>
          <WeatherLogo icon={weather.data?.current?.condition?.icon} />
        </div>
      )}
    </div>
  );
}
