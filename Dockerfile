FROM node:16-alpine
ENV PORT=3000
EXPOSE 3000 

WORKDIR /app
COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY ./ /app

RUN yarn build

CMD ["npx", "serve", "-s", "build"]
