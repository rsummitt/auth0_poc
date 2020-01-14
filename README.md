# Auth0 POC
This is a quick POC that intergrates a React and Node application to Auth0 along with simple database connections to MongoDB and Postgres.

## Getting Started
If you have an Auth0 account, app, and api created:
1) Create a `docker.env` file in `auth-zero-be` and populate values necessary that were provided from Auth0.
1) Create a `auth_config.json` based on the `auth_config.json.example` and populate values necessary that were provided from Auth0.
1) Create a `docker.env` file in both `db/mongo` and `db/pg` based on the `docker.env.sample` files provide in each directory.
1) Navigate to the root diretory of this project and run `docker-compose up --build`
1) You should now be able to test `http://localhost`

__NOTE:__ Please see installation section below for more details on setup

### Prerequisites
This POC requires Docker and Docker Compose.

## Installing
1) Complete the [__Configure Auth0__](https://auth0.com/docs/quickstart/spa/react/01-login#configure-auth0) section of the tutorial provided by Auth0.  This will provide you with a `DOMAIN` and `CLIENTID` value.
2) Complete the [__Create an API__](https://auth0.com/docs/quickstart/spa/react/02-calling-an-api#create-an-api) section of the tutorial provided by Auth0.  This will provide you with a `AUDIENCE` value.
3) Navigate to `auth-zero-be` and create a `docker.env` file.  It should look like the following:
```yaml
DOMAIN=<DOMAIN value from step 1>
AUDIENCE=<AUDIENCE value from step 2>
PORT=<Whatever port you want to run the BE on>
```
4) Navigate to `auth-zero-fe` and create a `auth_config.json` file.  It should look like the following:
```json
{
    "domain": "{DOMAIN from step 1}",
    "clientId": "{CLIENTID from step 1}",
    "audience": "{AUDIENCE from step 2}"
 }
```
5) For this POC navigate to `db/mongo/` and create a `docker.env` file that has the same contents from `db/mongo/docker.env.sample` file
6) For this POC navigate to `db/pg/` and create a `docker.env` file that has the same contents from the `db/pg/docker.env.sample` file
7) Navigate back to the root directory `auth0_poc` and you should now be able to run `docker-compose up --build`

## Acknowlegements
This POC utilized most of the examples provided in the [Login](https://auth0.com/docs/quickstart/spa/react/01-login) and [Calling an API](https://auth0.com/docs/quickstart/spa/react/02-calling-an-api) tutorial provided by Auth0