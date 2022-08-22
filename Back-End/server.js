const express = require('express'); // through this we can use express module
const dotenv = require('dotenv'); // this dotenv file will allows user to hide credentials from others
const morgan = require('morgan');
const bodyparser = require('body-parser');
const mongoose = require('mongoose');

const app = express(); // initialize app variable as express application

app.use(express.json());

const customMiddleware = (req,res,next) => {
    console.log("Welcome to the middleware");
    next();
};

app.use(customMiddleware);

dotenv.config({path:'config.env'}) // specifying the .env file to the server
const PORT = process.env.PORT || 8080; // default port set to 8080

app.get('/', (req,res)=>{
    res.send('Crud Application')
})

app.get('/users', (req,res)=>{
    let users = ["Janith","Sandaru","Dissanayaka"]
    res.send({
        users: users
    })
})

app.post("/create_user",(req,res)=>{
    console.log("Received");
    res.send(`Created User ${req.body.name}`)
});

mongoose.connect(process.env.DB_CONNECTION_STRING,(req,res)=>{
    console.log("Connected to the DB")
});

app.listen(PORT, ()=>{
    console.log(`Server is Running on http://localhost:${PORT}`);
})

