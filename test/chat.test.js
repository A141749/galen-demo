load("init.js");
load("../pages/ContactUsPage.js");

testOnAllDevices("Test chat", "", function(driver, device) {
    var contactUsPage = new ContactUsPage(driver).load();  
    contactUsPage.liveChatBtn.click();
    GalenPages.sleep(10000);
});