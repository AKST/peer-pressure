Meteor.startup(function () {
  Twilio = Twilio(Config.ACCOUNT_SID, Config.AUTH_TOKEN);
})

Meteor.methods({
  sendSpam: function (payload) {
    if (payload.mobile) {
      console.log('sending message to', payload.mobile);
    }
    console.log(payload.twitter, payload.mobile, payload.email);
  }
});
