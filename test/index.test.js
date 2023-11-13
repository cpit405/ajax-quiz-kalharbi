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

        it("should get search results as a list of links to repos", async () => {
            await page.type("#username", "facebook");
            await page.click("#get-repos");
            await page.waitForSelector("#repos-list li");
            const repos = await page.$$("#repos-list li");
            // Take a screenshot
            await page.screenshot({ path: 'screenshot.png' });
            expect(repos.length).toBeGreaterThan(0);
            // Check if every li element contains an anchor with an href and text
            const allLiHaveAnchor = await page.evaluate(() => {
                const lis = Array.from(document.querySelectorAll("#repos-list li"));
                return lis.every(li => {
                    const anchor = li.querySelector("a");
                    return anchor && anchor.href && anchor.textContent;
                });
            });
            expect(allLiHaveAnchor).toBe(true);
        })
    });
});