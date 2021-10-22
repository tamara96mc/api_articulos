const express = require("express");
const colors = require("colors");
const morgan = require("morgan");
const logger = require('./config/winton');
const router = require('./router')


const app = express();
const PORT = 3000;

//middelware
//app.use(morgan('combined'));
app.use(morgan('combined', {stream: logger.stream}));
app.use(express.json());


app.use(router);


app.listen(PORT, ()=>{
    console.log(`port... ${PORT}`.bgGreen.black);
})