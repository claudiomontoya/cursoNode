const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    next();
});

app.options('*', cors());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3005, () => {
    console.log('Server online');
    /*  console.log('AMBIENTE:    ' + process.env.AMBIENTE);
     console.log('URL NODE:     http://localhost:' + process.env.PORT);
     console.log('URL MONGO:   ' + process.env.urlMongo); */
});