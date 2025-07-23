import React, { useEffect, useState } from "react";
import { hello_icp_backend } from "../../../declarations/hello_icp_backend";

function App() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    async function fetchGreeting() {
      const message = await hello_icp_backend.greet("ICP");
      setGreeting(message);
    }
    fetchGreeting();
  }, []);

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial" }}>
      <h1>{greeting || "Loading..."}</h1>
      <p>Frontend connected to ICP backend ✅</p>
    </div>
  );
}

export default App;

