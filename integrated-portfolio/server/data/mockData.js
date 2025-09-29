// Mock data for when database is not available
export const mockProjects = [
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

export const mockSkills = [
  {
    id: "1",
    name: "JavaScript",
    category: "frontend",
    proficiency: 95,
    iconUrl: "/skills-icons/javascript.svg",
    color: "#F7DF1E",
    order: 1
  },
  {
    id: "2",
    name: "React",
    category: "frontend",
    proficiency: 90,
    iconUrl: "/skills-icons/react.svg",
    color: "#61DAFB",
    order: 2
  },
  {
    id: "3",
    name: "Vue.js",
    category: "frontend",
    proficiency: 88,
    iconUrl: "/skills-icons/vue.svg",
    color: "#4FC08D",
    order: 3
  },
  {
    id: "4",
    name: "Node.js",
    category: "backend",
    proficiency: 85,
    iconUrl: "/skills-icons/nodejs.svg",
    color: "#339933",
    order: 4
  },
  {
    id: "5",
    name: "GraphQL",
    category: "backend",
    proficiency: 80,
    iconUrl: "/skills-icons/graphql.svg",
    color: "#E10098",
    order: 5
  }
];

export const mockExperiences = [
  {
    id: "1",
    company: "Freelance Developer",
    position: "Full Stack Developer",
    description: "Developing modern web applications using React, Vue.js, and Node.js for various clients.",
    startDate: "2023-01-01",
    endDate: null,
    current: true,
    location: "Remote",
    technologies: ["JavaScript", "React", "Vue.js", "Node.js", "GraphQL"],
    order: 1
  }
];

export const mockContactMessages = [
  {
    id: "1",
    name: "Sample Contact",
    email: "sample@example.com",
    subject: "Sample Message",
    message: "This is a sample contact message for testing purposes.",
    status: "unread",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2024-01-01")
  }
];

export const mockProfile = {
  id: "1",
  name: "John Che Larracuente",
  title: "Software Engineer & Creative Technologist",
  bio: "I'm a Software Engineer and Creative Technologist specializing in modern JavaScript with HTML5/CSS3 across the full stack. I build performant, responsive interfaces with React 18 and Vue.js 3, and implement secure backends using Node.js, Express, and Apollo GraphQL.",
  email: "johnccreations21@gmail.com",
  phone: null,
  location: "Remote",
  avatarUrl: "/DSCF8979.jpg",
  resumeUrl: "/John_Che_Larracuente-Updated_Resume-2025.pdf",
  socialLinks: {
    github: "https://github.com/CreationsXJohnC",
    linkedin: "https://linkedin.com/in/john-che-larracuente"
  },
  isActive: true
};