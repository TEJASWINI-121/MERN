import mongoose from 'mongoose';
export const connectDB = async ()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/students')
        console.log('Mongodb connected successfully');
    }catch(error){
        console.log('Mongodb connection failed:',error);
    }
}