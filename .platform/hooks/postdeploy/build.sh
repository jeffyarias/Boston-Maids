#!/bin/bash
# Post-deployment build script
echo "Running post-deployment build script..."

# Navigate to the application directory
cd /var/app/staging || exit 1

# Build the application
npm run build

echo "Build completed successfully."
