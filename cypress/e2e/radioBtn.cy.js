describe('RadioButton Test',()=>{

    it('My Radio',()=>{

        
        cy.visit('https://demoqa.com/radio-button');
        cy.xpath("//*[@id='yesRadio']").click();
        cy.get("input#noRadio").should('be.visible');
        cy.get("input#impressiveRadio").should('be.visible');

    })

})