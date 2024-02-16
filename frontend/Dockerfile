FROM node:20.11.0-alpine3.18 as builder
RUN mkdir -p /opt/bga/frontend
WORKDIR /opt/bga/frontend
COPY . /opt/bga/frontend/
RUN yarn
RUN yarn build

# Copy from the build directory and serve through NGINX
FROM nginx:1.25.3-alpine-slim
COPY --from=builder /opt/bga/frontend/dist /usr/share/nginx/html/
ENV HOST 0.0.0.0
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]