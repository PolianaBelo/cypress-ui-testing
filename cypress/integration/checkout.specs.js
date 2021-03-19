/// <reference types="cypress" />

describe("Checkout", () => {
    const firstDressContainer = '#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.last-line.first-item-of-tablet-line.first-item-of-mobile-line.last-mobile-line';
    const secondDressContainer = '#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.last-line.last-item-of-tablet-line.last-item-of-mobile-line'
    const firstItemPriceLabel = '#product_price_7_34_0 > span.price';
    const secondeItemPriceLabel = '#product_price_6_31_0 > span';

    beforeEach(() => {
        cy.visit('http://automationpractice.com/index.php');
    });

    it('Should checkout two items and display the correct sum of prices', () => {
        cy.addItemToCar(firstDressContainer);
        cy.addItemToCar(secondDressContainer);

        cy.accessShoppingCheckout();

        cy.get(firstItemPriceLabel).then(($price1) => {
            const firstItemPriceValue = $price1.text();
            cy.get(secondeItemPriceLabel).then(($price2) => {
                const secondItemPriceValue = $price2.text();
                const sumPrices = parseFloat(firstItemPriceValue.substring(1)) + parseFloat(secondItemPriceValue.substring(1));
                const sumPricesFloat = sumPrices.toFixed(2);
                cy.get('[id=total_product]').should('have.text', "$" + sumPricesFloat.toString());
            });
        });
    });
});