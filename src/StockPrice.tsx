import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { FcHome } from "react-icons/fc";

export default function StockPrice() {
  const [ticker, setTicker] = useState("AAPL");
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [inputValue, setInputValue] = useState("AAPL");

  const API_KEY = import.meta.env.VITE_QUOTE_API_KEY;
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      setTicker(inputValue.toUpperCase());
      setSearchResults([]); // clear suggestions when searching
    }
  };

  const handleSearch = async (query: string) => {
    setInputValue(query);

    if (query.length < 2) {
      setSearchResults([]);
      return;
    }

    const res = await fetch(
      `https://api.api-ninjas.com/v1/stockticker?name=${query}`,
      {
        headers: { "X-Api-Key": API_KEY },
      }
    );
    if (!res.ok) {
      setSearchResults([]);
      return;
    }
    const data = await res.json();
    setSearchResults(data);
  };

  const stockQuery = useQuery({
    queryKey: ["ticker", ticker],
    queryFn: async () => {
      const q = encodeURIComponent(ticker);
      const res = await fetch(
        `https://api.api-ninjas.com/v1/stockprice?ticker=${q}`,
        { headers: { "X-Api-Key": API_KEY } }
      );
      if (!res.ok) throw new Error("Failed to fetch stock price");
      return res.json();
    },
    // enabled: Boolean(ticker), // optional
  });

  if (stockQuery.isLoading) return <p>Loading stock price...</p>;
  if (stockQuery.error)
    return (
      <>
        <p>Error loading stock price: {(stockQuery.error as Error).message}</p>
        <a
          href="/homepage"
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
            <FcHome size={40} />
            <span style={{ fontSize: "18px" }}>Home</span>
          </div>
        </a>
      </>
    );

  return (
    <div>
      <h1>Stock Prices</h1>
      <h3>Enter a ticker for any company and I will get their stock price</h3>

      {searchResults.length > 0 && (
        <ul style={{ listStyle: "none", padding: 0 }}>
          {searchResults.slice(0, 6).map((t) => (
            <li
              key={t.symbol}
              style={{ cursor: "pointer", margin: "5px 0" }}
              onClick={() => {
                setTicker(t.symbol); // ✅ use symbol for stockprice API

                setSearchResults([]); // clear dropdown
              }}
            >
              {t.symbol} — {t.name} ({t.exchange})
            </li>
          ))}
        </ul>
      )}

      {/* Search input */}
      <input
        value={inputValue}
        onChange={(e) => handleSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="Enter ticker here..."
      />

      <a href="/homepage" style={{ textDecoration: "none", color: "inherit" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <FcHome size={40} />
          <span style={{ fontSize: "18px" }}>Home</span>
        </div>
      </a>

      <div>
        {stockQuery.data?.ticker ? (
          <h3>
            {stockQuery.data.name} has a stock price of {stockQuery.data.price}{" "}
            {stockQuery.data.currency}
          </h3>
        ) : (
          <p>No stock prices found</p>
        )}
      </div>
    </div>
  );
}
