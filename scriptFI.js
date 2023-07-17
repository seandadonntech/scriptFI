const wifiName = require('wifi-name');
const wifiPassword = require('wifi-password');

wifiName().then(name => {
    console.log(name);

});
wifiPassword().then(password => {
    console.log(password);
//this program is to gather info of targets wifi name and password this wont work if the machione is on an ethernet cable

});

setTimeout(function () { console.log("information gathered!") }, 9000)
