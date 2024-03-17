FROM node:20-alpine as build0
WORKDIR /app
COPY package.json package-lock.json .
RUN npm install

FROM node:20-alpine as build1
WORKDIR /app
COPY --from=build0 /app/ .
COPY . .

FROM node:20-alpine as build2
WORKDIR /app
RUN npx vite build -d


FROM nginx:alpine as final
COPY --from=build2 /app/dist /var/www/html/
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
