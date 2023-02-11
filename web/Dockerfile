# 第一步先打包出来dist
FROM node:latest AS builder

COPY . .

RUN npm install pnpm -g
RUN pnpm -v

RUN pnpm install
RUN pnpm run build

# 第二步，装袋
FROM nginx

COPY --from=builder dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]