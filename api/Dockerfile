FROM node:12.14.1

ENV APP_ROOT /var/www/app
WORKDIR $APP_ROOT

RUN npm install n -g

# Setup UTC+9
RUN cp -p /etc/localtime /etc/localtime.UTC \
    && cp -p /usr/share/zoneinfo/Japan /etc/localtime

RUN curl https://deb.nodesource.com/setup_12.x | bash
RUN curl https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update -y && \
    apt-get upgrade -y && \
    apt-get install -y --no-install-recommends \
    vim && \
    rm -rf /var/cache/apt/archives/* /var/lib/apt/lists/*

RUN yarn add express
RUN yarn add -D typescript nodemon ts-node @types/express @types/node 

