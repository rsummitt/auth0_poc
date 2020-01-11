FROM node:13.6.0-alpine3.10
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3001
CMD [ "node", "server.js"]