const express = require('express'); 
const route =express.Router();

const User = require("../model/user");

express().use(express.json());

route.get('/', (req,res)=>{
    res.send('Crud Application')
})

route.get('/users', (req,res)=>{
    let users =  User.find()
    .then(data => res.json(data))
    .catch(error => res.json(error))
})

route.post("/create_user", (req,res)=>{
    try {
        const myUser = new User(req.body);
        console.log(req.body);
        const userX = myUser.save();
        res.send(myUser);
    } catch (error) {
        res.status(500).json(error);
    }
});

module.exports = route;