FROM nginx
LABEL maintainer="xiaoyu"

ENV SERVER_HOST="localhost" \
    SERVER_PORT="3000"

COPY ./dist /usr/share/nginx/html

CMD ["nginx", "-g", "daemon off;"]