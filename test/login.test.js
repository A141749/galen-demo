load("init.js");
load("../pages/LoginPage.js");
load("../pages/MyAccountHomePage.js");

testOnAllDevices("Test login screen spec", "", function(driver, device) {
    var loginPage = new LoginPage(driver).load();
    checkLayout(driver, "specs/demo.gspec");
});

// testOnAllDevices("Test login", "", function(driver, device) {
//     var loginPage = new LoginPage(driver).load();
//     loginPage.login();
    
//     var maHome = new MyAccountHomePage(driver).load();
//     maHome.accountLabel.exists();
// });