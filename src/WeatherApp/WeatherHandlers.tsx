import { useQuery } from "@tanstack/react-query";

export const handleSearch = (
  e: React.ChangeEvent<HTMLInputElement>,
  setSearchResults: React.Dispatch<React.SetStateAction<any[]>>,
  API_KEY: string
) => {
  // Make a perameter called e that is a React.ChangeEvent IDK what that means though
  const query = e.target.value; // making a const called query that equals what e equals in a string format
  if (query.length < 2) {
    // If query's length is less than 2 don't search because there will be too many cities that pops up
    setSearchResults([]); // Sets the search results to nothing and then goes back
    return;
  }
  fetch(`https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${query}`) // Fetches cities/states/contries that include the user's input
    .then((res) => res.json())
    .then((data) => setSearchResults(data)); // sets the search results to data
};

export const useWeather = (city: string, API_KEY: string) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["weather", city],
    queryFn: () =>
      fetch(
        `http://localhost:3000/weather?city=${encodeURIComponent(city)}`
      ).then((res) => res.json()),
    enabled: !!city,
  });

  // ✅ Handles different states
  if (!city) return { status: "empty" as const };
  if (isLoading) return { status: "loading" as const };
  if (error) return { status: "error" as const, error };
  if (data?.error) return { status: "apiError" as const, error: data.error };
  return { status: "success" as const, data };
};
