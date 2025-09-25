import dotenv from 'dotenv';
import { testConnection, initializeModels, Project, Skill, Experience, Profile } from '../models/index.js';

dotenv.config();

const seedData = {
  profile: {
    name: 'John Che Larracuente',
    title: 'Creative Director & Full Stack Developer',
    bio: 'Passionate creative director and full-stack developer at John C Creations. I specialize in creating innovative digital experiences that blend cutting-edge technology with compelling design. My expertise spans from concept development to full-scale implementation.',
    email: 'john@johncreations.com',
    phone: '+1 (555) 123-4567',
    location: 'United States',
    avatarUrl: '/assets/Creation X Logo Updated.svg',
    socialLinks: {
      github: 'https://github.com/johncreations',
      linkedin: 'https://linkedin.com/in/johnchelarracuente',
      twitter: 'https://twitter.com/johncreations',
      website: 'https://johncreations.com'
    }
  },

  skills: [
    // Frontend Technologies
    { name: 'JavaScript', category: 'frontend', proficiency: 92, color: '#F7DF1E', iconUrl: '/skills-icons/JavaScript.png', externalUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', order: 1 },
    { name: 'TypeScript', category: 'frontend', proficiency: 85, color: '#3178C6', iconUrl: '/skills-icons/TypeScript.png', externalUrl: 'https://www.typescriptlang.org/', order: 2 },
    { name: 'HTML5', category: 'frontend', proficiency: 95, color: '#E34F26', iconUrl: '/skills-icons/HTML5.png', externalUrl: 'https://developer.mozilla.org/en-US/docs/Glossary/HTML5', order: 3 },
    { name: 'CSS3', category: 'frontend', proficiency: 90, color: '#1572B6', iconUrl: '/skills-icons/CSS.png', externalUrl: 'https://www.w3.org/TR/CSS/#css', order: 4 },
    { name: 'React', category: 'frontend', proficiency: 88, color: '#61DAFB', iconUrl: '/skills-icons/ReactJs.png', externalUrl: 'https://reactjs.org/', order: 5 },
    { name: 'Vue.js', category: 'frontend', proficiency: 90, color: '#4FC08D', iconUrl: '/skills-icons/VueJs.png', externalUrl: 'https://vuejs.org/', order: 6 },
    { name: 'Next.js', category: 'frontend', proficiency: 82, color: '#000000', iconUrl: '/skills-icons/NextJs.png', externalUrl: 'https://nextjs.org/docs', order: 7 },
    { name: 'TailwindCSS', category: 'frontend', proficiency: 85, color: '#06B6D4', iconUrl: '/skills-icons/TailwindCSS.png', externalUrl: 'https://tailwindcss.com/', order: 8 },
    { name: 'Redux', category: 'frontend', proficiency: 80, color: '#764ABC', iconUrl: '/skills-icons/Redux.png', externalUrl: 'https://redux.js.org/', order: 9 },
    { name: 'ES6', category: 'frontend', proficiency: 88, color: '#F7DF1E', iconUrl: '/skills-icons/ES6.svg', externalUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla', order: 10 },

    // Backend Technologies
    { name: 'Node.js', category: 'backend', proficiency: 85, color: '#339933', iconUrl: '/skills-icons/NodeJs.png', externalUrl: 'https://nodejs.org/en/', order: 11 },
    { name: 'Express', category: 'backend', proficiency: 80, color: '#000000', iconUrl: '/skills-icons/ExpressJs.png', externalUrl: 'https://expressjs.com/', order: 12 },
    { name: 'FastAPI', category: 'backend', proficiency: 75, color: '#009688', iconUrl: '/skills-icons/fastapi.svg', externalUrl: 'https://fastapi.tiangolo.com/', order: 13 },
    { name: 'Firebase', category: 'backend', proficiency: 78, color: '#FFCA28', iconUrl: '/skills-icons/Firebase.png', externalUrl: 'https://firebase.google.com/', order: 14 },
    { name: 'GraphQL', category: 'backend', proficiency: 82, color: '#E10098', iconUrl: '/skills-icons/GraphQL.png', externalUrl: 'https://graphql.org/', order: 15 },
    { name: 'Apollo Server', category: 'backend', proficiency: 78, color: '#311C87', iconUrl: '/skills-icons/ApolloServer.png', externalUrl: 'https://www.apollographql.com/docs/apollo-server/', order: 16 },
    { name: 'PostgreSQL', category: 'backend', proficiency: 75, color: '#336791', iconUrl: '/skills-icons/PostgreSQL.png', externalUrl: 'https://www.postgresql.org/', order: 17 },

    // Programming Languages
    { name: 'Java', category: 'backend', proficiency: 75, color: '#ED8B00', iconUrl: '/skills-icons/Java.png', externalUrl: 'https://www.oracle.com/java/', order: 18 },

    // Tools & Development Environment
    { name: 'VS Code', category: 'tools', proficiency: 95, color: '#007ACC', iconUrl: '/skills-icons/VSCode.png', externalUrl: 'https://code.visualstudio.com/', order: 19 },
    { name: 'macOS', category: 'tools', proficiency: 90, color: '#000000', iconUrl: '/skills-icons/MacOS.png', externalUrl: 'https://apple.com', order: 20 },

    // Design & Creative Tools
    { name: 'Figma', category: 'design', proficiency: 85, color: '#F24E1E', iconUrl: '/skills-icons/Figma.png', externalUrl: 'https://www.figma.com/', order: 21 },
    { name: 'Photoshop', category: 'design', proficiency: 80, color: '#31A8FF', iconUrl: '/skills-icons/Photoshop.png', externalUrl: 'https://www.adobe.com/uk/products/photoshop.html', order: 22 },
    { name: 'Illustrator', category: 'design', proficiency: 75, color: '#FF9A00', iconUrl: '/skills-icons/AdobeIllustrator.png', externalUrl: 'https://www.adobe.com/uk/products/illustrator.html', order: 23 },
    { name: 'Premiere Pro', category: 'design', proficiency: 70, color: '#9999FF', iconUrl: '/skills-icons/PremierePro.png', externalUrl: 'https://www.adobe.com/uk/products/premiere.html', order: 24 },
    { name: 'After Effects', category: 'design', proficiency: 65, color: '#9999FF', iconUrl: '/skills-icons/AfterEffects.png', externalUrl: 'https://www.adobe.com/uk/products/aftereffects.html', order: 25 },
    { name: 'Canva', category: 'design', proficiency: 88, color: '#00C4CC', iconUrl: '/skills-icons/Canva.png', externalUrl: 'https://www.canva.com/', order: 26 },

    // Web Platforms & CMS
    { name: 'WordPress', category: 'other', proficiency: 85, color: '#21759B', iconUrl: '/skills-icons/WordPress.png', externalUrl: 'https://wordpress.com', order: 27 },
    { name: 'Wix', category: 'other', proficiency: 80, color: '#0C6EFC', iconUrl: '/skills-icons/Wix.png', externalUrl: 'https://wix.com', order: 28 }
  ],

  experiences: [
    {
      company: 'John C Creations',
      position: 'Founder & Creative Director',
      description: 'Founded and lead John C Creations, a creative studio specializing in innovative digital solutions. Oversee all creative projects, client relationships, and technical development while building a team of talented designers and developers.',
      startDate: '2020-01-01',
      current: true,
      location: 'United States',
      technologies: ['Vue.js', 'React', 'Node.js', 'GraphQL', 'Design Systems', 'AWS'],
      order: 1
    },
    {
      company: 'Creative Digital Agency',
      position: 'Senior Full Stack Developer',
      description: 'Led development of high-profile client projects and mentored junior developers. Specialized in creating scalable web applications and implementing modern design systems for enterprise clients.',
      startDate: '2018-06-01',
      endDate: '2019-12-31',
      location: 'Remote',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Docker'],
      order: 2
    },
    {
      company: 'Tech Startup Collective',
      position: 'Frontend Developer',
      description: 'Developed user interfaces for multiple startup projects, focusing on responsive design and user experience optimization. Collaborated with cross-functional teams to deliver innovative digital products.',
      startDate: '2016-03-01',
      endDate: '2018-05-31',
      location: 'San Francisco, CA',
      technologies: ['JavaScript', 'CSS3', 'Vue.js', 'SASS', 'Git'],
      order: 3
    }
  ],

  projects: [
    {
      title: 'John C Creations Platform',
      description: 'A comprehensive creative platform showcasing innovative digital solutions and design services. Features portfolio management, client collaboration tools, and project showcase capabilities built with modern web technologies.',
      shortDescription: 'Creative platform for digital solutions and design services',
      technologies: ['Vue.js', 'Node.js', 'GraphQL', 'PostgreSQL', 'AWS'],
      githubUrl: 'https://github.com/johncreations/platform',
      liveUrl: 'https://johncreations.com',
      imageUrl: '/assets/johncreations-platform.jpg',
      featured: true,
      order: 1,
      status: 'published',
      category: 'platform'
    },
    {
      title: 'Creative Studio Dashboard',
      description: 'An advanced project management and creative workflow dashboard designed for creative agencies. Includes client management, project tracking, asset organization, and team collaboration features.',
      shortDescription: 'Project management dashboard for creative workflows',
      technologies: ['React', 'TypeScript', 'Express', 'MongoDB', 'Socket.io'],
      githubUrl: 'https://github.com/johncreations/studio-dashboard',
      liveUrl: 'https://dashboard.johncreations.com',
      imageUrl: '/assets/studio-dashboard.jpg',
      featured: true,
      order: 2,
      status: 'published',
      category: 'dashboard'
    },
    {
      title: 'Digital Brand Identity System',
      description: 'A comprehensive digital brand identity system that helps businesses establish consistent visual presence across all digital platforms. Includes logo generation, color palette tools, and brand guideline creation.',
      shortDescription: 'Digital brand identity and visual consistency system',
      technologies: ['JavaScript', 'CSS3', 'SVG', 'Design Systems', 'Figma API'],
      githubUrl: 'https://github.com/johncreations/brand-identity',
      liveUrl: 'https://branding.johncreations.com',
      imageUrl: '/assets/brand-identity.jpg',
      featured: false,
      order: 3,
      status: 'published',
      category: 'branding'
    }
  ]
};

async function migrate() {
  try {
    console.log('🔄 Starting database migration...');
    
    // Test connection and initialize models
    await testConnection();
    await initializeModels();

    // Seed Profile
    console.log('👤 Creating profile...');
    await Profile.upsert(seedData.profile);

    // Seed Skills
    console.log('🛠️ Creating skills...');
    for (const skill of seedData.skills) {
      await Skill.upsert(skill, { conflictFields: ['name'] });
    }

    // Seed Experiences
    console.log('💼 Creating experiences...');
    for (const experience of seedData.experiences) {
      await Experience.findOrCreate({
        where: { 
          company: experience.company, 
          position: experience.position, 
          startDate: experience.startDate 
        },
        defaults: experience
      });
    }

    // Seed Projects
    console.log('🚀 Creating projects...');
    for (const project of seedData.projects) {
      await Project.findOrCreate({
        where: { title: project.title },
        defaults: project
      });
    }

    console.log('✅ Database migration completed successfully!');
    console.log('📊 Data seeded:');
    console.log(`   - 1 Profile`);
    console.log(`   - ${seedData.skills.length} Skills`);
    console.log(`   - ${seedData.experiences.length} Experiences`);
    console.log(`   - ${seedData.projects.length} Projects`);
    
    process.exit(0);
  } catch (error) {
    console.error('❌ Migration failed:', error);
    process.exit(1);
  }
}

migrate();