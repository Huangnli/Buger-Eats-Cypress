import singup from '../pages/SignupPages'

describe('Cadastro', () => {

    // before(function () {
    //     cy.log('Tudo aqui é executado uma única vez ANTES de TODOS os casos de testes')
    // })

    // beforeEach(function () {
    //     cy.log('Tudo aqui é executado sempre ANTES de CADA caso de teste')
    // })

    // after(function () {
    //     cy.log('Tudo aqui é executado uma única vez DEPOIS de TODOS os casos de testes')
    // })

    // afterEach(function () {
    //     cy.log('Tudo aqui é executado sempre DPOIS de CADA caso de teste')
    // })

    beforeEach(function () {
        cy.fixture('deliver').then((deliver) => {
            this.deliver = deliver
        })
    })

    it('Usuário deve se tornar um entregador', function () {

        singup.go()
        singup.fillForm(this.deliver.signup)
        singup.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        singup.modalContentShouldBe(expectedMessage)
    })

    it('CPF incorreto', function () {

        singup.go()
        singup.fillForm(this.deliver.cpf_inv)
        singup.submit()
        singup.alertMessageShouldBe('Oops! CPF inválido')
    })

    it('Email incorreto', function () {

        singup.go()
        singup.fillForm(this.deliver.email_inv)
        singup.submit()
        singup.alertMessageShouldBe('Oops! Email com formato inválido.')
    })
})