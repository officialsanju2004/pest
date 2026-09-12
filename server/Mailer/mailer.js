// Mailer/mailer.js
const nodemailer = require("nodemailer");

const EMAIL_PORT = Number(process.env.EMAIL_PORT) || 587;

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: EMAIL_PORT,
  secure: EMAIL_PORT === 465, // true for 465, false for 587/others
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

/**
 * Send an enquiry notification email to the owner.
 */
async function sendEnquiryEmail({ name, email, phone, service, address, message }) {
  const mailOptions = {
    from: `"PESTEXIT Website" <${process.env.EMAIL_USER}>`,
    to: process.env.OWNER_EMAIL,
    replyTo: email,
    subject: `New Enquiry: ${service || "Website Contact"}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #e6e9ec; border-radius: 8px;">
        <h2 style="color: #082B5C; margin-top: 0;">New Enquiry Received</h2>
        <p style="color: #46515B;">You have a new contact form submission from your website.</p>
        <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
          <tr>
            <td style="padding: 8px 0; color: #00706F; font-weight: 600; width: 120px;">Name:</td>
            <td style="padding: 8px 0; color: #082B5C;">${name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #00706F; font-weight: 600;">Email:</td>
            <td style="padding: 8px 0; color: #082B5C;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #00706F; font-weight: 600;">Phone:</td>
            <td style="padding: 8px 0; color: #082B5C;">${phone || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #00706F; font-weight: 600;">Service:</td>
            <td style="padding: 8px 0; color: #082B5C;">${service || "—"}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #00706F; font-weight: 600;">Address:</td>
            <td style="padding: 8px 0; color: #082B5C;">${address || "—"}</td>
          </tr>
        </table>
        <div style="margin-top: 20px; padding: 15px; background: #F7F8F5; border-radius: 6px;">
          <p style="margin: 0; color: #00706F; font-weight: 600;">Message:</p>
          <p style="margin: 8px 0 0; color: #082B5C; white-space: pre-wrap;">${message}</p>
        </div>
        <p style="margin-top: 25px; font-size: 12px; color: #8a95a0;">
          Sent automatically from PESTEXIT website contact form.
        </p>
      </div>
    `,
  };

  return transporter.sendMail(mailOptions);
}

module.exports = { sendEnquiryEmail };