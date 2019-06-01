FROM node:10.16.0-alpine

WORKDIR /server

COPY . /server
RUN npm install -g yarn
RUN yarn

EXPOSE 4000
CMD [ "npm", "start" ]