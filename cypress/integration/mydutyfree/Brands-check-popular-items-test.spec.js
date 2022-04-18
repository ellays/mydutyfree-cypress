describe ('Brands check', () => {

    it ('"Brands check', () => {

        cy.visit('https://zhuliany.mydutyfree.net/brands')

        cy.get('[data-value]').eq(0).click() .then((body) => {
            if (cy.get('.products-list a').should('have.class', 'product-item')) {
               cy.go('back')
            }
       });
    });
});



    // cy.get('ul>li').each(() => {...})
    // const eqProductItem;
    // for (eqProductItem = 0; eqProductItem < 10; eqProductItem++) 


    // cy.get('[data-value]').each($el => {
    //     return cy.wrap($el).click().then(() => {
    //       cy
    //         .get('.product-item')
    //         .should('be.visible');
    
    //       cy.back();
    //     });
    //   })
  