require('./src/config/config')

const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});

app.options('*', cors());

app.use(require('./src/routes/route'));

app.listen(process.env.PORT, () => {
    console.log('AMBIENTE:    ' + process.env.AMBIENTE);
    console.log('URL NODE:     http://localhost:' + process.env.PORT);
    console.log('URL MONGO:   ' + process.env.urlMongo);
});