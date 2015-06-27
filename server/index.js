

function onTwilioResponse (error, result) {
  if (error) {
    console.error('nah', error);
  }
  else {
    console.log('twilio confirmed');
  }
}



Meteor.methods({
  textSpam: function (payload) {
    PP.Twilio.sendSms({
        text: payload.message
      , number: payload.number
      , callback: onTwilioResponse
    });
  },

  callSpam: function (payload) {
    PP.Twilio.call({
        number: payload.number
      , url: Config.url + '/api/call?message=' + encodeURIComponent(payload.message)
      , callback: onTwilioResponse
    });
  },

  tweetBabyTweet: function (payload) {
    var T = new TwitMaker({
        consumer_key: Config.twitter.consumerKey
      , consumer_secret: Config.twitter.consumerSecret
      , access_token: Config.twitter.accessToken
      , access_token_secret: Config.twitter.accessSecretToken
    });

    T.post('statuses/update', {
      status: '@' + payload.handle + ' , ' + payload.message
    }, function(err, data, response) {
      console.log(data)
    })
  },
});
