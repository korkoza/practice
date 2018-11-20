class MainPage {
    constructor() {        
    }

    getSignInElement() {
        return element(by.css('.login'));
    }

    async signInClick(){
        await this.getSignInElement().click();
    }   
};

module.exports = new MainPage();