class LoginPage {
    constructor() {}
    
    getEmailElement() {
        return element(by.id('email'));
    }

    getPassElement() {
        return element(by.id('passwd'));
    }

    getCreateElement() {
        return element(by.id('SubmitCreate'));
    }

    getLoginElement() {
        return element(by.id('SubmitLogin'));
    }

    getErrorElement() {
        return element(by.css('#create_account_error li'));
    }

    async setEmail(a) {
        await this.getEmailElement().sendKeys(a);
    };
 
    async setPasswd(password) {
        await this.getPassElement().sendKeys(password);
    };   
 
    async submit(){
        await this.getLoginElement().click();
    };

    async submitCreate(){
        await this.getCreateElement().click();
    };

    async getErrorEmail() {
        return await this.getErrorElement().getText();
    }
 };
 
 module.exports = new LoginPage();
 