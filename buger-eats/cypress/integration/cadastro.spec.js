import SignupPage from '../pages/SignupPage';


describe('Cadastro', () => {
    it('Usuário deve se tornar um deliver', () => {
        var deliver = {
            name: 'Vinicius Marinho',
            cpf: '00000014141',
            email: 'vinicius@vinicius.com',
            whatsapp: '11123412345',
            address: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Apto 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'images/cnh-digital.jpg'
        }

        var signup = new SignupPage();

        signup.go();
        signup.fillForm(deliver);
        signup.submit();

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
        signup.modalContentShouldBe(expectedMessage);

    });
    it('CPF Incorreto', () => {
        var deliver = {
            name: 'Vinicius Marinho',
            cpf: '000000141AA',
            email: 'vinicius@vinicius.com',
            whatsapp: '11123412345',
            address: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'Apto 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'images/cnh-digital.jpg'
        }

        var signup = new SignupPage();

        signup.go()
        signup.fillForm(deliver);
        signup.submit();

        signup.alertContentShouldBe('Oops! CPF inválido');
    });
});