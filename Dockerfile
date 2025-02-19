FROM node:18-alpine AS build

WORKDIR /app

COPY package.json ./
RUN npm install vue vitepress
RUN npm install

COPY . .

RUN npm run docs:build

FROM nginx:stable-alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/docs/.vitepress/dist /usr/share/nginx/html

COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 3000

CMD ["nginx", "-g", "daemon off;"]
