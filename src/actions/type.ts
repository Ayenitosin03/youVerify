import { DataTable, When } from "@badeball/cypress-cucumber-preprocessor";
import { faker } from "@faker-js/faker";
import { getCypressElement, getOptions } from "../utils";
let emailAddress: string | undefined;
/**
 * When I type:
 *
 * ```gherkin
 * When I type {string}
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I type "Hello, world!"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/type#Arguments):
 *
 * ```gherkin
 * When I type "Hello, world!"
 *   | animationDistanceThreshold | 5 |
 *   | delay | 10 |
 *   | force | false |
 *   | log | true |
 *   | parseSpecialCharSequences | true |
 *   | release | true |
 *   | scrollBehavior | top |
 *   | timeout | 4000 |
 *   | waitForAnimations | true |
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_label_text | "When I find element by label text"} is required. For example:
 *
 * ```gherkin
 * When I find element by label text "Email"
 *   And I type "user@example.com"
 * ```
 *
 * Text may include [special character sequences](https://docs.cypress.io/api/commands/type#Syntax). For example:
 *
 * ```gherkin
 * # types the Enter key
 * When I type "{enter}"
 * ```
 */
// Add faker mapping for each field
const fakerMapping: { [key: string]: () => string } = {
  "First Name": () => faker.person.firstName(),
  "Last Name": () => faker.person.lastName(),
  Email: () => faker.internet.email(),
  "Phone Number": () => faker.string.numeric(11),
  "Company Name": () => faker.company.name(),
  "Disposable Email": () => emailAddress || faker.internet.email(), // Default to a random email if emailAddress is undefined
  "Business Name":() => faker.company.name(),
  "Password": ()=> faker.string.alpha(7) + faker.string.symbol(10) +faker.string.numeric(5)
  // Add more field mappings as necessary
};

export function When_I_type(text: string, options?: DataTable) {
  getCypressElement().type(text, getOptions(options));
}

function getFakerValue(fieldLabel: string): string {
  return fakerMapping[fieldLabel] ? fakerMapping[fieldLabel]() : fieldLabel;
}

export function When_I_type_random(fieldLabel: string, options?: DataTable) {
  const text = getFakerValue(fieldLabel); // Use faker to generate value if applicable
  const optionSettings = getOptions(options); // Retrieve options from DataTable

  getCypressElement().type(text, optionSettings); // Use options if available
}


When("I type {string}", When_I_type);
When("I type random {string}", When_I_type_random);
