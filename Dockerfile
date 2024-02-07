# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /happyness-taskify-backend

# Copy package.json and package-lock.json to the working directory
COPY package*.json .

# Install app dependencies
RUN npm install

# Bundle your app source
COPY . .

# Expose the port on which your app runs
EXPOSE 5000

# Define the command to run your app using CMD
CMD ["node", "index.js"]
