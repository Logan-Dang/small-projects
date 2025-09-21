import Button from "./Button.tsx";
// What does props mean
type Props = {
  buttonValueChunks: string[][];
  state: {
    num1: string;
    num2: string;
    op: string | null;
    result: number | null;
  };
  //setState is like setNum1 execpt it's doing it for every variable in state
  setState: {
    setNum1: (val: string | ((prev: string) => string)) => void;
    setNum2: (val: string | ((prev: string) => string)) => void;
    setOp: (op: string | null) => void;
    setResult: (res: number | null) => void;
  };
  handlers: any; // A function
};

// Sets up how the buttons will look
export default function ButtonGrid({
  buttonValueChunks,
  state,
  setState,
  handlers,
}: Props) {
  return (
    <>
      {buttonValueChunks.map((row, rowIdx) => (
        <div key={rowIdx}>
          {row.map((buttonValue, colIdx) => (
            <Button
              key={colIdx}
              value={buttonValue}
              state={state}
              setState={setState}
              handlers={handlers}
            />
          ))}
        </div>
      ))}
    </>
  );
}
