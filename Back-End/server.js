const express = require('express'); // through this we can use express module
const dotenv = require('dotenv'); // this dotenv file will allows user to hide credentials from others
const morgan = require('morgan');
const bodyparser = require('body-parser');

const app = express(); // initialize app variable as express application

dotenv.config({path:'config.env'}) // specifying the .env file to the server
const PORT = process.env.PORT || 8080; // default port set to 8080

app.get('/', (req,res)=>{
    res.send('Crud Application')
})

app.listen(PORT, ()=>{
    console.log(`Server is Running on http://localhost:${PORT}`);
})

