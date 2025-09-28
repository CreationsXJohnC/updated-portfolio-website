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