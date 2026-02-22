import { mockProjects, mockSkills, mockExperiences, mockProfile } from '../data/mockData.js';

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
    // repoUrl is the field name in older data; githubUrl is what the frontend queries
    githubUrl: (project) => project.githubUrl !== undefined ? project.githubUrl : project.repoUrl || null,
  },
  Mutation: {
    sendContactMessage: (_, { input }) => ({
      success: true,
      message: 'Message received! (local dev mode)',
      contactMessage: {
        id: Date.now().toString(),
        name: input.name,
        email: input.email,
        subject: input.subject || 'No subject',
        message: input.message,
        createdAt: new Date().toISOString(),
      },
    }),
  },
};
