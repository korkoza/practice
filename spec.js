// spec.js
describe('Protractor Demo App', function() {
    let signIn = element(by.css('.login'));
    let submitLogin = element(by.id('SubmitLogin'));
    let email = element(by.id('email'));
    let passwd = element(by.id('passwd'));
    userName = element(by.css('.account>span'))
 
  
    beforeEach(async function() {
        browser.waitForAngularEnabled(false);
        await  browser.get('http://automationpractice.com/index.php');
    });

    it('successful login', async function() {
        //step 1
        await signIn.click();
       

        //step 2
        await email.sendKeys('mykola2@gmail.com');
        await passwd.sendKeys('passw0rd');
        
       
        //step 3
        await submitLogin.click();
          
       
        
        await expect(userName.getText()).toEqual('Petro Petrov');
          
    });

  });