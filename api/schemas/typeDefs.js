import { gql } from 'graphql-tag';

export const typeDefs = gql`
  type Project {
    id: ID!
    order: Int!
    title: String!
    category: String!
    technologies: [String!]!
    description: String!
    features: [String!]!
    imageUrl: String!
    liveUrl: String
    repoUrl: String
  }

  type Query {
    projects: [Project!]
    project(id: ID!): Project
  }
`;
