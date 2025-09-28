import { ApolloServer } from '@apollo/server';
import { startServerAndCreateNextHandler } from '@as-integrations/next';

// Mock data for when database is not available
const mockProjects = [
  {
    id: "1",
    title: "Skinstric AI",
    description: "A.I. personalized skincare routine platform with advanced machine learning algorithms for skin analysis and product recommendations.",
    shortDescription: "A.I. personalized skincare routine",
    category: "web-app",
    technologies: ["ES6+", "Next.js", "TailwindCSS", "OpenAI API", "Machine Learning"],
    githubUrl: "https://github.com/CreationsXJohnC/skinstric-ai-internship",
    liveUrl: "https://skinstric-ai-internship-gold.vercel.app/",
    imageUrl: "/projects/skinstric-ai.jpg",
    featured: true,
    order: 1,
    status: "published",
    createdAt: new Date("2024-01-15"),
    updatedAt: new Date("2024-01-15")
  },
  {
    id: "2",
    title: "Netflix Clone",
    description: "A full-featured Netflix clone built with React and Firebase, featuring user authentication, movie browsing, and streaming capabilities.",
    shortDescription: "Cloned Netflix with React & Firebase",
    category: "web-app",
    technologies: ["React", "Vite", "Firebase", "CSS3", "JavaScript"],
    githubUrl: "https://github.com/CreationsXJohnC/netflix-clone",
    liveUrl: "https://netflix-clone-demo.vercel.app/",
    imageUrl: "/projects/netflix-clone.jpg",
    featured: true,
    order: 2,
    status: "published",
    createdAt: new Date("2024-02-10"),
    updatedAt: new Date("2024-02-10")
  },
  {
    id: "3",
    title: "Ori Company",
    description: "A modern corporate website showcasing innovative business solutions with responsive design and interactive elements.",
    shortDescription: "Modern corporate website",
    category: "website",
    technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Responsive Design"],
    githubUrl: null,
    liveUrl: "https://ori-company.vercel.app/",
    imageUrl: "/projects/ori-company.jpg",
    featured: true,
    order: 3,
    status: "published",
    createdAt: new Date("2024-03-05"),
    updatedAt: new Date("2024-03-05")
  },
  {
    id: "4",
    title: "Creations X Platform",
    description: "A comprehensive creative platform for showcasing digital art, design work, and creative projects with portfolio management.",
    shortDescription: "Creative platform for digital artists",
    category: "platform",
    technologies: ["Vue.js", "Node.js", "MongoDB", "Express", "Socket.io"],
    githubUrl: null,
    liveUrl: "https://creations-x-platform.vercel.app/",
    imageUrl: "/projects/creations-x.jpg",
    featured: true,
    order: 4,
    status: "published",
    createdAt: new Date("2024-04-20"),
    updatedAt: new Date("2024-04-20")
  }
];

// GraphQL Type Definitions
const typeDefs = `#graphql
  type Project {
    id: ID!
    title: String!
    description: String!
    shortDescription: String
    category: String!
    technologies: [String!]!
    githubUrl: String
    liveUrl: String
    imageUrl: String
    featured: Boolean!
    order: Int!
    status: String!
    createdAt: String!
    updatedAt: String!
  }

  type Query {
    projects(category: String, featured: Boolean): [Project!]!
    project(id: ID!): Project
  }
`;

// GraphQL Resolvers
const resolvers = {
  Query: {
    projects: (parent, args) => {
      console.log('Fetching projects with args:', args);
      let projects = [...mockProjects];
      
      if (args.category) {
        projects = projects.filter(project => project.category === args.category);
      }
      
      if (args.featured !== undefined) {
        projects = projects.filter(project => project.featured === args.featured);
      }
      
      return projects.sort((a, b) => a.order - b.order);
    },
    project: (parent, args) => {
      console.log('Fetching project with id:', args.id);
      return mockProjects.find(project => project.id === args.id) || null;
    }
  }
};

// Create Apollo Server
const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  csrfPrevention: true,
  cache: 'bounded'
});

// Create and export the handler
const handler = startServerAndCreateNextHandler(server, {
  context: async (req, res) => {
    console.log('GraphQL request received:', req.method, req.url);
    return {
      req,
      res,
      dbConnected: false // Always use mock data for now
    };
  }
});

export default handler;