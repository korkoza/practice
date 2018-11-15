let LoginPage = require ('./LoginPage');
let MyAccountPage = require ('./MyAccountPage');
let MainPage = require ('./MainPage');

let EC = protractor.ExpectedConditions;
let submitClickable = EC.elementToBeClickable(LoginPage.submitLogin);
let usernameVisible = EC.visibilityOf(MyAccountPage.userName);


describe('Protractor Demo App', function() {
let signIn = element(by.css('.login'));
 beforeEach(async function() {
    browser.waitForAngularEnabled(false);
    await  browser.get('http://automationpractice.com/index.php');
});

browser.manage().setTimeouts({implicit: (4000)});

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