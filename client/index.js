// counter starts at 0
Session.setDefault('counter', 0);

Template.pressureForm.helpers({
  counter: function () {
    return Session.get('counter');
  }
});

Template.pressureForm.events({
  'submit .new-pressure': function (event) {
    Meteor.call('sendSpam', {
      twitter: event.target.twitter.value,
      mobile: event.target.mobile.value,
      email: event.target.email.value,
    }, function (error, result) {
      if (error) {
        console.log('we fucked up')
        console.error(error);
      }
    })
    return false;
  }
});
