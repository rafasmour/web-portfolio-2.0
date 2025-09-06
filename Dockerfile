FROM node:lts-alpine

WORKDIR ./app

COPY . .

RUN npm run build

EXPOSE 80