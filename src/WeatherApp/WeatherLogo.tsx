import { useParams } from "react-router";
import { useWeather } from "./WeatherHandlers";

export default function WetaherLogo() {
  const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
  const { city } = useParams<{ city: string }>();
  const weather = useWeather(city ?? "San Diego", API_KEY);

  return (
    <div>
      <img
        src={`https:${weather.data?.current.condition.icon}`}
        alt="weather icon"
      />
    </div>
  );
}
