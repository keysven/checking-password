import React from "react";
import PasswordStrength from "./PasswordStrength";

const PasswordChecker = () => {
  return (
    <div className="layout-column align-items-center justify-content-center py-40 mt-100">
      <div className="card w-50 px-75 py-30">
        <form onSubmit={(e) => e.preventDefault()}>
          <h2>Enter Your Password</h2>
          <div className="layout-column mb-10">
            <input
              type={"password"}
              id="name"
              placeholder="Enter Password"
              data-testid="passwordInput"
              value={"password"}
            />
          </div>
        </form>
        <div className="py-10" data-testid="buttonDiv">
          <button>Show Password</button>
          <button>Clear Password</button>
        </div>
      </div>
      <div className="w-50 py-20">
        <PasswordStrength />
      </div>
    </div>
  );
};

export default PasswordChecker;
