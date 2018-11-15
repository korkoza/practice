// conf.js
exports.config = {
    SELENIUM_PROMISE_MANAGER: 0,
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec?.js'],
    capabilities: {
        browserName: 'chrome',
        shardTestFiles: true,
        maxInstances: 2,
        chromeOptions: {
            args: ["--window-size=1280,780"]
        }
    },
    onPrepare: function() {
        let AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultDir: 'allure-results'
        }));
    },
    afterEach: async function createScreenShotAllure() {
        let screenshotFile = await browser.takeScreenshot();
        await allure.createAttachment("Screenshot", () => {
            return new Buffer(screenshotFile, "base64")
        }, 'image/png')()
    },
    restartBrowserBetweenTests: true
}