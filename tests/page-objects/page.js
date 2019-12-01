class PageObject {
  get username () { return $('#mat-input-0'); }
  get passwordField () { return $('#mat-input-1'); }
  get loginButton () { return $('//button[contains(@class,"mat-button-block")]'); }
  get appsButton () { return $('//button[contains(@class,"mat-button-link")]'); }
  get shopIcon () { return $('//div[contains(@class,"ng-star-inserted")][7]'); }
  get themesButton () { return $('//button[contains(@class,"mat-button-link")][3]'); }
  get addTheme () { return $('//mat-card-content[contains(@class,"mat-card-content")][1]'); }
  get aButton () { return $('//pe-builder-navbar-top-button[4]//img[@class="icon-20 ng-star-inserted"]'); }
  get closeButton () { return $('//*[@id="os-app-main"]/os-commerce-root/platform-header-component/pe-platform-header/pe-navbar/mat-toolbar/div[3]/button/span/span'); }
  // get textField1 () { return $('//div[@id="content"]//pe-editor-text-decorator//div'); }
  // get textField2 () { return $('//div[@id="content"]//pe-editor-canvas[@class="pe-editor-canvas"]'); }
  // get textField3 () { return $('//*[@id="content"]/div[2]/pe-editor-text-decorator'); }
  get firstClick () { return $('//*[@id="content"]/div[2]/pe-editor-canvas//div/pe-editor-element-anchors/svg'); }
}

export default new PageObject();
