import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // openWithPreferences(on);
    },
  },
});

/** @param {Cypress.PluginEvents} on */
function openWithPreferences(on) {
  on("before:browser:launch", (browser, launchOptions) => {
    // `args` is an array of all the arguments that will
    // be passed to browsers when it launches
    console.log(launchOptions.args); // print all current args

    if (browser.family === "chromium" && browser.name !== "electron") {
      // auto open devtools
      launchOptions.args.push("--start-fullscreen");
      launchOptions.args.push("--auto-open-devtools-for-tabs");
    }

    if (browser.family === "firefox") {
      // auto open devtools
      launchOptions.args.push("-devtools");
      launchOptions.args.push("-fullscren");
    }

    if (browser.name === "electron") {
      // auto open devtools
      launchOptions.preferences.devTools = true;
      launchOptions.preferences.fullscreen = true;
    }
    // whatever you return here becomes the launchOptions
    return launchOptions;
  });
}
