// Import commands.js using ES2015 syntax:
import './commands';

declare global {
  namespace Cypress {
    interface Chainable {
      // add custom commands types here
    }
  }
}

// Alternatively you can use CommonJS syntax:
// require('./commands')
