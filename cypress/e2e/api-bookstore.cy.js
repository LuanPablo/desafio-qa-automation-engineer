describe('Desafio API - Parte 1', () => {
    it('Validar fluxo completo da Book Store API', () => {

        const userName = `Luan_${Date.now()}`;
        const password = 'Test@12345';
        const baseURL = 'https://demoqa.com';
        let userId;
        let token;

        //Criar usuário
        cy.request({
            method: 'POST',
            url: `${baseURL}/Account/v1/User`,
            body: {
                userName: userName,
                password: password
            }
        }).then((response) => {

            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('userID');

            userId = response.body.userID;

            //Gerar token
            return cy.request({
                method: 'POST',
                url: `${baseURL}/Account/v1/GenerateToken`,
                body: {
                    userName: userName,
                    password: password
                }
            });
        }).then((response) => {

            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('token');
            expect(response.body.token).to.be.a('string').and.not.be.empty;

            token = response.body.token;

            //Verifica a autorização
            return cy.request({
                method: 'POST',
                url: `${baseURL}/Account/v1/Authorized`,
                body: {
                    userName: userName,
                    password: password
                }
            });

        }).then((response) => {

            expect(response.status).to.eq(200);
            expect(response.body).to.eq(true);


            //Consultar livros
            return cy.request({
                method: 'GET',
                url: `${baseURL}/BookStore/v1/Books`
            });

        }).then((response) => {

            //Validar consulta dos livros
            expect(response.status).to.eq(200);
            expect(response.body.books).to.be.an('array');
            expect(response.body.books).to.have.length.greaterThan(1);

            //Selecionar dois livros
            const books = response.body.books;

            const selectedBooks = [
                { isbn: books[0].isbn },
                { isbn: books[1].isbn },
            ];

            //Validar seleção de livros
            expect(selectedBooks).to.have.length(2);
            expect(selectedBooks[0].isbn).to.be.a('string').and.not.be.empty;
            expect(selectedBooks[1].isbn).to.be.a('string').and.not.be.empty;

            //Reservar dois livros
            return cy.request({
                method: 'POST',
                url: `${baseURL}/BookStore/v1/Books`,
                headers: {
                    Authorization: `Bearer ${token}`
                },
                body: {
                    userId: userId,
                    collectionOfIsbns: selectedBooks
                }
            });

        }).then((response) => {

            expect(response.status).to.eq(201);

            // Consultar os dados do usuário
            return cy.request({
                method: 'GET',
                url: `${baseURL}/Account/v1/User/${userId}`,
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

        }).then((response) => {

            // Validar os dados do usuário e os livros
            expect(response.status).to.eq(200);
            expect(response.body.userId).to.eq(userId);
            expect(response.body.books).to.have.length(2);

            // Exibir resultados no terminal
            cy.task('log', '===== RESULTADO DA API =====');
            cy.task('log', `User ID: ${response.body.userId}`);
            cy.task('log', `Username: ${response.body.username}`);
            cy.task('log', `Quantidade de livros: ${response.body.books.length}`);

            response.body.books.forEach((book, index) => {
                cy.task('log', `Livro ${index + 1}: ${book.title}`);
                cy.task('log', `ISBN: ${book.isbn}`);
            });

            cy.task('log', '============================');
        });
    });
});