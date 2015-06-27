
// counter starts at 0
Session.setDefault('counter', 0);

Template.pressureForm.helpers({
  counter: function () {
    return Session.get('counter');
  }
});

Template.pressureForm.events({
  'submit .new-pressure': function (event) {
    if (event.target.mobile.value) {
      if (event.target.mobileMessage.value) {
        Meteor.call('textSpam', {
          number: event.target.mobile.value,
          message: event.target.mobileMessage.value,
        }, function (error, result) {
          if (error) {
            console.error(error);
          }
        });
      }
      if (event.target.mobileCall.value) {
        Meteor.call('callSpam', {
          number: event.target.mobile.value,
          message: event.target.mobileCall.value,
        }, function (error, result) {
          if (error) {
            console.error(error);
          }
        });
      }
    }
    if (event.target.twitter.value) {
      Meteor.call("tweetBabyTweet", {
        handle: event.target.twitter.value,
        message: event.target.twitterMessage.value,
      }, function (error, result) {
        if (error) {
          console.error(error);
        }
      });
    }
    return false;
  }
});
