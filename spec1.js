let LoginPage = require ('./LoginPage');
let MyAccountPage = require ('./MyAccountPage');
let MainPage = require ('./MainPage');

describe('Protractor Demo App', function() {
 beforeAll(async function() {
    await browser.restart();
    browser.waitForAngularEnabled(false);
    await browser.get('http://automationpractice.com/index.php');
});

it('successful login', async function() {
    await allure.createStep('step 1', async function() {
        await MainPage.signInClick();
    })();
     
    await allure.createStep('step 2', async function() {
        await LoginPage.setEmail('mykola2@gmail.com');
        await LoginPage.setPasswd('passw0rd');
    })();

    await allure.createStep('step 3', async function() {
        await LoginPage.submit();
        await expect(MyAccountPage.getUserName()).toEqual('Petro Petrov');
    })();

        
     
});

});