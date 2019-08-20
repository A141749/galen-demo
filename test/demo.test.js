load("init.js");
load("../pages/LoginPage.js");
load("../pages/HomePage.js");

testOnAllDevices("Test login", "", function(driver, device) {
    var loginPage = new LoginPage(driver).load();
    loginPage.login();
    // loginPage.usernameField.typeText("tmbalun17@gmail.com");
    // loginPage.nextBtn.click();
    // // checkLayout(driver, "specs/demo.gspec");
    // console.log("NEXT:" + loginPage.nextBtn.getText());
    // loginPage.passwordField.waitToBeShown();
    // loginPage.passwordField.typeText("Whatever1!")
    // loginPage.loginBtn.click();
    var homePage = new HomePage(driver).load();
    homePage.accountLabel.exists();
});