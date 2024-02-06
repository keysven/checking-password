import React from "react";

const PasswordStrength = () => {
  return (
    <div
      className="px-5 py-5"
      style={{
        backgroundColor: "green",
      }}
      data-testid="passwordStrengthDiv"
    >
      <h4
        style={{
          color: "white",
          textAlign: "center",
        }}
      >
        Strong Password
      </h4>
    </div>
  );
};

export default PasswordStrength;
