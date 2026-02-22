import { createTransport } from 'nodemailer';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    res.status(400).json({
      error: 'Missing required fields',
      message: 'Name, email, and message are required',
    });
    return;
  }

  console.log('Contact form submission:', {
    name,
    email,
    subject: subject || 'No subject',
    timestamp: new Date().toISOString(),
  });

  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    res.status(200).json({
      success: true,
      message: 'Message received successfully!',
      note: 'Email credentials not configured — submission logged.',
    });
    return;
  }

  const transporter = createTransport({
    service: 'gmail',
    auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    secure: true,
    port: 465,
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'johnccreations21@gmail.com',
    subject: `Portfolio Contact: ${subject || 'New Message'}`,
    replyTo: email,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New Portfolio Contact Message
        </h2>
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <p><strong>From:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>Subject:</strong> ${subject || 'No subject'}</p>
        </div>
        <div style="background-color: #fff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px;">
          <h4 style="color: #495057; margin-top: 0;">Message:</h4>
          <p style="line-height: 1.6;">${(message || '').replace(/\n/g, '<br>')}</p>
        </div>
      </div>
    `,
    text: `From: ${name}\nEmail: ${email}\nSubject: ${subject || 'No subject'}\n\n${message}`,
  };

  transporter.sendMail(mailOptions, (error, result) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false, error: 'Failed to send email.' });
    } else {
      res.status(200).json({ success: true, message: 'Message sent successfully!', messageId: result.messageId });
    }
  });
}