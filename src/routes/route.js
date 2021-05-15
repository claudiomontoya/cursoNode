const express = require('express');
const app = express();
const USERS = require('../controller/userFunctions')

async function createUser(req, res) {

    let data = req.body;
    let respon = await USERS.CreateUser(data);
    res.json(respon);
}

async function getUsers(req, res) {

    let data = await USERS.GetUsers();
    res.json(data);
}

async function updateUser(req, res) {


}
async function deleteUsers(req, res) {


}

async function getUser(req, res) {

    let data = req.params;
    console.log(data);
    res.json(data);
}

app.post('/users', createUser);
app.get('/users', getUsers);
app.put('/user', updateUser);
app.delete('user', deleteUsers);
app.get('/users/:id', getUser);

module.exports = app;