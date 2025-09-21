import { useState, useEffect } from "react";
import { FcHome } from "react-icons/fc";

export default function Word() {
  const [amount, setAmount] = useState(0);
  const [sentence, setSentence] = useState("");

  useEffect(() => {
    count();
  }, [sentence]);

  const count = () => {
    if (sentence.trim().length === 0) {
      setAmount(0);
      return;
    }

    const words = sentence.trim().split(/\s+/);
    setAmount(words.length);
  };

  return (
    <div>
      <h1>Word Count</h1>
      <h3>
        Enter a sentence and I will count how many words are in the sentence
      </h3>
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
      <input
        type="text"
        onChange={(e) => {
          setSentence(e.target.value);
          count();
        }}
      />

      <div>
        <strong>There are word(s) </strong>
        {amount !== null
          ? isNaN(amount)
            ? "Invalid input"
            : `${amount} in your sentence`
          : "-"}
      </div>
    </div>
  );
}
