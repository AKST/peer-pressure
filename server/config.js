Config = {
  twilio: {
    number: process.env.TWILIO_NUMBER,
    auth_token: process.env.TWILIO_AUTH_TOKEN,
    account_sid: process.env.TWILIO_ACCOUNT_SID,
    test_number: process.env.TEST_NUMBER
  },
  twitter: {
    consumerKey: process.env.TWITTER_CON_KEY,
    consumerSecret: process.env.TWITTER_CON_SECRET,
    accessToken: process.env.TWITTER_ACC_TOK,
    accessSecretToken: process.env.TWITTER_ACC_SEC,
  },
  snapchat: {
    username: process.env.SNAPCHAT_USERNAME,
    password: process.env.SNAPCHAT_PASSWORD
  },
  mailchimp: {
    key: process.env.MAILCHIMP_KEY,
  }
};
