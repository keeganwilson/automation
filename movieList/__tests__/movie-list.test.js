const {Builder, Capabilities} = require('selenium-webdriver')
require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {correctMovie} = require('../functions/correctMovie.js')
const {deleteMovie} = require('../functions/deleteMovie.js')
const {multipleMovies} = require('../functions/multipleMovies.js')

beforeEach(async () => {
    await driver.get('http://127.0.0.1:5500/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('correctMovie', async () => {
    await correctMovie(driver)
    await driver.sleep(3000)
})

test('deleteMovie', async () => {
    await deleteMovie(driver)
    await driver.sleep(3000)
})

test('multipleMovies', async () => {
    await multipleMovies(driver)
    await driver.sleep(3000)
})