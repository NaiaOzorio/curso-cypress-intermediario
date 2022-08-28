/// <reference types="Cypress" />

const faker = require('faker')

   const newProject = {
    Project: `project-${faker.random.uuid()}`,
    Description: faker.random.words(5)
   }

describe ('createProject', () => {
  beforeEach(() => cy.login())

  it ('Sucessfully createProject', () => {  

    cy.createProject(newProject)

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}${Cypress.env('user_name')}/${newProject.Project}`)

     
  })
})


