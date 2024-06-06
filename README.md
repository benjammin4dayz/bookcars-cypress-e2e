## Bookcars Cypress e2e Template

This template scaffolds a thoughtful project structure for writing Cypress e2e tests against multiple environments. I made it because I enjoy the challenge of building reasonable and conceptually scalable project architectures. In the process, I learned a lot about Cypress and e2e testing!

It was designed with the [Bookcars App](https://github.com/aelassas/bookcars) in mind but it can surely work elsewhere.

Full disclaimer: I am not an e2e tester

## Folder Structure

```
├───cypress
│   ├───e2e
│   │   ├───0-Core          # Smoke test and spec templates
│   │   └───1-Bookcars      # Spec workspace
│   ├───fixtures
│   └───support
│       ├───bookcars
│       │   ├───env         # Resolved environment variables
│       │   ├───pages       # Page object models
│       │   └───scripts     # Business logic for functions used in test specs
│       ├───commands        # Cypress command registration and logic
│       └───global          # Global Cypress configuration
└───cypress.env.json        # Environment configuration
```

## Getting Started

### Installation

1. Clone the repo

   ```bash
   git clone https://github.com/benjammin4dayz/bookcars-cypress-e2e
   cd bookcars-cypress-e2e
   ```

2. Install dependencies

   ```bash
   npm install
   ```

### Usage

1. Create `cypress.env.json` and configure your testing environment.

2. Start Cypress

   ```bash
   npm start
   ```

3. Write & Run your tests

### Adding New Environment Variables

1. Add the key/value to each environment in [cypress.env.json](./cypress.env.json)
2. Define a variable to represent the value in [cypress/support/bookcars/env/config.js](./cypress/support/bookcars/env/config.js)
3. Consume the variable in your code
```js
// inside the bookcars folder
import * as env from "./env"
// outside the bookcars folder
import { env } from "path/to/support/bookcars"
```