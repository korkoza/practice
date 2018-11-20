let BasePage = require("./BasePage");


class MainPage extends BasePage {
    constructor() {
        super();      
    }

    getSignInElement() {
        return element(by.css('.login'));
    }

    async signInClick(){
        await this.getSignInElement().click();
    }   
};

module.exports = new MainPage();