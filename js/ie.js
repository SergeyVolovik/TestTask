"use strict"

//User notification about version IE

function getIEVersion() {
    var rv = -1; // Return value assumes failure.
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.test(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}

function checkVersion() {
    var ver = getIEVersion();
    if (ver != -1) {
        if (ver <= 9.0) {
            alert("Please, update your IE to 10 or last version!");
            window.location.replace("https://www.microsoft.com/uk-ua/download/internet-explorer.aspx");
        }
    }
}

checkVersion();