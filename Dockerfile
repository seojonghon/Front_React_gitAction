FROM node AS builder
RUN mkdir /recipe
WORKDIR /recipe
COPY . .
RUN npm install
RUN npm run build

FROM nginx AS runtime
COPY --from=builder /recipe/build /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]
