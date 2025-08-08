const { SuperfaceClient } = require('@superfaceai/one-sdk');
const nodemailer = require('nodemailer');

const sdk = new SuperfaceClient({ sdkAuthToken: 'sfs_deeb23c262837f0164c89856fb0ad6865f3adb6413f7d90be3a31ac0c29d778d6d81b4bee332846da0fa4dd92e6e1a2ff9151768d27c6764191988e71dde2715_18c492d7' });

// Just check if all required fields are provided
function formValid(body) {
  return body.name && body.email && body.message;
}

export default async function handler(req, res) {
  const body = req.body;

  if (!formValid(body)) {
    res.status(422).end();
    return;
  }

  // Create a transporter using SMTP (e.g., Gmail, SendGrid SMTP, etc.)
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const message = `
    Email: ${body.email}
    Name: ${body.name}
    Message: ${body.message}
  `;

  const mailOptions = {
    from: process.env.FROM_EMAIL,
    to: process.env.TO_EMAIL,
    subject: 'Message from portfolio website',
    text: message,
  };

  const result = await transporter.sendMail(mailOptions);

  try {
    console.log(result);
    res.status(201).end();
  } catch (error) {
    console.error(error);
    res.status(500).end();
  }
}