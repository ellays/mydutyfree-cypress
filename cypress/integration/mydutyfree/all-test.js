describe ('Home Page test', () => {

    beforeEach(() => {
        cy.visit('https://mydutyfree.net/')
    })

    it ('"Add Your Duty Free Store" button test', () => {
        cy.contains('Add Your Duty Free Store').eq(0).should('have.attr', 'href', '/for-business')
    });

    it ('Languages test', () => {
        cy.get('[data-lang="en"]').should('exist')
        cy.get('[data-lang="ru"]').should('exist')
        cy.get('[data-lang="uk"]').should('exist')
        cy.get('[data-lang="zh-cn"]').should('exist')
        cy.get('[data-lang="az"]').should('exist')
    });

    it ('"Sign in Form" test', () => {
        cy.get('#login-widget-call').click()
        cy.get('#submit-sign-in').click()
        cy.get('.field-signinmodalform-password > .help-block').contains('cannot be blank')
        cy.get('.field-partnershiprequest-email > .help-block').contains('cannot be blank')
    });

    it ('Carousel next-prev test', () => {
        cy.get('.button.round.white.next').click({ multiple: true })
        cy.get('.button.round.white.prev').click({ multiple: true })
    });

    it ('Carousel requests test', () => {
        cy.get('.slider-inner > a').each(page => {
            cy.request(page.prop('href'))
        })
    });

    it ('Our partner block test', () => {
        cy.get('.partners-inner > a').each(page => {
            cy.request(page.prop('href'))
        })
    });

    it ('Become our partner block test', () => {
        cy.get('a.button.main-color.light').eq(1).should('have.attr', 'href', '/for-business')
    });

    it ('"Leave a request to connect the store" Form', () => {
        cy.get('form > .button').click()
        cy.get(':nth-child(2) > .help-block').contains('This field is required')
        cy.get('.form-block > form > :nth-child(3) > .help-block').contains('This field is required')
        cy.get('.field-formpartner-phone_number > .help-block').contains('This field is required')
    });

    it ('Read more test', () => {
        cy.get('.show-more.clicking.medium').click()
        cy.get('.show-more.clicking.medium').should('have.class', 'open')
        cy.get('.show-more.clicking.medium.open').click()
    });


});

describe ('Footer test', () => {

    it ('Footer test', () => {
        cy.get('.middle-footer > .column > a').each(page => {
            cy.request(page.prop('href'))
        })
    });
    
});

describe ('Click all links', () => {
    
    const pages = [
      { slug: 'brands',           title: 'Brands' },
      { slug: 'top',              title: 'Top Sellers' },
      { slug: 'sale',             title: 'Promotions' },
      { slug: 'perfumery',        title: 'Perfumery' },
      { slug: 'cosmetics',        title: 'Cosmetics' },
      { slug: 'spirits-and-wine', title: 'Spirits' },
      { slug: 'gourmet-foods',    title: 'Gourmet foods' },
      { slug: 'accessories',      title: 'Accessories' },
      { slug: 'others',           title: 'Others'}
    ];
  
    pages.forEach(page => {
      it (`Navigation equal - ${page.title}`, () => {
        cy.visit('https://boryspil.mydutyfree.net/');
        cy.get('.categories-navigation').contains(page.title).click()
        cy.location('pathname').should('eq', `/${page.slug}`)
      });
    });
  
  });