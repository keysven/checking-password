import React, { useState, useEffect } from "react";
import PasswordStrength from "./PasswordStrength";

const PasswordChecker = () => {
  const [ showPassword , setShowPassword ] = useState(false);
  const [ password, setPassword ] = useState('');
  const [ passwordStrength, setPasswordStrength ] = useState(0);
  const setAndCheckPassword = (password) => {
    setPassword(password);
    const hasUppercasae = /[A-Z]/.test(password);
    const hasLowercasae = /[a-z]/.test(password);
    const hasNumber = /\d/.test(password);
    const hasSpecialChar = /[$#&!@_]/.test(password);
    const isLengthValid = password.length >= 8;

    const conditionsMet = [hasUppercasae, hasLowercasae, hasNumber, hasSpecialChar, isLengthValid];
    console.log(hasUppercasae, hasNumber, hasLowercasae, hasSpecialChar, isLengthValid)
    const metCount = conditionsMet.filter((a) => a=== true).length;
    console.log('metCount', metCount)
    
    if (password.length) {
      if (metCount > 4) { 
        setPasswordStrength(2);
      } else if ( metCount > 2 ) {
        setPasswordStrength(1);
      } else {
        setPasswordStrength(0);
      }
    }
    console.log('PasswordStrength', passwordStrength)
  }

  useEffect(() => {
    setPasswordStrength(4)
  }, [])
  return (
    <div className="layout-column align-items-center justify-content-center py-40 mt-100">
      <div className="card w-50 px-75 py-30">
        <form onSubmit={(e) => e.preventDefault()}>
          <h2>Enter Your Password</h2>
          <div className="layout-column mb-10">
            <input
              type={showPassword ? "text" : "password"}
              id="name"
              placeholder="Enter Password"
              data-testid="passwordInput"
              value={password}
              onChange={(e) => setAndCheckPassword(e.target.value) }
            />
          </div>
        </form>
        <div className="py-10" data-testid="buttonDiv">
        <button onClick={() => setShowPassword((previousState) => !previousState)}>
          {showPassword ? "Hide Password" : "Show Password"}
        </button>
          <button onClick={() => {setPassword("")}}>Clear Password</button>
        </div>
      </div>
      <div className="w-50 py-20">
        <PasswordStrength passwordStrength = {passwordStrength} />
      </div>
    </div>
  );
};

export default PasswordChecker;
