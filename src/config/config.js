const dotenv = require('dotenv');
const result = dotenv.config();
if (typeof process.env.AMBIENTE == "undefined") {
    console.log('Not found .env');
    return
}

if (process.env.AMBIENTE && process.env.AMBIENTE.trim() == 'pro') {
    console.log('Production environment');
    process.env.urlMongo = `mongodb+srv://claudio:claudio@cluster0.5jxgp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
} else {
    console.log('Dev environment');
    process.env.urlMongo = `mongodb://localhost:27017/user`;
}