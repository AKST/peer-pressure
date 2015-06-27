PP.Twilio = {

  client: function () {
    return new Twilio(
      Config.twilio.ACCOUNT_SID,
      Config.twilio.AUTH_TOKEN
    );
  },

  sendSms: function (kwargs) {
    var client = this.client();
    client.sendSms({
      to: kwargs.number,
      from: Config.twilio.number,
      body: kwargs.text
    }, kwargs.callback);
  }
};
