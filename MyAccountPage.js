class MyAccountPage {
    constructor() {
        this.userName = element(by.css('.account>span'))
    }
 
    async getUserName() {
        return this.userName.getText();
    }
 };
 
 module.exports = new MyAccountPage();