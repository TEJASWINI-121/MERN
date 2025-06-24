import mongoose from 'mongoose'; 


export const userSchema=new mongoose.Schema({
    name:{type:String, required:true},
    age:Number
});

const User=mongoose.model('users',userSchema);
export default User;