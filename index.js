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

app.get('/Check', async(req,res)=>{
    const {phone_number}=req.query
    const doExist=await User.find({phone_number}).countDocuments();
    if(doExist>0)
    {
        res.send("exist");
    }
    else{
        res.send("not");
    }
})

app.get('/Signin',async(req,res)=>{
    const {phone_number}=req.query
    const user=await User.find({phone_number}, {address:1});
    res.send(user);
})

app.get('/Update', async(req,res)=>{
    await User.update({'phone_number':phone_number}, {$push: {'address': address}});
    res.send("success");
})
app.listen(port, () => {
    console.log('running on 300');
})