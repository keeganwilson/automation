const {By} = require('selenium-webdriver');


const deleteMovie = async (driver) => {
    await driver.findElement(By.xpath('//input')).sendKeys('Star Wars');
    await driver.sleep(1000)

    await driver.findElement(By.xpath('//button')).click();
    await driver.sleep(1000)

    await driver.findElement(By.xpath('//button[@id="StarWars"]')).click();

    const list = await driver.findElement(By.xpath('//ul')).getText()

    expect(list).toBe("")
}

module.exports = {
    deleteMovie
}