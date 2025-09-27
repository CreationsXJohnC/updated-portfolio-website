import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language/index.js';
import { Project, Skill, Experience, ContactMessage, Profile } from '../models/index.js';
import { sendContactEmail } from '../config/emailService.js';
import { Op } from 'sequelize';

// Custom Date scalar
const DateType = new GraphQLScalarType({
  name: 'Date',
  description: 'Date custom scalar type',
  serialize(value) {
    return value instanceof Date ? value.toISOString() : null;
  },
  parseValue(value) {
    return new Date(value);
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return new Date(ast.value);
    }
    return null;
  },
});

export const resolvers = {
  Date: DateType,

  Query: {
    // Projects
    projects: async (_, { featured, status }) => {
      const where = {};
      if (featured !== undefined) where.featured = featured;
      if (status) where.status = status.toLowerCase();
      
      return await Project.findAll({
        where,
        order: [['order', 'ASC'], ['createdAt', 'DESC']]
      });
    },

    project: async (_, { id }) => {
      return await Project.findByPk(id);
    },

    // Skills
    skills: async (_, { category }) => {
      const where = {};
      if (category) where.category = category.toLowerCase();
      
      return await Skill.findAll({
        where,
        order: [['order', 'ASC'], ['name', 'ASC']]
      });
    },

    skill: async (_, { id }) => {
      return await Skill.findByPk(id);
    },

    // Experiences
    experiences: async () => {
      return await Experience.findAll({
        order: [['order', 'ASC'], ['startDate', 'DESC']]
      });
    },

    experience: async (_, { id }) => {
      return await Experience.findByPk(id);
    },

    // Profile
    profile: async () => {
      return await Profile.findOne({
        where: { isActive: true }
      });
    },

    // Contact Messages
    contactMessages: async (_, { status }) => {
      const where = {};
      if (status) where.status = status.toLowerCase();
      
      return await ContactMessage.findAll({
        where,
        order: [['createdAt', 'DESC']]
      });
    },

    contactMessage: async (_, { id }) => {
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