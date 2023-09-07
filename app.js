const express = require('express');
const db = require('./config/server');
const app = express();
const port = 4000;

app.listen(port, () =>{
    console.log(`Server is running on ${port}`);
})

