const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "your-email-service-provider", 
  auth: {
    user: "gomycode@gmail.com", 
    pass: "your-email-password", 
  },
});

const mailOptions = {
  from: "gomycode@gmail.com",   
  to: "gomycode@gmail.com",     
  subject: "Test Email",
  text: "This is a test email sent from Node.js",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error sending email:", error);
  } else {
    console.log("Email sent:", info.response);
  }
});
