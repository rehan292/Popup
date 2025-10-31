import React, { useState } from "react";
import AlertBox from "./AlertBox";

function Counter() {
  const [count, setCount] = useState(5);
  const [showAlert, setShowAlert] = useState(false);

  const handleIncrement = () => setCount(count + 1);

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    } else if (count === 1) {
      setCount(0);
      setShowAlert(true); // Show alert when counter hits 0
    }
  };

  const handleReset = () => {
    setCount(0);
    setShowAlert(true);
  };

  const closeAlert = () => setShowAlert(false);

  return (
    <div style={{
      background: "white",
      padding: "30px",
      borderRadius: "15px",
      textAlign: "center",
      boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
      width: "300px"
    }}>
      <h2 style={{ marginBottom: "20px" }}>React Counter (Hooks)</h2>
      <h1 style={{ fontSize: "40px", marginBottom: "20px" }}>{count}</h1>

      <div>
        <button
          onClick={handleDecrement}
          style={{
            background: "#ef4444",
            color: "white",
            border: "none",
            padding: "8px 16px",
            marginRight: "8px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Reverse
        </button>

        <button
          onClick={handleReset}
          style={{
            background: "#6b7280",
            color: "white",
            border: "none",
            padding: "8px 16px",
            marginRight: "8px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Reset
        </button>

        <button
          onClick={handleIncrement}
          style={{
            background: "#22c55e",
            color: "white",
            border: "none",
            padding: "8px 16px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Forward
        </button>
      </div>

      {/* Custom alert popup */}
      {showAlert && <AlertBox onClose={closeAlert} />}
    </div>
  );
}

export default Counter;
