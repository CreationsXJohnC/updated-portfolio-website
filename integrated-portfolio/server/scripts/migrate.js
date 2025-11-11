import dotenv from 'dotenv';
import { testConnection, initializeModels, Project, Skill, Experience, Profile } from '../models/index.js';

dotenv.config();

const seedData = {
  profile: {
    name: 'John Che Larracuente',
    title: 'Creative Director & Full Stack Developer',
    bio: 'Passionate creative director and full-stack developer at John C Creations. I specialize in creating innovative digital experiences that blend cutting-edge technology with compelling design. My expertise spans from concept development to full-scale implementation.',
    email: 'johnccreations21@gmail.com',
    phone: '+1 (555) 123-4567',
    location: 'United States',
    avatarUrl: '/DSCF8979.jpg',
    socialLinks: {
      github: 'https://github.com/CreationsXJohnC',
      linkedin: 'https://www.linkedin.com/in/johnccreations/',
      youtube: 'https://www.youtube.com/@Creations_X',
      facebook: 'https://www.facebook.com/JohnCcreationsLLC',
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
      title: 'JVE Capital Investments',
      description: 'JVE Capital Investments LLC specializes in commercial & residential contracting projects. From general contracting & construction, to project design and management JVE Capital is a trusted partner in the construction industry. They have a proven track record of delivering projects on time and within budget. JVE Capital is currently located in the nations capitol of Washington, D.C.',
      shortDescription: 'A polished corporate website focused on clarity, accessibility, and trust. Clean typography, responsive layout, and performance optimization for a professional experience.',
      technologies: ['React', 'TypeScript', 'TailwindCSS'],
      githubUrl: 'https://github.com/CreationsXJohnC/jve-capital-investments-website',
      liveUrl: 'https://jve-capital-investments-website.vercel.app/',
      imageUrl: '/projects/JVE Capital - website screenshot.png',
      featured: true,
      order: 1,
      status: 'published',
      category: 'corporate'
    },
    {
      title: 'Skinstric AI',
      description: 'I worked on a React interface that made complex AI skin analysis feel simple and approachable. JavaScript, HTML, and CSS carried the UI, while Webpack and Babel kept builds quick and the codebase modern. I wrote maintainable tests in Jest and enforced clean standards with ESLint for long-term reliability. My focus was translating real-time signals into clear visuals so users could understand results at a glance. I collaborated closely with designers to balance accuracy with a calm, focused layout. Performance tuning helped the app stay responsive even during heavy processing. The end result was a confident, friendly experience for a health-tech audience.',
      shortDescription: 'AI-powered skincare analysis and recommendations',
      technologies: ['ES6+', 'Next.js', 'TailwindCSS'],
      githubUrl: 'https://github.com/CreationsXJohnC/skinstric-ai-internship',
      liveUrl: 'https://skinstric-ai-internship-gold.vercel.app/',
      imageUrl: '/projects/Skinstric AI - website screenshot.png',
      featured: true,
      order: 2,
      status: 'published',
      category: 'ai'
    },
    {
      title: 'Netflix Clone',
      description: 'I created a streaming experience that feels familiar and cinematic without sacrificing speed. React drives the UI, with JavaScript/HTML/CSS crafting a clean, responsive layout on any device. Vite and hot module replacement made iteration fast, so features shipped quickly and safely. Firebase powers authentication and data services, keeping the experience real-time and reliable. I paid special attention to navigation and loading states to keep users immersed. ESLint enforced consistent, readable code as the project grew. The project demonstrates how modern tooling and cloud services can deliver a smooth, app-like media experience on the web.',
      shortDescription: 'Netflix clone with streaming interface',
      technologies: ['React', 'Vite', 'Firebase'],
      githubUrl: 'https://github.com/CreationsXJohnC/netflix-clone-website',
      liveUrl: 'https://netflix-clone-website-creationsx.vercel.app/',
      imageUrl: '/projects/Netfilx Clone - website screenshot.png',
      featured: false,
      order: 3,
      status: 'published',
      category: 'web-app'
    },
    {
      title: 'Ultraverse NFT World',
      description: 'I helped build a marketplace where creators and collectors meet through a clear, lively interface. React and JavaScript formed the core, while dynamic routing created a smooth path through collections and item detail views. I integrated external APIs to surface listings and metadata in real time. Carousels and subtle animations added delight without slowing the page. Jest tests kept key flows safe, and Git workflows (branching, merging, pull requests) made collaboration smooth. Webpack and Babel ensured the bundle stayed modern and efficient. The outcome was a usable, visually engaging marketplace that respected both speed and storytelling.',
      shortDescription: 'NFT marketplace and virtual world platform',
      technologies: ['JavaScript', 'CSS3', 'Node.js'],
      githubUrl: 'https://github.com/CreationsXJohnC/nft-marketplace-internship',
      liveUrl: 'https://nft-marketplace-internship-creationsx.vercel.app/',
      imageUrl: '/projects/Ultraverse NFT World - website screenshot.png',
      featured: true,
      order: 4,
      status: 'published',
      category: 'blockchain'
    },
    {
      title: 'Summarist Audio Library',
      description: 'I developed an audio-first web app that lets users explore and purchase book summaries with confidence. Next.js and TypeScript power a responsive, maintainable frontend, styled with Tailwind CSS/PostCSS for speed and consistency. On the backend, Node.js API routes run on Vercel, while Firebase supports client-side data needs. Stripe handles secure payments so the checkout feels seamless and trustworthy. I focused on clear information design so users can scan, sample, and decide quickly. React components keep the experience cohesive and easy to extend. Together, these choices deliver a fast, modern product that feels polished from homepage to receipt.',
      technologies: ['Next.js', 'TailwindCSS', 'Node.js'],
      githubUrl: 'https://github.com/CreationsXJohnC/summarist-internship',
      liveUrl: 'https://summarist-internship-tau.vercel.app/',
      imageUrl: '/projects/Summarist - website screenshot.png',
      featured: false,
      order: 5,
      status: 'published',
      category: 'web-app'
    },
    {
      title: 'Movie Entertainment',
      description: 'I built a searchable movie library that turns curiosity into quick discovery. React with JavaScript/HTML/CSS powers a responsive interface that feels natural across desktop and mobile. The OMDB API supplies rich data, while my frontend-backend connections keep results flowing effortlessly. Webpack and Babel support an efficient dev cycle and a lean production build. Jest tests gave me confidence to refactor and add features without regressions. I designed the UI to minimize friction—clear inputs, thoughtful empty states, and readable detail pages. It’s a practical showcase of API integration, performance, and user-first design.',
      shortDescription: 'Movie discovery and entertainment platform',
      technologies: ['TypeScript', 'React', 'OMDb API'],
      githubUrl: 'https://github.com/CreationsXJohnC/movie-entertainment-online-library',
      liveUrl: 'https://movie-entertainment-online-library.vercel.app/',
      imageUrl: '/projects/Movie Entertainment - website screenshot.png',
      featured: false,
      order: 6,
      status: 'published',
      category: 'entertainment'
    },
    {
      title: 'E-Commerce Book Library',
      description: 'I created an online bookstore experience that emphasizes speed, clarity, and trust. Built with React and JavaScript/HTML/CSS, the app uses dynamic routing to keep navigation fluid and predictable. API integration pulls fresh catalog data while caching and request patterns keep things responsive. Skeleton loading states reduce perceived wait time and set expectations during fetches. Jest testing helps ensure carts, filters, and checkout flows remain stable as features grow. Webpack and Babel provide a modern toolchain for fast builds and clean code. The result is a friendly, high-performing shopping journey from browse to buy.',
      shortDescription: 'E-commerce platform for book enthusiasts',
      technologies: ['HTML5', 'CSS', 'Babel'],
      githubUrl: 'https://github.com/CreationsXJohnC/e-commerce-book-library',
      liveUrl: 'https://e-commerce-book-library.vercel.app/',
      imageUrl: '/projects/E-Commerce Book Library - website screenshot.png',
      featured: false,
      order: 7,
      status: 'published',
      category: 'e-commerce'
    },
    {
      title: 'Ori Company',
      description: 'Ori Company was founded in Washington, DC as a licensed medical cannabis cultivation and retail operation. Leadership focused on building digital platforms and ecommerce integrations that made discovery and purchasing simple. Compliance systems and customer engagement tools were implemented, increasing operational efficiency by thirty percent while maintaining regulatory alignment. A corporate website and online store were built and maintained to expand patient access. Improvements to navigation, content, and promotions drove a twenty percent lift in online sales. Investor pitch decks and presentations were developed to support an ongoing raise of five to ten million dollars. Stakeholder relationships were cultivated to advance growth and protect brand integrity. The company was positioned to serve more than seven million annual visitors and seven hundred thousand residents in the District. A clear vision for a vertically integrated model targets more than eighty million dollars in annual revenue. The mission centers on quality, community impact, and sustainable growth.',
      shortDescription: 'Corporate website with service showcase',
      technologies: ['HTML', 'CSS', 'JavaScript'],
      githubUrl: null,
      liveUrl: 'https://oricompanydc.com/',
      imageUrl: '/projects/Ori Company - website screenshot.png',
      featured: false,
      order: 8,
      status: 'published',
      category: 'corporate'
    },
    {
      title: 'Creations X John C',
      description: 'Founded by John C, Creations X — pronounced "Creations By" — embodies the mantra: "Think 2 Create & Create 2 Inspire." It is more than a creative agency; it is John C’s canvas for collaborating & showcasing digital art through motion, sound, and design. From photography and videography to drone visuals, live streaming, and digital experiences, John C transforms ideas into immersive stories that connect art, technology, and emotion.',
      shortDescription: "A comprehensive content portfolio showcasing John C's digital art through various mediums.",
      technologies: ['Canva', 'HTML', 'CSS'],
      githubUrl: null,
      liveUrl: 'https://www.johnccreations.com/creationsx',
      imageUrl: '/projects/Creations X Platform - website screenshot.png',
      featured: false,
      order: 9,
      status: 'published',
      category: 'platform'
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
      const existingProject = await Project.findOne({ where: { title: project.title } });
      if (existingProject) {
        await existingProject.update(project);
        console.log(`Updated project: ${project.title}`);
      } else {
        await Project.create(project);
        console.log(`Created project: ${project.title}`);
      }
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