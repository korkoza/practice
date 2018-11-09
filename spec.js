let LoginPage = require ('./LoginPage');
let MyAccountPage = require ('./MyAccountPage');
let userName = element(by.css('.account>span'));


describe('Protractor Demo App', function() {
    let signIn = element(by.css('.login'));
  
    beforeEach(async function() {
        browser.waitForAngularEnabled(false);
        await  browser.get('http://automationpractice.com/index.php');
    });

    it('successful login', async function() {
 
        //step 1
        await signIn.click();
       
        //step 2
        await LoginPage.setEmail('mykola2@gmail.com');
        await LoginPage.setPasswd('passw0rd');
       
        //step 3
        await LoginPage.submit();

        await expect(MyAccountPage.getUserName()).toEqual('Petro Petrov');
          
    });

  });