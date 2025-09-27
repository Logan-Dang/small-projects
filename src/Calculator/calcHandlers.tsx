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
  op: string | null,
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

export const handleDecimal = (
  op: string | null,
  num1: string,
  num2: string,
  setNum1: (val: (prev: string) => string) => void,
  setNum2: (val: (prev: string) => string) => void
) => {
  if (op === null) {
    if (!num1.includes(".")) setNum1((prev) => prev + ".");
  } else {
    if (!num2.includes(".")) setNum2((prev) => prev + ".");
  }
};

export const handlePlusMinus = (
  op: string | null,
  setNum1: (val: string) => void,
  setNum2: (val: string) => void,
  num1: string,
  num2: string
) => {
  if (op === null) {
    setNum1((parseFloat(num1) * -1).toString());
  } else {
    setNum2((parseFloat(num2) * -1).toString());
  }
};

export const handleSqrt = (
  op: string | null,
  setNum1: (val: string) => void,
  setNum2: (val: string) => void,
  num1: string,
  num2: string
) => {
  if (op === null) {
    setNum1(Math.sqrt(parseFloat(num1)).toString());
  } else {
    setNum2(Math.sqrt(parseFloat(num2)).toString());
  }
};

export const handlePowers = (
  op: string | null,
  setNum1: (val: string) => void,
  setNum2: (val: string) => void,
  num1: string,
  num2: string
) => {
  if (op === null) {
    setNum1((parseFloat(num1) ** 2).toString());
  } else {
    setNum2((parseFloat(num2) ** 2).toString());
  }
};

export const handleFraction = (
  op: string | null,
  setNum1: (val: string) => void,
  setNum2: (val: string) => void,
  num1: string,
  num2: string
) => {
  if (op === null) {
    setNum1((1 / parseFloat(num1)).toString());
  } else {
    setNum2((1 / parseFloat(num2)).toString());
  }
};

export const handleBackspace = (
  op: string | null,
  setNum1: (val: string) => void,
  setNum2: (val: string) => void,
  num1: string,
  num2: string
) => {
  if (op === null) {
    setNum1(num1.slice(0, -1));
  } else {
    setNum2(num2.slice(0, -1));
  }
};

export const handleFactorial = (
  op: string | null,
  setNum1: (val: string) => void,
  setNum2: (val: string) => void,
  num1: string,
  num2: string
) => {
  const fact = (n: number): number => {
    if (n < 0) return NaN;
    if (n === 0 || n === 1) return 1;
    let result = 1;
    for (let i = 2; i <= n; i++) result *= i;
    return result;
  };

  if (op === null) {
    setNum1(fact(parseFloat(num1)).toString());
  } else {
    setNum2(fact(parseFloat(num2)).toString());
  }
};

export const handleLog10 = (
  op: string | null,
  setNum1: (val: string) => void,
  setNum2: (val: string) => void,
  num1: string,
  num2: string
) => {
  if (op === null) {
    const val = parseFloat(num1);
    setNum1(val > 0 ? Math.log10(val).toString() : "Invalid");
  } else {
    const val = parseFloat(num2);
    setNum2(val > 0 ? Math.log10(val).toString() : "Invalid");
  }
};

export const handleSin = (
  op: string | null,
  setNum1: (val: string) => void,
  setNum2: (val: string) => void,
  num1: string,
  num2: string
) => {
  if (op === null) {
    const val = parseFloat(num1);
    setNum1(
      !isNaN(val) ? Math.sin((val * Math.PI) / 180).toString() : "Invalid"
    );
  } else {
    const val = parseFloat(num2);
    setNum2(
      !isNaN(val) ? Math.sin((val * Math.PI) / 180).toString() : "Invalid"
    );
  }
};

export const handleCos = (
  op: string | null,
  setNum1: (val: string) => void,
  setNum2: (val: string) => void,
  num1: string,
  num2: string
) => {
  if (op === null) {
    const val = parseFloat(num1);
    setNum1(
      !isNaN(val) ? Math.cos((val * Math.PI) / 180).toString() : "Invalid"
    );
  } else {
    const val = parseFloat(num2);
    setNum2(
      !isNaN(val) ? Math.cos((val * Math.PI) / 180).toString() : "Invalid"
    );
  }
};

export const handlePi = (
  op: string | null,
  setNum1: (val: string) => void,
  setNum2: (val: string) => void
) => {
  if (op === null) {
    setNum1(Math.PI.toString());
  } else {
    setNum2(Math.PI.toString());
  }
};

export const handleLn = (
  op: string | null,
  setNum1: (val: string) => void,
  setNum2: (val: string) => void,
  num1: string,
  num2: string
) => {
  if (op === null) {
    const val = parseFloat(num1);
    setNum1(val > 0 ? Math.log(val).toString() : "Invalid");
  } else {
    const val = parseFloat(num2);
    setNum2(val > 0 ? Math.log(val).toString() : "Invalid");
  }
};
