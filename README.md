
# A Blog REST API App using ExpressJs, MongoDB, NodeJs and Typescript

This repo helps you to get started with ExpressJs, MongoDB, NodeJs and Typescript in docker Environment.

## Setup and Run Locally with or without using Docker

Commands

```bash
    # clone github repo
    $ git clone https://github.com/Mugisha-Beline/blog-api.git
    $ cd express-blog-api
    $ cp .env.example .env

    # Run without using docker
    # SET DATABASE_URL
    $ npm install
    $ npm run dev

    # Run with docker
    # start containers
    $ docker-compose up -d
    # start containers
    $ docker-compose up -d
    # stop containers
    $ docker-compose down

    # check logs of docker image
    $ docker logs <CONTAINER_ID>

    # Run tests
    $ npm run test
```

## Directory Structure

```
.
├── dist/                                # Build files
├── public/                              # Contains static files
├── src/                                 # All
│   ├── configs/                         # Contains all the configurations
│   ├── models/                          # Contains all the database schema and models
│   ├── services/                        # Contains all the services
│   ├── controllers/                     # Contains all the controllers
│   ├── middlewares/                     # Contains all the middlewares
│   ├── validators/                      # Contains all the request validators
│   ├── serializers/                     # Contains all the serializers
│   └── routes/                          # Contains all the routes
├── tests/                               # Contains all the test files
├── tsconfig.json                        # Typescript Config
├── index.ts                             # Index file
├── package.json
├── package-lock.json
└── README.md
```

## API Reference

Postman Docs: https://documenter.getpostman.com/view/8091590/2s8YRnmXTd

#### Get Home URL

```
  GET /api/v1/
```

#### Register User

```
  POST /api/v1/register
```

| Parameter  | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `name`     | `string` | **Required**. Your Name     |
| `email`    | `string` | **Required**. Your Email    |
| `password` | `string` | **Required**. Your Password |

#### Login User

```
  POST /api/v1/login
```

| Parameter  | Type     | Description                 |
| :--------- | :------- | :-------------------------- |
| `email`    | `string` | **Required**. Your Email    |
| `password` | `string` | **Required**. Your Password |

#### Blogs API

```
  GET     /api/v1/blogs/
  GET     /api/v1/blogs/:id
  POST    /api/v1/blogs/
  PUT     /api/v1/blogs/:id
  DELETE  /api/v1/blogs/:id
```

## References

## License

[MIT](https://github.com/Mugisha-Beline/blog-api.git/blob/main/LICENSE)
