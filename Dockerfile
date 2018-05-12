FROM node:9.11.1-alpine

RUN \
    # Update alpine packages
    apk update && apk upgrade && \
    # Install node with other tools
    apk --no-cache add nodejs nodejs-npm && \
    # install node http-server
    npm install -g http-server && \
    # Add additional tools
    apk --no-cache add nano links git wget curl htop && \
    # Clean cache
    rm -rf /var/cache/apk/*

# build image with:
#   docker build --rm --force-rm -t <USERNAME>/node-http:9.11.1 .

# ( OPTIONAL ) push image to docker hub with:
#   docker push <USERNAME>/node-http:9.11.1

