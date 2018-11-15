class MainPage {
    constructor() {        
    }

    async signInClick(){
        this.signIn = element(by.css('.login'));
        await this.signIn.click();
    }   
};

module.exports = new MainPage();