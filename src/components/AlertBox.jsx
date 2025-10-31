import React from "react";

function AlertBox({ onClose }) {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.4)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 1000
    }}>
      <div style={{
        background: "white",
        padding: "20px 25px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
        textAlign: "center",
        position: "relative",
        width: "280px"
      }}>
        {/* Close (×) icon */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "5px",
            right: "10px",
            background: "none",
            border: "none",
            fontSize: "18px",
            cursor: "pointer",
            color: "#555"
          }}
        >
          ×
        </button>

        <h3 style={{ color: "#ef4444", marginBottom: "10px" }}>
          Limit Reached ⚠️
        </h3>
        <p style={{ color: "#555", marginBottom: "20px" }}>
          Counter has reached zero.
        </p>
        <button
          onClick={onClose}
          style={{
            background: "#3b82f6",
            color: "white",
            border: "none",
            padding: "8px 20px",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          OK
        </button>
      </div>
    </div>
  );
}

export default AlertBox;
