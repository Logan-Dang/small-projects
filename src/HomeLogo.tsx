import { FcHome } from "react-icons/fc";

export default function HomeLogo() {
  return (
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
        <FcHome size={30} />
        <span style={{ fontSize: 18 }}>Home</span>
      </div>
    </a>
  );
}
