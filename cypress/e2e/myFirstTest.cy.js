
describe('My First suite',()=>{


    it('Xactly Test1',()=>{


        cy.visit("https://ociqaintx.talarianweb.com/iam/login");
        cy.title().should('eq','Xactly Login');
        cy.get('#okta-signin-username').type('admin@cole.com');
        cy.get('#okta-signin-submit').click();
        cy.get('#okta-signin-password').type('demoUser15!');
        cy.get('#okta-signin-submit').click();
        
        
  
    })

})