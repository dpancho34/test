const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: "diegopanchomales@gmail.com",
      pass: "utqykmgxnxydzuov",
    },
  });

  transporter.verify().then(() => {
    console.log('Ready for send emails');
  });
  
module.exports = { transporter };