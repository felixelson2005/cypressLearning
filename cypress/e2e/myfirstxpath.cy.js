describe('xpathLocators',()=>{

    it('findNUmberofProducts',()=>{

        cy.visit("https://demoblaze.com/");
        cy.xpath("//h4[@class='card-title']/a").should('have.length',9);


    })

    it('chainedXpath',()=>{

        cy.visit("https://demoblaze.com/");
        cy.xpath("//*[@id='contcont']").xpath(".//h4[@class='card-title']/a").should('have.length',9);


    })


})