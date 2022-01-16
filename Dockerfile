FROM node:16

ARG APP_PATH=/usr/src/app \
    APP_USER=app

WORKDIR ${APP_PATH}

COPY package*.json ./

RUN adduser ${APP_USER} && chown -R ${APP_USER} ${APP_PATH}

USER ${APP_USER}

RUN npm install
# If you are building your code for production
# RUN npm ci --only=production

COPY . .

EXPOSE 8080
ENTRYPOINT [ "node", "server.js" ]