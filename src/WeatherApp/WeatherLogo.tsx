type WeatherLogoProps = {
  icon?: string;
};

export default function WeatherLogo({ icon }: WeatherLogoProps) {
  if (!icon) return null;

  return (
    <div>
      <img src={`https:${icon}`} alt="weather icon" />
    </div>
  );
}
