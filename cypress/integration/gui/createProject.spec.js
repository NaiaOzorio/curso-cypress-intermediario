/// <reference types="Cypress" />

const faker = require('faker')

describe ('createProject', () => {
  beforeEach(() => cy.login())

  it ('Sucessfully createProject', () => {  
   const newProject = {
    Project: `project-${faker.random.uuid()}`,
    Description: faker.random.words(5)
}
    cy.createProject(newProject)

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}${Cypress.env('user_name')}/${newProject2.Project}`)

     
  })
})


