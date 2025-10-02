import { useParams } from "react-router";
import { useWeather } from "./WeatherHandlers";
import { TbArrowBackUp } from "react-icons/tb";
import WeatherLogo from "./WeatherLogo.tsx";

export default function WeatherVis() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const { city } = useParams<{ city: string }>();
  const weather = useWeather(city ?? "San Diego");

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
            👀 Visibility distance in miles: {weather.data.current.vis_miles}
          </p>
          <p>
            👀 Visibility distance in kilometers: {weather.data.current.vis_km}
          </p>
          <p>
            ☀️ UV rays:{" "}
            {weather.data.current.uv <= 2
              ? "Low risk"
              : weather.data.current.uv <= 5
              ? "Moderate risk"
              : weather.data.current.uv <= 7
              ? "High risk"
              : weather.data.current.uv <= 10
              ? "Very high risk"
              : "Extreme risk"}
          </p>
          <p>
            Dew Point: {weather.data.current.dewpoint_f}°F /{" "}
            {weather.data.current.dewpoint_c}°C
          </p>
          <WeatherLogo icon={weather.data?.current?.condition?.icon} />
        </div>
      )}
    </div>
  );
}
