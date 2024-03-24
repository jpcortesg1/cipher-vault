# Verison
FROM node:20

# Create app directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install pnpm globally
RUN npm cache clean --force
RUN npm install -g pnpm

# Install app dependencies
RUN pnpm install

# Export port
EXPOSE 5000

# Bundle app source
COPY . .

# Start the app
# For test
# CMD [ "pnpm", "run", "test"]

# For development
CMD [ "pnpm", "run", "dev:tsc"]

# For production
# CMD [ "pnpm", "run", "start"]
