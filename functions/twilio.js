const twilio = require('twilio');
var accountSid = 'AC9423bd519d214b95de8a10aed23a314e'; // Your Account SID from www.twilio.com/console
var authToken = '5f1abdf34f6a31a96f7554fd2da54d89';   // Your Auth Token from www.twilio.com/console

const client = twilio(accountSid, authToken, {
    lazyLoading: true
});

module.exports = {
    client
}