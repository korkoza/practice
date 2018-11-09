class MainPage {
    constructor() {
        this.signIn = element(by.css('.login'));
    }

    async signInClick(){
        await this.signIn.click();
    }   
};

module.exports = new MainPage();