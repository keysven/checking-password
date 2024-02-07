import React from "react";

const PasswordStrength = ({passwordStrength}) => {
  console.log('Password Strength :', passwordStrength)
  const colors = ['green','red','yellow']
  const colorPerLengh = () => {
    if (passwordStrength === 4) {return colors[0]}
    else if(passwordStrength === 2) {return colors[0]}
    else if(passwordStrength === 1) {return colors[2]}
    else return colors[1] 
  }
  console.log('colors')
  return (
    <div
      className="px-5 py-5"
      style={{
        backgroundColor: colorPerLengh(),
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
