# Urban Farming User Manual

API is documented at Swagger [app.swaggerhub.com/apis-docs/isfanr/Tanam](https://app.swaggerhub.com/apis-docs/isfanr/Tanam/1.0.0).<br />

This project was bootstrapped with [Express Generator](https://expressjs.com/en/starter/generator.html).

## Endpoints List

``` bash
[GET] '/' = Check if API is live
[POST] '/login' = For login purpose
[GET] '/users' = Get all users
[GET] '/users/:id' = Get user by id
[POST] '/users' = Create new user
[PUT] '/users/:id' = Edit user by id
[DELETE] '/users/:id' = Delete user by id
[GET] '/tanaman' = Get all tanaman
[GET] '/tanaman/by-id/:id' = Get tanaman by id_tanaman
[GET] '/tanaman/by-user/:userId' = Get tanaman by user id
[POST] '/tanaman/:userId' = Create new tanaman by user id
[DELETE] '/tanaman/:id' = Delete land by id
*Make sure you have valid or real email for periodic report email purposes (in report-service)
```

## Available Scripts

In the project directory, you can run:

### `npm install`

Install required dependencies.

### `npm start`

Runs the app in the development mode.<br />
API will run on [http://localhost:3000](http://localhost:3000).

### `npm run dev`

Runs the app in the development mode with hot reload.<br />
API will run on [http://localhost:3000](http://localhost:3000).

### `node worker.js`

Runs the scheduled job.

### `npm run lint`

Checks if there is any warning or wrong in codes lint.

### `npm run lint-fix`

Checks if there is any warning or wrong in codes lint.<br />
And automatically fixes what can be fixed.

## Learn More

You can learn more in the [Express documentation](https://expressjs.com/).