FROM roblescoulter/node-http:9.11.1

WORKDIR /app

COPY / .

RUN npm i -g npm && npm install

EXPOSE 8080

CMD ["npm","run","dev"]

# LOCAL:
# Build local image with:
#   docker build --rm --force-rm -t roblescoulter/node-vision-api:1.0.0 .
#
# Run and test local container with:
#   docker run -p 8080:8080 --rm -it -w /app roblescoulter/node-vision-api:1.0.0
