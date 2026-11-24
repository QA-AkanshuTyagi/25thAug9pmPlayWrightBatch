import { test, expect } from "@playwright/test";
 
test("multiple Locators", async ({ page }) => {
  await page.goto("https://www.amazon.in/");
  await page.locator("//input[@id='twotabsearchtextbox']").fill("iphone17pro");
  await page.locator("//input[@id='nav-search-submit-button']").click();
  for (let i = 1; i <= 4; i++) {
    const addToCart = page.locator(
      "//input[@aria-label='Add to cart']" +
        "[" +
        i +
        "]",
    );
    await addToCart.click();
  }
  await page.waitForTimeout(3000);
});