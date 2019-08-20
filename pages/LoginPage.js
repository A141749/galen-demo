this.LoginPage = $page("Login Page", {
    usernameField: ".styled-form__input",
    nextBtn: ".btn--primary",

    load: function() {
        this.open("https://myaccount.agl.com.au/login");
        return this.waitForIt();
    },

    login: function() {
        this.usernameField.typeText("tmbalun17@gmail.com");
        this.nextBtn.click();
        this.passwordField.waitToBeShown();
        this.passwordField.typeText("Whatever1!")
        this.loginBtn.click();
        // this.loginBtn.waitToBeHidden();
    }
}, {
    passwordField: ".identity-container__field--password",
    loginBtn: ".identity-container__btn",
});

