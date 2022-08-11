# base image
FROM node:16-slim

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json
COPY vite.config.js /app/vite.config.js
RUN yarn

# start app
CMD ["yarn", "dev"]