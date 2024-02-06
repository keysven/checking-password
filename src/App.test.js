import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";
import passwords from "./passwords.json";

const TEST_IDS = {
  passwordStrengthDiv: "passwordStrengthDiv",
  passwordInput: "passwordInput",
  buttonDiv: "buttonDiv",
};

const geteratePassword = (passwordLength) => {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password = "";
  for (let i = 0; i <= passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }
  return password;
};

describe("React Password Strength Checker", () => {
  let getByTestId;
  let passwordInput;
  let passwordStrengthDiv;
  let buttonDiv;

  beforeEach(() => {
    const app = render(<App />);
    getByTestId = app.getByTestId;
    passwordInput = getByTestId(TEST_IDS.passwordInput);
    passwordStrengthDiv = getByTestId(TEST_IDS.passwordStrengthDiv);
    buttonDiv = getByTestId(TEST_IDS.buttonDiv);
  });

  afterEach(() => {
    cleanup();
  });

  it("Input field should be empty initially", () => {
    expect(passwordInput).toHaveDisplayValue("");
  });

  it("Password checker should initally have value of Weak Password", () => {
    expect(passwordStrengthDiv).toHaveStyle("background: red");
    expect(passwordStrengthDiv.children[0]).toHaveTextContent("Weak Password");
  });
  it("Input field should be working properly", () => {
    const randomPassword = geteratePassword(10);
    fireEvent.change(passwordInput, {
      target: { value: randomPassword },
    });
    expect(passwordInput).toHaveDisplayValue(randomPassword);
  });
  it("Show Password button should have current functionality", () => {
    fireEvent.click(buttonDiv.children[0]);
    expect(passwordInput).toHaveAttribute("type", "text");
    expect(buttonDiv.children[0]).toHaveTextContent("Hide Password");
    fireEvent.click(buttonDiv.children[0]);
    expect(passwordInput).toHaveAttribute("type", "password");
    expect(buttonDiv.children[0]).toHaveTextContent("Show Password");
  });

  it("Clear Password button should have current functionality", () => {
    const randomPassword = geteratePassword(10);
    fireEvent.change(passwordInput, {
      target: { value: randomPassword },
    });
    fireEvent.click(buttonDiv.children[1]);
    expect(passwordInput).toHaveDisplayValue("");
  });

  it("Password Checker should have correct funtionality", () => {
    for (let i = 0; i < passwords.data.length; i++) {
      fireEvent.change(passwordInput, {
        target: { value: passwords.data[i][0] },
      });
      expect(passwordStrengthDiv.children[0]).toHaveTextContent(
        `${passwords.data[i][1]} Password`
      );
      expect(passwordStrengthDiv).toHaveStyle(
        `background: ${passwords.data[i][2]}`
      );
    }
  });
});
