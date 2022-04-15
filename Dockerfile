FROM node:16-stretch as master
WORKDIR /bin

COPY bin .

EXPOSE 4000

ENTRYPOINT ["node", "server.js"]
