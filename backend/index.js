const express=require('express');
const { connection } = require('./db');
const { authRouter } = require('./Routes/AuthRoutes');
const cors=require('cors')
const app=express();
const port=8555

app.use(cors())
// app.use('/auth',authRouter)




app.listen(port,async()=>{
    try {
        await connection
        console.log('DB is working fine')
    } catch (error) {
        console.log(error)
    }
    console.log('Server is running smoothly')
})