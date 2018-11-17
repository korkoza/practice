let LoginPage = require ('./LoginPage');
let MyAccountPage = require ('./MyAccountPage');
let MainPage = require ('./MainPage');

describe('Login page', function() {
 beforeAll(async function() {
    await browser.restart();
    await browser.manage().setTimeouts({implicit: 5000});
    browser.waitForAngularEnabled(false);
    await browser.get('http://automationpractice.com/index.php');
});

it('successful login', async function() {
    await allure.createStep('1. Click Sign in', async function() {
        await MainPage.signInClick();
    })();
     
    await allure.createStep('2. Fill out Email and password', async function() {
        await LoginPage.setEmail('mykola2@gmail.com');
        await LoginPage.setPasswd('passw0rd');
    })();

    await allure.createStep('3. Click Create an account', async function() {
        await LoginPage.submit();
        await expect(MyAccountPage.getUserName()).toEqual('Petro Petrov');
    })();

        
     
});

});