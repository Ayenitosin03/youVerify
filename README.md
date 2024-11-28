

# Youverify Cypress Cucumber TS Project

![Cypress](https://img.shields.io/badge/Cypress-E2E%20Testing-brightgreen?logo=cypress&style=flat-square)
![Mochawesome](https://img.shields.io/badge/Mochawesome-Reporting-blueviolet?style=flat-square)

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
   git clone <repository-url>
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

## Reporting
The project integrates `cypress-mochawesome-reporter` for generating reports. Reports will be available in the `cypress/reports` directory after a test run. To view the report:
```bash
npx mochawesome-merge cypress/reports/*.json | npx mochawesome-report-generator
```

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

## Author
**Ayeni Oluwatosin**  
Feel free to connect with me for collaboration or questions.

---

## License
This project is licensed under the ISC License.
```

### Explanation of Badges
- **Cypress Badge:** Highlights the use of Cypress for end-to-end testing.
- **Mochawesome Badge:** Highlights the integration of `cypress-mochawesome-reporter` for reporting.