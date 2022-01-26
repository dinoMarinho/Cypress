import signup from '../pages/SignupPage';
import signupFactory from '../factories/SignupFactory'; 

describe('Signup', () => {

    // beforeEach(function () { 
    //     cy.fixture('deliver').then((deliver) => {
    //         this.deliver = deliver;
    //     })
    // });

    it.skip('User should be deliver', function () {

        var deliver = signupFactory.deliver();

        signup.go();
        signup.fillForm(deliver);
        signup.submit();

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
        signup.modalContentShouldBe(expectedMessage);

    });

    it.skip('Incorrect document ', function() {

        var deliver = signupFactory.deliver();

        deliver.cpf = '000000141AA';

        signup.go()
        signup.fillForm(deliver);
        signup.submit();

        signup.alertContentShouldBe('Oops! CPF inválido');
    });

    it.skip('Incorrect email ', function() {

        var deliver = signupFactory.deliver();

        deliver.email = 'teste.com.br';

        signup.go()
        signup.fillForm(deliver);
        signup.submit();

        signup.alertContentShouldBe('Oops! Email com formato inválido.');
    });

    it('Required fields', function() {
        signup.go();
        signup.submit();

        signup.alertContentShouldBe('É necessário informar o nome');
        signup.alertContentShouldBe('É necessário informar o CPF');
        signup.alertContentShouldBe('É necessário informar o email');
        signup.alertContentShouldBe('É necessário informar o CEP');
        signup.alertContentShouldBe('É necessário informar o número do endereço');
        signup.alertContentShouldBe('Selecione o método de entrega');
        signup.alertContentShouldBe('Adicione uma foto da sua CNH');

    });
});