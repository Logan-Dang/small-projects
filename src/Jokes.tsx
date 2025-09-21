import { useState, useEffect } from "react";

export default function Joke() {
  // Setting varables
  const [jokeResponse, setJokeResponse] = useState<{
    setup: string;
    punchline: string;
  }>();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>();
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    async function fetchJoke() {
      // <- Don't know what it means but I know its a function
      try {
        // Try and catch block
        const response = await fetch(
          // The response equals to whatever the server fetches from the API link
          `https://official-joke-api.appspot.com/random_joke` // <- API link
        );
        if (!response.ok) throw new Error("Failed to fetch jokes"); // If response is has a problem with it...make an error that says "Failed to fetch jokes"
        const data = await response.json(); // <- IDK. All I know is data equals response in json format? Maybe
        setJokeResponse(data); // Set the joke to whatever data equals
      } catch (err) {
        // catches errors
        setError((err as Error).message); // Shows a message on the screen about the error that occurred
      } finally {
        // After all that
        setLoading(false); // Shows that loading has happened so no need to display loading text.(On line 29)
        setRefresh(false);
      }
    }

    fetchJoke(); // Calls the fectchJoke function and runs all code above once
  }, [refresh]); // <- When inside [] is changed...do useEffect code

  if (loading) return <p>Loading joke...</p>; // If its still fetching and loading the joke...Show a text that says "Loading joke..."
  if (error) return <p>Error: {error}</p>; // If there's an error display a text saying the error
  if (!jokeResponse) return <p>Error loading joke. :(</p>; // If jokeResponse is undifined...display a text saying "Error loading joke"

  const refreshJoke = () => {
    setRefresh(true);
  };

  return (
    <div //I don't know why you have to have the class name thing and IDK what that means
      className="bg-red-500"
    >
      <h2 className="text-xl font-bold mb-2">
        {jokeResponse.setup}, {jokeResponse.punchline}
      </h2>

      <div>
        <button
          onClick={refreshJoke} // When the button is clicked it runs the Refresh function
          style={{
            width: "120px",
            height: "24px",
            fontSize: "14px",
            borderRadius: "4px",
            cursor: "pointer",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center", // Center the text
            padding: 0, // Remove extra padding
            display: "inline-block", // Ensure proper centering
            marginRight: "10px",
          }}
        >
          Refresh Joke
        </button>

        <a href="/homepage">Go home</a>
      </div>
    </div>
  );
}
