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
    expect(browser.getUrl()).to.equal('https://commerceos.staging.devpayever.com/business/2c965cbc-df55-4785-b820-cd803486f8d7/info/overview');
  });

  it('Theme Apps is open', function () {
    PageObject.appsButton.click();
    PageObject.shopIcon.click();
    browser.waitUntil(() => {
      return PageObject.themesButton.isExisting();
    });
    expect(browser.getUrl()).to.equal('https://commerceos.staging.devpayever.com/business/2c965cbc-df55-4785-b820-cd803486f8d7/builder/shop/6c082a7a-5446-4f25-a3bd-9d080cf54921/builder/editor/home?themeType=application&theme=6c082a7a-5446-4f25-a3bd-9d080cf54921&channelSet=a644f50e-b992-433a-950e-c66dc247c80e&backUrl=&getBusinessThemeByAppTheme=true');
    PageObject.themesButton.click();
  });

  it('New Theme is created', function () {
    PageObject.addTheme.click();
    PageObject.aButton.click();

    // const runInBrowser = function (argument) {
    //   argument.click();
    // };
    //
    // const elementToClickOn = browser.$('//*[@id="content"]/div[2]/pe-editor-text-decorator');
    // browser.execute(runInBrowser, elementToClickOn);
    // browser.pause(3000);
    // // HomePage.firstClick.click();
    //
    //
    // const runInBrowser1 = function (argument) {
    //   argument.addValue('AAAAAAAA');
    // };
    // const elementToClickOn1 = browser.$$('//*[@id="content"]/div[2]/pe-editor-text-decorator')[0];
    // browser.execute(runInBrowser1, elementToClickOn1);
    // browser.pause(3000);


    // HomePage.firstClick.click();


    //  $('/html/body/os-commerce/os-commerce-root/div[2]/div/app-builder/pe-builder-theme/pe-editor/div[2]/div[2]/pe-editor-text-decorator').setValue('MINJAAAA');
    //  browser.pause(3000);


    // $('//*[@id="content"]/div[2]/pe-editor-text-decorator').click();
    //  $('//*[@id="content"]/div[2]/pe-editor-text-decorator').setValue('BLAAAAA');
    // const text = browser.$$('//*[@id="content"]/div[2]/pe-editor-text-decorator')[0];
    // text.setValue('MIANJAA');
  });

  it('Shop app can be closed', function () {
    PageObject.closeButton.click();

    browser.pause(500);
    expect(browser.getUrl()).to.equal('https://commerceos.staging.devpayever.com/business/2c965cbc-df55-4785-b820-cd803486f8d7/info/overview');
  });
});
