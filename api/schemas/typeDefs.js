import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Project {
    id: ID!
    order: Int
    title: String!
    category: String
    technologies: [String!]!
    description: String!
    shortDescription: String
    features: [String!]
    imageUrl: String
    liveUrl: String
    githubUrl: String
    repoUrl: String
    status: String
    featured: Boolean
    createdAt: String
    updatedAt: String
  }

  type Profile {
    id: ID!
    name: String
    title: String
    bio: String
    avatarUrl: String
  }

  type Experience {
    id: ID!
    position: String
    company: String
    description: String
    startDate: String
    endDate: String
    technologies: [String!]
  }

  type Skill {
    id: ID!
    name: String!
    iconUrl: String
    level: Int
    category: String
  }

  type ContactMessage {
    id: ID!
    name: String!
    email: String!
    subject: String
    message: String!
    createdAt: String
  }

  type ContactMessageResponse {
    success: Boolean!
    message: String
    contactMessage: ContactMessage
  }

  input ContactMessageInput {
    name: String!
    email: String!
    subject: String
    message: String!
  }

  type Query {
    projects(featured: Boolean): [Project!]
    project(id: ID!): Project
    profile: Profile
    experiences: [Experience!]
    skills: [Skill!]
  }

  type Mutation {
    sendContactMessage(input: ContactMessageInput!): ContactMessageResponse!
  }
`;
