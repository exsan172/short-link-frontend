FROM --platform=amd64 node:16
WORKDIR /shortin
COPY package*.json ./shortin/
COPY . /shortin/

RUN npm i
RUN npm run build

FROM nginx:1.15.2-alpine
COPY ./build /var/www
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
ENTRYPOINT ["nginx","-g","daemon off;"]