import mongoose from 'mongoose'; 

export const formSchema=new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    department:{type:String,required:true}
});

const Form =mongoose.model('forms',formSchema);
export default Form;

