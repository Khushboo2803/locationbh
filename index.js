require('dotenv').config();
const express = require('express')
const app = express();
const mongoose = require('mongoose')
const db = process.env.DB;
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const cors=require('cors');

require('./models/user');
app.use(cors())

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin, X-Requested-With,Content-Type,Accept");
    next();
});

const authRoutes=require('./routes/authRoutes')
app.use(bodyParser.json());

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('connected'))
    .catch(err => console.log(err));

app.get('/signup', authRoutes)

app.get('/Register', authRoutes)

app.get('/Check', authRoutes)

app.get('/Signin',authRoutes)

app.get('/Update', authRoutes)
app.listen(port, () => {
    console.log('running on 300');
})