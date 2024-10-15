# Use official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose the port on which the Node.js application will run
EXPOSE 3000

# Command to start the Node.js application
CMD ["node", "src/index.js"]