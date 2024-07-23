describe('Web Scenarios', () => {

  beforeEach('User is able to open the home page properly', () => {
    cy.log('2. Navigate to url')
    cy.visit('/')
    
    cy.log('3. Verify that home page is visible successfully')
    cy.title().should('eq', 'Automation Exercise')
  })

  context('Manage Cart', () => {
    it('User add a Product into the Cart', () => {
      cy.log('4. Click on \'Products\' button')
      cy.goToProducts().then(() => {
        
        cy.fixture('products').then((product) => {

          cy.log('5. Hover over first product and click \'Add to cart\'')
          cy.selectProduct(product.Blue_Top).then(first_price => {
            
            cy.log('6. Click \'Continue Shopping\' button')
            cy.continueShopping()

            cy.log('7. Hover over second product and click \'Add to cart\'')
            cy.selectProduct(product.Men_Tshirt).then(second_price => {

              cy.log('8. Click \'View Cart\' button')
              cy.viewCart().then(() => {

                cy.log('9. Verify both products are added to Cart')
                cy.log('10. Verify their prices, quantity and total price')  
                cy.validateProductCart(product.Blue_Top, first_price)
                cy.validateProductCart(product.Men_Tshirt, second_price)
              })
            })
          })
      })

    })
  })
  })

  context('Search Products', () => {
    it('User search Products by keywords', () => {
      cy.log('Test Case 9: Search Product')
      cy.log('4. Click on \'Products\' button')
      cy.goToProducts().then(() => {
        
        cy.log('5. Verify user is navigated to ALL PRODUCTS page successfully')
        cy.url().should('contain', '/products')
        
        cy.log('6. Enter product name in search input and click search button')
        cy.search('dress').then(() => {
          
          cy.log('7. Verify \'SEARCHED PRODUCTS\' is visible')
          cy.SearchedProductsMessageShouldAppear()

          cy.log('8. Verify all the products related to search are visible')
          cy.foundProductsShouldAppear()
        }) 
      })

    })
  })

})