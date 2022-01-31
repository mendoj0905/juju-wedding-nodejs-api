FROM node:lts-alpine@sha256:2f50f4a428f8b5280817c9d4d896dbee03f072e93f4e0c70b90cc84bd1fcfe0d
RUN apk add dumb-init

ENV NODE_ENV production

WORKDIR /usr/src/app
COPY --chown=node:node . /usr/src/app
RUN npm ci --only==production
USER node

CMD ["dumb-init", "node", "src/server.js"]