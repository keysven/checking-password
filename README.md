# React: Password Checker

## Environment

- React Version: 16.13.1
- Node Version: 14(LTS)
- Default Port: 8000

## Application Demo:

![](https://hrcdn.net/s3_pub/istreet-assets/DlpdjZJVCX7RiXUM7bI2Mg/ezgif.com-gif-maker.gif)

## Functionality Requirements

The application has 2 components:

- The PasswordChecker component which handles the form fields of the application.
- The PasswordStrength component which displays the password strength.

A strong password is expected to have the all the following characteristics:

- An uppercase letter
- A lowercase letter
- A number
- A special character '$#&\_'
- Length greater than or equal to 8

The PasswordChecker component has the following functionalities:

- The input field takes a text input to calculate the password strength.
- The input field should initially be empty and the input text should initially be hidden.
- The 'Show Password' on click should have the following functionalities:

  - The button text should change to 'Hide Password' and the input field should display the text value of the password entered.
  - Upon clicking the button again, the button text should again change back to 'Show Password' and the input text should again be hidden.

- The 'Clear Password' on click should clear the input field.

The PasswordStrength component has the following functionalities:

- The strength of the password should be calculated and the corresponding text and background colour should be applied as per the following rules:

  - | Characteristics Matched |       Text        | Background Colour |
    | :---------------------: | :---------------: | :---------------: |
    |  Less than equal to 2   |   Weak Password   |       green       |
    |  Less than equal to 4   | Moderate Password |      orange       |
    |       Equal to 5        |  Strong Password  |       green       |

## Project Specifications

**Read Only Files**

- src/App.test.js
- src/App.js

**Commands**

- run:

```bash
npm start
```

- install:

```bash
npm install
```

- test:

```bash
npm test
```
