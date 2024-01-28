import type { CheatShooter } from '../src/cheat-shooter';
import { test, expect } from '@playwright/test';

declare global {
  interface Window {
    cheatShooter: CheatShooter;
    messages: string[];
  }
}

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await expect(page).toHaveTitle(/Cheat\ Code\ Shooter/);
});

test('CheatShooter can execute an action when the correct code is entered', async ({ page }) => {
  await page.goto('http://localhost:5173');

  // Define a helper function to get the last console message
  const getLastConsoleMessage = async () => {
    const messages = await page.evaluate(() => window.messages || []);
    return messages[messages.length - 1];
  };

  // Listen to the console events and store them in an array
  await page.evaluate(() => {
    window.messages = [];
    window.cheatShooter.on('command', event => {
      window.messages.push(JSON.stringify(event));
    });
  });

  // Simulate keyboard events to enter the code 'hello'
  await page.keyboard.type('hello');

  // Expect the CheatShooter to emit a command event with the correct data
  expect(await getLastConsoleMessage()).toBe('{"step":5,"input":"hello","guesses":["hello"]}');
});
