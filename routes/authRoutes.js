const express= require('express')
const mongoose=require('mongoose')
const router=express.Router();

const User= mongoose.model('user');
router.get('/signup', async(req, res) => {
   
    const {phone_number, address}=req.query;
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
router.get('/Update',async(req,res)=>{
    await User.update({'phone_number':phone_number}, {$push: {'address': address}});
    res.send("success");
})

router.get('/Check', async(req,res)=>{
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

router.get('/Register', async(req,res)=>{
    const {phone_number}=req.query
    try{
        const user=new User({phone_number});
        await user.save();
        res.send("success");
    }
    catch(err)
    {
        res.send(err.message);
    }
})


router.post('/signin', async (req,res)=>{
    const {phone_number, address}=req.params
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