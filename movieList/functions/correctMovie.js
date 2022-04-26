const {By} = require('selenium-webdriver');


const correctMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Star Wars: A New Hope');
    await driver.sleep(1000)

    await driver.findElement(By.xpath('//button')).click();
    await driver.sleep(1000)

    const movie = await driver.findElement(By.xpath('//li/span')).getText()

    expect(movie).toBe('Star Wars: A New Hope');
}

module.exports = {
    correctMovie
}