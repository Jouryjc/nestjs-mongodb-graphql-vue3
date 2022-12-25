FROM jouryjc/node_pnpm_yarn_ni

LABEL maintainer="xiaoyu"

COPY ./dist /app
COPY ./node_modules /app/node_modules

WORKDIR /app
CMD [ "node", "main.js"]