import { When } from '@badeball/cypress-cucumber-preprocessor';

/**
 * When I clear session storage:
 *
 * ```gherkin
 * When I clear session storage
 * ```
 *
 * Clear [`sessionStorage`](https://developer.mozilla.org/docs/Web/API/Window/sessionStorage) data for all origins with which the test has interacted.
 *
 * @example
 *
 * Clear all sessionStorage:
 *
 * ```gherkin
 * When I clear session storage
 * ```
 *
 * @remarks
 *
 *
 * Cypress automatically clears all session storage _before_ each test to prevent state from being shared across tests when [test isolation](https://docs.cypress.io/guides/core-concepts/writing-and-organizing-tests#Test-Isolation) is enabled. You shouldn't need to use this command unless you're using it to clear sessionStorage inside a single test or test isolation is disabled.
 */
export function When_I_clear_session_storage() {
  cy.clearAllSessionStorage();
}
export function When_I_login(email:string, password:string) {
  cy.login(email,password)
}

When('I clear session storage', When_I_clear_session_storage);
When('I login as a transporter with {string} with password {string}', When_I_login);
When('I login as a customer with {string} with password {string}', When_I_login);