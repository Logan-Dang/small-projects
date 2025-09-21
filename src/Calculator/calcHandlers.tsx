// All the functions for the calculator

export const handleCalc = (
  num1: string,
  num2: string,
  op: string | null,
  setResult: (val: number) => void
) => {
  const a = parseFloat(num1);
  const b = parseFloat(num2);
  if (isNaN(a) || isNaN(b)) {
    setResult(NaN);
    return;
  }
  switch (op) {
    case "+":
      setResult(a + b);
      break;
    case "-":
      setResult(a - b);
      break;
    case "x":
      setResult(a * b);
      break;
    case "/":
      setResult(b !== 0 ? a / b : NaN);
      break;
    default:
      setResult(NaN);
  }
};

export const handleNumClick = (
  num: string,
  op: string | null,
  setNum1: (val: (prev: string) => string) => void,
  setNum2: (val: (prev: string) => string) => void
) => {
  if (op === null) {
    setNum1((prev) => prev + num);
  } else {
    setNum2((prev) => prev + num);
  }
};

export const handleAC = (
  setNum1: (val: string) => void,
  setNum2: (val: string) => void,
  setOp: (val: string | null) => void,
  setResult: (val: number | null) => void
) => {
  setNum1("");
  setNum2("");
  setOp(null);
  setResult(null);
};

export const handle100 = (
  op: string,
  num1: string,
  num2: string,
  setResult: (val: number | null) => void
) => {
  if (op === null) {
    setResult(parseFloat(num1) / 100);
  } else {
    setResult(parseFloat(num2) / 100);
  }
};
