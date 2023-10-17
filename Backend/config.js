const paypal = require('paypal-rest-sdk');

// Configure PayPal SDK with your credentials
paypal.configure({
  mode: 'sandbox',
  client_id: 'YOUR_CLIENT_ID',
  client_secret: 'YOUR_CLIENT_SECRET',
});

module.exports = {
  // Secret key for JWT authentication (replace with your own secret)
  jwtSecret: 'your-secret-key',

  // MongoDB connection URI
  mongoURI:  "mongodb+srv://blossomdev:blossom@cluster0.31ciwjn.mongodb.net/",
  
  // Other configuration variables
  // ...
};
