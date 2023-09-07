const mongoose=require('mongoose')
const express=require('express')
const authRouter=express.Router()
const authModel=mongoose.model('Auth',{})

authRouter.post('/signup',(req,res)=>{

})

authRouter.post('/login',(req,res)=>{
    res.send('testing tesing mic testing...')
})

module.exports={authRouter}