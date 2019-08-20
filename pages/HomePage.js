this.HomePage = $page("Home Page", {
    overviewBtn: "#agl-desktop-header-menu-overview .menu-item__label",
    accountLabel: ".ng-star-inserted:nth-child(1) > .overview--header #dashboard-account-number",
    addressLabel: "id: dashboard-address",
    

    load: function() {
        return this.waitForIt();
    }
}, {
    //Secondary elements
});

