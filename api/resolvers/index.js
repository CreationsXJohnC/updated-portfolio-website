import nodemailer from 'nodemailer';
import { mockProjects, mockSkills, mockExperiences, mockProfile } from '../data/mockData.js';

async function sendContactEmail({ name, email, subject, message }) {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
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
        <div style="margin-top: 20px; font-size: 12px; color: #6c757d;">
          <p>Sent from your portfolio contact form. Reply directly to respond to ${name}.</p>
        </div>
      </div>
    `,
    text: `From: ${name}\nEmail: ${email}\nSubject: ${subject || 'No subject'}\n\n${message}`,
  });
}

export const resolvers = {
  Query: {
    projects: (_, args = {}) => {
      if (args.featured === true) {
        return mockProjects.filter(p => p.featured === true);
      }
      return mockProjects;
    },
    project: (_, { id }) => mockProjects.find(p => String(p.id) === String(id)) || null,
    profile: () => mockProfile,
    experiences: () => mockExperiences,
    skills: () => mockSkills,
  },
  Project: {
    githubUrl: (project) => project.githubUrl !== undefined ? project.githubUrl : project.repoUrl || null,
  },
  Mutation: {
    sendContactMessage: async (_, { input }) => {
      const { name, email, subject, message } = input;

      const contactMessage = {
        id: Date.now().toString(),
        name,
        email,
        subject: subject || 'No subject',
        message,
        createdAt: new Date().toISOString(),
      };

      // Only attempt email if credentials are configured
      if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
        try {
          await sendContactEmail({ name, email, subject, message });
          console.log(`Contact email sent from ${name} <${email}>`);
        } catch (err) {
          console.error('Failed to send contact email:', err.message);
          return {
            success: false,
            message: 'Your message was received but we could not send the email. Please try contacting us directly.',
            contactMessage,
          };
        }
      } else {
        console.log('EMAIL_USER/EMAIL_PASS not set — contact submission logged only:', { name, email });
      }

      return {
        success: true,
        message: 'Message sent successfully!',
        contactMessage,
      };
    },
  },
};