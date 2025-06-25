import mongoose from 'mongoose';
export const connectDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URL)
        console.log('Mongodb connected successfully');
    }catch(error){
        console.log('Mongodb connection failed:',error);
    }
}//mongodb+srv://Tejaswini:teja1010@cluster0.gr2zeck.mongodb.net/sample_mflix')