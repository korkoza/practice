// conf.js
exports.config = {
    SELENIUM_PROMISE_MANAGER: 0,
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {
        browserName: 'chrome',
        chromeOptions: {
            args: ["--window-size=1280,780"]
        }
    },
    onPrepare: function() {
        console.log('test is ready for execution')
    }
}