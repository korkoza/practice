let LoginPage = require ('./LoginPage');
let MyAccountPage = require ('./MyAccountPage');
let MainPage = require ('./MainPage');

let EC = protractor.ExpectedConditions;
let submitClickable = EC.elementToBeClickable(LoginPage.submitLogin);
let usernameVisible = EC.visibilityOf(MyAccountPage.userName);


describe('create account negative', function() {
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
        await LoginPage.submitCreate();
        await expect(LoginPage.getErrorEmail()).toEqual('Invalid email address.');
        })();

    await allure.createStep('step 3', async function() {
        await LoginPage.setEmail('abc@abc.com');
        await LoginPage.submitCreate();
        await expect(LoginPage.getErrorEmail()).toEqual('Invalid email address.');
    })();

    await allure.createStep('step 4', async function() {
        await LoginPage.setEmail('mykola0@gmail.com');
        await LoginPage.submitCreate();
        await expect(LoginPage.getErrorEmail()).toEqual('An account using this email address has already been registered. Please enter a valid password or request a new one.');
    })();
        
     
});

});