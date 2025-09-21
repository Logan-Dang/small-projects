type Props = {
  // What is a type?
  value: string;
  state: {
    num1: string;
    num2: string;
    op: string | null;
    result: number | null;
  };
  setState: {
    setNum1: (val: string | ((prev: string) => string)) => void; // I don't understand this syntax
    setNum2: (val: string | ((prev: string) => string)) => void;
    setOp: (op: string | null) => void;
    setResult: (res: number | null) => void;
  };
  handlers: any;
};

export default function Button({ value, state, setState, handlers }: Props) {
  const { num1, num2, op } = state;
  const { setNum1, setNum2, setOp, setResult } = setState;

  // Handles when certain buttons are clicked
  if (value === "=") {
    return (
      <button onClick={() => handlers.handleCalc(num1, num2, op, setResult)}>
        {value}
      </button>
    );
  }
  if (["+", "-", "x", "/"].includes(value)) {
    return <button onClick={() => setOp(value)}>{value}</button>;
  }
  if (/[0-9]/.test(value)) {
    // What is /[0-9]/.test(value) mean?
    return (
      <button
        onClick={() => handlers.handleNumClick(value, op, setNum1, setNum2)} // Why are many perameters givin when handleNumClick only asks for two
      >
        {value}
      </button>
    );
  }
  if (value === "AC") {
    return (
      <button
        onClick={() => handlers.handleAC(setNum1, setNum2, setOp, setResult)}
      >
        {value}
      </button>
    );
  }

  // default
  return <button>{value}</button>;
}
