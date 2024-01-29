FROM nginx:latest
COPY dist  /usr/share/nginx/html/test
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80