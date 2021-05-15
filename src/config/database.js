require('./config');
const Mongoose = require('mongoose').Mongoose;

const dbUser = new Mongoose();

dbUser.connect(process.env.urlMongo, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}).then(resp => {
    console.log('CONEXION A MONGO ESTABLECIDA ');
})

module.exports = { dbUser };