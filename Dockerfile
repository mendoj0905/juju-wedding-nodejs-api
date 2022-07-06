FROM arm64v8/node:lts-alpine
# RUN apk add dumb-init

ENV NODE_ENV production

WORKDIR /usr/src/app
COPY . /usr/src/
# RUN mkdir -p upload/photos
RUN npm ci --only==production
RUN pwd
USER node

CMD ["node", "src/server.js"]
