import nodemailer from "nodemailer";

// * 1) configure email and send it;

async function sendMail() {
  // * creating an email transporter;
  // ? SMTP:(Simple Mail Transfer Protocol)

  const transporter = nodemailer.createTransport({
    service: "gmail",
    // * You must have an valid email account to send an email to another user hence [auth:""] property is being used;
    auth: {
      user: "yashbombale@gmail.com",
      pass: "gqdo cvxa jupq jefm",
    },
  });

  //  * Configure email account;
  const mailOptions = {
    from: "yashbombale@gmail.com",
    to: "roybombale@gmail.com",
    subject: "this an nodemailer app",
    text: "sending an my first email thorugh nodejsmailer",
  };

  try {
    const result = await transporter.sendMail(mailOptions);
    console.log("email send successfully");
  } catch (error) {
    console.log(`Email send failed with error :${error}`);
  }
}

sendMail();
