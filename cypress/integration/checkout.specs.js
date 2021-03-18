/// <reference types="cypress"/>
import { addItemToCar } from './util'

describe("Checkout", () => {
    it('Should checkout two dresses correclty', () => {
        var firstDress = '#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.last-line.first-item-of-tablet-line.first-item-of-mobile-line.last-mobile-line';
        var secondDress = '#homefeatured > li.ajax_block_product.col-xs-12.col-sm-4.col-md-3.last-line.last-item-of-tablet-line.last-item-of-mobile-line'

        cy.visit('http://automationpractice.com/index.php');

        //addItemToCar(firstDress);
        cy.addItemToCar(firstDress);
        cy.addItemToCar(secondDress);

        cy.accessShoppingCheckout();

        cy.get('#product_price_7_34_0 > span.price').then(($total) => {
            const total = $total.text();
            cy.get('#product_price_6_31_0 > span').then(($price2) => {
                const price2 = $price2.text();
                const newTotal = parseFloat(total.substring(1)) + parseFloat(price2.substring(1));
                const total_float = newTotal.toFixed(2);
                cy.get('[id=total_product]').should('have.text', "$" + total_float.toString());
            });
        });
    });
});