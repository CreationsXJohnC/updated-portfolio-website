import { gql } from 'graphql-tag';

export const typeDefs = gql`
  scalar Date

  type Project {
    id: ID!
    title: String!
    description: String!
    shortDescription: String
    technologies: [String!]!
    githubUrl: String
    liveUrl: String
    imageUrl: String
    featured: Boolean!
    order: Int!
    status: ProjectStatus!
    createdAt: Date!
    updatedAt: Date!
  }

  type Skill {
    id: ID!
    name: String!
    category: SkillCategory!
    proficiency: Int!
    iconUrl: String
    externalUrl: String
    color: String
    order: Int!
    createdAt: Date!
    updatedAt: Date!
  }

  type Experience {
    id: ID!
    company: String!
    position: String!
    description: String
    startDate: Date!
    endDate: Date
    current: Boolean!
    location: String
    companyUrl: String
    technologies: [String!]!
    order: Int!
    createdAt: Date!
    updatedAt: Date!
  }

  type ContactMessage {
    id: ID!
    name: String!
    email: String!
    subject: String
    message: String!
    status: MessageStatus!
    ipAddress: String
    createdAt: Date!
    updatedAt: Date!
  }

  type Profile {
    id: ID!
    name: String!
    title: String!
    bio: String
    email: String!
    phone: String
    location: String
    avatarUrl: String
    resumeUrl: String
    socialLinks: SocialLinks
    isActive: Boolean!
    createdAt: Date!
    updatedAt: Date!
  }

  type SocialLinks {
    github: String
    linkedin: String
    youtube: String
    facebook: String
    instagram: String
    website: String
    behance: String
    dribbble: String
  }

  enum ProjectStatus {
    DRAFT
    PUBLISHED
    ARCHIVED
  }

  enum SkillCategory {
    frontend
    backend
    database
    tools
    design
    other
  }

  enum MessageStatus {
    UNREAD
    READ
    REPLIED
  }

  type Query {
    # Projects
    projects(featured: Boolean, status: ProjectStatus): [Project!]!
    project(id: ID!): Project
    
    # Skills
    skills(category: SkillCategory): [Skill!]!
    skill(id: ID!): Skill
    
    # Experiences
    experiences: [Experience!]!
    experience(id: ID!): Experience
    
    # Profile
    profile: Profile
    
    # Contact Messages (admin only)
    contactMessages(status: MessageStatus): [ContactMessage!]!
    contactMessage(id: ID!): ContactMessage
  }

  type Mutation {
    # Contact
    sendContactMessage(input: ContactMessageInput!): ContactMessageResponse!
    
    # Projects (admin only)
    createProject(input: ProjectInput!): Project!
    updateProject(id: ID!, input: ProjectInput!): Project!
    deleteProject(id: ID!): Boolean!
    
    # Skills (admin only)
    createSkill(input: SkillInput!): Skill!
    updateSkill(id: ID!, input: SkillInput!): Skill!
    deleteSkill(id: ID!): Boolean!
    
    # Experiences (admin only)
    createExperience(input: ExperienceInput!): Experience!
    updateExperience(id: ID!, input: ExperienceInput!): Experience!
    deleteExperience(id: ID!): Boolean!
    
    # Profile (admin only)
    updateProfile(input: ProfileInput!): Profile!
  }

  input ContactMessageInput {
    name: String!
    email: String!
    subject: String
    message: String!
  }

  input ProjectInput {
    title: String!
    description: String!
    shortDescription: String
    technologies: [String!]!
    githubUrl: String
    liveUrl: String
    imageUrl: String
    featured: Boolean
    order: Int
    status: ProjectStatus
  }

  input SkillInput {
    name: String!
    category: SkillCategory!
    proficiency: Int!
    iconUrl: String
    externalUrl: String
    color: String
    order: Int
  }

  input ExperienceInput {
    company: String!
    position: String!
    description: String
    startDate: Date!
    endDate: Date
    current: Boolean
    location: String
    companyUrl: String
    technologies: [String!]!
    order: Int
  }

  input ProfileInput {
    name: String!
    title: String!
    bio: String
    email: String!
    phone: String
    location: String
    avatarUrl: String
    resumeUrl: String
    socialLinks: SocialLinksInput
    isActive: Boolean
  }

  input SocialLinksInput {
    github: String
    linkedin: String
    youtube: String
    facebook: String
    instagram: String
    website: String
    behance: String
    dribbble: String
  }

  type ContactMessageResponse {
    success: Boolean!
    message: String!
    contactMessage: ContactMessage
  }
`;