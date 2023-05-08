# 第一步先安装依赖和构建
FROM jouryjc/node_pnpm_yarn_ni:latest AS builder
LABEL maintainer="xiaoyu"
COPY . .

# Nodejs进程不能被终止的解决办法
# RUN apt-get update && apt-get install -y dumb-init

RUN pnpm install
RUN pnpm run build

# 第二步将依赖和构建产物装入镜像
FROM node:16.15.0-bullseye-slim

# COPY --from=builder /usr/bin/dumb-init /usr/bin/dumb-init

COPY --from=builder dist /app
COPY --from=builder node_modules /app/node_modules

WORKDIR /app
CMD ["node", "main.js"]