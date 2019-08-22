this.ContactUsPage = $page("Contact Us Page", {
    liveChatBtn: "xpath: //*[contains(@id,'LPMimage')]",
    
    load: function() {
        this.open('https://agldstqtrtest.digital.agl.com.au/contact-us');
        return this.waitForIt();
    }
}, {
    //Secondary elements
});

