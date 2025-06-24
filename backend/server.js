import express from 'express'
import {connectDB} from './Config/db.js';
import mongoose from 'mongoose';
const app = express();
connectDB();



const userSchema=new mongoose.Schema({
    name:{type:String, required:true},
    age:Number
});

const User=mongoose.model('users',userSchema);


app.get('/get',async (req,res) =>  {
    const users=await User.find();
    res.json(users)

})

app.post('/post',(req,res) => {
    res.send('from post')
})

app.put('/put',(req,res) => {
    res.send('from put')
})

app.patch('/patch',(req,res) => {
    res.send('from patch')
})

app.delete('/delete',(req,res) => {
    res.send('from delete')
})

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
});