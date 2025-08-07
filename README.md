# S P Granites Website

A complete, modern website for S P Granites - Premium granite and natural stone solutions. Built with React frontend and Node.js/Express backend.

## 🌟 Features

- **Modern React Frontend**: Beautiful, responsive UI with gradient backgrounds and smooth animations
- **Express.js Backend**: RESTful API with endpoints for services, products, and contact forms
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Production Ready**: Configured for deployment with build optimization

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation & Development

1. **Install all dependencies:**
   ```bash
   npm run install:all
   ```

2. **Start development servers:**
   ```bash
   npm run dev
   ```
   This starts both frontend (port 3000) and backend (port 5000) simultaneously.

3. **Access the application:**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000/api

### Production Build

1. **Build the complete application:**
   ```bash
   npm run build
   ```

2. **Start production server:**
   ```bash
   npm start
   ```
   The complete application runs on port 5000.

## 📁 Project Structure

```
sp-granites/
├── frontend/                 # React frontend
│   ├── src/
│   │   ├── App.jsx          # Main React component
│   │   ├── main.jsx         # React entry point
│   │   └── index.css        # Styling
│   ├── index.html           # HTML template
│   ├── package.json         # Frontend dependencies
│   └── vite.config.js       # Vite configuration
├── backend/                  # Express.js backend
│   ├── server.js            # Main server file
│   └── package.json         # Backend dependencies
├── package.json             # Root package.json with scripts
├── netlify.toml             # Netlify deployment config
└── README.md                # This file
```

## 🔧 Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build the complete application for production
- `npm start` - Start the production server
- `npm run install:all` - Install all dependencies
- `npm run deploy` - Build and prepare for deployment

## 🌐 API Endpoints

- `GET /api/health` - Health check endpoint
- `GET /api/services` - Get available services
- `GET /api/products` - Get granite products
- `POST /api/contact` - Submit contact form
- `POST /api/quote` - Request a quote

## 🎨 Design Features

- **Gradient Backgrounds**: Modern purple-blue gradient design
- **Glass Morphism**: Frosted glass effects with backdrop blur
- **Responsive Grid**: Automatic layout adjustment for different screen sizes
- **Smooth Animations**: Hover effects and transitions
- **Modern Typography**: Clean, readable fonts
- **Mobile-First**: Optimized for mobile devices

## 🚀 Deployment

### Netlify (Recommended for Frontend)
1. Connect your repository to Netlify
2. Build command: `npm run build`
3. Publish directory: `frontend/dist`

### Heroku (For Full-Stack)
1. Create a Heroku app
2. Add Node.js buildpack
3. Deploy with: `git push heroku main`

### Manual Deployment
1. Run `npm run build`
2. Upload `frontend/dist` to your static hosting
3. Deploy `backend/` to your Node.js hosting

## 📞 Contact Information

For support or inquiries about this website:
- Email: info@spgranites.com
- Phone: +91 98765 43210

## 📄 License

MIT License - see LICENSE file for details.

---

Built with ❤️ for S P Granites