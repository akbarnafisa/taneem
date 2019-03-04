FROM node:10-alpine

WORKDIR /usr/src/app

COPY ./package.json /usr/src/app

ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 80

COPY . /usr/src/app

RUN npm install
RUN npm run build

EXPOSE 80
CMD [ "npm", "start" ]