// Simple GraphQL endpoint for Vercel
export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  try {
    const { query } = req.body;
    
    // Mock data
    const mockProjects = [
      {
        id: "1",
        title: "Skinstric AI",
        description: "A.I. personalized skincare routine platform with advanced machine learning algorithms for skin analysis and product recommendations.",
        technologies: ["ES6+", "Next.js", "TailwindCSS", "OpenAI API", "Machine Learning"]
      },
      {
        id: "2",
        title: "Netflix Clone",
        description: "A full-featured Netflix clone built with React and Firebase, featuring user authentication, movie browsing, and streaming capabilities.",
        technologies: ["React", "Vite", "Firebase", "CSS3", "JavaScript"]
      },
      {
        id: "3",
        title: "Ori Company",
        description: "A modern corporate website showcasing innovative business solutions with responsive design and interactive elements.",
        technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Responsive Design"]
      },
      {
        id: "4",
        title: "Creations X Platform",
        description: "A comprehensive creative platform for showcasing digital art, design work, and creative projects with portfolio management.",
        technologies: ["Vue.js", "Node.js", "MongoDB", "Express", "Socket.io"]
      }
    ];

    // Simple query parsing
    if (query && query.includes('projects')) {
      res.status(200).json({
        data: {
          projects: mockProjects
        }
      });
    } else {
      res.status(200).json({
        data: {
          message: "GraphQL endpoint is working"
        }
      });
    }
  } catch (error) {
    console.error('GraphQL Error:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: error.message
    });
  }
}