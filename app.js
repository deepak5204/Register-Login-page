const express = require('express');
const db = require('./config/server');
const register = require('./src/routes/register')
const app = express();
const port = 4000;

app.use(express.json())

app.use('/', register)

app.listen(port, () =>{
    console.log(`Server is running on ${port}`);
})

