import { DataTable, When } from '@badeball/cypress-cucumber-preprocessor';

import { camelCase, getCypressElement, getOptions } from '../utils';

/**
 * When I double-click:
 *
 * ```gherkin
 * When I double-click
 * ```
 *
 * Alternative:
 *
 * - {@link When_I_double_click_position | When I double-click position}
 * - {@link When_I_double_click_on_text | When I double-click on text}
 *
 * @example
 *
 * ```gherkin
 * When I double-click
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/dblclick#Arguments):
 *
 * ```gherkin
 * When I double-click
 *   | altKey | false |
 *   | animationDistanceThreshold | 5 |
 *   | ctrlKey | false |
 *   | log | true |
 *   | force | false |
 *   | metaKey | false |
 *   | multiple | false |
 *   | scrollBehavior | top |
 *   | shiftKey | false |
 *   | timeout | 4000 |
 *   | waitForAnimations | true |
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_text | "When I find element by text"} is required. For example:
 *
 * ```gherkin
 * When I find element by text "Text"
 *   And I double-click
 * ```
 *
 * @see
 *
 * - {@link When_I_click | When I click}
 * - {@link When_I_right_click | When I right-click}
 */
export function When_I_double_click(options?: DataTable) {
  getCypressElement().dblclick(getOptions(options));
}

When('I double-click', When_I_double_click);

/**
 * When I double-click position:
 *
 * ```gherkin
 * When I double-click {string}
 * ```
 *
 * You can double-click on 9 specific positions of an element:
 *
 * ```
 *  -------------------------------------
 * | top-left        top       top-right |
 * |                                     |
 * |                                     |
 * |                                     |
 * | left          center          right |
 * |                                     |
 * |                                     |
 * |                                     |
 * | bottom-left   bottom   bottom-right |
 *  -------------------------------------
 * ```
 *
 * @example
 *
 * ```gherkin
 * When I double-click "top-left"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/dblclick#Arguments):
 *
 * ```gherkin
 * When I double-click "top"
 *   | altKey | false |
 *   | animationDistanceThreshold | 5 |
 *   | ctrlKey | false |
 *   | log | true |
 *   | force | false |
 *   | metaKey | false |
 *   | multiple | false |
 *   | scrollBehavior | top |
 *   | shiftKey | false |
 *   | timeout | 4000 |
 *   | waitForAnimations | true |
 * ```
 *
 * @remarks
 *
 * A preceding step like {@link When_I_find_element_by_text | "When I find element by text"} is required. For example:
 *
 * ```gherkin
 * When I find element by text "Text"
 *   And I double-click "top-right"
 * ```
 *
 * @see
 *
 * - {@link When_I_double_click | When I double-click}
 */
export function When_I_double_click_position(
  position:
    | 'top'
    | 'left'
    | 'center'
    | 'right'
    | 'bottom'
    | 'bottom-left'
    | 'bottom-right'
    | 'top-left'
    | 'top-right',
  options?: DataTable,
) {
  getCypressElement().dblclick(
    camelCase(position) as Cypress.PositionType,
    getOptions(options),
  );
}

When('I double-click {string}', When_I_double_click_position);

/**
 * When I double-click on text:
 *
 * ```gherkin
 * When I double-click on text {string}
 * ```
 *
 * Alternative:
 *
 * - {@link When_I_double_click | When I double-click}
 *
 * @example
 *
 * ```gherkin
 * When I double-click on text "Text"
 * ```
 *
 * With [options](https://docs.cypress.io/api/commands/dblclick#Arguments):
 *
 * ```gherkin
 * When I double-click on text "Text"
 *   | altKey | false |
 *   | animationDistanceThreshold | 5 |
 *   | ctrlKey | false |
 *   | log | true |
 *   | force | false |
 *   | metaKey | false |
 *   | multiple | false |
 *   | scrollBehavior | top |
 *   | shiftKey | false |
 *   | timeout | 4000 |
 *   | waitForAnimations | true |
 * ```
 *
 * @see
 *
 * - {@link When_I_click_on_text | When I click on text}
 * - {@link When_I_right_click_on_text | When I right-click on text}
 */
export function When_I_double_click_on_text(text: string, options?: DataTable) {
  cy.contains(text).dblclick(getOptions(options));
}

When('I double-click on text {string}', When_I_double_click_on_text);
