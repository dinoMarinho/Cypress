import signup from '../pages/SignupPage';
import signupFactory from '../factories/SignupFactory'; 

describe('Signup', () => {

    // beforeEach(function () { 
    //     cy.fixture('deliver').then((deliver) => {
    //         this.deliver = deliver;
    //     })
    // });

    it('User should be deliver', function () {

        var deliver = signupFactory.deliver();

        signup.go();
        signup.fillForm(deliver);
        signup.submit();

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.';
        signup.modalContentShouldBe(expectedMessage);

    });
    it('Incorrect document ', function() {

        var deliver = signupFactory.deliver();

        deliver.cpf = '000000141AA';

        signup.go()
        signup.fillForm(deliver);
        signup.submit();

        signup.alertContentShouldBe('Oops! CPF inválido');
    });

    it('Incorrect email ', function() {

        var deliver = signupFactory.deliver();

        deliver.email = 'teste.com.br';

        signup.go()
        signup.fillForm(deliver);
        signup.submit();

        signup.alertContentShouldBe('Oops! Email com formato inválido.');
    });
});