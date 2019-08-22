this.MyAccountHomePage = $page("MyAccount Home Page", {
    accountLabel: ".ng-star-inserted:nth-child(1) > .overview--header #dashboard-account-number",
    addressLabel: "id: dashboard-address",
    
    load: function() {
        this.open("https://myaccount.agl.com.au/login");
        return this.waitForIt();
    }
}, {
    //Secondary elements
});

