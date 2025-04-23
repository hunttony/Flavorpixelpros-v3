module.exports = async (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Origin, X-Requested-With, Accept');
  
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
  
    if (req.method === 'GET') {
      return res.status(200).json({
        status: 'OK',
        message: 'Server is running properly',
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
      });
    }
  
    return res.status(405).json({ error: 'Method not allowed' });
  };