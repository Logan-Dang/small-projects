import { useState, useEffect } from "react";

export default function Todos4() {
  const [amount, setAmount] = useState("");
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [result, setResult] = useState(0);
  const [rates, setRates] = useState<{ [key: string]: number }>({});
  const API_KEY = import.meta.env.VITE_MONEY_API_KEY;
  // Fetch rates when component loads
  useEffect(() => {
    fetch(`https://v6.exchangerate-api.com/v6/${API_KEY}/latest/USD`) // Fetches from this link
      .then((res) => res.json()) // ?????
      .then((data) => {
        setRates(data.conversion_rates); //?????
      })
      .catch((err) => console.error("Error fetching rates:", err)); // Catches errors
  }, []);
  useEffect(() => {
    convert();
  }, [amount, fromCurrency, toCurrency, rates]);
  const convert = () => {
    const number = parseFloat(amount);
    if (isNaN(number)) {
      setResult(NaN);
      return;
    }

    const fromRate = rates[fromCurrency];
    const toRate = rates[toCurrency];

    if (!fromRate || !toRate) {
      setResult(NaN);
      return;
    }

    // Correct conversion for base=USD API
    const convertedValue = (number / fromRate) * toRate;

    setResult(convertedValue);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h1>Money Converter</h1>
      <a href="/homepage">Go back to home</a>
      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={{ padding: "10px", fontSize: "16px", marginBottom: "20px" }}
      />
      <div>
        <select
          value={fromCurrency}
          onChange={(e) => setFromCurrency(e.target.value)}
          style={{ padding: "10px", fontSize: "16px", marginRight: "10px" }}
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
        <select
          value={toCurrency}
          onChange={(e) => setToCurrency(e.target.value)}
          style={{ padding: "10px", fontSize: "16px" }}
        >
          {Object.keys(rates).map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>

      <div style={{ marginTop: "20px", fontSize: "18px" }}>
        Result:{" "}
        <strong>
          {amount} {fromCurrency} ={" "}
          {isNaN(result)
            ? "Invalid input"
            : result.toFixed(2) + " " + toCurrency}
        </strong>
      </div>
    </div>
  );
}
