const express = require("express");
const jwt = require("express-jwt");
const jwksRsa = require("jwks-rsa");

// Create a new Express app
const app = express();

// Set up Auth0 configuration
const authConfig = {
  domain: process.env.DOMAIN,
  audience: process.env.AUDIENCE
};

const pgConfig = {
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD
}

// Set up Postgres Connection
const pgp = require('pg-promise')();
const pgDb = pgp(pgConfig);

// Define middleware that validates incoming bearer tokens
// using JWKS from rob-s.auth0.com
const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`
  }),

  audience: authConfig.audience,
  issuer: `https://${authConfig.domain}/`,
  algorithm: ["RS256"]
});

// Define an endpoint that must be called with an access token
app.get("/api/external", checkJwt, (req, res) => {
  res.send({
    msg: "Your Access Token was successfully validated!"
  });
});

app.get("/api/alter-egos", checkJwt, (req, res) => {
        pgDb.any('SELECT * FROM alter_egos', [true])
        .then(function(data){
            res.send(data);
        })
        .catch(function(error){
            res.send(error);
        });
});

app.get("/api/heroes", checkJwt, (req, res) => {
    res.send({
        // Use MongoDB to retrieve heroes
    })
});

// Start the app
app.listen(process.env.PORT, () => console.log('API listening on: ' + process.env.PORT));