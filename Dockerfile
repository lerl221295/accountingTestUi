##################################################
# PROJECT BUILDER IMAGE
FROM node:8-alpine as Builder

ARG NODE_ENV=production

ENV SITE_SOURCES=/tmp/app
ENV SITE_ROOT=/usr/share/html

# Environment:
ENV NODE_ENV ${NODE_ENV}
ENV PATH ./node_modules/.bin:$PATH
  # to make npm test run only once non-interactively
ENV CI ${CI:-false}
ENV NPM_REGISTRY ${NPM_REGISTRY}

# Install alpine deps:
#RUN apk --update add --no-cache gettext

# Prepare build directories and required files:
RUN mkdir -p ${SITE_SOURCES} && mkdir -p ${SITE_ROOT}

# Bundle WebApp source:
WORKDIR ${SITE_SOURCES}
ADD . ${SITE_SOURCES}

# Install app deps:
RUN npm config set registry
RUN npm install || { echo 'install npm packages failed' ; exit 1; }

ADD . ${SITE_SOURCES}

# Running tests:
RUN npm run test

# Generate optimize build:
RUN npm run build

# Installs app to web server folder:
RUN mv ./build/* ${SITE_ROOT}/


##################################################
# DEPLOYMENT IMAGE
FROM node:8-alpine

ENV SITE_SOURCES=/tmp/app
ENV SITE_ROOT=/usr/share/html

# Install alpine deps:
RUN apk --update add --no-cache gettext nginx

COPY --from=Builder ${SITE_ROOT} ${SITE_ROOT}
COPY --from=Builder ${SITE_SOURCES}/config/envs/static.config.js ${SITE_ROOT}/static.config.js.env

# Setup nginx:
COPY ./config/docker/nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./config/docker/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY ./config/docker/nginx/.htpasswd /etc/nginx/.htpasswd

# Prepare required files:
COPY ./config/docker/entrypoint.sh /sbin/
RUN chmod a+x /sbin/entrypoint.sh

WORKDIR ${SITE_ROOT}

EXPOSE 80 443

ENTRYPOINT ["entrypoint.sh"]
CMD ["nginx", "-g", "daemon off;"]
