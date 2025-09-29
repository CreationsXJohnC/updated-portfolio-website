import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language/index.js';
import { Project, Skill, Experience, ContactMessage, Profile } from '../models/index.js';
import { sendContactEmail } from '../config/emailService.js';
import { Op } from 'sequelize';
import { mockProjects, mockSkills, mockExperiences, mockProfile, mockContactMessages } from '../data/mockData.js';

// Custom Date scalar
const DateType = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    if (!value) return null;
    if (value instanceof Date) return value.toISOString();
    if (typeof value === 'string') {
      const date = new Date(value);
      return isNaN(date.getTime()) ? null : date.toISOString();
    }
    return null;
  },
  parseValue(value) {
    if (!value) return null;
    const date = new Date(value);
    return isNaN(date.getTime()) ? null : date;
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      const date = new Date(ast.value);
      return isNaN(date.getTime()) ? null : date;
    }
    return null;
  },
});

export const resolvers = {
  Date: DateType,

  Query: {
    // Projects
    projects: async (_, { featured, status }, { dbConnected }) => {
      if (!dbConnected) {
        let projects = [...mockProjects];
        if (featured !== undefined) {
          projects = projects.filter(p => p.featured === featured);
        }
        if (status) {
          projects = projects.filter(p => p.status === status.toLowerCase());
        }
        return projects.sort((a, b) => a.order - b.order);
      }

      const where = {};
      if (featured !== undefined) where.featured = featured;
      if (status) where.status = status.toLowerCase();
      
      return await Project.findAll({
        where,
        order: [['order', 'ASC'], ['createdAt', 'DESC']]
      });
    },

    project: async (_, { id }, { dbConnected }) => {
      if (!dbConnected) {
        return mockProjects.find(p => p.id === parseInt(id)) || null;
      }
      return await Project.findByPk(id);
    },

    // Skills
    skills: async (_, { category }, { dbConnected }) => {
      if (!dbConnected) {
        let skills = [...mockSkills];
        if (category) {
          skills = skills.filter(s => s.category === category.toLowerCase());
        }
        return skills.sort((a, b) => a.order - b.order || a.name.localeCompare(b.name));
      }

      const where = {};
      if (category) where.category = category.toLowerCase();
      
      return await Skill.findAll({
        where,
        order: [['order', 'ASC'], ['name', 'ASC']]
      });
    },

    skill: async (_, { id }, { dbConnected }) => {
      if (!dbConnected) {
        return mockSkills.find(s => s.id === parseInt(id)) || null;
      }
      return await Skill.findByPk(id);
    },

    // Experiences
    experiences: async (_, args, { dbConnected }) => {
      if (!dbConnected) {
        return [...mockExperiences].sort((a, b) => a.order - b.order || new Date(b.startDate) - new Date(a.startDate));
      }
      return await Experience.findAll({
        order: [['order', 'ASC'], ['startDate', 'DESC']]
      });
    },

    experience: async (_, { id }, { dbConnected }) => {
      if (!dbConnected) {
        return mockExperiences.find(e => e.id === parseInt(id)) || null;
      }
      return await Experience.findByPk(id);
    },

    // Profile
    profile: async (_, args, { dbConnected }) => {
      if (!dbConnected) {
        return mockProfile;
      }
      return await Profile.findOne({
        where: { isActive: true }
      });
    },

    // Contact Messages
    contactMessages: async (_, { status }, { dbConnected }) => {
      if (!dbConnected) {
        let messages = [...mockContactMessages];
        if (status) {
          messages = messages.filter(m => m.status === status.toLowerCase());
        }
        return messages.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      }

      const where = {};
      if (status) where.status = status.toLowerCase();
      
      return await ContactMessage.findAll({
        where,
        order: [['createdAt', 'DESC']]
      });
    },

    contactMessage: async (_, { id }, { dbConnected }) => {
      if (!dbConnected) {
        return mockContactMessages.find(m => m.id === parseInt(id)) || null;
      }
      return await ContactMessage.findByPk(id);
    }
  },

  Mutation: {
    // Contact
    sendContactMessage: async (_, { input }, { req }) => {
      try {
        // Save the contact message to database
        const contactMessage = await ContactMessage.create({
          ...input,
          ipAddress: req.ip || req.connection.remoteAddress
        });

        // Send email notification
        const emailResult = await sendContactEmail({
          name: input.name,
          email: input.email,
          subject: input.subject,
          message: input.message
        });

        if (emailResult.success) {
          console.log('Contact email sent successfully:', emailResult.messageId);
        } else {
          console.error('Failed to send contact email:', emailResult.error);
          // Note: We still return success for the database save even if email fails
        }

        return {
          success: true,
          message: 'Message sent successfully!',
          contactMessage
        };
      } catch (error) {
        console.error('Error sending contact message:', error);
        return {
          success: false,
          message: 'Failed to send message. Please try again.',
          contactMessage: null
        };
      }
    },

    // Projects
    createProject: async (_, { input }) => {
      const processedInput = {
        ...input,
        status: input.status ? input.status.toLowerCase() : 'published'
      };
      return await Project.create(processedInput);
    },

    updateProject: async (_, { id, input }) => {
      const processedInput = {
        ...input,
        status: input.status ? input.status.toLowerCase() : undefined
      };
      
      await Project.update(processedInput, { where: { id } });
      return await Project.findByPk(id);
    },

    deleteProject: async (_, { id }) => {
      const deleted = await Project.destroy({ where: { id } });
      return deleted > 0;
    },

    // Skills
    createSkill: async (_, { input }) => {
      const processedInput = {
        ...input,
        category: input.category.toLowerCase()
      };
      return await Skill.create(processedInput);
    },

    updateSkill: async (_, { id, input }) => {
      const processedInput = {
        ...input,
        category: input.category ? input.category.toLowerCase() : undefined
      };
      
      await Skill.update(processedInput, { where: { id } });
      return await Skill.findByPk(id);
    },

    deleteSkill: async (_, { id }) => {
      const deleted = await Skill.destroy({ where: { id } });
      return deleted > 0;
    },

    // Experiences
    createExperience: async (_, { input }) => {
      return await Experience.create(input);
    },

    updateExperience: async (_, { id, input }) => {
      await Experience.update(input, { where: { id } });
      return await Experience.findByPk(id);
    },

    deleteExperience: async (_, { id }) => {
      const deleted = await Experience.destroy({ where: { id } });
      return deleted > 0;
    },

    // Profile
    updateProfile: async (_, { input }) => {
      let profile = await Profile.findOne({ where: { isActive: true } });
      
      if (profile) {
        await profile.update(input);
      } else {
        profile = await Profile.create({ ...input, isActive: true });
      }
      
      return profile;
    }
  },

  // Field resolvers for enum transformations
  Project: {
    status: (project) => project.status.toUpperCase()
  },

  Skill: {
    // Remove uppercase transformation - enum expects lowercase values
    category: (skill) => skill.category
  },

  ContactMessage: {
    status: (message) => message.status.toUpperCase()
  }
};