FROM node:5.11

# Install vnc, xvfb in order to create a 'fake' display and firefox
COPY /app /app
RUN ls /app


EXPOSE 3000

WORKDIR /app
RUN npm install


CMD ["node", "index.js"]
