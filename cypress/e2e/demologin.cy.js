import { LoginPage } from './pages/login_page'

const loginPage = new LoginPage();

describe('All Login tests', function(){

    it('Login Test 1', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com')
    
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
    
    
    })

    it('Login Test 2', function() {
        cy.visit('https://opensource-demo.orangehrmlive.com')
    
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin1234')
        loginPage.clickLogin()
    })

    /*it.only('Login Test 3', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com')
    
        loginPage.enterUsername('Admin')
        loginPage.enterPassword('admin123')
        loginPage.clickLogin()
    
    
    })  */ /// Run this "Login Test 3" only!!! Also you change .only to .skip then it will skip this part of the test


})


