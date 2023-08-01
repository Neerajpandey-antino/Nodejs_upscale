const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const app = express();
const {sendMail} = require("../Nodejs_upscale/sendmail")
const port = 4000;

// Replace these values with your email configuration
const emailConfig = {
  service: 'YourEmailServiceProvider',
  auth: {
    user: 'YourEmailAddress',
    pass: 'YourEmailPassword'
  }
};

const transporter = nodemailer.createTransport(emailConfig);

app.use(bodyParser.json());

// Simulate a user database (replace this with your actual database logic)
const users = [
  { id: 1, email: 'user1@example.com', name: 'User 1' },
  { id: 2, email: 'user2@example.com', name: 'User 2' }
];

// Forgot Password API
app.post('/forgot-password', (req, res) => {
  const { email } = req.body;
  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(404).json({ message: 'User not found' });
  }

  const mailOptions = {
    from: 'YourEmailAddress',
    to: user.email,
    subject: 'Password Reset Request',
    text: `Hi ${user.name},\n\nPlease click on the link below to reset your password.\n\nhttps://yourdomain.com/reset-password?userId=${user.id}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: 'Something went wrong while sending the email' });
    }
    console.log('Email sent: ' + info.response);
    res.json({ message: 'Email sent successfully' });
  });
});

// Run the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
