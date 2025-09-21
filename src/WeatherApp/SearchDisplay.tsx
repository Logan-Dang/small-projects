type SearchProps = {
  searchResults: any[]; // list of results
  setCity: (val: string) => void; // function to set city
  setSearchResults: React.Dispatch<React.SetStateAction<any[]>>; // React setter
};

export default function SearchDisplay({
  searchResults,
  setCity,
  setSearchResults,
}: SearchProps) {
  return (
    <div>
      {searchResults.length > 0 && (
        <ul
          style={{
            listStyle: "none",
            padding: "8px",
            margin: 0,
            background: "black",
            border: "1px solid #ccc",
            borderRadius: "4px",
            position: "absolute",
            top: "100%", // directly under input
            left: 0,
            width: "100%",
            zIndex: 10,
            maxHeight: "150px",
            overflowY: "auto",
          }}
        >
          {searchResults.map((loc) => (
            <li
              key={`${loc.name}-${loc.region}-${loc.country}`}
              style={{ cursor: "pointer", padding: "5px", color: "white" }}
              onClick={() => {
                setCity(loc.name);
                setSearchResults([]);
              }}
            >
              {loc.name}, {loc.region}, {loc.country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
