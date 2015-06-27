PP.Twilio = {

  client: Twilio(Config.ACCOUNT_SID, Config.AUTH_TOKEN),

  sendSms: function (kwargs) {
    this.client.sendSms({
      to: kwargs.number,
      from: Config.twilio.number,
      body: kwargs.text
    }, kwargs.callback)
  }
};
