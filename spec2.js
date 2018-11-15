let LoginPage = require ('./LoginPage');
let MainPage = require ('./MainPage');



describe('create account negative', function() {
    beforeAll(async function() {
        await browser.restart();
        browser.waitForAngularEnabled(false);
        await  browser.get('http://automationpractice.com/index.php');
    });

it('successful login', async function() {
    await allure.createStep('step 1', async function() {
        await MainPage.signInClick();
    })();
     
    await allure.createStep('step 2', async function() {
        await LoginPage.submitCreate();
        await browser.sleep(10000);
        expect(await LoginPage.getErrorEmail()).toEqual('Invalid email address.');
        })();

    await allure.createStep('step 3', async function() {
        await LoginPage.setEmail('abc@abc.com');
        await LoginPage.submitCreate();
        expect(await LoginPage.getErrorEmail()).toEqual('Invalid email address.');
    })();

    await allure.createStep('step 4', async function() {
        await LoginPage.setEmail('mykola0@gmail.com');
        await LoginPage.submitCreate();
        expect(await LoginPage.getErrorEmail()).toEqual('An account using this email address has already been registered. Please enter a valid password or request a new one.');
    })();
        
     
});

});