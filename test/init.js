var domain = "www.agl.com.au/";
var devices = {
    // tablet: {
    //     deviceName: "tablet",
    //     size: "600x800",
    //     tags: ["tablet"]
    // },
    desktop: {
        deviceName: "desktop",
        size: "1024x768",
        tags: ["desktop"]
    }
};

var TEST_USER = {
    username: "tmbalun17@gmail.com",
    password: "Whatever1!"
};

function openDriver(url, size) {
    console.log("URL", url);
    var driver = createDriver(null, size);
    session.put("driver", driver);
    if (url != null) {
        if (url.indexOf("http://") != 0 && url.indexOf("https://") != 0) {
            url = "http://" + domain + url;
        }
        console.log("url:", url);
        driver.get(url);
    }
    else {
        driver.get("http://" + domain);
    }
    return driver;
};

afterTest(function (test) {
    var driver = session.get("driver");
    if (driver != null) {
        if (test.isFailed()) {
            session.report().info("Screenshot").withAttachment("Screenshot", takeScreenshot(driver));
        }
        driver.quit();
    }
});

function _test(testNamePrefix, url, callback) {
    test(testNamePrefix + " on ${deviceName} device", function (device) {
        var driver = openDriver(url, device.size);
        callback.call(this, driver, device);
    });
};

function testOnAllDevices(testNamePrefix, url, callback) {
    console.log("test name prefix", testNamePrefix);
    console.log("url", url);
    forAll(devices, function () {
        _test(testNamePrefix, url, callback);
    });
};

function testOnDevice(device, testNamePrefix, url, callback) {
    forOnly({ device: device }, function () {
        _test(testNamePrefix, url, callback);
    });
};

(function (exports) {
    exports.devices = devices;
    exports.openDriver = openDriver;
    exports.testOnAllDevices = testOnAllDevices;
    exports.testOnDevice = testOnDevice;
    exports.TEST_USER = TEST_USER;
})(this);