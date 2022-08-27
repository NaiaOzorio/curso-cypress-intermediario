
Cypress.Commands.add('login', () => {
    cy.visit('users/sign_in') //base url q esta no cypress.json + tela de login(users/sign_in)//
  
    cy.get("[data-qa-selector='login_field']").type (Cypress.env('user_name')) //user q esta no cypress.env.json//
    cy.get("[data-qa-selector='password_field']").type (Cypress.env('user_password'))//senha q esta no cypress.env.json//
    cy.get('input[type="submit"][value="Sign in"]').click()
})

Cypress.Commands.add('logout', () => {
  
  cy.get('.header-user-dropdown-toggle > .caret-down').click()
  cy.contains('Sign out').click()
})

Cypress.Commands.add('createProject', (newProject) => {
  cy.visit('projects/new')

  cy.get('#project_name').type(newProject.Project)
  cy.get('#project_description').type(newProject.Description)
  cy.get('#project_initialize_with_readme').check()
  cy.get('#blank-project-pane > #new_project > .btn-success').click()

})

  
  