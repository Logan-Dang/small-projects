import { useState, useRef, useEffect } from "react";
import { FcHome } from "react-icons/fc";

export default function StopWatch() {
  const [elapsed, setElapsed] = useState(0); // milliseconds
  const [isRunning, setIsRunning] = useState(false);

  // safe, cross-environment interval type
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // keep timestamps in refs so re-renders don't affect them
  const startRef = useRef<number | null>(null); // ms timestamp when started
  const savedRef = useRef<number>(0); // accumulated ms while paused

  // Start: set start timestamp and create interval
  const handleStart = () => {
    if (isRunning) return;
    startRef.current = Date.now();
    setIsRunning(true);

    // use window.setInterval to make it explicit browser behavior (returns number)
    intervalRef.current = window.setInterval(() => {
      const now = Date.now();
      const base = savedRef.current;
      const startedAt = startRef.current ?? now;
      setElapsed(base + (now - startedAt));
    }, 50); // update every 50ms (smooth enough)
  };

  // Stop: clear interval and save elapsed
  const handleStop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (startRef.current !== null) {
      savedRef.current += Date.now() - startRef.current;
    }
    startRef.current = null;
    setIsRunning(false);
  };

  // Reset everything
  const handleReset = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    startRef.current = null;
    savedRef.current = 0;
    setElapsed(0);
    setIsRunning(false);
  };

  // cleanup on unmount
  useEffect(() => {
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  // Format mm:ss:cs (centiseconds)
  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centi = Math.floor((ms % 1000) / 10); // two-digit centiseconds
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}:${String(centi).padStart(2, "0")}`;
  };

  return (
    <div style={{ textAlign: "center", marginTop: 24 }}>
      <div className="circle">
        <div className="orbit-wrapper">
          <div
            className={`orbit rotate-${Math.floor(elapsed / 1000) * 360}`}
            style={{ rotate: `${Math.floor((elapsed / 3000) * 360)}deg` }}
          >
            <div className="ball"></div>
          </div>
        </div>
      </div>

      <h1>Stop Watch</h1>
      <h2 style={{ fontSize: 36, margin: "16px 0" }}>{formatTime(elapsed)}</h2>

      <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
        {!isRunning ? (
          <button onClick={handleStart}>Start</button>
        ) : (
          <button onClick={handleStop}>Stop</button>
        )}
        <button onClick={handleReset}>Reset</button>
      </div>

      <a href="/homepage" style={{ textDecoration: "none", color: "inherit" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
            marginTop: 20,
          }}
        >
          <FcHome size={40} />
          <span style={{ fontSize: 18 }}>Home</span>
        </div>
      </a>
    </div>
  );
}
