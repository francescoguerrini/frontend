#!/bin/bash

# Installing NVM (Node Version Manager)
echo "Installing NVM..."
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash

# This loads nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

# Install Node.js and npm using nvm
# You can specify a version to install, or use `nvm install node` to install the latest version
echo "Installing Node.js..."
nvm install node

# Verify Node.js and npm installation
echo "Node.js and npm versions:"
node -v
npm -v

# Install Vite using npm
echo "Installing Vite..."
npm install -g vite

#Install all dependencies
echo "Installing all dependencies..."
npm install

# Verify Vite installation
echo "Vite version:"
vite --version
