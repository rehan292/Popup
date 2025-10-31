import React from "react";
import Counter from "./components/Counter";

function App() {
  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#f3f4f6"
    }}>
      <Counter />
    </div>
  );
}

export default App;
