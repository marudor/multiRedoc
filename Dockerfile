# Stage 1
FROM node:18-alpine as react-build
WORKDIR /app
COPY ./app/ .
RUN npm install
RUN npm run-script build

# Stage 2 - the production environment
FROM nginx:alpine
LABEL name "multi-redoc"
LABEL maintainer "marudor"

ENV URLS="[{url: 'https://petstore.swagger.io/v2/swagger.json', name: 'Petshop'},{url: 'https://api.apis.guru/v2/specs/instagram.com/1.0.0/swagger.yaml', name: 'Instagram'}]"
ENV BASE_NAME=""
ENV THEME_COLOR="#32329f"
ENV PAGE_TITLE="Redoc"

WORKDIR /var/www/html

COPY --from=react-build /app/build /var/www/html
COPY ./docker/run.sh /
COPY ./docker/default.conf /etc/nginx/conf.d

RUN chmod +x /run.sh
RUN chmod +x /etc/nginx/conf.d/default.conf

CMD ["/run.sh"]
