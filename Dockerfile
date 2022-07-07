FROM arm64v8/node:lts-alpine
# RUN apk add dumb-init

ENV NODE_ENV production

WORKDIR /usr/src/app
COPY . /usr/src/app
RUN mkdir -p ./upload/photos
# RUN chown -R node:node /usr/src/app/upload
RUN npm ci --only==production
# USER node

CMD ["node", "src/server.js"]
