import { useState } from "react";
import Display from "./Display.tsx";
import ButtonGrid from "./ButtonGrid.tsx";
import { buttonValueChunks } from "./buttonConfig.tsx";
import {
  // Imports all the functions in calcHandlers.tsx
  handleCalc,
  handleNumClick,
  // handleAC,
  // handle100,
  // handleDecimal,
  // handlePlusMinus,
  // handleSqrt,
  // handlePowers,
  // handleFraction,
  // handleBackspace,
  // handleFactorial,
  // handleLog,
  // handleCos,
  // handlePie,
  // handleSin,
  // handleLn,
} from "./calcHandlers.tsx";

export default function Todos2() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [op, setOp] = useState<string | null>(null);
  const [result, setResult] = useState<number | null>(null);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <h2>Calculator</h2>
      <a href="/homepage">Go back to home</a>

      <Display num1={num1} num2={num2} setNum1={setNum1} setNum2={setNum2} />

      <ButtonGrid
        buttonValueChunks={buttonValueChunks}
        state={{ num1, num2, op, result }}
        setState={{ setNum1, setNum2, setOp, setResult }}
        handlers={{
          handleCalc,
          handleNumClick,
          // handleAC,
          // handle100,
          // handleDecimal,
          // handlePlusMinus,
          // handleSqrt,
          // handlePowers,
          // handleFraction,
          // handleBackspace,
          // handleFactorial,
          // handleLog,
          // handleCos,
          // handlePie,
          // handleSin,
          // handleLn,
        }}
      />

      <div>
        <strong>
          Result: {num1} {op} {num2} ={" "}
        </strong>
        {result !== null ? (isNaN(result) ? "Invalid input" : result) : "N/A"}
      </div>
    </div>
  );
}
