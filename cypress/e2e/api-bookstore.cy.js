describe('Desafio API - Parte 1', () => {
    it('Validar criação de novo usuário', () => {

        const userName = `Luan_${Date.now()}`;
        const password = 'Test@12345';
        const baseURL = 'https://demoqa.com';
        let userId;

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

        });
    });
});