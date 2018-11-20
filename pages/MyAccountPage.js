let BasePage = require("./BasePage");


class MyAccountPage extends BasePage {
    constructor() {
        super();
    }
 
    getUserNameElement() {
        return element(by.css('.account>span'));
    }

    async getUserName() {
        return await this.getUserNameElement().getText();
    }


 };
 
 module.exports = new MyAccountPage();