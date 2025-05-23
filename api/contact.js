import connectDB from '../utils/db.js';
import Contact from '../models/contact.js';
import validator from 'validator';

export default async (req, res) => {
  console.log('Received request:', {
    method: req.method,
    headers: req.headers,
    body: req.body,
    url: req.url,
  });

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Origin, X-Requested-With, Accept');

  if (req.method === 'OPTIONS') {
    console.log('Handling OPTIONS request');
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    console.log('Method not allowed:', req.method);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let { name, email, message } = req.body;

  // Sanitize inputs
  name = validator.escape(name || '').trim();
  email = validator.normalizeEmail(email || '').trim();
  message = validator.escape(message || '').trim();

  // Basic validation
  if (!name || !email || !message) {
    console.log('Validation failed: Missing fields', { name, email, message });
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    await connectDB();
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    console.log('Saved form data:', { name, email, message });

    return res.status(200).json({ message: 'Message received and saved successfully' });
  } catch (error) {
    console.error('Error saving to MongoDB:', error.message);
    return res.status(500).json({ error: 'Failed to save message. Please try again.' });
  }
};