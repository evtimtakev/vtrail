
FROM node:18

WORKDIR /vtrail-ui

COPY ./vtrail-ui /vtrail-ui

RUN npm install -g @angular/cli

RUN npm install

CMD ["ng", "serve", "--host", "0.0.0.0"]