/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    getByData(dataTestAttribute: string): Chainable<JQuery<HTMLElement>>
  }
}

Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-test=${selector}]`)
})

// Cypress.Commands.add("getAllPosts", () => {
//   cy.request("GET", "http://localhost:3000/api/posts").then((response) => {
//     return cy.wrap(response.body);
//   });
// });

// Cypress.Commands.add("getFirstPost", () => {
//   cy.request("GET", "http://localhost:3000/api/posts").then((response) => {
//     return cy.wrap(response.body).its(0);
//   });
// });

// ***********************************************
// 
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }



// Cypress.Commands.add("loginByApi", (username, password) => {
//   return cy.request("POST", `http://localhost:3000/login`, {
//     username,
//     password,
//   })
// })

// describe("POST /login", () => {
//   it("login as user", () => {
//     cy.loginByApi("jdoe", "password123").then((response) => {
//       expect(response.status).to.eq(200)
//     })
//   })
// })
