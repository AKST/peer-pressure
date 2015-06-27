// counter starts at 0
Session.setDefault('counter', 0);

Template.pressureForm.helpers({
  counter: function () {
    return Session.get('counter');
  }
});

Template.pressureForm.events({
  'submit .new-pressure': function () {
    Session.set('counter', Session.get('counter') + 1);
    console.log(Session.get('counter'));
    return false;
  }
});
