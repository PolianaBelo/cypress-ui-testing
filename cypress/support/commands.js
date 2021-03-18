Cypress.Commands.add('addItemToCar', (shoppingItem) => {
    cy.get(shoppingItem).click();
    cy.get('[id=add_to_cart]').click();
    //cy.get('[id=our_price_display]');    
    cy.contains('Continue shopping').click();
    cy.get('[id=header_logo]').click();
});

Cypress.Commands.add('accessShoppingCheckout', () => {
    cy.get('#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a > b').trigger('mouseover');
    cy.get('[id=button_order_cart]').click();
});