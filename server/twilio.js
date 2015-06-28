PP.Twilio = {

  client: function () {
    return new Twilio(
      Config.twilio.account_sid,
      Config.twilio.auth_token
    );
  },

  sendSms: function (kwargs) {
    var client = this.client();
    client.sendSms({
      to: kwargs.number,
      from: Config.twilio.number,
      body: kwargs.text
    }, kwargs.callback);
  },

  call: function (kwargs) {
    var client = this.client();
    client.makeCall({
      to: kwargs.number,
      from: Config.twilio.number,
      url: kwargs.url
    }, kwargs.callback);
  }
};
