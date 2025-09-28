module.exports = function(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  res.setHeader('Content-Type', 'application/json');

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
    let body = '';
    req.on('data', function(chunk) {
      body += chunk.toString();
    });
    
    req.on('end', function() {
      try {
        const data = JSON.parse(body);
        const { name, email, subject, message } = data;

        // Validate required fields
        if (!name || !email || !message) {
          res.status(400).json({ 
            error: 'Missing required fields',
            message: 'Name, email, and message are required' 
          });
          return;
        }

        // Log the contact form submission
        console.log('Contact form submission received:', {
          name: name,
          email: email,
          subject: subject || 'No subject',
          message: message,
          timestamp: new Date().toISOString()
        });

        // For now, return success response
        // Email functionality will be added once environment variables are configured
        res.status(200).json({
          success: true,
          message: 'Message received successfully!',
          note: 'Contact form is working. Email functionality requires EMAIL_USER and EMAIL_PASS environment variables to be configured in Vercel.',
          data: {
            name: name,
            email: email,
            subject: subject || 'No subject',
            timestamp: new Date().toISOString()
          }
        });

      } catch (parseError) {
        console.error('Parse error:', parseError);
        res.status(400).json({
          error: 'Invalid JSON',
          message: parseError.message
        });
      }
    });

  } catch (error) {
    console.error('Error processing contact message:', error);
    res.status(500).json({
      error: 'Internal server error',
      message: 'Failed to process message. Please try again later.'
    });
  }
};