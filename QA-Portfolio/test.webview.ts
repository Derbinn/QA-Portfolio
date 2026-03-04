import { expect } from '@wdio/globals'

describe('Button Test', () => {

  it('Webview page', async () => {
    //Click "Webview" button from tab bar
    const webViewButton = await $('android=new UiSelector().text("Webview")')
    await webViewButton.waitForDisplayed({ timeout: 10000 });
    await webViewButton.click();
    
    // Checking existing of button
    await expect(webViewButton).toBeExisting();
  })

})