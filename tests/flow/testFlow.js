import PageObject from '../page-objects/page.js';
import Credentials from '../credentials/credentials';

describe('Tests', function () {
  it('User is successfully login', function () {
    browser.url('./');
    PageObject.username.setValue(Credentials.username);
    PageObject.passwordField.setValue(Credentials.password);
    PageObject.loginButton.click();
    browser.waitUntil(() => {
      return PageObject.appsButton.isExisting();
    });
    expect(browser.getUrl()).to.equal(Credentials.homePageUrl);
  });

  it('Theme Apps is open', function () {
    PageObject.appsButton.click();
    PageObject.shopIcon.click();
    browser.pause(3000);
    // browser.waitUntil(() => {
    //   return PageObject.themesButton.isExisting();
    // });
    expect(browser.getUrl()).to.equal(Credentials.shopUrl);
    PageObject.themesButton.click();
  });

  it('New Theme is created', function () {
    PageObject.addTheme.click();
    PageObject.aButton.click();
    browser.pause(500);

    const svg = $('//pe-editor-canvas[@class="pe-editor-canvas"]').shadow$$('//div[contains(@class,"ng-star-inserted")]/pe-editor-element-anchors/svg');
    svg.waitForExist();
    console.log('!!!!!!!!!!!' + svg);
    svg.click();
  });

  it('Shop app can be closed', function () {
    PageObject.closeButton.click();

    browser.pause(500);
    expect(browser.getUrl()).to.equal('https://commerceos.staging.devpayever.com/business/2c965cbc-df55-4785-b820-cd803486f8d7/info/overview');
  });
});
