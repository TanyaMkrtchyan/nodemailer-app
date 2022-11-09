require('dotenv').config();
const nodemailer = require('nodemailer');

let transport = nodemailer.createTransport({
  host: "smtp.gmail.com",
  secure: true,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD
  }
});

const mailOptions = {
  from: 'webdevelopertanya@gmail.com', 
  to: 'webdevelopertanya@gmail.com',        
  subject: 'Hello from nodemailer app :)',          
  text: 'lorem ipsum', 
};

transport.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log('error - ', error)
  } else {
    console.log('mail sent successfully! ', info)
  }
});