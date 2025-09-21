import { useState } from "react";

export default function HomePage() {
    const [newUsername, setNewUsername] = useState("");
    const [newPasscode, setNewPasscode] = useState("");

    const handleReset = () => {
        alert("Passcode reset successful!");
        localStorage.setItem("username", newUsername);
        localStorage.setItem("password", newPasscode);
        window.location.href = "/"; // Redirect to login page
    }

    return (
        <div
            className="ForgotPasscode"
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
            }}>
            <h1>Forgot Passcode</h1>
            <a href="/">Go back to login</a>
            <input
                type="text"
                placeholder="Enter your new username"
                value={newUsername}
                onChange={(e) => setNewUsername(e.target.value)}
                style={{ padding: "10px", fontSize: "16px", marginBottom: "10px" }}
            />
            <input
                type="password"
                value={newPasscode}
                onChange={(e) => setNewPasscode(e.target.value)}
                placeholder="Enter your new passcode"
                style={{ padding: "10px", fontSize: "16px", marginBottom: "10px" }}
            />
            <button
                style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
                onClick={() => handleReset()}
            >
                Reset Passcode
            </button>
        </div>
    )
}