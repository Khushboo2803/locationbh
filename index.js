require('dotenv').config();
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const db = process.env.DB;
const bodyParser = require('body-parser');

require('./models/user');


//const authRoutes=require('./routes/authRoutes')
app.use(bodyParser.json());
//app.use(authRoutes)


mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected'))
    .catch(err => console.log(err));

app.get('/signup', (req,res)=>{
    res.send("signUp successful")
})


app.listen('5000', () => {
    console.log('running on 300');
})