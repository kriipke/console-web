FROM node:14.18-alpine as build
WORKDIR /app
COPY . .
RUN yarn install
RUN yarn run build

FROM nginx:alpine
COPY --from=build /app/dist /var/www/html/
COPY <<EOF /etc/nginx/conf.d/console.conf
server {
	listen 3000;
	root /var/www/html;
	
	location / {
	}
}
EOF

EXPOSE 3000
CMD ["nginx","-g","daemon off;"]
