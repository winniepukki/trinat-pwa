FROM node:12.19.0-alpine

LABEL maintainer="Aleksandrs Bogackins sashik3580@gmail.com"

WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

CMD ["npm", "start"]
