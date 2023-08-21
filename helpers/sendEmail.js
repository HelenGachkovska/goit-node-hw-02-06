import nodemailer from "nodemailer";

import "dotenv/config";

const { UKRNET_EMAIL, UKRNET_PASS } = process.env;

const nodemailerConfig = {
  host: "smtp.ukr.net",
  port: 465,
  secure: true,
  auth: {
    user: UKRNET_EMAIL,
    pass: UKRNET_PASS,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = data => {
    const email = {...data, from: UKRNET_EMAIL};
    return transport.sendMail(email);
}

export default sendEmail;
