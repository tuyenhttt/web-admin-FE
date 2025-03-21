# Base image
FROM node:18-alpine AS builder

# Set working directory
WORKDIR /app

# Copy package files
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the Next.js project
RUN npm run build

# Use a minimal runtime image for production
FROM node:18-alpine

WORKDIR /app

# Copy the built files
COPY --from=builder /app ./

# Expose the port
EXPOSE 3000

# Start the application
CMD ["npm", "run", "start"]
