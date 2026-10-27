class SortablePage {
    visit() {
        cy.visit('https://demoqa.com/sortable');
    }

    sortItemsAscending() {
        const items = [
            'One',
            'Two',
            'Three',
            'Four',
            'Five',
            'Six'
        ];

        // Move cada item para a posição correta
        for (let i = 0; i < items.length; i++) {
            cy.get('#demo-tabpane-list .list-group-item')
                .contains(items[i])
                .then(($item) => {
                    const targetIndex = i;

                    cy.get('#demo-tabpane-list .list-group-item')
                        .eq(targetIndex)
                        .then(($target) => {
                            if ($item[0] !== $target[0]) {
                                cy.wrap($item).trigger('mousedown', {
                                    button: 0
                                });

                                cy.wrap($target).trigger('mousemove')
                                    .trigger('mouseup', {
                                        force: true
                                    });
                            }
                        });
                });
        }
    }

    verifyItemsAscending() {
        const expectedOrder = [
            'One',
            'Two',
            'Three',
            'Four',
            'Five',
            'Six'
        ];

        cy.get('#demo-tabpane-list .list-group-item')
            .should(($items) => {
                const actualOrder = [...$items].map((item) =>
                    item.innerText.trim()
                );

                expect(actualOrder).to.deep.equal(expectedOrder);
            });
    }
}

module.exports = SortablePage;
