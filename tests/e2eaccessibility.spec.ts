import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

const url = "http://localhost:5173/";

test("has title", async ({ page }) => {
  await page.goto(url);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/a11y-testing-tools/);
});

test.describe("homepage", () => {
  // 2
  test("should not have any automatically detectable accessibility issues", async ({
    page,
  }) => {
    await page.goto(url); // 3

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags([
        "wcag2a",
        "wcag2aa",
        "wcag21a",
        "wcag21aa",
        "wcag22a",
        "wcag22aa",
        "en-301-549",
        "best-practice",
      ])
      .analyze(); // 4

    expect(accessibilityScanResults.violations).toEqual([]); // 5
  });
});
