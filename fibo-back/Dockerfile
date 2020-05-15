FROM node:10
WORKDIR /fibo-back
COPY ./package*.json ./
RUN npm install
COPY . .
EXPOSE 3002
CMD ["node", "server.js"]