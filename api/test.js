export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json({
    message: 'Test endpoint working',
    method: req.method,
    timestamp: new Date().toISOString(),
  });
}