class LoginPage {
    constructor() {
        this.submitLogin = element(by.id('SubmitLogin'));
        this.email = element(by.id('email'));
        this.passwd = element(by.id('passwd'));
        this.createAccount = element(by.id('SubmitCreate'));
        this.invalidEmail = element(by.css('#create_account_error li'));
        }
   
    async setEmail(a) {
        await this.email.sendKeys(a);
    };
 
    async setPasswd(password) {
        await this.passwd.sendKeys(password);
    };   
 
    async submit(){
        await this.submitLogin.click();
    };

    async submitCreate(){
        await this.createAccount.click();
    };

    async getErrorEmail() {
        return this.invalidEmail.getText();
    }
 };
 
 module.exports = new LoginPage()
 