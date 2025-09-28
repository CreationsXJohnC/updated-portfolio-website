const nodemailer = require('nodemailer');

module.exports = function(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    let body = '';
    req.on('data', function(chunk) {
      body += chunk.toString();
    });
    
    req.on('end', function() {
      try {
        const data = JSON.parse(body);
        const { name, email, subject, message } = data;

        // Validate required fields
        if (!name || !email || !message) {
          res.status(400).json({ 
            error: 'Missing required fields',
            message: 'Name, email, and message are required' 
          });
          return;
        }

        // Log the contact form submission
        console.log('Contact form submission received:', {
          name: name,
          email: email,
          subject: subject || 'No subject',
          message: message,
          timestamp: new Date().toISOString()
        });

        // Check if email credentials are available
        if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
          console.log('Email credentials not configured. Contact form data logged.');
          res.status(200).json({
            success: true,
            message: 'Message received successfully!',
            note: 'Contact form is working but email credentials are not configured.',
            data: {
              name: name,
              email: email,
              subject: subject || 'No subject',
              timestamp: new Date().toISOString()
            }
          });
          return;
        }

        // Create transporter for sending emails
        const transporter = nodemailer.createTransporter({
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          },
          secure: true,
          port: 465,
          tls: {
            rejectUnauthorized: false
          }
        });

        // Email options
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: 'johnccreations21@gmail.com',
          subject: `Portfolio Contact: ${subject || 'New Message'}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
                New Portfolio Contact Message
              </h2>
              <div style="background-color: #f8f9fa; padding: 20px; border-radius: 5px; margin: 20px 0;">
                <p style="margin: 10px 0;"><strong>From:</strong> ${name}</p>
                <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p style="margin: 10px 0;"><strong>Subject:</strong> ${subject || 'No subject'}</p>
              </div>
              <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 5px;">
                <h4 style="color: #495057; margin-top: 0;">Message:</h4>
                <p style="line-height: 1.6; color: #212529;">${(message || '').replace(/\n/g, '<br>')}</p>
              </div>
              <div style="margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 5px; font-size: 12px; color: #6c757d;">
                <p style="margin: 0;">This message was sent from your portfolio contact form.</p>
                <p style="margin: 5px 0 0 0;">Reply directly to this email to respond to ${name}.</p>
              </div>
            </div>
          `,
          text: `
New Portfolio Contact Message

From: ${name}
Email: ${email}
Subject: ${subject || 'No subject'}

Message:
${message}

---
This message was sent from your portfolio contact form.
Reply directly to this email to respond to ${name}.
          `,
          replyTo: email
        };

        // Send email
        transporter.sendMail(mailOptions, function(error, result) {
          if (error) {
            console.error('Error sending email:', error);
            res.status(500).json({
              success: false,
              error: 'Failed to send email',
              message: error.message,
              details: 'Please check your email credentials and try again.'
            });
          } else {
            console.log('Email sent successfully:', result.messageId);
            res.status(200).json({
              success: true,
              message: 'Message sent successfully!',
              messageId: result.messageId,
              data: {
                name: name,
                email: email,
                subject: subject || 'No subject',
                timestamp: new Date().toISOString()
              }
            });
          }
        });

      } catch (parseError) {
        console.error('Parse error:', parseError);
        res.status(400).json({
          error: 'Invalid JSON',
          message: parseError.message
        });
      }
    });

  } catch (error) {
    console.error('Error processing contact message:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to process message. Please try again later.'
    });
  }
};