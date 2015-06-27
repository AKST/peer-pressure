Meteor.startup(function () {
  Twilio = Twilio(Config.ACCOUNT_SID, Config.AUTH_TOKEN);
  Snapchat = Snapchat(Config.SNAPCHAT_USERNAME,Config.SNAPCHAT_PASSWORD);

})

function onTwilioResponse (error, result) {
  if (error) {
    console.error('nah', error);
  }
  else {
    console.log('twilio confirmed');
  }
}

Meteor.methods({
  sendSpam: function (payload) {
    if (payload.mobile) {
      console.log('sending message to', payload.mobile);
      PP.Twilio.sendSms({
        text: 'blah',
        number: payload.mobile,
        callback: onTwilioResponse,
      })
    }
    console.log(payload.twitter, payload.mobile, payload.email);
  }


// Snapchat

  'getSnapchat': function getSnapchat(payload) {
      var SCApi = Meteor.npmRequire('snapchat');
      var sc = new SCApi({
          version: "1.1.0"
      });

      var username = Snapchat.username
         ,   password = Snapchat.password
         ,   time  = 0 // always our goat video so no timeout for images
         ,   filename = "https://github.com/AKST/peer-pressure/blob/master/snapchat-video.mp4"
         ,   recipient = payload.snapchat;

      var c = new sc.Client();
    c.login(username, password)
        .then(function() {
            var blob = fs.createReadStream(filename);
            return c.upload(blob, isVideo);
        }, function(err) {
            console.error("Failed to login");
            console.error(err)
        })
        .then(function(mediaId) {
            return Q.allSettled(recipients.map(function(recipient) {
                if(isVideo)
                    return c.send(mediaId, recipient).catch(function(err) {
                        console.error("Failed to send snap to", recipient);
                        console.error(err);
                    });
                else
                    return c.send(mediaId, recipient, time).catch(function(err) {
                        console.error("Failed to send snap to", recipient);
                        console.error(err);
                    });
            }));
        }, function(error) {
            console.error("Unable to upload file", filename);
            console.error(error);
        })
        .then(function(statuses) {
            console.log("All done");
        }, function(err) {
            console.error("There was an error")
            console.error(err);
        });
});
// End Snapchat
});
