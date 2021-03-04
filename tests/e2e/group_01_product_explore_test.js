const locator = require('../../pages/product_locator');
Feature('Group/Variable product explore');
Scenario('product edit explore test', ({ I }) => {
    I.amOnPage('http://dokan-pro.test/');
    I.checkError();
    I.click('Login / Register');
    I.fillField('Username or email address', 'alvitazwar@wedevs.com');
    I.fillField('Password', 'alvitazwar1122334456');
    I.click('.login > p:nth-child(4) > button:nth-child(3)');
    I.click('Products');
    I.click('group_product');
    // Starting to explore
    //Check Error
    I.checkError();
    //Product label
    I.seeElementInDOM(locator.ProductLabel);
    //view product button
    I.seeElementInDOM(locator.ProductViewBtn);
    //Title section
    I.see('Title');
    I.seeElementInDOM(locator.ProductTitleInput);
    //Product type
    I.see('Product Type');
    I.seeElementInDOM(locator.ProductTypeInput);
    I.seeElementInDOM(locator.ProductTypeFavIcon); //fav icon check
    //Category
    I.see('Category');
    I.seeElementInDOM(locator.CategoryContainer);
    //Tags
    I.see('Tags');
    I.seeElementInDOM(locator.TagField);
    //View Image Box
    I.seeElementInDOM(locator.UploadImgDiv);
    I.seeElementInDOM(locator.UploadImgLink);
    //All description field
    I.see('Short Description');
    I.seeElementInDOM(locator.ShortDecLabel);
    I.seeElementInDOM(locator.ShortDecLabel);
    I.see('Description');
    I.seeElementInDOM(locator.DescLabel);
    //Inventory Section
    I.seeElementInDOM(locator.InventoryDiv);
    I.seeElementInDOM(locator.InventorySec);
    //Stock Keepting Unit
    I.see('SKU (Stock Keeping Unit)');
    I.seeElementInDOM(locator.StockKeeptingInput);
    I.see('Stock Status');
    I.seeElementInDOM(locator.StockStatusDropdown);
    //Linked Products section
    I.seeElementInDOM(locator.LinkedProductSection);
    I.seeElementInDOM(locator.LinkProductContent);
    I.see('Upsells');
    I.see('Cross-sells');
    I.see('Grouped products');
    //Attribute
    I.seeElementInDOM(locator.AttributeSectionHeading);
    I.seeElementInDOM(locator.AttributeSectionDropdown);
    I.seeElementInDOM(locator.AttributeAddNewButton);
    I.seeElementInDOM(locator.AttirbuteSaveBtn);
    //RMA
    I.seeElementInDOM(locator.RmaSectionHeading);
    I.seeElementInDOM(locator.RmaContentDiv);
    //Other Options
    I.seeElementInDOM(locator.OtherOptionDiv);
    I.see('Product Status');
    I.see('Visibility');
    I.seeElementInDOM(locator.ProductStatusDropdown);
    I.seeElementInDOM(locator.ProductVisibilityDropdown);
    I.see('Purchase Note');
    I.seeElementInDOM(locator.ProductReviewCheckbox);
    console.log('All Elemennts Are present');

}).tag('@product');