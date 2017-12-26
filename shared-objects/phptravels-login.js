module.exports = function () {
 
    this.Given(/^I am logged in"$/, function () {
 
        driver.findElement(by.name('username')).sendKeys(shared.testData.username);
        driver.findElement(by.name('password')).sendKeys(shared.testData.password);
    });
};