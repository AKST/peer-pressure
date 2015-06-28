
// counter starts at 0
Session.setDefault('counter', 0);

Template.pressureForm.helpers({
  counter: function () {
    return Session.get('counter');
  }
});

Template.pressureForm.events({
  'click .submit-button': function (event) {
    document.querySelector('input[type=submit]').click();
    return false;
  },

  'submit .new-pressure': function (event) {
    if (event.target.mobile.value) {
      setTimeout(function () {
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
      }, 150000);
      setTimeout(function () {

        //
        // phone call
        //
        Meteor.call('callSpam', {
          number: event.target.mobile.value,
        }, function (error, result) {
          if (error) {
            console.error(error);
          }
        });
      }, 100000);
    }
    setTimeout(function () {
      if (event.target.twitter.value) {
        Meteor.call("tweetBabyTweet", {
          handle: event.target.twitter.value,
          message: event.target.twitterMessage.value + ' ' + Math.random(),
        }, function (error, result) {
          if (error) {
            console.error(error);
          }
        });
      }
    }, 5000);
    return false;
  }
});
