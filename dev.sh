#!/bin/bash

# Botanic Partners Development Script
echo "🌿 Botanic Partners Development Server"
echo "======================================"

# Check if Python is available
if command -v python3 &> /dev/null; then
    echo "✅ Python3 found"
else
    echo "❌ Python3 not found. Please install Python3 to continue."
    exit 1
fi

# Start the server
echo "🚀 Starting development server on port 8000..."
echo "📱 Access your applications at:"
echo "   • Main Website: http://localhost:8000/"
echo "   • Admin Interface: http://localhost:8000/admin/"
echo ""
echo "🛑 Press Ctrl+C to stop the server"
echo ""

# Start the server
python3 -m http.server 8000
