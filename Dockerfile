FROM jouryjc/node_pnpm_yarn_ni

LABEL maintainer="xiaoyu"

ENV MONGO_HOST="mongo" \
    MONGO_PORT="27017" \
    MONGO_DB="production" \
    SERVER_PORT="3000" \
    MONGO_USER="root" \
    MONGO_PASSWORD="root"

COPY ./dist /app
COPY ./node_modules /app/node_modules

WORKDIR /app
CMD [ "node", "main.js"]