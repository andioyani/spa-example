FROM node:18.15

#Especificar directorio de trabajo
WORKDIR /appDocker

COPY package*.json ./

RUN npm install

COPY . .

CMD ["node", "index.js"]