class SortablePage {
    visit() {
        cy.visit('https://demoqa.com/sortable');
    }
    verifyItemsAscending() {
        const expectedOrder = [
            'One', 'Two', 'Three', 'Four', 'Five', 'Six'
        ];

        cy.get('#demo-tabpane-list .list-group-item')
            .should(($items) => {
                const actualOrder = [...$items].map((item) =>
                    item.innerText.trim()
                );

                expect(actualOrder).to.deep.equal(expectedOrder);
            });
    }

    sortItemsAscending() {
        const items = ['Six', 'Five', 'Four', 'Three', 'Two', 'One'];

        items.forEach((item, index) => {
            cy.get('#demo-tabpane-list .list-group-item')
                .contains(item)
                .then(($item) => {
                    cy.get('#demo-tabpane-list .list-group-item')
                        .eq(index)
                        .then(($target) => {
                            if ($item[0] !== $target[0]) {
                                cy.wrap($item).trigger('mousedown', {
                                    button: 0,
                                    force: true
                                });

                                cy.wrap($target)
                                    .trigger('mousemove', { force: true })
                                    .trigger('mouseup', { force: true });
                            }
                        });
                });
        });
    }
}

module.exports = SortablePage;
