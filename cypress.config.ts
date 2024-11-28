import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { createEsbuildPlugin } from "@badeball/cypress-cucumber-preprocessor/esbuild";

import * as dotenv from "dotenv";
import * as path from "path";
// Determine the environment and load the appropriate .env file
const envFile = process.env.NODE_ENV ? `.env.${process.env.NODE_ENV}` : ".env";
dotenv.config({ path: path.resolve(__dirname, envFile) });
const baseUrl = process.env.BASE_URL;
async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);
  require('cypress-mochawesome-reporter/plugin')(on);


  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin(config)],
    }),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}
export default defineConfig({
  fixturesFolder: "cypress/fixtures",
  pageLoadTimeout: 100000,
  defaultCommandTimeout: 20000,
  chromeWebSecurity: false,
  viewportWidth: 1280,
  viewportHeight: 720,
  video: true,
  videosFolder: "cypress/mochareports/videos",
  screenshotsFolder: "cypress/mochareports/screenshots",
  env: {
    tags: process.env.CYPRESS_TAGS || "@sanity",
  },
  reporter: 'cypress-mochawesome-reporter',

    reporterOptions: {
    charts: true,
    reportPageTitle: 'YouVerify-QA',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    saveJson: true
  },
  
  retries: {
    runMode: 3,
    openMode: 1,
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents,
    baseUrl,
    specPattern: "**/*.cy.feature",
  },
});
