FROM node:18-alpine

WORKDIR /app
COPY package.json ./
RUN npm install vue vitepress
RUN npm install
COPY . .

EXPOSE 3000

CMD npm run docs:build && npm run docs:preview