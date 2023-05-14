describe ('Zigzag Page', () => {
  beforeEach(() => {
    cy.visit('https://www.zigzag.am/')
  })

  describe('Search', () => {
    it('should show the search results correctly', () => {
      cy.get('#search').type('Dyson')
      cy.get('#search_mini_form').find('[aria-label="Search"]').click();
  
      cy.get(".section_title").contains("Որոնման արդյունքները 'Dyson' -ի համար")
    })
  })
  
  describe('Log in', () => {
    beforeEach(() => {
      cy.get('.sign_block').click()
    })

    it('should return an email error when typed incorrectly', () => {  
      cy.get('#email').type("brown");
      cy.get('#pass').type("SuperSecretPassword");
      cy.get("#send2").click()

      cy.get("#email-error").contains("Խնդրում ենք մուտքագրել վավեր էլ-փոստի հասցե")
    })
  
    it('shoud sign in when credentials are correct', () => {  
      cy.get('#email').type("yana_azaryan@edu.aua.am");
      cy.get('#pass').type("SuperSecretPassword!");
      cy.get("#send2").click()
  
      cy.wait(5000);
  
      cy.url().should('include', 'customer/account/')
    })
  })
})
