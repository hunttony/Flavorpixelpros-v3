module.exports = async (req, res) => {
     
    if (req.method === 'OPTIONS') {
      return res.status(200).end();
    }
  
    if (req.method === 'GET') {
      return res.status(200).json({ message: 'Welcome to the Contact Form API' });
    }
  
    return res.status(405).json({ error: 'Method not allowed' });
  };