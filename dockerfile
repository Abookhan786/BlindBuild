# Use official Node.js image
FROM node:18

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the application
COPY . .

# Expose backend port
EXPOSE 5000

# Default command (development mode with nodemon)
CMD ["npm", "run", "dev"]