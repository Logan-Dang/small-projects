import { useState, useRef, useEffect } from "react";
import { FcHome } from "react-icons/fc";
import { FaPlayCircle } from "react-icons/fa";
import { FaPause } from "react-icons/fa6";
import { RiResetLeftLine } from "react-icons/ri";
import HomeLogo from "./HomeLogo.tsx";

export default function StopWatch() {
  const [elapsed, setElapsed] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  // ← MINIMAL CHANGE: accept both browser (number) and Node (NodeJS.Timeout) results
  const intervalRef = useRef<number | NodeJS.Timeout | null>(null);

  const startRef = useRef<number | null>(null);
  const savedRef = useRef<number>(0);

  const handleStart = () => {
    if (isRunning) return;
    startRef.current = Date.now();
    setIsRunning(true);

    // this returns number in browser, NodeJS.Timeout in Node — union covers both
    intervalRef.current = setInterval(() => {
      const now = Date.now();
      const base = savedRef.current;
      const startedAt = startRef.current ?? now;
      setElapsed(base + (now - startedAt));
    }, 1);
  };

  const clearMyInterval = () => {
    if (intervalRef.current !== null) {
      // cast through unknown to avoid overload/type mismatch errors in different environments
      clearInterval(intervalRef.current as unknown as number);
      intervalRef.current = null;
    }
  };

  const handleStop = () => {
    clearMyInterval();

    if (startRef.current !== null) {
      savedRef.current += Date.now() - startRef.current;
    }
    startRef.current = null;
    setIsRunning(false);
  };

  const handleReset = () => {
    clearMyInterval();
    startRef.current = null;
    savedRef.current = 0;
    setElapsed(0);
    setIsRunning(false);
  };

  useEffect(() => {
    return () => {
      clearMyInterval();
    };
  }, []);

  const formatTime = (ms: number) => {
    const minutes = Math.floor(ms / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const centi = Math.floor((ms % 1000) / 10);
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
          <button onClick={handleStart}>
            <FaPlayCircle />
          </button>
        ) : (
          <button onClick={handleStop}>
            <FaPause fill="white" />
          </button>
        )}
        <button onClick={handleReset}>
          <RiResetLeftLine fill="white" />
        </button>
      </div>

      <HomeLogo />
    </div>
  );
}
