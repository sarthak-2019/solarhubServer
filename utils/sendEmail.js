const nodemailer = require("nodemailer");
const sendEmail = (receiver_id) => {
  var transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SENDER_EMAIL, //replace with your email
      pass: process.env.SENDER_PASSWORD, //replace with your password
    },
  });

  var mailOptions = {
    from: process.env.SENDER_EMAIL, //replace with your email
    to: receiver_id, //replace with your email
    subject: `Contact name: ${"req.body.name"}`,
    html: `<h1>Contact details</h1>`,
  };
  console.log(mailOptions);
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = sendEmail;
