FROM node:20.11.0-alpine3.18
RUN mkdir -p /opt/bga/backend
WORKDIR /opt/bga/backend
COPY . /opt/bga/backend/
RUN yarn install
EXPOSE 8080
CMD [ "yarn", "start" ]