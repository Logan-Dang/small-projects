import {
  FaSignOutAlt,
  FaLaughSquint,
  FaCalendarAlt,
  FaFileWord,
} from "react-icons/fa";
import { SiConvertio, SiTheweatherchannel } from "react-icons/si";
import { FcCalculator } from "react-icons/fc";
import { FaListCheck } from "react-icons/fa6";
import { GiTicTacToe } from "react-icons/gi";
import { FaStopwatch } from "react-icons/fa6";
import { LuMessageSquareQuote } from "react-icons/lu";
import { AiOutlineStock } from "react-icons/ai";

export default function HomePage() {
  return (
    <div className="HomePage">
      <h1>Choose what program</h1>
      <h1>You want to run</h1>
      <a href="/" style={{ textDecoration: "none", color: "inherit" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            cursor: "pointer",
          }}
        >
          <FaSignOutAlt size={40} />
          <span style={{ fontSize: "18px" }}>Sign Out</span>
        </div>
      </a>
      <nav>
        <ul>
          <li>
            <a
              href="/unitconverter"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  cursor: "pointer",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <SiConvertio size={20} />
                <span style={{ fontSize: "18px", marginLeft: "5px" }}>
                  Unit Converter
                </span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="/calculator"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  cursor: "pointer",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <FcCalculator size={20} />
                <span style={{ fontSize: "18px", marginLeft: "5px" }}>
                  Calculator
                </span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="/todos"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  cursor: "pointer",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <FaListCheck size={20} />
                <span style={{ fontSize: "18px", marginLeft: "5px" }}>
                  To-Do-List
                </span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="/tictactoe"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  cursor: "pointer",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <GiTicTacToe size={30} fill="white" />
                <span style={{ fontSize: "18px", marginLeft: "5px" }}>
                  Tic-Tac-Toe
                </span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="/jokes"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  cursor: "pointer",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <FaLaughSquint size={20} fill="white" />
                <span style={{ fontSize: "18px", marginLeft: "5px" }}>
                  Jokes Page
                </span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="/weatherapp"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  cursor: "pointer",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <SiTheweatherchannel size={30} fill="white" />
                <span style={{ fontSize: "18px", marginLeft: "5px" }}>
                  Weather App
                </span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="/calendar"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  cursor: "pointer",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <FaCalendarAlt size={20} fill="white" />
                <span style={{ fontSize: "18px", marginLeft: "5px" }}>
                  Calendar
                </span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="/word"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  cursor: "pointer",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <FaFileWord size={20} fill="white" />
                <span style={{ fontSize: "18px", marginLeft: "5px" }}>
                  Word Counter
                </span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="/stopwatch"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  cursor: "pointer",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <FaStopwatch size={20} fill="white" />
                <span style={{ fontSize: "18px", marginLeft: "5px" }}>
                  Stop Watch
                </span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="/quote"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  cursor: "pointer",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <LuMessageSquareQuote size={20} fill="white" />
                <span style={{ fontSize: "18px" }}> Motivational Quotes </span>
              </div>
            </a>
          </li>
          <li>
            <a
              href="/stocks"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  cursor: "pointer",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                <AiOutlineStock size={20} fill="white" />
                <span style={{ fontSize: "18px" }}> Stock Prices </span>
              </div>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}
