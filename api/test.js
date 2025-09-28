module.exports = function(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200);
  res.end(JSON.stringify({ 
    message: 'Test endpoint working',
    method: req.method,
    timestamp: new Date().toISOString()
  }));
};