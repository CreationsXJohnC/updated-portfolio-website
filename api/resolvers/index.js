import { mockProjects } from '../data/mockData.js';

export const resolvers = {
  Query: {
    projects: () => mockProjects,
    project: (parent, { id }) => mockProjects.find(p => p.id === id),
  },
};
