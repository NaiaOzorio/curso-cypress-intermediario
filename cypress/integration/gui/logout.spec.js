/// <reference types="Cypress" />

describe ('logout', function() {
  it ('Sucessfully logout', function(){

    cy.login()
    cy.logout()

    cy.get('input[type="submit"][value="Sign in"]').should('exist') 

  })
})