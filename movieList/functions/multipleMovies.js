const {By} = require('selenium-webdriver');

const multipleMovies = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Star Wars: A New Hope');
    await driver.sleep(1000)

    await driver.findElement(By.xpath('//button')).click();
    await driver.sleep(1000)

    await driver.findElement(By.xpath('//input')).sendKeys('Star Trek: Wrath of Khan');
    await driver.sleep(1000)

    await driver.findElement(By.xpath('//button')).click();
    await driver.sleep(1000)

    const movie1 = await driver.findElement(By.xpath('(//li/span)[1]'))
    const movie2 = await driver.findElement(By.xpath('(//li/span)[2]'))

    const displayed1 = movie1.isDisplayed();
    const displayed2 = movie2.isDisplayed();

    expect(displayed1).toBeTruthy();
    expect(displayed2).toBeTruthy();
}

module.exports = {
    multipleMovies
}
