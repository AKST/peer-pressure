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
        message: 'ayyyyyyyyyyyyyyy',
      }, function (error, result) {
        if (error) {
          console.log('we fucked up')
          console.error(error);
        }
      });
    }
    return false;
  }
});
