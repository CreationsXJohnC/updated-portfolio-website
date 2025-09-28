module.exports = function(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200);
    res.end();
    return;
  }

  // Only allow POST requests
  if (req.method !== 'POST') {
    res.status(405);
    res.end(JSON.stringify({ error: 'Method not allowed' }));
    return;
  }

  try {
    var body = '';
    req.on('data', function(chunk) {
      body += chunk.toString();
    });
    
    req.on('end', function() {
      try {
        var data = JSON.parse(body);
        var query = data.query;
        
        // Mock data
        var mockProjects = [
          {
            id: "1",
            title: "Skinstric AI",
            description: "A.I. personalized skincare routine platform with advanced machine learning algorithms for skin analysis and product recommendations.",
            shortDescription: "AI-powered skincare routine platform",
            technologies: ["ES6+", "Next.js", "TailwindCSS", "OpenAI API", "Machine Learning"],
            imageUrl: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&h=300&fit=crop",
            liveUrl: "https://skinstric-ai.vercel.app",
            githubUrl: "https://github.com/creationsstudio/skinstric-ai"
          },
          {
            id: "2",
            title: "Netflix Clone",
            description: "A full-featured Netflix clone built with React and Firebase, featuring user authentication, movie browsing, and streaming capabilities.",
            shortDescription: "Full-featured Netflix clone with React",
            technologies: ["React", "Vite", "Firebase", "CSS3", "JavaScript"],
            imageUrl: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=500&h=300&fit=crop",
            liveUrl: "https://netflix-clone-react.vercel.app",
            githubUrl: "https://github.com/creationsstudio/netflix-clone"
          },
          {
            id: "3",
            title: "Ori Company",
            description: "A modern corporate website showcasing innovative business solutions with responsive design and interactive elements.",
            shortDescription: "Modern corporate website with GSAP animations",
            technologies: ["HTML5", "CSS3", "JavaScript", "GSAP", "Responsive Design"],
            imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
            liveUrl: "https://ori-company.vercel.app",
            githubUrl: "https://github.com/creationsstudio/ori-company"
          },
          {
            id: "4",
            title: "Creations X Platform",
            description: "A comprehensive creative platform for showcasing digital art, design work, and creative projects with portfolio management.",
            shortDescription: "Creative platform for digital art showcase",
            technologies: ["Vue.js", "Node.js", "MongoDB", "Express", "Socket.io"],
            imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&h=300&fit=crop",
            liveUrl: "https://creations-x.vercel.app",
            githubUrl: "https://github.com/creationsstudio/creations-x"
          }
        ];

        // Simple query parsing
        if (query && query.indexOf('projects') !== -1) {
          res.status(200);
          res.end(JSON.stringify({
            data: {
              projects: mockProjects
            }
          }));
        } else {
          res.status(200);
          res.end(JSON.stringify({
            data: {
              message: "GraphQL endpoint is working"
            }
          }));
        }
      } catch (parseError) {
        res.status(400);
        res.end(JSON.stringify({
          error: 'Invalid JSON',
          message: parseError.message
        }));
      }
    });
  } catch (error) {
    res.status(500);
    res.end(JSON.stringify({
      error: 'Internal server error',
      message: error.message
    }));
  }
};