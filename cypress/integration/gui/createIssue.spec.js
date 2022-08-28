/// <reference types="Cypress" />

const faker = require('faker')

const newProject = {
    Project: `project-${faker.random.uuid()}`,
    Description: faker.random.words(5)
   }

describe ('createIssue', () => {
    beforeEach(() => cy.login())
 
  it ('Sucessfully createIssue', () => {  
    cy.createProject(newProject)

  cy.visit(`${Cypress.config('baseUrl')}${Cypress.env('user_name')}/${newProject.Project}`)

  })
})