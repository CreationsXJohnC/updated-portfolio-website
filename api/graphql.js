module.exports = function(req, res) {
  var fs = require('fs');
  var path = require('path');
  // Set CORS headers with dynamic origin and credentials support
  var origin = req.headers.origin;
  var allowedOrigins = [
    'http://localhost:5173',
    'http://localhost:5174',
    'http://localhost:5175',
    'http://localhost:5176',
    'http://localhost:5177',
    'http://localhost:4173',
    'http://localhost:3000',
    'https://www.johnccreations.design',
    'https://johnccreations.design',
    'https://updated-portfolio-website.vercel.app'
  ];
  res.setHeader('Vary', 'Origin');
  if (origin && allowedOrigins.indexOf(origin) !== -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Access-Control-Allow-Credentials', 'true');
  } else {
    // Fallback for non-browser or non-listed origins
    res.setHeader('Access-Control-Allow-Origin', '*');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Requested-With');
  res.setHeader('Content-Type', 'application/json');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(204);
    res.end();
    return;
  }

  // Only allow POST and GET requests
  if (req.method !== 'POST' && req.method !== 'GET') {
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
        var data = body ? JSON.parse(body) : {};
        var query = data.query;
        
        // Mock data - Complete project list from migration
        // Try to load projects from config for maintainability
        var configProjects = null;
        try {
          var cfgPath = path.join(__dirname, 'projects-config.json');
          if (fs.existsSync(cfgPath)) {
            var cfgRaw = fs.readFileSync(cfgPath, 'utf-8');
            var cfg = JSON.parse(cfgRaw);
            if (cfg && Array.isArray(cfg.projects)) {
              configProjects = cfg.projects;
            }
          }
        } catch (e) {
          // Fallback to embedded list below on parse or read errors
        }

        var mockProjects = configProjects || [
          {
            id: "1",
            title: "Skinstric AI",
            description: "An AI-powered skincare analysis platform that provides personalized skincare recommendations. Uses machine learning to analyze skin conditions and suggest appropriate treatments and products.",
            shortDescription: "An AI-powered skincare analysis platform that provides personalized skincare recommendations. Uses machine learning to analyze skin conditions and suggest appropriate treatments and products.",
            technologies: ["ES6+", "Next.js", "TailwindCSS"],
            imageUrl: "/projects/Skinstric AI - website screenshot.png",
            liveUrl: "https://skinstric-ai-internship-gold.vercel.app/",
            githubUrl: "https://github.com/CreationsXJohnC/skinstric-ai-internship",
            featured: true,
            order: 2,
            status: "published",
            category: "ai"
          },
          {
            id: "2",
            title: "Netflix Clone",
            description: "A fully functional Netflix clone built with modern web technologies. Features user authentication, movie browsing, search functionality, and responsive design that mimics the original Netflix interface.",
            shortDescription: "A fully functional Netflix clone built with modern web technologies. Features user authentication, movie browsing, search functionality, and responsive design that mimics the original Netflix interface.",
            technologies: ["React", "Vite", "Firebase"],
            imageUrl: "/projects/Netfilx Clone - website screenshot.png",
            liveUrl: "https://netflix-clone-website-creationsx.vercel.app/",
            githubUrl: "https://github.com/CreationsXJohnC/netflix-clone-website",
            featured: false,
            order: 3,
            status: "published",
            category: "web-app"
          },
          {
            id: "3",
            title: "Ultraverse NFT World",
            description: "A cutting-edge NFT marketplace and virtual world platform that combines blockchain technology with immersive 3D experiences. Features NFT trading, virtual galleries, and interactive metaverse environments.",
            shortDescription: "A cutting-edge NFT marketplace and virtual world platform that combines blockchain technology with immersive 3D experiences. Features NFT trading, virtual galleries, and interactive metaverse environments.",
            technologies: ["JavaScript", "CSS3", "Node.js"],
            imageUrl: "/projects/Ultraverse NFT World - website screenshot.png",
            liveUrl: "https://nft-marketplace-internship-creationsx.vercel.app/",
            githubUrl: "https://github.com/CreationsXJohnC/nft-marketplace-internship",
            featured: true,
            order: 4,
            status: "published",
            category: "blockchain"
          },
          {
            id: "8",
            title: "Summarist Audio Library",
            description: "A full-stack audio library featuring Next.js, TypeScript, React, and TailwindCSS for responsive, fast-loading performance. Listen to a variety of titles that will grab your attention & capture your imagination.",
            shortDescription: "A full-stack audio library featuring Next.js, TypeScript, React, and TailwindCSS for responsive, fast-loading performance.",
            technologies: ["Next.js", "TailwindCSS", "Node.js"],
            imageUrl: "/projects/Summarist - website screenshot.png",
            liveUrl: "https://summarist-internship-tau.vercel.app/",
            githubUrl: "https://github.com/CreationsXJohnC/summarist-internship",
            featured: false,
            order: 5,
            status: "published",
            category: "web-app"
          },
          {
            id: "4",
            title: "Movie Entertainment",
            description: "A dynamic movie discovery platform with advanced filtering, ratings, and personalized recommendations. Features a sleek interface for browsing and discovering new films.",
            shortDescription: "A dynamic movie discovery platform with advanced filtering, ratings, and personalized recommendations. Features a sleek interface for browsing and discovering new films.",
            technologies: ["TypeScript", "React", "OMDb API"],
            imageUrl: "/projects/Movie Entertainment - website screenshot.png",
            liveUrl: "https://movie-entertainment-online-library.vercel.app/",
            githubUrl: "https://github.com/CreationsXJohnC/movie-entertainment-online-library",
            featured: false,
            order: 6,
            status: "published",
            category: "entertainment"
          },
          {
            id: "5",
            title: "E-Commerce Book Library",
            description: "A comprehensive e-commerce platform for book lovers featuring advanced search, user reviews, and secure payment processing. Built with modern web technologies and optimized for performance.",
            shortDescription: "A comprehensive e-commerce platform for book lovers featuring advanced search, user reviews, and secure payment processing.",
            technologies: ["HTML5", "CSS", "Babel"],
            imageUrl: "/projects/E-Commerce Book Library - website screenshot.png",
            liveUrl: "https://e-commerce-book-library.vercel.app/",
            githubUrl: "https://github.com/CreationsXJohnC/e-commerce-book-library",
            featured: false,
            order: 7,
            status: "published",
            category: "e-commerce"
          },
          {
            id: "6",
            title: "Ori Company",
            description: "A professional corporate website showcasing business services and company portfolio. Features modern design, responsive layout, and integrated contact management system.",
            shortDescription: "A professional corporate website showcasing business services and company portfolio. Features modern design, responsive layout, and integrated contact management system.",
            technologies: ["HTML", "CSS", "JavaScript"],
            imageUrl: "/projects/Ori Company - website screenshot.png",
            liveUrl: "https://oricompanydc.com/",
            githubUrl: null,
            featured: false,
            order: 8,
            status: "published",
            category: "corporate"
          },
          {
            id: "7",
            title: "Creations X Platform",
            description: "A comprehensive creative platform showcasing innovative digital solutions and design services. Features portfolio management, client collaboration tools, and project showcase capabilities built with modern web technologies.",
            shortDescription: "A comprehensive creative platform showcasing innovative digital solutions and design services.",
            technologies: ["Canva", "HTML", "CSS"],
            imageUrl: "/projects/Creations X Platform - website screenshot.png",
            liveUrl: "https://www.johnccreations.com/creationsx",
            githubUrl: null,
            featured: false,
            order: 9,
            status: "published",
            category: "platform"
          },
          {
            id: "9",
            title: "JVE Capital Investments",
            description: "JVE Capital Investments LLC, specializing in commercial & residential contracting projects. From general contracting & construction, to project design and management.",
            shortDescription: "A polished corporate website focused on clarity, accessibility, and trust. Clean typography, responsive layout, and performance optimization for a professional experience.",
            technologies: ["React", "TypeScript", "TailwindCSS"],
            imageUrl: "/projects/JVE Capital - website screenshot.png",
            liveUrl: "https://jve-capital-investments-website.vercel.app/",
            githubUrl: "https://github.com/CreationsXJohnC/jve-capital-investments-website",
            featured: true,
            order: 1,
            status: "published",
            category: "web-app"
          }
        ];

        // Handle GraphQL queries and mutations
        if (query.indexOf('mutation') !== -1 && query.indexOf('sendContactMessage') !== -1) {
          // Handle sendContactMessage mutation
          var variables = data.variables || {};
          var input = variables.input || {};
          
          // If no variables, try to parse from inline query
          if (!input.name && query.indexOf('name:') !== -1) {
            // Parse inline arguments from query string
            var nameMatch = query.match(/name:\s*"([^"]+)"/);
            var emailMatch = query.match(/email:\s*"([^"]+)"/);
            var subjectMatch = query.match(/subject:\s*"([^"]+)"/);
            var messageMatch = query.match(/message:\s*"([^"]+)"/);
            
            input = {
              name: nameMatch ? nameMatch[1] : '',
              email: emailMatch ? emailMatch[1] : '',
              subject: subjectMatch ? subjectMatch[1] : '',
              message: messageMatch ? messageMatch[1] : ''
            };
          }
          
          // Validate required fields
          if (!input.name || !input.email || !input.message) {
            res.status(400);
            res.end(JSON.stringify({
              errors: [{
                message: 'Missing required fields: name, email, and message are required'
              }]
            }));
            return;
          }
          
          // Call the contact API endpoint to send the email
          var https = require('https');
          var contactData = JSON.stringify({
            name: input.name,
            email: input.email,
            subject: input.subject || 'No subject',
            message: input.message
          });
          
          var options = {
            hostname: req.headers.host,
            port: 443,
            path: '/api/contact',
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Content-Length': contactData.length
            }
          };
          
          var contactReq = https.request(options, function(contactRes) {
            var contactBody = '';
            contactRes.on('data', function(chunk) {
              contactBody += chunk;
            });
            
            contactRes.on('end', function() {
              try {
                var contactResult = JSON.parse(contactBody);
                var contactMessage = {
                  id: Date.now().toString(),
                  name: input.name,
                  email: input.email,
                  subject: input.subject || 'No subject',
                  message: input.message,
                  createdAt: new Date().toISOString()
                };
                
                if (contactResult.success) {
                  res.status(200);
                  res.end(JSON.stringify({
                    data: {
                      sendContactMessage: {
                        success: true,
                        message: 'Message sent successfully!',
                        contactMessage: contactMessage
                      }
                    }
                  }));
                } else {
                  res.status(500);
                  res.end(JSON.stringify({
                    errors: [{
                      message: 'Failed to send email: ' + (contactResult.message || 'Unknown error')
                    }]
                  }));
                }
              } catch (parseError) {
                res.status(500);
                res.end(JSON.stringify({
                  errors: [{
                    message: 'Failed to process email response'
                  }]
                }));
              }
            });
          });
          
          contactReq.on('error', function(error) {
            res.status(500);
            res.end(JSON.stringify({
              errors: [{
                message: 'Failed to send email: ' + error.message
              }]
            }));
          });
          
          contactReq.write(contactData);
          contactReq.end();
        } else if (query && query.indexOf('project') !== -1 && query.indexOf('projects') === -1) {
          // Handle single project detail query: project(id: "<ID>")
          var variables = data.variables || {};
          var id = variables.id || null;

          if (!id) {
            // Try to parse inline id from the query string
            var inlineMatch = query.match(/project\s*\(\s*id:\s*\"?([A-Za-z0-9_-]+)\"?\s*\)/);
            if (inlineMatch && inlineMatch[1] && inlineMatch[1].charAt(0) !== '$') {
              id = inlineMatch[1];
            }
          }

          var found = null;
          if (id) {
            found = mockProjects.find(function(p) { return String(p.id) === String(id); });
          }

          if (found) {
            // Ensure optional fields exist for client expectations
            var enriched = Object.assign({}, found);
            if (!('year' in enriched)) enriched.year = null;
            if (!('type' in enriched)) enriched.type = null;
            if (!('features' in enriched)) enriched.features = null;
            if (!('createdAt' in enriched)) enriched.createdAt = null;
            if (!('updatedAt' in enriched)) enriched.updatedAt = null;
            if (!('technologies' in enriched)) enriched.technologies = [];

            res.status(200);
            res.end(JSON.stringify({
              data: {
                project: enriched
              }
            }));
          } else {
            // Return null project if not found
            res.status(200);
            res.end(JSON.stringify({
              data: {
                project: null
              }
            }));
          }
        } else if (query && query.indexOf('projects') !== -1) {
          var projects = mockProjects;
          
          // Check if featured filter is requested
          if (query.indexOf('featured: true') !== -1) {
            projects = mockProjects.filter(function(project) {
              return project.featured === true;
            });
          }
          
          res.status(200);
          res.end(JSON.stringify({
            data: {
              projects: projects
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