PP.Twilio = {

  client: function () {
    return Twilio(Config.ACCOUNT_SID, Config.AUTH_TOKEN);
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
