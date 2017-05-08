const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongodb = require('mongoose');
const dbconfig = require('./database/config');

const bcrypt = require('bcryptjs');

mongodb.connect(dbconfig.database);

//Check Db

//Canconnect
mongodb.connection.on('connected',()=>{
    console.log("Db is connect "+dbconfig.database);
});

//Can't connect show error

mongodb.connection.on('error',(err)=>{
    console.log("Db is can't connect :"+err);
});

const app = express();

//Set route folder and file
const reports = require('./routes/reports');

 // Port Number
const port = process.env.PORT || 8080;

// CORS Middleware
app.use(cors());

//Set default folder static (public)
app.use(express.static(path.join(__dirname,'public')));

// Body Parser Middleware
app.use(bodyParser.json());

app.use('/report', reports);

app.get('/',(req,res)=>{
    res.send("Invalit Endpoint");
})

//Start server
app.listen(port,()=>{
    console.log("Now server is start on"+port);
});