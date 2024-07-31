# Use an official Node.js runtime as a base image
FROM node:18.17.0

# Clone the private repository using a Personal Access Token
RUN git clone https://github.com/ARROGANT1X/mal.git /root/inrl
WORKDIR /root/inrl/
RUN npm install
EXPOSE 8000
CMD ["node", "index.js"]
