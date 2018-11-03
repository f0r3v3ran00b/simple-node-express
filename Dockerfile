FROM node:8

WORKDIR /usr/src/app
# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./
RUN npm install
COPY . .
# Environment Variables
ENV PORT 3131
ENV MY_NAME "Sanju [From Dockerfile]"
EXPOSE 3131

CMD [ "npm", "start" ]
