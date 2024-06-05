# Intro
Just a simple GraphQL (ExpressJS) + React (NextJS) playground, using the simplest replicable infra. Batteries included!

Code examples retrieved from "The GraphQL Guide" (2020).

# Requirements
- Docker

## Includes
- MongoDB server
- ExpressJS for graphql backend: [Port 3001](http://localhost:3001)
- NextJS for frontend: [Port 3000](http://localhost:3000)

## Local Development
```
docker-compose build && docker-compose up
```

## Notes
- MongoDB will create a `data` directory on root for persistence
