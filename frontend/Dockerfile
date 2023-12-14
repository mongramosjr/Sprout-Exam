# Use the official Node.js image as the base image
FROM node:latest

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install app dependencies
RUN npm install

# Copy the rest of the application source code to the container
COPY . .

# Expose the port used by the Vue.js application
EXPOSE 8080

# Command to run your Vue.js application
CMD ["npm", "run", "serve"]
