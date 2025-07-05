import React from "react";

const App = () => {
  const containerStyle = {
    width: "100%",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5", // Light neutral background
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    margin: 0,
    padding: 0,
  };

  const paragraphStyle = {
    fontSize: "1.8rem",
    color: "#333", // Dark gray text for contrast
    textAlign: "center",
    maxWidth: "600px",
    lineHeight: "1.6",
    padding: "20px",
    backgroundColor: "#ffffffee", // Slightly opaque white
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.05)", // Soft shadow
    fontWeight: 400,
    transition: "transform 0.3s ease-in-out",
  };

  return (
    <div style={containerStyle}>
      <p style={paragraphStyle}>
        I am learning React. My life is getting better.
      </p>
    </div>
  );
};

export default App;