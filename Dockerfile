FROM node:10-alpine

WORKDIR /usr/src/app

COPY ./package.json /usr/src/app

ENV NUXT_HOST 0.0.0.0
ENV NUXT_PORT 80
ENV PROJECTID 5c530324151b4805957a664d
ENV WRITE VY3LRhbf8s3n4XfXr3x5eKU
ENV READ ubBTt6sfcfHVKuHQ3TMNn8D

COPY . /usr/src/app

RUN npm install
RUN npm run build

EXPOSE 80
CMD [ "npm", "start" ]