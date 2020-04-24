const express= require('express')
const mongoose=require('mongoose')
const jwt = require('jsonwebtoken')
const {jwtkey}=require('../keys')
const router=express.Router();

const User= mongoose.model('user');
router.post('/signup', async(req, res) => {
   
    const {phone_number, address}=req.body;
    try{
        const user=new User({phone_number, address});
        await user.save();
        res.send("user saved");
    }
    catch(err)
    {
        res.status(422).send(err.message);
    }
    
})


router.post('/signin', async (req,res)=>{
    const {phone_number, address}=req.body
    if(!phone_number || !address)
    {
        res.status(422).send({error:"phone_number should not be empty"})
    }
    
        const user= await User.find({phone_number})
        
            if(!user)
            {
                res.status(422).send({error:"not exist"})
            }
            else
            {
                res.status(422).send({error:"found "})
            }

})

module.exports=router