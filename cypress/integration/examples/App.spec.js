describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('has workout list header containing preview workout', () => {
    cy.visit ('/workouts');
    cy.get('[data-cy=workout-header]').should('contain', 'Preview Workout');
  });
});