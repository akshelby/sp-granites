
const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, '../frontend/dist')));

// CORS middleware for development
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// API Routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'success', 
    message: 'S P Granites backend is running!',
    timestamp: new Date().toISOString()
  });
});

// Contact form submission endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, phone, message, serviceType } = req.body;
  
  // Here you would typically save to database or send email
  console.log('Contact form submission:', { name, email, phone, message, serviceType });
  
  res.json({ 
    status: 'success', 
    message: 'Thank you for your inquiry! We will contact you soon.',
    submittedAt: new Date().toISOString()
  });
});

// Get services endpoint
app.get('/api/services', (req, res) => {
  const services = [
    {
      id: 1,
      name: 'Kitchen Countertops',
      description: 'Beautiful, durable granite countertops that transform your kitchen into a stunning culinary workspace.',
      priceRange: '₹2,500 - ₹8,000 per sq ft'
    },
    {
      id: 2,
      name: 'Bathroom Vanities',
      description: 'Elegant granite vanity tops that add luxury and functionality to your bathroom.',
      priceRange: '₹2,000 - ₹6,000 per sq ft'
    },
    {
      id: 3,
      name: 'Flooring Solutions',
      description: 'Premium granite and natural stone flooring for homes and commercial spaces.',
      priceRange: '₹1,500 - ₹5,000 per sq ft'
    }
  ];
  
  res.json({ status: 'success', data: services });
});

// Get products endpoint
app.get('/api/products', (req, res) => {
  const products = [
    {
      id: 1,
      name: 'Black Galaxy',
      description: 'Stunning black granite with golden speckles',
      origin: 'Andhra Pradesh, India',
      finish: 'Polished, Honed, Flamed'
    },
    {
      id: 2,
      name: 'Kashmir White',
      description: 'Clean, bright white granite with subtle veining',
      origin: 'Rajasthan, India',
      finish: 'Polished, Brushed'
    },
    {
      id: 3,
      name: 'Absolute Black',
      description: 'Pure black granite with minimal patterns',
      origin: 'Telangana, India',
      finish: 'Polished, Honed'
    }
  ];
  
  res.json({ status: 'success', data: products });
});

// Quote request endpoint
app.post('/api/quote', (req, res) => {
  const { name, email, phone, projectType, area, material, message } = req.body;
  
  // Here you would typically calculate estimate and save to database
  console.log('Quote request:', { name, email, phone, projectType, area, material, message });
  
  const estimatedCost = area * 3500; // Basic calculation
  
  res.json({ 
    status: 'success', 
    message: 'Quote request received! Our team will contact you within 24 hours.',
    estimatedCost: `₹${estimatedCost.toLocaleString()}`,
    requestId: `SP${Date.now()}`,
    submittedAt: new Date().toISOString()
  });
});

// Serve React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend/dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 S P Granites server running on port ${PORT}`);
  console.log(`📱 Frontend available at: http://localhost:${PORT}`);
  console.log(`🔌 API available at: http://localhost:${PORT}/api`);
});
