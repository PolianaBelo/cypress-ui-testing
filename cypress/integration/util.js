export const addItemToCar = (dreess_identifier) => {
    cy.get(dreess_identifier).click();
    cy.get('[id=add_to_cart]').click();
    cy.get('[id=our_price_display]').then(($id) => {
        Cypress.env('teste', $id);
    });
    cy.log(Cypress.env('teste'));
    cy.contains('Continue shopping').click();
    cy.get('[id=header_logo]').click();
  }