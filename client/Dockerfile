FROM node:8.1.3

ADD package.json main.js yarn.lock ./
RUN yarn
# Will listen to 8081.
CMD yarn run dev
