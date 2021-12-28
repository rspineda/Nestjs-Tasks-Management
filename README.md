## Description


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Body example:

on POST: /tasks
{
  "title": "Cleaning",
  "description": "Living room needs to be cleaned before weekend"
}
on PATCH: /tasks/:id/status
{
  "status": "IN_PROGRESS"
}

on POST: /auth/signup

{
  "username": "whatever",
  "password": "whatever"
}

on POST: /auth/signin

{
  "username": "whatever",
  "password": "whatever"
}