// const nodemailer = require("nodemailer");

// const sendEmail = async (options) => {
//   const transporter = nodemailer.createTransport({
//     host: process.env.SMTP_HOST,
//     port: process.env.SMTP_PORT,
//     secure: false, // SSL
//     auth: {
//       user: process.env.SMTP_USER,
//       pass: process.env.SMTP_PASSWORD,
//     },
//   });

//   const message = {
//     from: `${process.env.SMTP_FROM_NAME} <${process.env.SMTP_FROM_EMAIL}>`,
//     to: options.email,
//     subject: options.subject,
//     text: options.message,
//   };
//   console.log("Sending Email...");
//   await transporter.sendMail(message, (error, info) => {
//     if (error) {
//       console.log(error.message);
//     } else {
//       console.log("Email sent: " + info.response);
//     }
//   });
// };

// module.exports = sendEmail;

const AWS = require("aws-sdk");
const SES_CONFIG = {
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_SES_REGION,
};
const AWS_SES = new AWS.SES(SES_CONFIG);

const sendEmail = (options) => {
  let params = {
    Source: process.env.FROM_EMAIL,
    Destination: {
      ToAddresses: [options.email],
    },
    ReplyToAddresses: [],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: options.message,
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: options.subject,
      },
    },
  };
  return AWS_SES.sendEmail(params).promise();
};

module.exports = sendEmail;
