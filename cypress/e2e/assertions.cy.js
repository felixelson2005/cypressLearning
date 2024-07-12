describe('Test Asseryions',()=>{

    it('Implicit Assertions',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        // cy.url().should('include','orangehrmlive');
        // cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // cy.url().should('contain','orangehrmlive');
        cy.url().should('include','orangehrmlive').and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login').and('not.contain','grmlhjg');
        cy.title().should('include','OrangeHRM');
        cy.get('.orangehrm-login-branding > img').should('be.visible').and('exist');
        cy.xpath('//a').should('have.length',5);
        cy.get("input[name='username']").type('Admin');
        cy.get("input[name='username']").should('have.value','Admin');


    })

    it('Explicit Assertions',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.get("input[name='username']").type('Admin');
        cy.get("input[name='password']").type('admin123');
        cy.xpath("//*[contains(@class,'orangehrm-login-button')]").click();

        let drpName='xyz';

        cy.get(".oxd-userdropdown-name").then((x)=>{

            //BDD style
            let actName=x.text();
            expect(drpName).to.equal(actName)
            expect(drpName).to.not.equal(actName);

            //TDD style
            assert.equal(drpName,actName);
            assert.notEqual(drpName,actName);
        })




     


    })



})