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

it('successful login', async function() {
    //step 1
    await MainPage.signInClick();

    //step 2
    //await browser.wait(submitClickable, 15000);
    browser.manage().setTimeouts({implicit:15000});

    await LoginPage.setEmail('mykola2@gmail.com');
    await LoginPage.setPasswd('passw0rd');
    //step 3
    await LoginPage.submit();

    // await browser.wait(usernameVisible, 5000);

    await browser.manage().setTimeouts({implicit: (3000)});
    await expect(MyAccountPage.getUserName()).toEqual('Petro Petrov');
     
});

});