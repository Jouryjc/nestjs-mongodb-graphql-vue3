# 第一步先打包出来dist
FROM jouryjc/node_pnpm_yarn_ni:latest AS builder

COPY . .

RUN pnpm install
RUN pnpm run build

# 第二步，装袋
FROM nginx:stable-alpine3.17-slim

COPY --from=builder dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]