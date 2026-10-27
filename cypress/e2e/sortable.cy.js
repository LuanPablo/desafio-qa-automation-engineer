const SortablePage = require('../pages/SortablePage');

describe('Sortable', () => {
    const sortablePage = new SortablePage();

    beforeEach(() => {
        sortablePage.visit();
    });

    it('deve organizar os itens em ordem crescente', () => {
        sortablePage.sortItemsAscending();
        sortablePage.verifyItemsAscending();
    });
});
