require('dotenv').config();
const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const emailUser = process.env.nodemailer_user;
const emailPass = process.env.nodemailer_pass;

router.post('/', async (req, res) => {
  console.log('post req: ', req);
  let fullName = req.body.fullName;
  let email = req.body.email;
  let message = req.body.message;

  try {
    let transporter = nodemailer.createTransport({
      service: 'Outlook365',
      auth: {
        user: emailUser,
        pass: emailPass,
      },
    });

    let mailOptions = {
      from: emailUser,
      to: 'lbarnett712@gmail.com',
      subject: `Hello from fiverr test. From: ${fullName}`,
      text: `From: ${email} Message: ${message}`,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      console.log('mailOptions: ', mailOptions);
      console.log('error in func: ', error);
      console.log('info: ', info);

      if (error) {
        console.log(error);
      } else {
        res.send({ status: 200, message: 'Email was sent. Thank you!' });
        console.log('Email sent: ' + info.response);
      }
    });
  } catch (error) {
    console.log('error: ', error);
  }
});

router.get('/', async (req, res) => {
  console.log('in get...');
  res.send({ message: 'Hello World!' });
});

// router.post('/', async (req, res) => {
//   let fullName = req.body.fullName;
//   let email = req.body.email;
//   let message = req.body.message;

//   let transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: emailUser,
//       pass: emailPass,
//     },
//   });

//   let mailOptions = {
//     from: email,
//     to: 'lbarnett712@gmail.com',
//     subject: `Hello from fiverr test. From: ${fullName}`,
//     text: message,
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       res.send({ status: 200, message: 'Email was sent. Thank you!' });
//       console.log('Email sent: ' + info.response);
//     }
//   });
// });

module.exports = router;
