describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.rocketseat.com.br')

    cy.contains('ASSINAR AGORA').click()
  })
})
