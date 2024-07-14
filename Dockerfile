# Use an official Node.js runtime as a base image
FROM node:18.17.0

# Clone the private repository using a Personal Access Token
RUN git clone https://<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>@github.com/shamkhacha/malak /root/inrl
WORKDIR /root/inrl/
RUN npm install
EXPOSE 8000
CMD ["npm", "start"]

