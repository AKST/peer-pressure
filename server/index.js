Meteor.methods({
  sendSpam: function (payload) {
    console.log(payload.twitter, payload.mobile, payload.email);
  }
});
