describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('has workout list header containing preview workout', () => {
    cy.visit ('/workouts');
    cy.get('[data-cy=workout-header]').should('contain', 'Preview Workout');
  });
  
  it('starts workout when clicking on begin', () => {
    cy.visit ('/workouts');
    cy.get('[data-cy=Begin]').click();
  });
});