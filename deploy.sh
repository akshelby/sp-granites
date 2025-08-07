#!/bin/bash

# S P Granites Website Deployment Script
echo "🚀 Starting S P Granites Website Deployment..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js v16 or higher."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    print_error "Node.js version 16 or higher is required. Current version: $(node -v)"
    exit 1
fi

print_success "Node.js version check passed: $(node -v)"

# Install dependencies
print_status "Installing dependencies..."
npm run install:all
if [ $? -eq 0 ]; then
    print_success "Dependencies installed successfully"
else
    print_error "Failed to install dependencies"
    exit 1
fi

# Build frontend
print_status "Building frontend..."
npm run build:frontend
if [ $? -eq 0 ]; then
    print_success "Frontend built successfully"
else
    print_error "Failed to build frontend"
    exit 1
fi

# Test the build
print_status "Testing the application..."
timeout 10s npm run start:backend &
SERVER_PID=$!
sleep 5

# Test API endpoint
if curl -f -s http://localhost:5000/api/health > /dev/null; then
    print_success "Backend API is working"
else
    print_warning "Backend API test failed or server not ready"
fi

# Test frontend
if curl -f -s http://localhost:5000/ > /dev/null; then
    print_success "Frontend is being served correctly"
else
    print_warning "Frontend serving test failed"
fi

# Kill the test server
kill $SERVER_PID 2>/dev/null

print_success "🎉 S P Granites Website deployment completed successfully!"
echo ""
echo "📋 Next Steps:"
echo "   1. Start development: npm run dev"
echo "   2. Start production: npm start"
echo "   3. Access website: http://localhost:5000"
echo ""
echo "🌐 Deployment Options:"
echo "   • Netlify: Connect repo, build command 'npm run build', publish dir 'frontend/dist'"
echo "   • Heroku: Add Node.js buildpack, deploy with git"
echo "   • Manual: Upload 'frontend/dist' to static hosting, deploy 'backend/' to Node.js hosting"
echo ""
echo "✨ Built with ❤️ for S P Granites"