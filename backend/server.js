import express from 'express'
import {connectDB} from './Config/db.js';
import mongoose from 'mongoose';
import User from './model/user.js';
import Form from './model/Form.js';
import cors from 'cors';
const app = express();
connectDB();

app.use(express.urlencoded())
app.use(express.json())
app.use(cors())

//custom
const methodFind=(req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next()
}
app.use(methodFind)

const blockDelete=(req,res,next)=>{
    if(req.method==="DELETE"){
        return res.send('Delete function blocked');
    }
    next()
}





app.use(blockDelete)

app.get('/get',async (req,res) =>  {
    const user=await User.find();
    res.json(user)

})


app.post('/post',async(req,res)=>{
    try{

        const newUser=new User(req.body)
        await newUser.save();
        res.status(201).json(newUser);

    }
    catch(error){
        res.status(401).json(error)
    }
})


app.put('/put/:id',async(req,res) => {

    try
    {
    const update=await User.findByIdAndUpdate(req.params.id,req.body)
    res.json({msg:'data updated'})
    }
    catch(error)
    {
        res.json(error)
    }
})

app.patch('/patch',(req,res) => {
    res.send('from patch')
})

app.delete('/delete/:id',async(req,res) => {

    try
    {
    const deletedUser=await User.findByIdAndDelete(req.params.id,req.body)
    res.json({msg:'data deleted'})
    }
    catch(error)
    {
        res.json(error)
    }
})


app.get('/form', async (req, res) => {
    try {
        const forms=await Form.find();
        res.json(forms);
    } catch (error) {
        res.json(error);
    }
});
app.post('/form',async(req,res)=>{
    try{
        const newForm=new Form(req.body);
        await newForm.save();
        res.json(newForm);
    }catch(error){
        res.status(401).json(error);

    }
});

app.listen(3000,()=>{
    console.log('Server is running on port 3000')
});