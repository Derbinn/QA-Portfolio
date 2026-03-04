# Automation Demo


## Demo Overview

This folder contains a series of automated tests designed to validate key functionalities of a sample mobile application, webview app. The tests focus on various user actions, such as sign in, log in, form.

## Project Structure

- **Tests:**  
  The project includes six 3 tests that automate the following scenarios:
  1. **Login, sign in**  
     Verifies that a new user can successfully login and sign in
  2. **Fill form**  
     Ensures that registered users can fill required forms
  3. **See documentation**  
     User can click webview page and see documentation
  
- **Scripts:**  
  All scripts are located in the `tests` folder. Each script is structured to ensure readability and maintainability

## How to Use

1. **Setup:**
   - Ensure you have Node.js and npm installed on your machine.
   - Install the required dependencies by running:
     ```bash
     npm install playwright
     ```

2. **Running Tests:**
   - To execute all tests, use the following command:
     ```bash
     npx playwright test
     ```
   - To run a specific test, you can specify the test file:
     ```bash
     npx playwright test tests/<test-file-name>.spec.js
     ```

3. **Reviewing Test Results:**
   - Playwright generates detailed reports after each test run. You can view the test results by opening the HTML report:
     ```bash
     npx playwright show-report
     ```

## Conclusion

This automation project demonstrates proficiency in using Playwright for UI
