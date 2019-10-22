const express = require('express');
const bodyParser = require('body-parser');

const feedRoutes = require('./routes/feed');
const userRoutes = require('./routes/user');

const app = express();

app.use(bodyParser.json()) //application/json

//Headers for CORS Errors
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();

});

//set the routes
app.use('/feed', feedRoutes);
app.use('/user', userRoutes);

//set the port
app.set( 'port', ( process.env.PORT || 5000 ));

// Start node server
app.listen( app.get( 'port' ), function() {
  console.log( 'Node server is running on port ' + app.get( 'port' ));
  });