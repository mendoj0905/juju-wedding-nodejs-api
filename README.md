# Wedding Guest Api Nodejs

Simple CRUD REST api to manage wedding guest and check website password. This for our [wedding website](https://jujubaewedding.com) using GatsbyJS framework - [repo](https://github.com/mendoj0905/juju-wedding-website). Technology I'm using are MongoDB, Express, and NodeJS. 

## Setup

1. Install dependencies
```
npm install
```

2. Create `.env` file
```
DB_URL="url"
DB_USERNAME="user"
DB_PASSWORD="pass"

SITE_PASSWORD="pass"
PORT=4000
```

3. Command to start server.
```
npm start
```

## Test Container 
### Build Image
```
docker build --pull --rm -f Dockerfile -t image-name:tags .
```
### docker-compose.yaml 
```
version: "3.9"
services:
  wedding-guest-api:
    # build: .
    ports:
      - "4000:4000"
    image: wedding-guest-api:2022.1
    command: "dumb-init node src/server.js"
    environment:
      - DB_URL=url
      - DB_USERNAME=username
      - DB_PASSWORD=password
      - SITE_PASSWORD=password
```


## TO DO
- Work on Dockerfile and build image for k8s deployment
- Session cookie/token for FE
- Script to build and deploy... maybe experiment with kubernetes client libs (Python or Nodejs)...
- Add unit test
- Use logging library