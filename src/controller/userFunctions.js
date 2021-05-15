const USERS = require('../models/usersModels');


async function CreateUser(User) {

    let { usuario, nombre, clave } = User;
    let user = new USERS();
    user.usuario = usuario;
    user.nombre = nombre;
    user.clave = clave;
    await USERS.create(user);
    return 'ok';
}

async function GetUsers() {

    let data = await USERS.find();
    return data;
}

module.exports = {
    CreateUser,
    GetUsers
}