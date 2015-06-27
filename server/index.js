var sc = Meteor.npmRequire('snapchat');

// Meteor.startup(function () {
//   Snapchat = SCApi.Client(Config.SNAPCHAT_USERNAME,Config.SNAPCHAT_PASSWORD);
// })



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
      text: payload.message,
      number: payload.number,
      callback: onTwilioResponse,
    });
  },

  // Snapchat
  getSnapchat: function (payload) {

    // var sc = new SCApi({
    //     version: "1.1.0"
    // });

    var username = Config.snapchat.username
       ,   password = Config.snapchat.password
       ,   time  = 0 // always our goat video so no timeout for images
       ,   filename = "https://github.com/AKST/peer-pressure/blob/master/snapchat-video.mp4"
       ,   recipient = payload.snapchat;

    var c = new sc.Client();
    c.login(username, password).then(function() {
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
  }
});
