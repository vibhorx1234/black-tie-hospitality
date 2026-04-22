const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

router.post('/', async (req, res) => {
  const { name, email, phone, subject, message, propertyInterest } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
  }

  const ownerMailOptions = {
    from: `"BTH Website" <${process.env.EMAIL_USER}>`,
    to: process.env.OWNER_EMAIL,
    subject: `[BTH Enquiry] ${subject || 'New Contact Form Submission'}`,
    html: `
      <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; background: #0D1117; color: #F5F0E8; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #1a1f2e, #0D1117); padding: 30px; border-bottom: 2px solid #C9A84C;">
          <h1 style="margin: 0; color: #C9A84C; font-size: 24px; letter-spacing: 2px;">BLACK TIE HOSPITALITY</h1>
          <p style="margin: 5px 0 0; color: #a0a0a0; font-size: 13px; letter-spacing: 1px;">NEW ENQUIRY RECEIVED</p>
        </div>
        <div style="padding: 30px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2f3e; color: #C9A84C; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; width: 140px;">Full Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2f3e; color: #F5F0E8; font-size: 15px;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2f3e; color: #C9A84C; font-size: 12px; letter-spacing: 1px; text-transform: uppercase;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2f3e; color: #F5F0E8; font-size: 15px;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2f3e; color: #C9A84C; font-size: 12px; letter-spacing: 1px; text-transform: uppercase;">Phone</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2f3e; color: #F5F0E8; font-size: 15px;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2f3e; color: #C9A84C; font-size: 12px; letter-spacing: 1px; text-transform: uppercase;">Subject</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2f3e; color: #F5F0E8; font-size: 15px;">${subject || 'General Enquiry'}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2f3e; color: #C9A84C; font-size: 12px; letter-spacing: 1px; text-transform: uppercase;">Property Interest</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #2a2f3e; color: #F5F0E8; font-size: 15px;">${propertyInterest || 'Not specified'}</td>
            </tr>
          </table>
          <div style="margin-top: 24px;">
            <p style="color: #C9A84C; font-size: 12px; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 10px;">Message</p>
            <div style="background: #1a1f2e; border-left: 3px solid #C9A84C; padding: 16px 20px; border-radius: 4px; color: #F5F0E8; font-size: 15px; line-height: 1.7;">${message}</div>
          </div>
        </div>
        <div style="padding: 20px 30px; background: #0a0d14; text-align: center;">
          <p style="margin: 0; color: #555; font-size: 12px;">This email was sent from the Black Tie Hospitality website contact form.</p>
        </div>
      </div>
    `,
  };

  const autoReplyOptions = {
    from: `"Black Tie Hospitality" <${process.env.EMAIL_USER}>`,
    to: email,
    subject: 'Thank you for reaching out — Black Tie Hospitality',
    html: `
      <div style="font-family: 'Georgia', serif; max-width: 600px; margin: 0 auto; background: #0D1117; color: #F5F0E8; border-radius: 12px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #1a1f2e, #0D1117); padding: 30px; border-bottom: 2px solid #C9A84C; text-align: center;">
          <h1 style="margin: 0; color: #C9A84C; font-size: 26px; letter-spacing: 3px;">BLACK TIE HOSPITALITY</h1>
          <p style="margin: 8px 0 0; color: #a0a0a0; font-size: 12px; letter-spacing: 2px;">PREMIUM PROPERTY MANAGEMENT</p>
        </div>
        <div style="padding: 40px 30px;">
          <h2 style="color: #F5F0E8; font-size: 22px; margin: 0 0 16px;">Dear ${name},</h2>
          <p style="color: #c0bdb8; line-height: 1.8; font-size: 15px;">Thank you for reaching out to Black Tie Hospitality. We have received your enquiry and our team will get back to you within <strong style="color: #C9A84C;">24–48 business hours</strong>.</p>
          <p style="color: #c0bdb8; line-height: 1.8; font-size: 15px;">In the meantime, feel free to explore our portfolio of premium properties and management models on our website.</p>
          <div style="margin: 30px 0; padding: 20px; background: #1a1f2e; border-radius: 8px; border: 1px solid #2a2f3e;">
            <p style="margin: 0 0 8px; color: #C9A84C; font-size: 12px; letter-spacing: 1px; text-transform: uppercase;">Your Message Reference</p>
            <p style="margin: 0; color: #888; font-size: 14px; font-style: italic;">"${message.substring(0, 120)}${message.length > 120 ? '...' : ''}"</p>
          </div>
          <p style="color: #c0bdb8; line-height: 1.8; font-size: 15px;">Warm regards,<br/><strong style="color: #F5F0E8;">The Black Tie Hospitality Team</strong></p>
        </div>
        <div style="padding: 20px 30px; background: #0a0d14; text-align: center;">
          <p style="margin: 0 0 8px; color: #555; font-size: 12px;">📍 23S, Netaji Puram Prasad, Banipark, Jaipur, Rajasthan 302016</p>
          <p style="margin: 0; color: #555; font-size: 12px;">📞 +91 01555 58899 &nbsp;|&nbsp; ✉️ info@blacktiehospitality.com</p>
        </div>
      </div>
    `,
  };

  try {
    await transporter.sendMail(ownerMailOptions);
    await transporter.sendMail(autoReplyOptions);
    return res.status(200).json({ success: true, message: 'Your message has been sent successfully!' });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ success: false, error: 'Failed to send email. Please try again later.' });
  }
});

module.exports = router;