import { useEffect, useState } from "react";
import { FcHome } from "react-icons/fc";
import { handleSearch, useWeather } from "./WeatherHandlers.tsx";
import SearchDisplay from "./SearchDisplay.tsx";
import { Link } from "react-router";
import WeatherLogo from "./WeatherLogo.tsx";
import HomeLogo from "../HomeLogo.tsx";

export default function WeatherApp() {
  const [city, setCity] = useState(() => {
    // ✅ Initialize from localStorage or fallback
    return localStorage.getItem("weatherCity") || "San Diego";
  });
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const [searchResults, setSearchResults] = useState<any[]>([]);

  const weather = useWeather(city); // ✅ fetch handled in hook

  useEffect(() => {
    localStorage.setItem("weatherCity", city);
  }, [city]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
        minHeight: "100vh", // ✅ grows with content
      }}
    >
      <h1>Weather App</h1>

      <div style={{ position: "relative" }}>
        <input
          type="text"
          placeholder="Search for city..."
          onChange={(e) => handleSearch(e, setSearchResults)}
          style={{
            fontSize: "16px",
            padding: "8px",
            marginBottom: "10px",
            width: "200px",
          }}
        />

        <SearchDisplay
          searchResults={searchResults}
          setCity={setCity}
          setSearchResults={setSearchResults}
        />
      </div>

      <h3>
        {weather.data?.location?.name}, {weather.data?.location?.region},{" "}
        {weather.data?.location?.country}
      </h3>

      <div
        style={{ display: "flex", gap: "16px", textDecoration: "underline" }}
      >
        <Link
          to={`/weathertemp/${city}`}
          style={{ fontSize: "25px", color: "white", marginBottom: "10px" }}
        >
          Temp
        </Link>
        <Link
          to={`/weatherastro/${city}`}
          style={{ fontSize: "25px", color: "white", marginBottom: "10px" }}
        >
          Astronomy
        </Link>
        <Link
          to={`/weathervis/${city}`}
          style={{ fontSize: "25px", color: "white", marginBottom: "10px" }}
        >
          Visual/Dewpoint
        </Link>
      </div>
      <div
        style={{
          display: "flex",
          gap: "16px",
          textDecoration: "underline",
        }}
      >
        <Link
          to={`/weatherprecip/${city}`}
          style={{ fontSize: "25px", color: "white", marginBottom: "10px" }}
        >
          Precipitation/Pressure/Snow
        </Link>
        <Link
          to={`/weatherwind/${city}`}
          style={{ fontSize: "25px", color: "white", marginBottom: "10px" }}
        >
          Wind/Gust speeds
        </Link>
      </div>

      <HomeLogo />
      <WeatherLogo icon={weather.data?.current?.condition?.icon} />
    </div>
  );
}
