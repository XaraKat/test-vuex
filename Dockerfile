FROM mhart/alpine-node:13.12.0
WORKDIR /test-vuex
RUN npm i express
COPY ./app.js ./app.js
COPY ./dist ./dist
CMD while true; do node app; sleep 5; done