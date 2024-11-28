import 'cypress-mochawesome-reporter/cucumberSupport';
import "../../../src";
import { Given } from '@badeball/cypress-cucumber-preprocessor';


Given('I login with {string} and {string}', (email:string,password:string) => {
        cy.login(email,password)
});