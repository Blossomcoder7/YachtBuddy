// controllers/authController.js
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const User = require('../Models/User');


// Create a reusable transporter object using Nodemailer
const transporter = nodemailer.createTransport({
  host: 'smtp.ethereal.email',
  port: 587,
  auth: {
    user: 'judy62@ethereal.email',
    pass: 'n8xry9WMKhTfjrUr8C'
  }
});

// Generate a random reset token
function generateToken() {
  return crypto.randomBytes(20).toString('hex');
}

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;

  console.log(email)
  // console.log(req.body)
  try {
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(201).send('Email not found');
    }

    const token = generateToken();
    user.resetToken = token;
    user.resetTokenExpiry = Date.now() + 3600000;

    await user.save();
    console.log(token)
    const resetLink = `http://localhost:3000/reset-password/${token}`;
    const mailOptions = {
      from: 'yachtbuddyhosting@gmail.com',
      to: email,
      subject: 'Password Reset Request',
      text: `Click this link to reset your password: ${resetLink}`,
    };
    console.log(mailOptions)
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).send('Failed to send reset email');
      } else {
        res.status(200).send('Password reset email sent');
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};

exports.resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;

  try {
    const user = await User.findOne({
      resetToken: token,
      resetTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return res.status(401).send('Invalid or expired token');
    }

    // Set the new password, clear the reset token, and save the user
    user.password = newPassword;
    user.resetToken = undefined;
    user.resetTokenExpiry = undefined;
    await user.save();

    res.status(200).send('Password reset successful');
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
};
