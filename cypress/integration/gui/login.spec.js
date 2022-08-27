/// <reference types="Cypress" /> 

describe ('login', function() {
  it ('Sucessfully login', function(){

    cy.login() //chama a funcao login q esta no gi_commands

    cy.get('.qa-user-avatar').should('exist') //confirma que esta na tela de login pq tem o avatar

  })
})
