# Simple node express example.

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

### Netlify Functions

We can now deploy our express apps as AWS Lambdas using the Netlify functions abstraction.
For now, the code is duplicated. So there is non-netlify version, and the netlify version under netlify-functions. Gotta fix this!

```
$> curl https://friendly-davinci-6dd439.netlify.com/.netlify/functions/server
```
