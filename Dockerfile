FROM node:18.10.0 as client

WORKDIR /app/client

COPY package.json /app/client

RUN npm install

COPY public /app/client
COPY src /app/client
COPY .eslintrc.js /app/client
COPY .gitignore /app/client
COPY package-lock.json /app/client
COPY README.md /app/client
COPY tailwind.config.js /app/client

RUN npm run build

FROM node:alpine

WORKDIR /app

COPY server/package.json /app

RUN npm install

COPY server /app

COPY --from=client /app/client/build /app/client

EXPOSE 8080

CMD ["npm", "start"]



