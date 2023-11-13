const puppeteer = require("puppeteer");
const path = require('path');

describe("Test Repo Search", () => {
    let page;
    let browser;
    beforeAll(async () => {
        browser = await puppeteer.launch({ headless: "new" });
    });

    afterEach(async () => {
        page.close();
    });

    afterAll(async () => {
        await browser.close();
    });

    describe("Test Repo Search", () => {
        beforeEach(async () => {
            page = await browser.newPage();
            await page.goto(`file:${path.join(__dirname, '..', 'index.html')}`)
        });

        it("should search for repos", async () => {
            await page.type("#username", "facebook");
            await page.click("#get-repos");
            await page.waitForSelector("#repos-list li");
            const repos = await page.$$("#repos-list li");
            // Take a screenshot
            await page.screenshot({ path: 'screenshot.png' });
            expect(repos.length).toBeGreaterThan(0);
        })
    });
});