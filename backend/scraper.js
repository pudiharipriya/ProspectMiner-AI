const puppeteer = require("puppeteer");

async function scrapeLeads(query) {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(`https://www.google.com/maps/search/${encodeURIComponent(query)}`, {
    waitUntil: "networkidle2"
  });

  await page.waitForTimeout(5000);

  const results = await page.evaluate(() => {
    const items = document.querySelectorAll('div[role="article"]');
    const data = [];
    items.forEach(item => {
      const name = item.querySelector(".fontHeadlineSmall")?.innerText;
      if (name) data.push({ name });
    });
    return data.slice(0, 10);
  });

  await browser.close();
  return results;
}

module.exports = scrapeLeads;
