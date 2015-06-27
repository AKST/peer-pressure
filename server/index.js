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
  textSpam: function (payload) {
    PP.Twilio.sendSms({
      text: payload.message,
      number: payload.number,
      callback: onTwilioResponse,
    });
  }
});
