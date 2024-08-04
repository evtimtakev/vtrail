
FROM node:18

WORKDIR /social-media-crawler

COPY ./social-media-crawler /social-media-crawler

RUN npm install

RUN npm run build

WORKDIR /api

COPY ./api /api

RUN npm install

CMD ["npm", "start", "--host", "0.0.0.0"]