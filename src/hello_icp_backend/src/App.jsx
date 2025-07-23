import React, { useState } from "react";
import { hello_icp_backend } from "declarations/hello_icp_backend";

function App() {
  const [name, setName] = useState("");
  const [greeting, setGreeting] = useState("");

  const handleGreet = async () => {
    const response = await hello_icp_backend.greet(name);
    setGreeting(response);
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1>Hello ICP Frontend</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: "0.5rem", marginRight: "1rem" }}
      />
      <button onClick={handleGreet} style={{ padding: "0.5rem" }}>
        Greet Me!
      </button>
      <p style={{ marginTop: "1rem", fontSize: "1.2rem" }}>{greeting}</p>
    </div>
  );
}

export default App;
