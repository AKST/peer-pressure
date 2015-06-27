Meteor.startup(function () {
  Twilio = Twilio(Config.ACCOUNT_SID, Config.AUTH_TOKEN);
})

function onTwilioResponse (error, result) {
  if (error) {
    console.error('nah', error);
  }
  else {
    console.log('twilio confirmed');
  }
}

Meteor.methods({
  sendSpam: function (payload) {
    if (payload.mobile) {
      console.log('sending message to', payload.mobile);
      PP.Twilio.sendSms({
        text: 'blah',
        number: payload.mobile,
        callback: onTwilioResponse,
      })
    }
    console.log(payload.twitter, payload.mobile, payload.email);
  }
});
