// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

Cypress.Commands.add('goToProducts', () => {
    cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
})

Cypress.Commands.add('search', criteria => {
    cy.get('#search_product').type(criteria).then(() => {
        cy.get('#submit_search').click()
    })
})

Cypress.Commands.add('selectProduct', product => {
    cy.get(`:nth-child(${product.id}) > .product-image-wrapper > .single-products > .productinfo > .btn`).click()
    cy.get(':nth-child(3) > .product-image-wrapper > .single-products > .productinfo > h2').then(price => {
        return price.text()
    })
})

Cypress.Commands.add('continueShopping', () => {
    cy.get('.btn-success').click()
})

Cypress.Commands.add('viewCart', () => {
    cy.get('u').click()
})

Cypress.Commands.add('validateProductCart', (productName, productPrice) => {
    cy.get('tbody').each((name, price, qty) => {
        if(productName==name) {
            expect(price).to.equal(productPrice)
            expect(qty).to.equal("1")
        }
    })
})

// Assertions
Cypress.Commands.add('SearchedProductsMessageShouldAppear', () => {
    cy.get('.title').should('exist')
})

Cypress.Commands.add('foundProductsShouldAppear', () => {
    cy.get('.product-image-wrapper').should('exist')
})