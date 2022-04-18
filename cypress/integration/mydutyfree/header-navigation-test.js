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