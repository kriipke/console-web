FROM node:20-alpine as build-deps
WORKDIR /app
COPY package.json package-lock.json .
RUN npm install

FROM node:20-alpine as build-app
WORKDIR /app
COPY --from=build-deps /app/ .
COPY . .
RUN npx vite build -d


FROM nginx:alpine as final
COPY --from=build-app /app/dist /var/www/html/
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
