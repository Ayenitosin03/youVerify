

# Youverify Cypress Cucumber TS Project
<div align="center">
  <a href="https://youverify.co/">
    <img src="https://youverify.co/_nuxt/img/youverify.3f97dd2.svg" alt="Youverify Logo" width="100" />
  </a>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Cypress-E2E%20Testing-brightgreen?logo=cypress&style=flat-square" alt="Cypress Badge">
  <img src="https://img.shields.io/badge/Mochawesome-Reporting-blueviolet?style=flat-square" alt="Mochawesome Badge">
</p>

This project leverages **Cypress**, **Cucumber**, and **TypeScript** to automate testing for [saucedemo.com](https://saucedemo.com). The project follows a BDD (Behavior-Driven Development) approach, integrating **Cucumber** for Gherkin-based test specifications.

---

## Project Setup

### Prerequisites
Ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/Ayenitosin03/youVerify.git
   cd youverify-assessment
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up your environment variables:
   Create a `.env` file in the root directory and configure it as per the `.env.example`:
   ```env
   NODE_ENV=development
   BASE_URL_STAGE='https://saucedemo.com/'
   BASE_URL='https://saucedemo.com'
   CYPRESS_TAGS='@regression'
   ```

---

## Usage

### Scripts
The following scripts are available in `package.json`:

- **Run Cypress with UI:**
  ```bash
  npm run cy:open:test:ui
  ```
  This command opens the Cypress Test Runner in Chrome for an interactive testing experience.

- **Run Cypress tests:**
  ```bash
  npm run cypress:run
  ```
  Executes all tests in the terminal.

### Tagging and Filtering
Use the `CYPRESS_TAGS` variable in the `.env` file to specify which tagged scenarios should run. For example:
```env
CYPRESS_TAGS='@regression'
```

---

## Project Structure

```plaintext
├── cypress/
│   ├── e2e/
│   │   ├── features/            # Contains .feature files for test scenarios
│   │   └── step_definitions/    # Step definitions written in TypeScript
│   ├── fixtures/                # Test data (if any)
│   ├── support/                 # Custom commands and utilities
├── .env                         # Environment variables
├── src/                         # Framework 
├── .gitignore                   # Files to ignore in version control
├── package.json                 # Project metadata and dependencies
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project documentation
```

---

## Key Features
- **BDD with Cucumber:** Define test cases using Gherkin syntax (`.feature` files).
- **TypeScript Support:** Provides type safety for tests and step definitions.
- **Tag Filtering:** Run specific tests using tags (e.g., `@regression` or `@smoke`).
- **Integration with GitHub Actions:** (Planned for CI/CD pipeline support.)
- **Reports:** Uses `cypress-mochawesome-reporter` for detailed and visual test reports.

---

## Dependencies

### Core Libraries
- [Cypress](https://www.cypress.io/): End-to-end testing framework.
- [@badeball/cypress-cucumber-preprocessor](https://github.com/badeball/cypress-cucumber-preprocessor): Adds Cucumber support to Cypress.
- [@faker-js/faker](https://github.com/faker-js/faker): Generates fake test data.

### Development Tools
- [dotenv-cli](https://github.com/entropitor/dotenv-cli): Loads environment variables.
- [TypeScript](https://www.typescriptlang.org/): Superset of JavaScript for static typing.

---

## Running Tests on Different Environments
Modify the `BASE_URL` in the `.env` file to switch between environments:
- **Staging:** Use `BASE_URL_STAGE`.
- **Production:** Use `BASE_URL`.


---

## Contributing
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature/new-feature
   ```
3. Commit changes:
   ```bash
   git commit -m "Add new feature"
   ```
4. Push to the branch and create a pull request.

---
# CI/CD 


```yml
name: Cypress Tests

on:
  push:
    branches:
      - main
  pull_request:
    branches:
      - main

jobs:
  cypress:
    name: Run Cypress Tests
    runs-on: ubuntu-latest

    steps:
      # Step 1: Checkout the code
      - name: Checkout Code
        uses: actions/checkout@v3

      # Step 2: Set up Node.js
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 16

      # Step 3: Install dependencies
      - name: Install Dependencies
        run: npm install

      # Step 4: Add .env support
      - name: Load Environment Variables
        run: cp .env.example .env

      # Step 5: Run Cypress tests
      - name: Run Cypress Tests
        run: npm run cypress:run
        env:
          NODE_ENV: development
          BASE_URL: ${{ secrets.BASE_URL }}
          CYPRESS_TAGS: ${{ secrets.CYPRESS_TAGS }}

      # Step 6: Generate and upload Mochawesome report
      
      - name: Upload Test Results
        uses: actions/upload-artifact@v3
        with:
          name: test-results
          path: cypress/reports

```
## Key Points
**Triggering Events:** The workflow runs on pushes and pull requests to the main branch.

**Environment Variables:** Secrets such as BASE_URL and CYPRESS_TAGS are securely injected from GitHub Secrets.

**Report Generation:** Generates a Mochawesome report and uploads it as an artifact for later viewing.

**Node.js Setup:** Ensures the correct version of Node.js is used.

**Dependency Installation:** Installs all required dependencies before running tests.

**Setting Up Secrets in GitHub**
1. Go to your repository on GitHub.
2. Navigate to Settings > Secrets and variables > Actions.
3. Add the following secrets:

 `BASE_URL` The production or staging base URL.
`CYPRESS_TAGS` Tags for filtering test runs (e.g., @regression, smoke, sanity, e2e).

## Author
**Ayeni Oluwatosin**  
Feel free to connect with me for collaboration or questions.

---

## License
This project is licensed under the ISC License.
```

