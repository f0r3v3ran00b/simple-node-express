# Simple API to dpeloy to Heroku

## Running stuff

- Port is picked up from environment variables. Defaults to 3000.
- There is a `/` path avaiable.
- Some paths: `/`, `/routes`, `/subject`, `/users/<usernamename>/vices/<vicename>`

### Just local

```
$> git clone <this repo>
$> npm install
--- and
$> npm start
--- or
$> node app.js
```

### Docker

```
$> docker build -t f0r3v3ran00b/simple-node-express .
$> docker run -p 49160:3131 -d f0r3v3ran00b/simple-node-express
```

The above will build the image and run it. The app will be available on `localhost:49160`

### Zeit

**Best get Zeit desktop setup first. Login etc.**

`$> now`

### Heroku

```
$> heroku login
$> git push heroku master
```
