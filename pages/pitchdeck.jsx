import React, { useState } from "react";
import LayoutOne from "@/layouts/LayoutOne";

export default function PitchDeck() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() !== "") {
      setSubmitted(true); // Show download and view links
    } else {
      alert("Please enter a valid email!");
    }
  };

  return (
    <LayoutOne>
      <div
        className="container text-center"
        style={{ marginTop: "50px", paddingTop: "10%", paddingBottom: "10%" }}
      >
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="mx-auto p-4"
            style={{
              maxWidth: "500px",
              backgroundColor: "#040e18",
              borderRadius: "10px",
              color: "#fff",
            }}
          >
            <h3 className="mb-4">Access the Pitch Deck</h3>
            <div className="form-group mb-3">
              <label htmlFor="email" className="form-label">
                Enter your email:
              </label>
              <input
                type="email"
                id="email"
                className="form-control"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <button
              type="submit"
              className="btn"
              style={{
                backgroundColor: "#00c4f4",
                color: "#040e18",
                fontWeight: "bold",
                border: "none",
              }}
            >
              Submit
            </button>
          </form>
        ) : (
          <div>
            <h4 className="mb-4">Thank you! Access the Pitch Deck below:</h4>
            <a
              href="/signal_vase_pitch.pptx"
              download="Signal Vase Pitch Deck"
              className="btn me-3"
              style={{
                backgroundColor: "#00c4f4",
                color: "#040e18",
                fontWeight: "bold",
              }}
            >
              Download Pitch Deck
            </a>
            <a
              href="https://jumpshare.com/v/7qXUOnisAukVvGTDEJgZ?b=4doHefZJ9HyXFAvwrkvq"
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
              style={{
                backgroundColor: "#00c4f4",
                color: "#040e18",
                fontWeight: "bold",
              }}
            >
              View Pitch Deck
            </a>
          </div>
        )}
      </div>
    </LayoutOne>
  );
}
