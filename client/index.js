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
      Meteor.call('textSpam', {
        number: event.target.mobile.value,
        message: event.target.mobileMessage.value,
      }, function (error, result) {
        if (error) {
          console.log('we fucked up mobile')
          console.error(error);
        }
      });
    }
    if (event.target.twitter.value) {
      Meteor.call("tweetBabyTweet", {
        handle: event.target.twitter.value,
        message: event.target.twitterMessage.value,
      }, function (error, result) {
        if (error) {
          console.log('we fucked up twitter')
          console.error(error);
        }
      });
    }
    return false;
  }
});
