describe ('MDF for business test', () => {
    
    beforeEach(() => {
        cy.visit('https://mydutyfree.net/for-business');
    })

    it ('"Get started with MyDutyFree" Form', () => {
        cy.visit({url: 'https://mydutyfree.net/for-business', failOnStatusCode: false})
        cy.get('.btn').click()
        cy.get('form').submit()
        cy.wait(500)
        cy.get('.field-partnershiprequest-name > .help-block').contains('cannot be blank')
        cy.get('.field-partnershiprequest-email > .help-block').contains('cannot be blank')
        cy.get('.field-partnershiprequest-phone > .help-block').contains('cannot be blank')
    });
});