FROM node

# TODO: Remove anything non-essential
COPY package.json package-lock.json  ./
RUN npm install --production

COPY build ./

CMD ["node", "index.js"]