class LoginPage {
    constructor() {
        this.submitLogin = element(by.id('SubmitLogin'));
        this.email = element(by.id('email'));
        this.passwd = element(by.id('passwd'));
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
};

module.exports = new LoginPage()