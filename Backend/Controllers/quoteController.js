const nodemailer = require('nodemailer');

// Function to send a quote via email
exports.sendQuoteEmail = async (req, res) => {
  const { recipientEmail, subject, message } = req.body;

  // Create a transporter for sending the email
  const transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
      user: 'judy62@ethereal.email',
      pass: 'n8xry9WMKhTfjrUr8C'
    }
  });

  try {
    const mailOptions = {
      from: 'yachtbuddyhosting@gmail.com',
      to: recipientEmail,
      subject: subject,
      text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error(error);
        res.status(500).send('Failed to send the quote via email');
      } else {
        res.status(200).send('Quote sent successfully');
      }
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Failed to send the quote via email');
  }
};
