const { dbUser } = require('../config/database');

const Schema = dbUser.Schema;

const UserSchema = new Schema({
    usuario: {
        type: String
    },
    nombre: {
        type: String
    },
    clave: {
        type: String
    }

}, { timestamps: true });

module.exports = dbUser.model('Users', UserSchema, 'Users');