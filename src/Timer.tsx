import { useState } from "react";

export default function Timer() {
  const [time, setTime] = useState(0);

  return (
    <div>
      <h1>Timer</h1>
      <input onChange={(e) => setTime(e.target.valueAsNumber)} />
    </div>
  );
}
