import { takeArchive, test } from '@chromaui/test-archiver';

test.describe('Playwright Tests', () => {
  //   test('media print', async function ({ page }, testInfo) {
  //     await page.goto('https://playwright.dev/docs/writing-tests');
  //     await page.emulateMedia({ media: 'print' });
  //     await takeArchive(page, 'hello', testInfo);
  //     await page.evaluate(() => matchMedia('print').matches);
  //   });

  test('media print 2', async function ({ page }, testInfo) {
    await page.goto('https://playwright.dev/docs/writing-tests');
    await page.emulateMedia({ media: 'print' });
    await takeArchive(page, 'hi', testInfo);
    await page.evaluate(() => matchMedia('print').matches);
  });
});
